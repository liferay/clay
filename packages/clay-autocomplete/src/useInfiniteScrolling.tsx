/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {AnnouncerAPI} from '@clayui/core';
import {CollectionState} from '@clayui/core/src/collection/types';
import LoadingIndicator from '@clayui/loading-indicator';
import {sub} from '@clayui/shared';
import React, {
	RefObject,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';

import {AutocompleteMessages} from './Autocomplete';

interface IProps {
	/**
	 * Reference to the announcer API.
	 */
	announcer: RefObject<AnnouncerAPI>;

	/**
	 * Flag to indicate if the autocomplete is active (i.e., the menu is open)
	 */
	active: boolean;

	/**
	 * The key of the currently active descendant item.
	 */
	activeDescendant?: React.Key;

	/**
	 * The collection state of the autocomplete items.
	 */
	collection: CollectionState;

	/**
	 * Number of items loaded for each batch.
	 */
	loadCount?: number;

	/**
	 * Loading state of the autocomplete.
	 */
	loadingState?: number;

	/**
	 * Reference to the menu element.
	 */
	menuRef: RefObject<HTMLDivElement>;

	/**
	 * Localized messages for the autocomplete.
	 */
	messages: Required<AutocompleteMessages>;

	/**
	 * Callback function to load more items.
	 */
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
	const [isLoadingMore, setIsLoadingMore] = useState(false);
	const isInfiniteScrollingEnabled = Boolean(externalOnLoadMore);

	const onLoadMore = useCallback(async () => {
		if (isInfiniteScrollingEnabled) {
			setIsLoadingMore(true);

			await externalOnLoadMore?.();

			setIsLoadingMore(false);
		}
	}, [isInfiniteScrollingEnabled, externalOnLoadMore]);

	const isLoading = Boolean(loadingState !== undefined && loadingState < 4);

	const isInitialLoadAnnouncementPending = useRef<boolean>(true);
	const lastCountAnnounced = useRef<number | null>(null);
	const lastPositionBeforeLoad = useRef<number | null>(null);

	useEffect(() => {
		if (active && isLoadingMore) {
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
			menuRef.current?.scrollTo?.({
				top: menuRef.current?.scrollHeight,
			});
		}
	}, [active, isLoadingMore]);

	const currentCount = collection.getSize();

	useEffect(() => {
		if (active) {
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
					menuRef.current?.scrollTo?.({
						top: lastPositionBeforeLoad.current,
					});

					lastPositionBeforeLoad.current = null;
				}
			}
		} else {
			isInitialLoadAnnouncementPending.current = true;
		}
	}, [active, isLoading, currentCount]);

	const triggerRef = useRef<HTMLDivElement>(null);
	const lastTriggerCount = useRef<number | null>(null);

	useEffect(() => {
		const menuElement = menuRef.current;
		const triggerElement = triggerRef.current;

		if (!isLoading && active && menuElement && triggerElement) {
			let timeoutId: NodeJS.Timeout | null = null;

			const onIntersection: IntersectionObserverCallback = (entries) => {
				if (timeoutId) {
					clearTimeout(timeoutId);
				}

				timeoutId = setTimeout(() => {
					const isIntersecting = entries[0]?.isIntersecting ?? false;
					const countChanged =
						lastTriggerCount.current !== currentCount;

					if (isIntersecting && countChanged) {
						lastTriggerCount.current = currentCount;

						onLoadMore();
					}
				}, 200);
			};

			const observer = new IntersectionObserver(onIntersection, {
				root: menuElement,
				threshold: 1.0,
			});

			observer.observe(triggerElement);

			return () => {
				if (timeoutId) {
					clearTimeout(timeoutId);
				}

				observer.disconnect();
			};
		}
	}, [active, currentCount, isLoading, onLoadMore]);

	const InfiniteScrollingTrigger = useCallback(
		() =>
			isInfiniteScrollingEnabled && window.IntersectionObserver ? (
				<div aria-hidden="true" className="pt-2" ref={triggerRef}>
					{isLoading && (
						<LoadingIndicator className="mb-2" size="sm" />
					)}
				</div>
			) : null,
		[isInfiniteScrollingEnabled, isLoading]
	);

	const lastItem = currentCount > 0 ? collection.getLastItem() : null;
	const isLastItemActive =
		activeDescendant && lastItem && activeDescendant === lastItem.key;

	useEffect(() => {
		if (isLastItemActive && !isLoading) {
			onLoadMore();
		}
	}, [isLastItemActive, isLoading, onLoadMore]);

	return InfiniteScrollingTrigger;
}
