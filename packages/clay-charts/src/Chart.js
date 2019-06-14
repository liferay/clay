/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React from 'react';
import BillboardChart from 'react-billboardjs';
import GeoMap from './GeoMap';
import Predictive from './Predictive';

import {
	DEFAULT_COLORS,
	DEFAULT_GRID_OBJECT,
	DEFAULT_LINE_CLASSES,
	DEFAULT_POINT_PATTERNS,
} from './config';

/**
 * Chart component.
 * @param {Object} props
 * @return {ReactElement}
 */
class ClayChartBase extends React.Component {
	render() {
		const {color, data, grid, line, point, forwardedRef, ...otherProps} = props;

		let ChartComponent;

		switch (data.type) {
		case 'geo-map':
			ChartComponent = GeoMap;
			break;
		case 'predictive':
			ChartComponent = Predictive;
			break;
		default:
			ChartComponent = BillboardChart;
		}

		return (
			<ChartComponent
				{...otherProps}
				ref={forwardedRef}
				data={data}
				grid={Object.assign({...DEFAULT_GRID_OBJECT}, grid)}
				color={Object.assign({pattern: DEFAULT_COLORS}, color)}
				line={Object.assign({classes: DEFAULT_LINE_CLASSES}, line)}
				point={Object.assign(
					{
						pattern: DEFAULT_POINT_PATTERNS,
					},
					point
				)}
			/>
		);
	}
}

export default React.forwardRef((props, ref) => (
  <ClayChartBase forwardedRef={ref} {...props} />
));
