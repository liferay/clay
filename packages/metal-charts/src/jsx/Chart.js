'use strict';

import {JSXComponent} from 'metal-jsx';

import ChartBase from '../ChartBase';

/**
 * Metal Chart component for use with JSX.
 */
class ChartJSX extends JSXComponent {
	render() {
		return <div class="metal-chart"></div>;
	}

	shouldUpdate() {
		return false;
	}
}

Object.assign(ChartJSX.prototype, ChartBase);
ChartJSX.PROPS = ChartBase.STATE;

ChartJSX.prototype.getStateObj_ = function() {
	return this.props;
};

export {ChartJSX};
export default ChartJSX;
