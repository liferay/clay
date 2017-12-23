import 'clay-checkbox';
import 'clay-icon';
import 'clay-label';
import 'clay-link';
import 'clay-sticker';
import {ClayActionsDropdown} from 'clay-dropdown';
import {Config} from 'metal-state';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayListItem.soy.js';

/**
 * Metal ClayListItem component.
 */
class ClayListItem extends Component {
	/**
	 * Continues the propagation of the checkbox changed event
	 * @param {!Event} event
	 * @private
	 */
	handleItemCheckboxClick_(event) {
		this.emit('itemToggled', event);
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayListItem.STATE = {
	/**
	 * List of items to display in the actions menu.
	 * @instance
	 * @memberof ClayListItem
	 * @type {!array}
	 * @default undefined
	 */
	actionItems: Config.arrayOf(
		Config.shapeOf({
			disabled: Config.bool().value(false),
			href: Config.string().required(),
			icon: Config.string(),
			label: Config.string().required(),
			quickAction: Config.bool(),
			separator: Config.bool().value(false),
		})
	),

	/**
	 * Name of the content renderer to use template variants.
	 * @instance
	 * @memberof ClayListItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	contentRenderer: Config.string(),

	/**
	 * Description of the item
	 * @instance
	 * @memberof ClayListItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	description: Config.string(),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayListItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Url of the item.
	 * @instance
	 * @memberof ClayListItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	href: Config.string(),

	/**
	 * Icon of the list item.
	 * @instance
	 * @memberof ClayListItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	icon: Config.string(),

	/**
	 * Shape of the icon of the list item.
	 * @instance
	 * @memberof ClayListItem
	 * @type {?string|undefined}
	 * @default rounded
	 */
	iconShape: Config.oneOf(['circle', 'rounded']).value('rounded'),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayListItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Labels of the list item.
	 * @instance
	 * @memberof ClayCard
	 * @type {?array|undefined}
	 * @default undefined
	 */
	labels: Config.arrayOf(
		Config.shapeOf({
			label: Config.string(),
			style: Config.oneOf([
				'danger',
				'info',
				'secondary',
				'success',
				'warning',
			]).value('secondary'),
		})
	),

	/**
	 * Flag to indicate if the list item is selectable.
	 * @instance
	 * @memberof ClayListItem
	 * @type {?bool|undefined}
	 * @default false
	 */
	selectable: Config.bool().value(false),

	/**
	 * Flag to indicate if the list item is selected.
	 * @instance
	 * @memberof ClayListItem
	 * @type {?bool|undefined}
	 * @default false
	 */
	selected: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayListItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * Title of the list item.
	 * @instance
	 * @memberof ClayListItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	title: Config.string().required(),
};

defineWebComponent('clay-list-item', ClayListItem);

Soy.register(ClayListItem, templates);

export {ClayListItem};
export default ClayListItem;
