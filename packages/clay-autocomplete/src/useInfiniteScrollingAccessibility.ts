/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {AnnouncerAPI} from '@clayui/core';
import {sub} from '@clayui/shared';
import {RefObject, useEffect, useRef} from 'react';

import {AutocompleteMessages} from './Autocomplete';

interface IProps {
	announcer: RefObject<AnnouncerAPI>;
	active: boolean;
	currentCount: number;
	loadCount?: number;
	loadingState?: number;
	messages: Required<AutocompleteMessages>;
	onLoadMore?: () => Promise<any> | null;
}

export function useInfiniteScrollingAccessibility({
	active,
	announcer,
	currentCount,
	loadCount,
	loadingState,
	messages,
	onLoadMore: externalOnLoadMore,
}: IProps) {
	const isLoading = Boolean(loadingState !== undefined && loadingState < 4);

	const isInitialLoadAnnouncementPending = useRef<boolean>(true);
	const isFetchingMoreData = useRef<boolean>(false);
	const previousCount = useRef<number>();

	const onLoadMore = async () => {
		isFetchingMoreData.current = externalOnLoadMore !== undefined;

		await externalOnLoadMore?.();

		isFetchingMoreData.current = false;
	};

	const announceInfiniteScrollingOnLoad = (count?: number) => {
		const message =
			count !== undefined
				? count === 1
					? sub(messages.infiniteScrollingOnLoad, [count])
					: sub(messages.infiniteScrollingOnLoadPlural, [count])
				: messages.infiniteScrollingOnLoadIndeterminate;

		console.log(message);
		announcer.current?.announce(message);
	};

	const announceInfiniteScrollingOnLoaded = (count: number) => {
		const singular = isInitialLoadAnnouncementPending.current
			? messages.infiniteScrollingInitialLoad
			: messages.infiniteScrollingOnLoaded;

		const plural = isInitialLoadAnnouncementPending.current
			? messages.infiniteScrollingInitialLoadPlural
			: messages.infiniteScrollingOnLoadedPlural;

		const message = sub(count === 1 ? singular : plural, [count]);

		console.log(message);
		announcer.current?.announce(message);
	};

	useEffect(() => {
		if (active) {
			if (isLoading && isFetchingMoreData.current) {
				announceInfiniteScrollingOnLoad(loadCount);
				previousCount.current = undefined;
			}

			if (!isLoading && previousCount.current !== currentCount) {
				announceInfiniteScrollingOnLoaded(currentCount);
				previousCount.current = currentCount;
			}
		}

		isInitialLoadAnnouncementPending.current = !active;
	}, [active, isLoading]);

	return onLoadMore;
}
