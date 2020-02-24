/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useEffect, useState} from 'react';

export default props => {
	const [enabled, setEnabled] = useState(true); // eslint-disable-line @typescript-eslint/no-unused-vars

	useEffect(() => {
		if (window.docsearch) {
			window.docsearch({
				apiKey: 'bc205a621e5176b8720081c2a3de450c',
				indexName: 'clay',
				inputSelector: '#algolia-doc-search',
			});
		} else {
			setEnabled(false);
		}
	}, []);

	return (
		<div className="page-autocomplete">
			<div className="input-group">
				<input
					className="form-control"
					id="algolia-doc-search"
					name="q"
					placeholder={props.placeholder}
					required
					type="text"
				/>

				<span className="input-group-addon">
					<svg className="lexicon-icon">
						<use xlinkHref="/images/icons/icons.svg#search" />
					</svg>
				</span>
			</div>
		</div>
	);
};
