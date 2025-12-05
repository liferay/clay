/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {AnnouncerAPI} from '@clayui/core';
import {CollectionState} from '@clayui/core/src/collection/types';
import LoadingIndicator from '@clayui/loading-indicator';
import {sub} from '@clayui/shared';
import React, {RefObject, useCallback, useEffect, useRef} from 'react';

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
	 * Loading state of the autocomplete.
	 */
	loadingState?: number;

	/**
	 * Localized messages for the autocomplete.
	 */
	messages: Required<AutocompleteMessages>;

	/**
	 * Callback function to load more items.
	 */
	onLoadMore?: () => Promise<any> | null;
}

export function useInfiniteScroll({
	active,
	activeDescendant,
	announcer,
	collection,
	loadingState,
	messages,
	onLoadMore,
}: IProps) {
	const currentCount = collection.getSize();
	const isInfiniteScrollEnabled = Boolean(onLoadMore);
	const isLoading = Boolean(loadingState !== undefined && loadingState < 4);

	const isInitialLoadAnnouncementPending = useRef<boolean>(
		isInfiniteScrollEnabled
	);
	const lastCountAnnounced = useRef<number | null>(null);

	useEffect(() => {
		if (active) {
			if (isLoading) {
				announcer.current?.announce(messages.infiniteScrollOnLoad);
				lastCountAnnounced.current = null;
			} else if (lastCountAnnounced.current !== currentCount) {
				const singular = isInitialLoadAnnouncementPending.current
					? messages.infiniteScrollInitialLoad
					: messages.infiniteScrollOnLoaded;

				const plural = isInitialLoadAnnouncementPending.current
					? messages.infiniteScrollInitialLoadPlural
					: messages.infiniteScrollOnLoadedPlural;

				const message = sub(currentCount === 1 ? singular : plural, [
					currentCount,
				]);

				announcer.current?.announce(message);
				lastCountAnnounced.current = currentCount;
				isInitialLoadAnnouncementPending.current = false;
			}
		} else {
			isInitialLoadAnnouncementPending.current = isInfiniteScrollEnabled;
		}
	}, [active, isLoading, currentCount]);

	const InfiniteScrollFeedback = useCallback(
		() =>
			isInfiniteScrollEnabled && isLoading ? (
				<LoadingIndicator className="my-2" size="sm" />
			) : null,
		[isInfiniteScrollEnabled, isLoading]
	);

	const lastItem = currentCount > 0 ? collection.getLastItem() : null;
	const isLastItemActive =
		activeDescendant && lastItem && activeDescendant === lastItem.key;

	useEffect(() => {
		if (isLastItemActive && !isLoading) {
			onLoadMore?.();
		}
	}, [isLastItemActive, isLoading, onLoadMore]);

	return InfiniteScrollFeedback;
}
