'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './MetalQuartzSample.soy';

/**
 * Sample Metal Quartz component.
 */
class MetalQuartzSample extends Component {
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalQuartzSample.STATE = {
	/**
	 * Content string.
	 * @instance
	 * @memberof MetalQuartzSample
	 * @type {string}
	 */
	content: {
		validator: core.isString
	}
};

Soy.register(MetalQuartzSample, templates);

export default MetalQuartzSample;
