import Chart from './Chart';
import {PredictiveChart as PredictiveChartBase} from '../PredictiveChart';
import {isDefAndNotNull, isString, isNumber} from 'metal';

/**
 * Predictive Chart component.
 * @augments Chart
 */
class PredictiveChart extends Chart {
	/**
	 * @inheritDoc
	 */
	created() {
		const config = this.getInitialConfig();

		if (isDefAndNotNull(config.timeseries)) {
			config.data.push({data: config.timeseries, id: 'x'});
		}

		if (isDefAndNotNull(config.data)) {
			config.data = config.data.map(dataSeries => {
				if (dataSeries.id !== 'x') {
					dataSeries.data = dataSeries.data.map(element => {
						return isNumber(element)
							? {low: element, mid: element, high: element}
							: element;
					});
				}

				return dataSeries;
			});
		}

		if (isDefAndNotNull(config.axisXTickFormat)) {
			config.axisX = {
				tick: {
					format: config.axisXTickFormat,
				},
			};
		}

		if (isDefAndNotNull(config.predictionDate)) {
			if (isString(config.predictionDate)) {
				config.predictionDate = new Date(config.predictionDate);
			}

			if (!isDefAndNotNull(this.props.regions)) {
				this.props.regions = [];
			}

			this.props.regions.push({
				axis: 'x',
				start: config.predictionDate,
			});
		}

		if (isDefAndNotNull(this.tooltipContents)) {
			this.tooltip.contents = this.tooltipContents;
		}
	}
}

PredictiveChart.PROPS = PredictiveChartBase.STATE;

export {PredictiveChart};
export default PredictiveChart;
