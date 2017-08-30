'use strict';

import {ComponentRenderer} from 'metal-component';

import ChartBase from '../ChartBase';

/**
 * Renderer for charts rendered from JSX components.
 */
class ChartRenderer extends ComponentRenderer.constructor {
	render(component) {
		component.element = document.createElement('div');
		component.element.className = 'metal-chart';
		component.informRendered();
	}
}

/**
 * Metal Chart component for use with JSX.
 */
class ChartJSX extends ChartBase {
}

ChartJSX.RENDERER = new ChartRenderer();

export {ChartJSX};
export default ChartJSX;
