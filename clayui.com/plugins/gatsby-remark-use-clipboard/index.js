/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const visit = require('unist-util-visit');

module.exports = ({markdownAST}) => {
	visit(markdownAST, 'html', (node) => {
		if (typeof node.lang === 'undefined') {
			return;
		}

		node.value = `
			<div class="copied-alert alert alert-fluid alert-info d-none" role="alert">
				<div class="container">
					<div class="alert-autofit-row autofit-row">
						<div class="autofit-col inline-item-before">
							<div class="autofit-section">
								<span class="alert-indicator">
									<svg class="lexicon-icon lexicon-icon-info-circle" role="presentation">
										<use xlink:href="/images/icons/icons.svg#info-circle"></use>
									</svg>
								</span>
							</div>
						</div>

						<div class="autofit-col autofit-col-expand">
							<div class="autofit-section">
								<strong class="lead">Copied!</strong>
							</div>
						</div>
					</div>
				</div>
			</div>

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
