/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {
	forwardRef,
	useCallback,
	useEffect,
	useImperativeHandle,
	useState,
} from 'react';
import {createPortal} from 'react-dom';
import warning from 'warning';

import {VisuallyHidden} from './VisuallyHidden';
import {Announcer} from './store';

import type {Log} from './store';

export type AnnouncerAPI = {
	announce: (message: string, assertiveness?: 'assertive' | 'polite') => void;
};

export const LiveAnnouncer = forwardRef<AnnouncerAPI>(function LiveAnnouncer(
	_,
	ref
) {
	const [logs, setLogs] = useState<Array<Log>>([]);

	const onLogChange = useCallback((logs: Array<Log>) => setLogs(logs), []);

	useEffect(() => Announcer.subscribe(onLogChange), []);

	/**
	 * Use the Announcer store directly instead of the component API.
	 * @example
	 * import {Announcer} from '@clayui/core';
	 * Announcer.announce('message', 'assertive');
	 * @deprecated
	 */
	const announce = useCallback(
		(
			message: string,
			assertiveness: 'assertive' | 'polite' = 'assertive'
		) => {
			warning(
				false,
				`Use the Announcer store directly instead of the component API.

@example
import {Announcer} from '@clayui/core';
Announcer.announce('message', 'assertive');`
			);

			Announcer.announce(message, assertiveness);
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

	const content = (
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
		</VisuallyHidden>
	);

	return typeof document !== 'undefined'
		? createPortal(content, document.body)
		: content;
});
