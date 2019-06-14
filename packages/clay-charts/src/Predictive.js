/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React from 'react';
import {isDefAndNotNull, isNumber} from 'metal';
import BillboardChart from 'react-billboardjs';

/**
 * Predictive Chart component.
 * @extends React.Component
 * @param {Object} props
 * @return {ReactElement}
 */
class PredictiveChartBase extends React.Component {
	/** @inheritdoc */
	constructor(props) {
		super(props);

		let columns = props.data.columns;

		if (isDefAndNotNull(columns)) {
			columns = columns.map(dataSeries => {
				if (dataSeries[0] !== 'x') {
					dataSeries = dataSeries.map(element => {
						return isNumber(element)
							? {
								low: element,
								mid: element,
								high: element,
							  }
							: element;
					});
				}

				return dataSeries;
			});
		}

		let predictionDate = props.predictionDate;
		let regions = [];

		if (isDefAndNotNull(predictionDate)) {
			regions.push({
				axis: 'x',
				start: predictionDate,
			});
		}

		this.state = {
			columns,
			regions,
		};
	}

	/** @inheritdoc */
	render() {
		const {columns, regions} = this.state;
		const {data, predictionDate, forwardedRef, ...otherProps} = this.props;

		return (
			<BillboardChart
				ref={forwardedRef}
				data={{
					...data,
					columns,
					type: 'line',
				}}
				regions={regions}
				{...otherProps}
			/>
		);
	}
}

export default React.forwardRef((props, ref) => (
  <PredictiveChartBase forwardedRef={ref} {...props} />
));
