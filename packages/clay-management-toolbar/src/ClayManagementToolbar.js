import 'clay-button';
import 'clay-checkbox';
// eslint-disable-next-line
import { ClayActionsDropdown } from 'clay-dropdown';
import {Config} from 'metal-state';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayManagementToolbar.soy.js';

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
 * Metal ClayManagementToolbar component.
 */
class ClayManagementToolbar extends Component {
	/**
	 * Hides the search in mobile devices
	 * @private
	 */
	handleCloseMobileSearchClick_() {
		this.showSearch_ = false;
	}

	/**
	 * Continues the propagation of the checkbox changed event
	 * @param {!Event} event
	 * @private
	 */
	handleFilterDoneButtonClick_(event) {
		this.emit('filterDoneClicked', event);
	}

	/**
	 * Shows the search in mobile devices
	 * @private
	 */
	handleOpenMobileSearchClick_() {
		this.showSearch_ = true;
	}

	/**
	 * Continues the propagation of the plus button clicked event
	 * @param {!Event} event
	 * @private
	 */
	handlePlusButtonClicked_(event) {
		this.emit('plusButtonClicked', event);
	}

	/**
	 * Continues the propagation of the search button clicked event
	 * @param {!Event} event
	 * @return {Boolean} If the event has been prevented or not.
	 * @private
	 */
	handleSearchSearchClick_(event) {
		return !this.emit('search', event);
	}

	/**
	 * Continues the propagation of the select all button clicked event
	 * @param {!Event} event
	 * @private
	 */
	handleSelectAllClicked_(event) {
		this.emit('selectAllClicked', event);
	}

	/**
	 * Continues the propagation of the checkbox changed event
	 * @param {!Event} event
	 * @private
	 */
	handleSelectPageCheckboxChanged_(event) {
		this.emit('selectPageCheckboxChanged', event);
	}

	/**
	 * Continues the propagation of the sorting button clicked event
	 * @private
	 */
	handleSortingButtonClicked_() {
		this.emit('sortingButtonClicked', {
			sortingOrder: this.sortingOrder,
		});
	}

	/**
	 * Continues the propagation of the view type item clicked event
	 * @param {!Event} event
	 * @private
	 */
	handleViewTypeClicked_(event) {
		let element = event.currentTarget;
		let elementIndex = Array.prototype.indexOf.call(
			element.parentElement.children,
			element
		);
		let item = this.viewTypes[elementIndex];

		this.emit('viewTypeClicked', {
			viewType: item,
		});
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayManagementToolbar.STATE = {
	/**
	 * List of items to display in the actions menu on active state.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?array|undefined}
	 * @default undefined
	 */
	actionItems: actionItemsValidator,

	/**
	 * Name of the content renderer to use template variants.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	contentRenderer: Config.string(),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * List of filter menu items.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?array|undefined}
	 * @default undefined
	 */
	filterItems: filterItemsValidator,

	/**
	 * Flag to indicate if the `Done` button in filter dropdown should be hide or
	 * not.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?bool}
	 * @default false
	 */
	hideFiltersDoneButton: Config.bool().value(false),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * URL of the search form action
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	searchActionURL: Config.string(),

	/**
	 * Name of the search form.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	searchFormName: Config.string(),

	/**
	 * Name of the search input.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	searchInputName: Config.string(),

	/**
	 * Flag to indicate if the managment toolbar will control the selection of
	 * elements.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?bool|undefined}
	 * @default undefined
	 */
	selectable: Config.bool().value(false),

	/**
	 * Number of selected items.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?number|undefined}
	 * @default undefined
	 */
	selectedItems: Config.number(),

	/**
	 * Flag to indicate if search should be shown in or not. This is for the
	 * hide/show interaction in small devices.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?bool}
	 * @default false
	 */
	showSearch_: Config.bool()
		.internal()
		.value(false),

	/**
	 * Sorting order.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?string|undefined}
	 * @default asc
	 */
	sortingOrder: Config.oneOf(['asc', 'desc']).value('asc'),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

	/**
	 * Total number of items.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?number|undefined}
	 * @default undefined
	 */
	totalItems: Config.number(),

	/**
	 * List of view items.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?array|undefined}
	 * @default undefined
	 */
	viewTypes: Config.arrayOf(
		Config.shapeOf({
			active: Config.bool().value(false),
			disabled: Config.bool().value(false),
			icon: Config.string().required(),
			label: Config.string().required(),
		})
	),
};

defineWebComponent('clay-management-toolbar', ClayManagementToolbar);

Soy.register(ClayManagementToolbar, templates);

export {ClayManagementToolbar};
export default ClayManagementToolbar;
