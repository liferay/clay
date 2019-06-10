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
	const selector = '.code-container .btn-copy';
	let clayTooltip;
	let clayClipboard;

	useEffect(() => {
		clayTooltip = new ClayTooltip(new SingletonEnforcer());
		clayClipboard = new Clipboard({
			selector,
			text: delegateTarget => {
				delegateTarget.setAttribute('title', 'Copied');

				setTimeout(() => {
					delegateTarget.setAttribute('title', 'Copy');
				}, 2000);

				return delegateTarget.parentNode.querySelector('pre code')
					.innerText;
			},
		});

		return () => {
			clayTooltip.dispose();
			clayClipboard.dispose();
		};
	}, []);

	return props.children;
};
