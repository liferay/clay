/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {DocSearch} from '@docsearch/react';
import React, {useEffect} from 'react';

import '@docsearch/css';

export default (props) => {
	useEffect(() => {
		const platformUserAgent = (
			navigator?.userAgentData?.platform || navigator?.platform
		).toLowerCase();

		if (platformUserAgent.includes('mac')) {
			props.searchRef.current.setAttribute(
				'aria-keyshortcuts',
				'Control+Option+K'
			);
		} else if (platformUserAgent.includes('linux')) {
			props.searchRef.current.setAttribute('aria-keyshortcuts', 'Alt+K');
		}
	}, []);

	return (
		<div className="page-autocomplete">
			<DocSearch
				apiKey={process.env.GATSBY_ALGOLIA_PUBLIC_KEY}
				appId={process.env.GATSBY_ALGOLIA_APP_ID}
				indexName={process.env.GATSBY_ALGOLIA_INDEX}
			/>
		</div>
	);
};
