import 'clay-icon';
import './ClayDropdownBase';
import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import itemsValidator from './items_validator';
import templates from './ClayDropdown.soy.js';

/**
 * Implementation for Metal Clay Dropdown.
 */
class ClayDropdown extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayDropdown.STATE = {
  /**
   * Button configuration to place a button at dropdown footer.
   * @instance
   * @memberof ClayDropdown
   * @type {?string}
   * @default undefined
   */
  button: Config.shapeOf({
    label: Config.string().required(),
    style: Config.oneOf(['primary', 'secondary']),
    type: Config.oneOf(['button', 'reset', 'submit']),
  }),

  /**
   * Flag to indicate if menu is expanded.
   * @instance
   * @memberof ClayDropdown
   * @type {?bool}
   * @default false
   */
  expanded: Config.bool().value(false),

  /**
   * Position in which item indicator symbols will be placed. Needed if any
   * item has indicators.
   * @instance
   * @memberof ClayDropdown
   * @type {?string}
   * @default undefined
   */
  indicatorsPosition: Config.oneOf(['left', 'right']),

  /**
   * List of menu items.
   * @instance
   * @memberof ClayDropdown
   * @type {!Array}
   * @default undefined
   */
  items: itemsValidator.required(),

  /**
   * Flag to indicate if menu has a search field and search through elements
   * is possible.
   * @instance
   * @memberof ClayDropdown
   * @type {?bool}
   * @default false
   */
  searchable: Config.bool().value(false),

  /**
   * The path to the SVG spritemap file containing the icons.
   * @instance
   * @memberof ClayDropdown
   * @type {!string}
   * @default undefined
   */
  spritemap: Config.string().required(),

  /**
   * Label of the trigger button.
   * @instance
   * @memberof ClayDropdown
   * @type {!string}
   * @default undefined
   */
  triggerLabel: Config.string().required(),

  /**
   * Style of the trigger button.
   * @instance
   * @memberof ClayDropdown
   * @type {?string}
   * @default unstyled
   */
  triggerStyle: Config.oneOf(['secondary', 'unstyled']).value('unstyled'),

  /**
   * Type of the dropdown menu.
   * @instance
   * @memberof ClayDropdown
   * @type {?string}
   * @default list
   */
  type: Config.oneOf(['form', 'list']).value('list'),
};

Soy.register(ClayDropdown, templates);

export {ClayDropdown};
export default ClayDropdown;
