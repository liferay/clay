/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Clipboard from 'clipboard';
import {useEffect} from 'react';

export default (props) => {
	useEffect(() => {
		const clayClipboard = new Clipboard(
			'.gatsby-highlight .btn-copy, .code-container .btn[title=Copy]',
			{
				text: (delegateTarget) => {
					const buttonContent = delegateTarget.innerHTML;
					const gatsbyHighlightContainer =
						delegateTarget.closest('.gatsby-highlight') ||
						delegateTarget.closest('.code-container');
					const jspTab = gatsbyHighlightContainer.querySelector(
						'[aria-labelledby="tab-JSP"]'
					);
					const reactTab = gatsbyHighlightContainer.querySelector(
						'[aria-labelledby="tab-React"]'
					);

					delegateTarget.innerHTML = delegateTarget.innerHTML.replace(
						/paste/g,
						'check'
					);

					delegateTarget.setAttribute('title', 'Copied');

					gatsbyHighlightContainer
						.querySelector('.copied-alert')
						.classList.remove('d-none');

					setTimeout(() => {
						delegateTarget.setAttribute('title', 'Copy');

						delegateTarget.innerHTML = buttonContent;

						gatsbyHighlightContainer
							.querySelector('.copied-alert')
							.classList.add('d-none');
					}, 2000);

					let codeContent =
						gatsbyHighlightContainer.querySelector('pre code') ||
						(reactTab.classList.contains('active')
							? reactTab
							: jspTab);

					if (codeContent) {
						codeContent = codeContent.innerText;
					}

					return codeContent;
				},
			}
		);

		return () => {
			clayClipboard.destroy();
		};
	}, []);

	return props.children;
};
