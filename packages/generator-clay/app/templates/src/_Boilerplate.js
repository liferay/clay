import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './<%= componentName %>.soy.js';

/**
 * Metal <%= componentName %> component.
 */
class <%= componentName %> extends Component {
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayLabel.STATE = {
  /**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayLabel
	 * @type {?string|undefined}
	 * default undefined
	 */
  id: Config.string()

};

Soy.register(<%= componentName %>, templates);

export {<%= componentName %>};
export default <%= componentName %>;
