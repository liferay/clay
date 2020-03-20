/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {Component} from 'react';

class Swatch extends Component {
	constructor(props) {
		super(props);

		this.swatchColor = React.createRef();

		this.state = {
			hex: '',
			lexiconName: props.lexiconName,
			rgb: '',
			swatchClassName: props.varName.substring(1),
			varName: props.varName,
		};
	}

	componentDidMount() {
		const computedStyles = window.getComputedStyle(
			this.swatchColor.current
		);

		this.setState({
			hex: computedStyles.getPropertyValue('content').replace(/"/g, ''),
			rgb: computedStyles.getPropertyValue('background-color'),
		});
	}

	render() {
		return (
			<div className="clay-site-swatch">
				<div
					className={`clay-site-swatch-color clay-site-swatch-${
						this.state.swatchClassName
					}`}
					ref={this.swatchColor}
				/>
				<div className="clay-site-swatch-body">
					<div className="clay-site-swatch-title">
						{this.state.lexiconName}
					</div>
					<div className="autofit-row">
						<div className="autofit-col clay-site-swatch-type">
							{'Var'}
						</div>
						<div className="autofit-col autofit-col-expand clay-site-swatch-value">
							<span className="clay-site-swatch-text clay-site-var">
								{this.state.varName}
							</span>
						</div>
					</div>
					<div className="autofit-row">
						<div className="autofit-col clay-site-swatch-type">
							{'Hex'}
						</div>
						<div className="autofit-col autofit-col-expand clay-site-swatch-value">
							<span className="clay-site-hex clay-site-swatch-text">
								{this.state.hex}
							</span>
						</div>
					</div>
					<div className="autofit-row">
						<div className="autofit-col clay-site-swatch-type">
							{'Rgb'}
						</div>
						<div className="autofit-col autofit-col-expand clay-site-swatch-value">
							<span className="clay-site-rgb clay-site-swatch-text">
								{this.state.rgb}
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export {Swatch};
