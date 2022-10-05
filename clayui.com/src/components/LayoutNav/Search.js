/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useEffect, useRef} from 'react';

export default (props) => {
	const autocompleteRef = useRef();
	const inputRef = useRef();

	useEffect(() => {
		if (window.docsearch) {
			window.docsearch({
				apiKey: 'bc205a621e5176b8720081c2a3de450c',
				indexName: 'clay',
				inputSelector: '#algolia-doc-search',
			});
		}
	}, []);

	useEffect(() => {
		let platform = null;

		const platformUserAgent = (
			navigator?.userAgentData?.platform || navigator?.platform
		).toLowerCase();

		if (platformUserAgent.includes('mac')) {
			platform = 'mac';
			props.searchRef.current.setAttribute(
				'aria-keyshortcuts',
				'Control+Option+K'
			);
			autocompleteRef.current.setAttribute('data-platform', 'mac');
		} else if (platformUserAgent.includes('linux')) {
			platform = 'linux';
			props.searchRef.current.setAttribute('aria-keyshortcuts', 'Alt+K');
			autocompleteRef.current.setAttribute('data-platform', 'linux');
		}

		const handleKeyDown = (event) => {
			const isLinuxKey = platform === 'linux' && event.altKey;
			const isNotMacKey = platform === null && event.ctrlKey;

			if (event.code === 'KeyK' && (isLinuxKey || isNotMacKey)) {
				event.preventDefault();
				inputRef.current.focus();
			}
		};

		if (platform !== 'mac') {
			document.addEventListener('keydown', handleKeyDown);

			return () => {
				document.removeEventListener('keydown', handleKeyDown);
			};
		}
	}, []);

	return (
		<div className="platform" ref={autocompleteRef}>
			<div className="page-autocomplete">
				<div className="input-group">
					<input
						className="form-control"
						id="algolia-doc-search"
						name="q"
						placeholder={props.placeholder}
						ref={inputRef}
						required
						type="text"
					/>

					<span aria-hidden="true" className="input-group-addon">
						<span className="c-kbd c-kbd-sm d-md-block d-none mr-2">
							<kbd className="c-kbd">K</kbd>
						</span>

						<svg className="lexicon-icon">
							<use xlinkHref="/images/icons/icons.svg#search" />
						</svg>
					</span>
				</div>
			</div>
		</div>
	);
};
