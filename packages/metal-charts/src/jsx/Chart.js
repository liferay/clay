'use strict';

import { JSXComponent } from 'metal-jsx';

import ChartBase from '../ChartBase';

/**
 * Metal Chart component for use with JSX.
 * @augments ChartBase
 * @augments JSXComponent
 */
class ChartJSX extends JSXComponent {
	/**
	 * @inheritDoc
	 */
	render() {
		return <div class="metal-chart" />;
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

export { ChartJSX };
export default ChartJSX;
