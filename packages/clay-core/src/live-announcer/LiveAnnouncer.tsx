/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {
	forwardRef,
	useCallback,
	useImperativeHandle,
	useState,
} from 'react';
import {createPortal} from 'react-dom';

import {VisuallyHidden} from './VisuallyHidden';

export type AnnouncerAPI = {
	announce: (message: string, assertiveness?: 'assertive' | 'polite') => void;
};

type Log = {
	id: number;
	message: string;
	assertiveness: 'assertive' | 'polite';
};

const LIVEREGION_TIMEOUT_DELAY = 7000;

let counter = 0;

/**
 * TODO: LiveAnnouncer should be a singleton.
 */
export const LiveAnnouncer = forwardRef<AnnouncerAPI>(function LiveAnnouncer(
	_,
	ref
) {
	const [logs, setLogs] = useState<Array<Log>>([]);

	const announce = useCallback(
		(
			message: string,
			assertiveness: 'assertive' | 'polite' = 'assertive'
		) => {
			setLogs((logs) => {
				counter++;

				return [
					...logs,
					{
						assertiveness,
						id: counter,
						message,
					},
				];
			});

			setTimeout(() => {
				setLogs((logs) => {
					const newLogs = [...logs];
					newLogs.shift();

					return newLogs;
				});
			}, LIVEREGION_TIMEOUT_DELAY);
		},
		[]
	);

	useImperativeHandle(
		ref,
		() => ({
			announce,
		}),
		[announce]
	);

	return createPortal(
		<VisuallyHidden liveAnnouncer>
			<div aria-live="assertive" aria-relevant="additions" role="log">
				{logs
					.filter((log) => log.assertiveness === 'assertive')
					.map((log) => (
						<div key={log.id}>{log.message}</div>
					))}
			</div>
			<div aria-live="polite" aria-relevant="additions" role="log">
				{logs
					.filter((log) => log.assertiveness === 'polite')
					.map((log) => (
						<div key={log.id}>{log.message}</div>
					))}
			</div>
		</VisuallyHidden>,
		document.body
	);
});
