'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './MetalQuartzLink.soy.js';

/**
 * Implementation of the Metal Quartz Link.
 */
class MetalQuartzLink extends Component {
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalQuartzLink.STATE = {

};

Soy.register(MetalQuartzLink, templates);

export default MetalQuartzLink;