import 'clay-button';
import 'clay-checkbox';
import 'clay-icon';
import 'clay-radio';
import Dropdown from 'metal-dropdown';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import itemsValidator from './items_validator';
import templates from './ClayDropdownBase.soy.js';

/**
 * Implementation of the base for Metal Clay Dropdown.
 */
class ClayDropdownBase extends Dropdown {
  /**
   * Handles Search in Dropdown.
   * @param {!Event} event
   * @protected
   */
  _handleSearch(event) {
    let searchValue = event.delegateTarget.value.toLowerCase();

    if (!this._originalItems) {
      this._originalItems = this.items;
    }

    if (searchValue !== '') {
      this.items = this._originalItems.filter(item => {
        return (
          item.label &&
          item.type !== 'separator' &&
          item.type !== 'header' &&
          item.label.toLowerCase().indexOf(searchValue) !== -1
        );
      });
    } else {
      this.items = this._originalItems;
    }

    this.emit('itemsFiltered', {
      originalItems: this._originalItems,
      filteredItems: this.items,
    });
  }
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayDropdownBase.STATE = {
  /**
   * Element selector used to position dropdown according to trigger position.
   * @instance
   * @memberof ClayDropdownBase
   * @type {?string}
   * @default .dropdown-toggle
   */
  alignElementSelector: Config.string()
    .value('.dropdown-toggle')
    .internal(),

  /**
   * Button configuration to place a button at dropdown footer.
   * @instance
   * @memberof ClayDropdownBase
   * @type {?string}
   * @default .dropdown-toggle
   */
  button: Config.shapeOf({
    label: Config.string().required(),
    style: Config.oneOf(['primary', 'secondary']).value('primary'),
  }),

  /**
   * Caption text of the dropdown.
   * @instance
   * @memberof ClayDropdownBase
   * @type {?string}
   * @default undefined
   */
  caption: Config.string(),

  /**
   * Flag to indicate if menu is expanded.
   * @instance
   * @memberof ClayDropdownBase
   * @type {?bool}
   * @default false
   */
  expanded: Config.bool().value(false),

  /**
   * Help text to be shown on top of the open dropdown.
   * @instance
   * @memberof ClayDropdownBase
   * @type {?string}
   * @default undefined
   */
  helpText: Config.string(),

  /**
   * Position in which item indicator symbols will be placed. Needed if any
   * item has indicators.
   * @instance
   * @memberof ClayDropdownBase
   * @type {?string}
   * @default undefined
   */
  indicatorsPosition: Config.oneOf(['left', 'right']),

  /**
   * List of menu items.
   * @instance
   * @memberof ClayDropdownBase
   * @type {!Array}
   * @default undefined
   */
  items: itemsValidator.required(),

  /**
   * Flag to indicate if menu has a search field and search through elements
   * is possible.
   * @instance
   * @memberof ClayDropdownBase
   * @type {?bool}
   * @default false
   */
  searchable: Config.bool().value(false),

  /**
   * The path to the SVG spritemap file containing the icons.
   * @instance
   * @memberof ClayDropdownBase
   * @type {?string}
   * @default undefined
   */
  spritemap: Config.string(),

  /**
   * Label of the trigger button.
   * @instance
   * @memberof ClayDropdownBase
   * @type {!string}
   * @default undefined
   */
  triggerLabel: Config.any().required(),

  /**
   * Style of the trigger button.
   * @instance
   * @memberof ClayDropdownBase
   * @type {!string}
   * @default unstyled
   */
  triggerStyle: Config.oneOf([
    'borderless',
    'link',
    'primary',
    'secondary',
    'unstyled',
  ]).value('unstyled'),
};

Soy.register(ClayDropdownBase, templates);

export {ClayDropdownBase};
export default ClayDropdownBase;
