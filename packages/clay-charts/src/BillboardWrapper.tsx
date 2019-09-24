/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {bb, ChartOptions} from 'billboard.js';
import React, {HTMLAttributes, useCallback, useLayoutEffect} from 'react';

interface IProps extends ChartOptions {
	forwardRef: React.MutableRefObject<any>;
	elementProps?: HTMLAttributes<HTMLDivElement>;
}

const BillboardWrapper: React.FunctionComponent<IProps> = ({
	forwardRef,
	elementProps = {},
	...otherProps
}) => {
	const elementRef = React.useRef<HTMLDivElement>(null);

	const updateChart = useCallback((args: any) => {
		const {data, onafterinit, ...otherArgs} = args;

		if (elementRef.current) {
			if (!forwardRef.current) {
				forwardRef.current = bb.generate({
					bindto: elementRef.current,
					data,
					onafterinit() {
						if (onafterinit) {
							// Called async so that `forwardRef.current`
							// will be set to the chart before calling
							// `onafterinit`
							setTimeout(() => onafterinit(), 0);
						}
					},
					...otherArgs,
				});
			}

			forwardRef.current.load(data);
		}
	}, []);

	useLayoutEffect(() => {
		requestAnimationFrame(() => updateChart(otherProps));

		return () => {
			if (forwardRef.current) {
				try {
					forwardRef.current.destroy();
				} catch (error) {
					// eslint-disable-next-line no-console
					console.error('Internal billboard.js error', error);
				}
			}

			forwardRef.current = null;
		};
	}, []);

	useLayoutEffect(() => {
		updateChart(otherProps);
	}, [otherProps]);

	return <div {...elementProps} ref={elementRef} />;
};

export default React.forwardRef<HTMLDivElement, Omit<IProps, 'forwardRef'>>(
	(props, ref) => (
		<BillboardWrapper forwardRef={ref as React.RefObject<any>} {...props} />
	)
);
