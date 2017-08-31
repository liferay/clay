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
}

Object.assign(ChartJSX.prototype, ChartBase);
ChartJSX.PROPS = ChartBase.STATE;

export {ChartJSX};
export default ChartJSX;
