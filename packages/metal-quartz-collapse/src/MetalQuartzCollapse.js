'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './MetalQuartzCollapse.soy';

/**
 * Collapse Metal Quartz component.
 */
class MetalQuartzCollapse extends Component {
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalQuartzCollapse.STATE = {
	/**
	 * Content string.
	 * @instance
	 * @memberof MetalQuartzCollapse
	 * @type {string}
	 */
	content: {
		validator: core.isString
	}
};

Soy.register(MetalQuartzCollapse, templates);

export default MetalQuartzCollapse;
