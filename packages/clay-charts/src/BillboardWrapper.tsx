/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {HTMLAttributes, useCallback, useLayoutEffect} from 'react';
import {bb, ChartOptions} from 'billboard.js';

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
		const {data, unloadBeforeLoad} = args;

		if (!forwardRef.current) {
			forwardRef.current = bb.generate({
				bindto: elementRef.current,
				...args,
			});
		}

		forwardRef.current.load(
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
