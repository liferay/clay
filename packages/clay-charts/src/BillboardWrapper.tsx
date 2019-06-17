/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {HTMLAttributes, useCallback, useLayoutEffect} from 'react';
import {bb, Chart, ChartOptions} from 'billboard.js';

interface IProps extends ChartOptions {
	forwardRef: React.RefObject<HTMLDivElement>;
	elementProps?: HTMLAttributes<HTMLDivElement>;
}

const BillboardWrapper: React.FunctionComponent<IProps> = ({
	forwardRef,
	elementProps = {},
	...otherProps
}) => {
	let chart = React.useRef<Chart | null>(null).current;

	const updateChart = useCallback((args: any) => {
		const {data, unloadBeforeLoad} = args;

		if (!chart) {
			chart = bb.generate({
				bindto: forwardRef.current,
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

	return <div {...elementProps} ref={forwardRef} />;
};

export default React.forwardRef<HTMLDivElement, Omit<IProps, 'forwardRef'>>(
	(props, ref) => (
		<BillboardWrapper
			forwardRef={ref as React.RefObject<HTMLDivElement>}
			{...props}
		/>
	)
);
