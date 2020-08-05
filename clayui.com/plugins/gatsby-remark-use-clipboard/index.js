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
			<div class="code-container">
				<div class="copied-alert alert alert-fluid alert-info d-none" role="alert">
					<div class="container">
						<div class="alert-autofit-row autofit-row">
							<div class="autofit-col inline-item-before">
								<div class="autofit-section">
									<span class="alert-indicator">
										<svg class="lexicon-icon lexicon-icon-info-circle" focusable="false" role="presentation">
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

				<button class="btn btn-sm btn-copy btn-monospaced btn-unstyled" title="Copy">
					<svg class="lexicon-icon" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#paste"></use>
					</svg>
				</button>

				<button class="btn btn-sm btn-collapse btn-collapse--collapse btn-monospaced btn-unstyled" title="Expand">
					<svg class="lexicon-icon lexicon-icon-angle-down icon-collapse--expanded" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#angle-down"></use>
					</svg>
					<svg class="lexicon-icon lexicon-icon-angle-right icon-collapse--collapsed" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#angle-right"></use>
					</svg>
				</button>

				${node.value}
			</div>
		`;
	});
};
