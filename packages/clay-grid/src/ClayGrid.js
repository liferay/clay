import 'clay-card';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayGrid.soy.js';

/**
 * Metal ClayGrid component.
 */
class ClayGrid extends Component {
	/**
	 * Continues the propagation of the checkbox changed event
	 * @param {!Event} event
	 * @private
	 */
	handleItemToggled_(event) {
		this.emit('itemToggled', event);
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayGrid.STATE = {
	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayGrid
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayGrid
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * List of items.
	 * @instance
	 * @memberof ClayGrid
	 * @type {!array}
	 * @default undefined
	 */
	items: Config.arrayOf(
		Config.shapeOf({
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
			description: Config.string(),
			disabled: Config.bool(),
			fileType: Config.string(),
			fileTypeStyle: Config.string(),
			href: Config.string(),
			icon: Config.string(),
			iconShape: Config.oneOf(['circle', 'rounded']).value('rounded'),
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
			selected: Config.bool().value(false),
			title: Config.string().required(),
			type: Config.oneOf(['file', 'folder', 'image', 'user']).value(
				'image'
			),
		})
	).required(),

	/**
	 * Flag to indicate if the list group items are selectable.
	 * @instance
	 * @memberof ClayGrid
	 * @type {?bool|undefined}
	 * @default false
	 */
	selectable: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayGrid
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * Header of the list group.
	 * @instance
	 * @memberof ClayGrid
	 * @type {?string|undefined}
	 * @default undefined
	 */
	title: Config.string(),
};

defineWebComponent('clay-grid', ClayGrid);

Soy.register(ClayGrid, templates);

export {ClayGrid};
export default ClayGrid;
