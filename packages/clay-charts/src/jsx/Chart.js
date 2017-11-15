'use strict';

import {JSXComponent} from 'metal-jsx';

import ChartBase from '../ChartBase';

/**
 * Metal Chart component for use with JSX.
 * @extends JSXComponent
 * @extends ChartBase
 */
class ChartJSX extends JSXComponent {
	/**
	 * @inheritDoc
	 */
	render() {
		const loading = this.props.loading;

		return (
			<div class="metal-chart-container">
				<div
					class="metal-chart"
					ref="chart"
					{...loading && {hidden: 'hidden'}}
				/>
				<div ref="placeholder" {...!loading && {hidden: 'hidden'}}>
					<pre>loading...</pre>
				</div>
			</div>
		);
	}

	/**
	 * @inheritDoc
	 */
	shouldUpdate() {
		return false;
	}
}

Object.assign(ChartJSX.prototype, ChartBase);

/**
 * @inheritDoc
 */
ChartJSX.PROPS = ChartBase.STATE;

/**
 * @inheritDoc
 */
ChartJSX.prototype.getStateObj_ = function() {
	return this.props;
};

export {ChartJSX};
export default ChartJSX;
