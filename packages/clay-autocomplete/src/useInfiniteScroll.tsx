/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {AnnouncerAPI} from '@clayui/core';
import {CollectionState} from '@clayui/core/src/collection/types';
import {NetworkStatus} from '@clayui/data-provider';
import LoadingIndicator from '@clayui/loading-indicator';
import {sub} from '@clayui/shared';
import React, {RefObject, useCallback, useEffect, useRef} from 'react';

import {AutocompleteMessages} from './Autocomplete';

interface IProps {

	/**
	 * Flag to indicate if the autocomplete is active (i.e., the menu is open)
	 */
	active: boolean;

	/**
	 * Reference to the announcer API.
	 */
	announcer: RefObject<AnnouncerAPI>;

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
	announcer,
	collection,
	loadingState = NetworkStatus.Unused,
	messages,
	onLoadMore,
}: IProps) {
	const currentCount = collection.getSize();
	const isInfiniteScrollEnabled = Boolean(onLoadMore);
	const isLoading = Boolean(loadingState < NetworkStatus.Unused);

	const isInitialLoadAnnouncementPendingRef = useRef<boolean>(
		isInfiniteScrollEnabled
	);
	const lastCountAnnouncedRef = useRef<number | null>(null);

	useEffect(() => {
		if (active) {
			if (isLoading) {
				announcer.current?.announce(messages.infiniteScrollOnLoad);
				lastCountAnnouncedRef.current = null;
			}
			else if (lastCountAnnouncedRef.current !== currentCount) {
				const singular = isInitialLoadAnnouncementPendingRef.current
					? messages.infiniteScrollInitialLoad
					: messages.infiniteScrollOnLoaded;

				const plural = isInitialLoadAnnouncementPendingRef.current
					? messages.infiniteScrollInitialLoadPlural
					: messages.infiniteScrollOnLoadedPlural;

				const message = sub(currentCount === 1 ? singular : plural, [
					currentCount,
				]);

				announcer.current?.announce(message);
				lastCountAnnouncedRef.current = currentCount;
				isInitialLoadAnnouncementPendingRef.current = false;
			}
		}
		else {
			isInitialLoadAnnouncementPendingRef.current =
				isInfiniteScrollEnabled;
		}
	}, [active, isLoading, currentCount]);

	const InfiniteScrollFeedback = useCallback(
		() =>
			isInfiniteScrollEnabled && isLoading ? (
				<LoadingIndicator className="my-2" size="sm" />
			) : null,
		[isInfiniteScrollEnabled, isLoading]
	);

	return InfiniteScrollFeedback;
}
