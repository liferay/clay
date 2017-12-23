import {
	ClayCard,
	ClayFileCard,
	ClayHorizontalCard,
	ClayImageCard,
	ClayUserCard,
} from 'clay-card';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayCardGrid.soy.js';

/**
 * Metal ClayCardGrid component.
 */
class ClayCardGrid extends Component {
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
ClayCardGrid.STATE = {
	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * List of items.
	 * @instance
	 * @memberof ClayCardGrid
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
			color: Config.oneOf([
				'danger',
				'dark',
				'info',
				'light',
				'primary',
				'secondary',
				'success',
				'warning',
			]).value('primary'),
			description: Config.string(),
			disabled: Config.bool(),
			fileType: Config.string(),
			href: Config.string(),
			icon: Config.string(),
			iconShape: Config.oneOf(['circle', 'rounded']).value('rounded'),
			imageSrc: Config.string(),
			initials: Config.string(),
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
	 * @memberof ClayCardGrid
	 * @type {?bool}
	 * @default false
	 */
	selectable: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * Header of the list group.
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {?string|undefined}
	 * @default undefined
	 */
	title: Config.string(),
};

defineWebComponent('clay-card-grid', ClayCardGrid);

Soy.register(ClayCardGrid, templates);

export {ClayCardGrid};
export default ClayCardGrid;
