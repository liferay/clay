import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './<%= componentName %>.soy.js';

/**
 * Metal <%= componentName %> component.
 * @extends ClayComponent
 */
class <%= componentName %> extends ClayComponent {
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
<%= componentName %>.STATE = {
	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
     * @memberof <%= componentName %>
	 * @type {?object}
	 */
	data: Config.object(),

    /**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof <%= componentName %>
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

    /**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof <%= componentName %>
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

    /**
     * Id to be applied to the element.
     * @instance
     * @memberof <%= componentName %>
     * @type {?string|undefined}
     * @default undefined
     */
    id: Config.string(),
};

defineWebComponent('<%= repoName %>', <%= componentName %>);

Soy.register(<%= componentName %>, templates);

export default <%= componentName %>;
