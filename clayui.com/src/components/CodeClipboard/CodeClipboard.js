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
				const gatsbyHighlightContainer =
					codeContentParentNode.parentNode;
				let codeContent;
				const buttonContent = delegateTarget.innerHTML;

				delegateTarget.innerHTML = delegateTarget.innerHTML.replace(
					/paste/g,
					'check'
				);

				delegateTarget.setAttribute('title', 'Copied');

				gatsbyHighlightContainer
					.querySelector('.copied-alert')
					.classList.toggle('d-none');

				setTimeout(() => {
					delegateTarget.setAttribute('title', 'Copy');

					delegateTarget.innerHTML = buttonContent;

					gatsbyHighlightContainer
						.querySelector('.copied-alert')
						.classList.toggle('d-none');
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
