/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayTooltip from 'clay-tooltip';
import Clipboard from 'metal-clipboard';
import {useEffect} from 'react';

/**
 */
class SingletonEnforcer {}

export default props => {
	const selector = '.tab-pane .btn-copy';
	let clayTooltip;
	let clayClipboard;

	useEffect(() => {
		clayTooltip = new ClayTooltip(new SingletonEnforcer());
		clayClipboard = new Clipboard({
			selector,
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
			clayTooltip.dispose();
			clayClipboard.dispose();
		};
	}, []);

	return props.children;
};
