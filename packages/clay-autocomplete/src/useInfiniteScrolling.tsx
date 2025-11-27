/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {AnnouncerAPI} from '@clayui/core';
import LoadingIndicator from '@clayui/loading-indicator';
import {sub, useDebounce} from '@clayui/shared';
import React, {RefObject, useEffect, useRef} from 'react';

import {AutocompleteMessages} from './Autocomplete';

interface IProps {
	announcer: RefObject<AnnouncerAPI>;
	active: boolean;
	currentCount: number;
	loadCount?: number;
	loadingState?: number;
	menuRef: RefObject<HTMLDivElement>;
	messages: Required<AutocompleteMessages>;
	onLoadMore?: () => Promise<any> | null;
}

export function useInfiniteScrolling({
	active,
	announcer,
	currentCount,
	loadCount,
	loadingState,
	menuRef,
	messages,
	onLoadMore: externalOnLoadMore,
}: IProps) {
	const isLoading = Boolean(loadingState !== undefined && loadingState < 4);
	const debouncedLoading = useDebounce(isLoading, 200);

	const triggerRef = useRef<HTMLDivElement>(null);

	const isFetchingMoreData = useRef<boolean>(false);
	const isInitialLoadAnnouncementPending = useRef<boolean>(true);
	const isTriggerActive = useRef<boolean>(false);
	const lastCountAnnounced = useRef<number | null>(null);
	const lastPositionBeforeLoad = useRef<number | null>(null);
	const lastTriggerCount = useRef<number | null>(null);

	const onLoadMore = async () => {
		isFetchingMoreData.current = externalOnLoadMore !== undefined;

		await externalOnLoadMore?.();

		isFetchingMoreData.current = false;
	};

	useEffect(() => {
		if (active && isLoading && isFetchingMoreData.current) {
			const message =
				loadCount !== undefined
					? loadCount === 1
						? sub(messages.infiniteScrollingOnLoad, [loadCount])
						: sub(messages.infiniteScrollingOnLoadPlural, [
								loadCount,
						  ])
					: messages.infiniteScrollingOnLoadIndeterminate;

			announcer.current?.announce(message);
			lastCountAnnounced.current = null;

			lastPositionBeforeLoad.current = menuRef.current?.scrollTop ?? null;
			menuRef.current?.scrollTo({
				behavior: 'instant',
				top: menuRef.current?.scrollHeight,
			});
		}
	}, [active, isLoading]);

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
	}, [active, isLoading]);

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

	return InfiniteScrollingTrigger;
}
