import 'clay-icon';
import './ClayDropdownBase';
import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import {itemsValidator} from './constants.js';
import templates from './ClayActionsDropdown.soy.js';

/**
 * Implementation for Metal Clay Action Dropdown.
 */
class ClayActionsDropdown extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayActionsDropdown.STATE = {
  /**
   * Flag to indicate if menu is expanded.
   * @instance
   * @memberof ClayActionsDropdown
   * @type {?bool}
   * @default false
   */
  expanded: Config.bool().value(false),

  /**
   * List of menu items.
   * @instance
   * @memberof ClayActionsDropdown
   * @type {!Array}
   * @default undefined
   */
  items: itemsValidator.required(),

  /**
   * The path to the SVG spritemap file containing the icons.
   * @instance
   * @memberof ClayActionsDropdown
   * @type {!string}
   * @default undefined
   */
  spritemap: Config.string().required(),
};

Soy.register(ClayActionsDropdown, templates);

export {ClayActionsDropdown};
export default ClayActionsDropdown;
