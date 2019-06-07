/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {HTMLAttributes, useCallback, useLayoutEffect} from 'react';
import {bb, Chart, ChartOptions} from 'billboard.js';

interface IProps extends ChartOptions {
	elementProps?: HTMLAttributes<HTMLDivElement>;
}

const BillboardWrapper = ({elementProps = {}, ...otherProps}: IProps) => {
	const chartElement = React.useRef<HTMLDivElement>(null);
	let chart = React.useRef<Chart | null>(null).current;

	const updateChart = useCallback((args: any) => {
		const {data, unloadBeforeLoad} = args;

		if (!chart) {
			chart = bb.generate({
				bindto: chartElement.current,
				...args,
			});
		}

		chart.load(
			unloadBeforeLoad
				? {
						...data,
						unload: true,
				  }
				: data
		);
	}, []);

	useLayoutEffect(() => {
		requestAnimationFrame(() => updateChart(otherProps));

		return () => {
			if (chart) {
				try {
					chart.destroy();
				} catch (error) {
					// eslint-disable-next-line no-console
					console.error('Internal billboard.js error', error);
				}
			}

			chart = null;
		};
	}, []);

	useLayoutEffect(() => {
		updateChart(otherProps);
	}, [otherProps]);

	return <div {...elementProps} ref={chartElement} />;
};

export default BillboardWrapper;
