/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Clipboard from 'clipboard';
import {useEffect} from 'react';

export default props => {
	const selector = '.tab-pane .btn-copy';
	let clayClipboard;

	useEffect(() => {
		clayClipboard = new Clipboard(selector, {
			text: delegateTarget => {
				const codeContentParentNode = delegateTarget.parentNode;
				let codeContent;

				delegateTarget.setAttribute('title', 'Copied');

				setTimeout(() => {
					delegateTarget.setAttribute('title', 'Copy');
				}, 2000);

				if (codeContentParentNode.querySelector('pre code')) {
					codeContent = codeContentParentNode.querySelector(
						'pre code'
					).innerText;
				} else {
					const codeElements = Array.from(
						codeContentParentNode.querySelectorAll('div textarea')
					);

					codeContent = codeElements
						.map(code => code.value)
						.join('\n');
				}

				return codeContent;
			},
		});

		return () => {
			clayClipboard.destroy();
		};
	}, []);

	return props.children;
};
