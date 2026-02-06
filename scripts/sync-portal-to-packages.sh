#!/usr/bin/env bash

set -euo pipefail

PORTAL_REPO="https://github.com/liferay/liferay-portal.git"
PORTAL_BRANCH="master"
SOURCE_DIR="modules/apps/frontend-js/frontend-js-clay-web/clay"
DEST_DIR="packages"
DRY_RUN=0
PORTAL_DIR=""

usage() {
	cat <<EOF
Usage: scripts/sync-portal-to-packages.sh [options]

Syncs clay-* packages to local packages/ and www to local ./www.

Options:
  --branch <name>       Portal branch to sync from (default: master)
  --portal-dir <path>   Use an existing local liferay-portal checkout
  --dry-run             Show what would change without writing
  -h, --help            Show this help
EOF
}

while [ "$#" -gt 0 ]; do
	case "$1" in
		--branch)
			if [ "$#" -lt 2 ]; then
				echo "Missing value for $1" >&2
				exit 1
			fi
			PORTAL_BRANCH="$2"
			shift 2
			;;
		--portal-dir)
			if [ "$#" -lt 2 ]; then
				echo "Missing value for $1" >&2
				exit 1
			fi
			PORTAL_DIR="$2"
			shift 2
			;;
		--dry-run)
			DRY_RUN=1
			shift
			;;
		-h|--help)
			usage
			exit 0
			;;
		*)
			echo "Unknown option: $1" >&2
			usage
			exit 1
			;;
	esac
done

if [ ! -d "$DEST_DIR" ]; then
	echo "Expected directory '$DEST_DIR' not found. Run from repo root." >&2
	exit 1
fi

cleanup() {
	if [ -n "${TMP_DIR:-}" ] && [ -d "$TMP_DIR" ]; then
		rm -rf "$TMP_DIR"
	fi
}

trap cleanup EXIT

if [ -n "$PORTAL_DIR" ]; then
	SOURCE_ROOT="$PORTAL_DIR/$SOURCE_DIR"
	if [ ! -d "$SOURCE_ROOT" ]; then
		echo "Source path not found: $SOURCE_ROOT" >&2
		exit 1
	fi
else
	TMP_DIR="$(mktemp -d)"

	git clone \
		--filter=blob:none --no-checkout \
		--branch "$PORTAL_BRANCH" \
		--single-branch \
		--depth 1 \
		"$PORTAL_REPO" "$TMP_DIR/liferay-portal"

	pushd "$TMP_DIR/liferay-portal" >/dev/null
	git sparse-checkout init --cone
	git sparse-checkout set "$SOURCE_DIR"
	git checkout "$PORTAL_BRANCH"
	popd >/dev/null

	SOURCE_ROOT="$TMP_DIR/liferay-portal/$SOURCE_DIR"
fi

RSYNC_ARGS=(-av --delete --exclude=.git)

if [ "$DRY_RUN" -eq 1 ]; then
	RSYNC_ARGS+=(--dry-run)
fi

echo "Sync source: $SOURCE_ROOT"
echo "Sync target: $DEST_DIR"

for dir in "$SOURCE_ROOT"/*; do
	if [ ! -d "$dir" ]; then
		continue
	fi

	name="$(basename "$dir")"

	if [[ "$name" == clay-* ]]; then
		target_dir="$DEST_DIR/$name"
		mkdir -p "$target_dir"
		rsync "${RSYNC_ARGS[@]}" "$dir/" "$target_dir/"
	elif [[ "$name" == "www" ]]; then
		mkdir -p "www"
		rsync "${RSYNC_ARGS[@]}" "$dir/" "www/"
	fi
done

if [ "$DRY_RUN" -eq 1 ]; then
	echo "Dry run complete. No files were modified."
else
	echo "Sync complete."
	echo
	git status --short -- "$DEST_DIR" "www"
fi
