import 'clay-dropdown';
import 'clay-icon';
import 'clay-label';
import 'clay-link';
import 'clay-sticker';

import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayListGroupItem.soy.js';

/**
 * Metal ClayListGroupItem component.
 */
class ClayListGroupItem extends Component {
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
ClayListGroupItem.STATE = {
	/**
	 * List of items to display in the actions menu.
	 * @instance
	 * @memberof ClayListGroupItem
	 * @type {!array}
	 * @default undefined
	 */
	actionItems: Config.arrayOf(
		Config.shapeOf({
			disabled: Config.bool().value(false),
			icon: Config.string(),
			label: Config.string().required(),
			quickAction: Config.bool(),
			separator: Config.bool().value(false),
			url: Config.string().required(),
		})
	),

	/**
	 * Name of the content renderer to use template variants.
	 * @instance
	 * @memberof ClayListGroupItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	contentRenderer: Config.string(),

	/**
	 * Description of the item
	 * @instance
	 * @memberof ClayListGroupItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	description: Config.string(),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayListGroupItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Icon of the list item.
	 * @instance
	 * @memberof ClayListGroupItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	icon: Config.string(),

	/**
	 * Shape of the icon of the list item.
	 * @instance
	 * @memberof ClayListGroupItem
	 * @type {?string|undefined}
	 * @default rounded
	 */
	iconShape: Config.oneOf(['circle', 'rounded']).value('rounded'),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayListGroupItem
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
	 * @memberof ClayListGroupItem
	 * @type {?bool|undefined}
	 * @default false
	 */
	selectable: Config.bool().value(false),

	/**
	 * Flag to indicate if the list item is selected.
	 * @instance
	 * @memberof ClayListGroupItem
	 * @type {?bool|undefined}
	 * @default false
	 */
	selected: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayListGroupItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * Title of the list item.
	 * @instance
	 * @memberof ClayListGroupItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	title: Config.string().required(),

	/**
	 * Url of the item.
	 * @instance
	 * @memberof ClayListGroupItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	url: Config.string(),
};

defineWebComponent('clay-list-item', ClayListGroupItem);

Soy.register(ClayListGroupItem, templates);

export {ClayListGroupItem};
export default ClayListGroupItem;
