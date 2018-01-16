import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayDropdownPortal.soy.js';

/**
 * Portal for ClayDropdownBase.
 */
class ClayDropdownPortal extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayDropdownPortal.STATE = {
	content: {},
};

Soy.register(ClayDropdownPortal, templates);

export {ClayDropdownPortal};
export default ClayDropdownPortal;
