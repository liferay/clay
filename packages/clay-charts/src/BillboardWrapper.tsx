/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ChartOptions} from 'billboard.js';
import React from 'react';

import bb from './bb-patched';

interface IProps extends ChartOptions {
	elementProps?: React.HTMLAttributes<HTMLDivElement>;
	forwardRef: React.MutableRefObject<any>;
}

const useIsomorphicLayoutEffect =
	typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;

function BillboardWrapper({
	forwardRef,
	elementProps = {},
	...otherProps
}: IProps) {
	const elementRef = React.useRef<HTMLDivElement>(null);
	const updateChart = React.useCallback((args: any) => {
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
	useIsomorphicLayoutEffect(() => {
		requestAnimationFrame(() => updateChart(otherProps));

		return () => {
			if (forwardRef.current) {
				try {
					forwardRef.current.destroy();
				}
				catch (error) {

					// eslint-disable-next-line no-console
					console.error('Internal billboard.js error', error);
				}
			}

			// eslint-disable-next-line react-compiler/react-compiler
			forwardRef.current = null;
		};
	}, []);
	useIsomorphicLayoutEffect(() => {
		updateChart(otherProps);
	}, [otherProps]);

	return <div {...elementProps} ref={elementRef} />;
}

export default React.forwardRef<HTMLDivElement, Omit<IProps, 'forwardRef'>>(
	(props, ref) => (
		<BillboardWrapper forwardRef={ref as React.RefObject<any>} {...props} />
	)
);
