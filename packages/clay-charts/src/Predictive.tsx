/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import BillboardChart from 'react-billboardjs';
import React from 'react';
import {Data} from 'billboard.js';

interface IProps {
	data: Data;
	predictionDate: any;
}

/**
 * Predictive Chart component.
 */
const PredictiveChart: React.FunctionComponent<IProps> = ({
	data,
	predictionDate,
	...otherProps
}) => {
	let columns = data.columns;

	if (columns) {
		columns = columns.map((dataSeries: any) => {
			if (dataSeries[0] !== 'x') {
				dataSeries = dataSeries.map((element: any) => {
					return typeof element === 'number'
						? {
								high: element,
								low: element,
								mid: element,
						  }
						: element;
				});
			}

			return dataSeries;
		});
	}

	const regions = [];

	if (predictionDate) {
		regions.push({
			axis: 'x',
			start: predictionDate,
		});
	}

	return (
		<BillboardChart
			data={{
				...data,
				columns,
			}}
			regions={regions}
			{...otherProps}
		/>
	);
};

export default PredictiveChart;
