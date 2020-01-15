/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const visit = require('unist-util-visit');

module.exports = ({markdownAST}) => {
	visit(markdownAST, 'html', node => {
		if (typeof node.lang === 'undefined') {
			return;
		}

		node.value = `
			<div class="code-container">
				<button class="btn btn-sm btn-copy btn-monospaced btn-unstyled" title="Copy">
					<svg class="lexicon-icon">
						<use xlink:href="/images/icons/icons.svg#paste"></use>
					</svg>
				</button>
				
				<button class="btn btn-sm btn-collapse btn-collapse--collapse btn-monospaced btn-unstyled" title="Collapse">
					<svg class="lexicon-icon icon-collapse">
						<use xlink:href="/images/icons/icons.svg#angle-down"></use>
					</svg>
				</button>
				
				<button class="btn btn-sm btn-collapse btn-collapse--expand btn-monospaced btn-unstyled hide" title="Expand">
					<svg class="lexicon-icon icon-collapse">
						<use xlink:href="/images/icons/icons.svg#angle-right"></use>
					</svg>
				</button>

				${node.value}
			</div>
		`;
	});
};
