/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

export type Log = {
	id: number;
	message: string;
	assertiveness: 'assertive' | 'polite';
};

type Subscriber = (logs: Array<Log>) => void;

const LIVEREGION_TIMEOUT_DELAY = 7000;

class LiveAnnouncerStore {
	protected logs: Array<Log> = [];
	protected counter: number = 0;
	protected subscribers: Set<Subscriber> = new Set();
	protected delay: number = LIVEREGION_TIMEOUT_DELAY;

	protected setLogs(logs: Array<Log>) {
		this.logs = logs;

		if (this.subscribers.size === 0) {
			console.warn(
				'There are no components listening to the live announcer.'
			);
		} else {
			this.subscribers.forEach((subscriber) => subscriber(this.logs));
		}
	}

	public subscribe(subscriber: Subscriber) {
		if (this.subscribers.has(subscriber)) {
			console.warn('Subscriber already exists.');

			return;
		}

		this.subscribers.add(subscriber);

		return () => {
			this.subscribers.delete(subscriber);
		};
	}

	public announce(
		message: string,
		assertiveness: 'assertive' | 'polite' = 'assertive'
	) {
		this.counter++;
		this.setLogs([
			...this.logs,
			{
				assertiveness,
				id: this.counter,
				message,
			},
		]);

		setTimeout(() => {
			const logs = [...this.logs];
			logs.shift();
			this.setLogs(logs);
		}, this.delay);
	}

	public getMessages(type: 'assertive' | 'polite') {
		return this.logs.filter((log) => log.assertiveness === type);
	}
}

export const Announcer = new LiveAnnouncerStore();
