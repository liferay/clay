import 'clay-checkbox';
import 'clay-dropdown';
import 'clay-icon';
import 'clay-link';
import 'clay-sticker';

import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayListGroup.soy.js';

/**
 * Metal ClayListGroup component.
 */
class ClayListGroup extends Component {
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
ClayListGroup.STATE = {
	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayListGroup
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayListGroup
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * List of items.
	 * @instance
	 * @memberof ClayListGroup
	 * @type {!array}
	 * @default undefined
	 */
	items: Config.arrayOf(
		Config.shapeOf({
			actionItems: Config.arrayOf(
				Config.shapeOf({
					disabled: Config.bool().value(false),
					events: Config.object(),
					indicatorSymbol: Config.string(),
					label: Config.string().required(),
					quickAction: Config.bool(),
					separator: Config.bool().value(false),
					url: Config.string().required(),
				})
			),
			description: Config.string(),
			icon: Config.string(),
			iconShape: Config.oneOf(['circle', 'rounded']).value('rounded'),
			selected: Config.bool().value(false),
			title: Config.any().required(),
		})
	).required(),

	/**
	 * Flag to indicate if the list group items are selectable.
	 * @instance
	 * @memberof ClayListGroup
	 * @type {?bool|undefined}
	 * @default false
	 */
	selectable: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayListGroup
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string(),
};

defineWebComponent('clay-list-group', ClayListGroup);

Soy.register(ClayListGroup, templates);

export {ClayListGroup};
export default ClayListGroup;
