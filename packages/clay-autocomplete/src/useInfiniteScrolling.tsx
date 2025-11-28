/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {AnnouncerAPI} from '@clayui/core';
import {CollectionState} from '@clayui/core/src/collection/types';
import LoadingIndicator from '@clayui/loading-indicator';
import {sub, useDebounce} from '@clayui/shared';
import React, {RefObject, useEffect, useRef} from 'react';

import {AutocompleteMessages} from './Autocomplete';

interface IProps {
	announcer: RefObject<AnnouncerAPI>;
	active: boolean;
	activeDescendant?: React.Key;
	collection: CollectionState;
	loadCount?: number;
	loadingState?: number;
	menuRef: RefObject<HTMLDivElement>;
	messages: Required<AutocompleteMessages>;
	onLoadMore?: () => Promise<any> | null;
}

export function useInfiniteScrolling({
	active,
	activeDescendant,
	announcer,
	collection,
	loadCount,
	loadingState,
	menuRef,
	messages,
	onLoadMore: externalOnLoadMore,
}: IProps) {
	const isInfiniteScrollingEnabled = Boolean(externalOnLoadMore);
	const isFetchingMoreData = useRef<boolean>(false);

	const onLoadMore = async () => {
		if (isInfiniteScrollingEnabled) {
			isFetchingMoreData.current = true;

			await externalOnLoadMore?.();

			isFetchingMoreData.current = false;
		}
	};

	const isLoading = Boolean(loadingState !== undefined && loadingState < 4);
	const debouncedLoading = useDebounce(isLoading, 200);

	const isInitialLoadAnnouncementPending = useRef<boolean>(true);
	const lastCountAnnounced = useRef<number | null>(null);
	const lastPositionBeforeLoad = useRef<number | null>(null);

	useEffect(() => {
		if (active && isLoading && isFetchingMoreData.current) {
			let message = messages.infiniteScrollingOnLoadIndeterminate;

			if (loadCount !== undefined) {
				message = sub(
					loadCount === 1
						? messages.infiniteScrollingOnLoad
						: messages.infiniteScrollingOnLoadPlural,
					[loadCount]
				);
			}

			announcer.current?.announce(message);
			lastCountAnnounced.current = null;

			lastPositionBeforeLoad.current = menuRef.current?.scrollTop ?? null;
			menuRef.current?.scrollTo({
				behavior: 'instant',
				top: menuRef.current?.scrollHeight,
			});
		}
	}, [active, isLoading]);

	const currentCount = collection.getSize();

	useEffect(() => {
		if (active && isInfiniteScrollingEnabled) {
			if (!isLoading && lastCountAnnounced.current !== currentCount) {
				const singular = isInitialLoadAnnouncementPending.current
					? messages.infiniteScrollingInitialLoad
					: messages.infiniteScrollingOnLoaded;

				const plural = isInitialLoadAnnouncementPending.current
					? messages.infiniteScrollingInitialLoadPlural
					: messages.infiniteScrollingOnLoadedPlural;

				const message = sub(currentCount === 1 ? singular : plural, [
					currentCount,
				]);

				announcer.current?.announce(message);
				lastCountAnnounced.current = currentCount;
				isInitialLoadAnnouncementPending.current = false;

				if (lastPositionBeforeLoad.current !== null) {
					menuRef.current?.scrollTo({
						behavior: 'instant',
						top: lastPositionBeforeLoad.current,
					});

					lastPositionBeforeLoad.current = null;
				}
			}
		} else {
			isInitialLoadAnnouncementPending.current = true;
		}
	}, [active, isInfiniteScrollingEnabled, isLoading]);

	const triggerRef = useRef<HTMLDivElement>(null);
	const isTriggerActive = useRef<boolean>(false);
	const lastTriggerCount = useRef<number | null>(null);

	useEffect(() => {
		if (active && triggerRef.current && menuRef.current) {
			let timeoutId: NodeJS.Timeout | null = null;

			const handleIntersect: IntersectionObserverCallback = (entries) => {
				if (timeoutId) {
					clearTimeout(timeoutId);
				}

				timeoutId = setTimeout(() => {
					const isIntersecting = entries[0]?.isIntersecting ?? false;
					const countHasChanged =
						currentCount !== lastTriggerCount.current;

					if (!isLoading && isIntersecting && countHasChanged) {
						isTriggerActive.current = true;
						lastTriggerCount.current = currentCount;

						onLoadMore().finally(() => {
							isTriggerActive.current = false;
						});
					}
				}, 200);
			};

			const observer = new IntersectionObserver(handleIntersect, {
				root: menuRef.current,
				threshold: 1.0,
			});

			observer.observe(triggerRef.current);

			return () => observer.disconnect();
		}
	}, [active, isLoading, onLoadMore]);

	const InfiniteScrollingTrigger = () => (
		<div aria-hidden="true" className="mt-2" ref={triggerRef}>
			{(isLoading || debouncedLoading) && (
				<LoadingIndicator className="mb-2" size="sm" />
			)}
		</div>
	);

	const lastItem = currentCount > 0 ? collection.getLastItem() : null;
	const isLastItemActive =
		activeDescendant && lastItem && activeDescendant === lastItem.key;

	useEffect(() => {
		if (isLastItemActive && !isLoading) {
			onLoadMore();
		}
	}, [isLastItemActive, isLoading]);

	return InfiniteScrollingTrigger;
}
