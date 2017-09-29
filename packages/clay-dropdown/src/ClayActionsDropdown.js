import 'clay-icon';
import './ClayDropdownBase';
import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import itemsValidator from './items_validator';
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
   * Button configuration to place a button at dropdown footer.
   * @instance
   * @memberof ClayActionsDropdown
   * @type {?string}
   * @default undefined
   */
  button: Config.shapeOf({
    label: Config.string().required(),
    style: Config.oneOf(['primary', 'secondary']).value('primary'),
    type: Config.oneOf(['button', 'reset', 'submit']),
  }),

  /**
   * Caption text of the dropdown.
   * @instance
   * @memberof ClayActionsDropdown
   * @type {?string}
   * @default undefined
   */
  caption: Config.string(),

  /**
   * Flag to indicate if menu is expanded.
   * @instance
   * @memberof ClayActionsDropdown
   * @type {?bool}
   * @default false
   */
  expanded: Config.bool().value(false),

  /**
   * Help text to be shown on top of the open dropdown.
   * @instance
   * @memberof ClayActionsDropdown
   * @type {?string}
   * @default undefined
   */
  helpText: Config.string(),

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
