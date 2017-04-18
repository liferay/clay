'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './MetalClaySample.soy';

/**
 * Sample Metal Clay component.
 */
class MetalClaySample extends Component {
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalClaySample.STATE = {
	/**
	 * Content string.
	 * @instance
	 * @memberof MetalClaySample
	 * @type {string}
	 */
	content: {
		validator: core.isString
	}
};

Soy.register(MetalClaySample, templates);

export default MetalClaySample;
