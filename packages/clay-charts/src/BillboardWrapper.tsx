/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {HTMLAttributes, RefObject} from 'react';
import {bb, Chart, ChartOptions} from 'billboard.js';

interface IProps extends ChartOptions {
	elementProps?: HTMLAttributes<HTMLDivElement>;
}

class BillboardWrapper extends React.Component<IProps, {}> {
	chart: Chart | null;
	chartElement: RefObject<HTMLDivElement>;

	constructor(props: any) {
		super(props);

		this.chart = null;
		this.chartElement = React.createRef();
	}

	componentDidMount() {
		return requestAnimationFrame(() => this.updateChart(this.props));
	}

	componentWillUnmount() {
		if (this.chart) {
			try {
				this.chart.destroy();
			} catch (error) {
				// eslint-disable-next-line no-console
				console.error('Internal billboard.js error', error);
			}
		}

		this.chart = null;
	}

	componentDidUpdate() {
		return this.updateChart(this.props);
	}

	generateChart(props: any) {
		return bb.generate({
			bindto: this.chartElement.current,
			...props,
		});
	}

	updateChart(props: any) {
		const {data, unloadBeforeLoad} = props;

		if (!this.chart) {
			this.chart = this.generateChart(props);
		}

		this.chart.load(
			unloadBeforeLoad
				? {
						...data,
						unload: true,
				  }
				: data
		);
	}

	render() {
		return <div {...this.props.elementProps} ref={this.chartElement} />;
	}
}

export default BillboardWrapper;
