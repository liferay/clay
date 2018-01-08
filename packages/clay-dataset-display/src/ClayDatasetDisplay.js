import 'clay-list';
import 'clay-management-toolbar';

import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayDatasetDisplay.soy.js';

let filterItemShape = {
	checked: Config.bool().value(false),
	disabled: Config.bool().value(false),
	href: Config.string(),
	inputName: Config.string(),
	inputValue: Config.string(),
	label: Config.string().required(),
	separator: Config.bool().value(false),
	type: Config.oneOf(['checkbox', 'group', 'item', 'radiogroup']),
};

const filterItemsValidator = Config.arrayOf(Config.shapeOf(filterItemShape));

filterItemShape.items = filterItemsValidator;

let actionItemShape = {
	disabled: Config.bool().value(false),
	href: Config.string().required(),
	icon: Config.string(),
	label: Config.string().required(),
	quickAction: Config.bool(),
	separator: Config.bool().value(false),
	type: Config.oneOf(['group', 'item']).value('item'),
};

const actionItemsValidator = Config.arrayOf(Config.shapeOf(actionItemShape));

actionItemShape.items = actionItemsValidator;

/**
 * Metal ClayDatasetDisplay component.
 */
class ClayDatasetDisplay extends Component {
	handleItemToggled_(event) {}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayDatasetDisplay.STATE = {
	/**
	 * List of items to display in the management toolbar actions menu.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?array|undefined}
	 * @default undefined
	 */
	actionItems: actionItemsValidator,

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * List of filter menu items.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?array|undefined}
	 * @default undefined
	 */
	filterItems: filterItemsValidator,

	/**
	 * Flag to indicate if the `Done` button in management toolbar filter dropdown
	 * should be hide or not.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?bool}
	 * @default false
	 */
	hideFiltersDoneButton: Config.bool().value(false),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Items of the dataset.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?array|undefined}
	 * @default undefined
	 */
	items: Config.array(),

	/**
	 * URL of the search form action
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?string|undefined}
	 * @default undefined
	 */
	searchActionURL: Config.string(),

	/**
	 * Name of the search form.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?string|undefined}
	 * @default undefined
	 */
	searchFormName: Config.string(),

	/**
	 * Name of the search input.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?string|undefined}
	 * @default undefined
	 */
	searchInputName: Config.string(),

	/**
	 * Flag to indicate if the dataset is selectable.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?bool|undefined}
	 * @default false
	 */
	selectable: Config.bool().value(false),

	/**
	 * Sorting order.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?string|undefined}
	 * @default asc
	 */
	sortingOrder: Config.oneOf(['asc', 'desc']).value('asc'),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

	/**
	 * Header of the list.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?string|undefined}
	 * @default undefined
	 */
	title: Config.string(),

	/**
	 * Type of the view of the list.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?string|undefined}
	 * @default undefined
	 */
	viewType: Config.string(),

	/**
	 * List of view items.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?array|undefined}
	 * @default undefined
	 */
	viewTypes: Config.object(),
};

defineWebComponent('clay-dataset-display', ClayDatasetDisplay);

Soy.register(ClayDatasetDisplay, templates);

export {ClayDatasetDisplay};
export default ClayDatasetDisplay;
