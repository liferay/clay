import 'clay-button';
import 'clay-checkbox';
import 'clay-icon';
import 'clay-link';
// eslint-disable-next-line
import { ClayActionsDropdown, ClayCreationMenuDropdown, ClayDropdownBase } from 'clay-dropdown';
import {Config} from 'metal-state';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import {actionItemsValidator, creationMenuItemsValidator, filterItemsValidator} from './validators';
import templates from './ClayManagementToolbar.soy.js';

/**
 * Metal ClayManagementToolbar component.
 */
class ClayManagementToolbar extends Component {
	/**
	 * Returns the dropdown index of the element.
	 * @param {!Node} element
	 * @return {?array|undefined} the index.
	 * @private
	 */
	_getQuickItemIndex(element) {
		let index = Array.prototype.indexOf.call(
			Array.prototype.filter.call(
				element.parentElement.children,
				childrenElement =>
					childrenElement.getAttribute('role') !== 'presentation'
			),
			element
		);

		if (this.showInfoButton) {
			index--;
		}

		return index;
	}

	/**
	 * Continues the propagation of the action item clicked event
	 * @param {!Object} item
	 * @private
	 */
	_handleActionClicked(item) {
		this.emit('actionClicked', item);
	}

	/**
	 * Continues the propagation of the clear button clicked event
	 * @param {!Event} event
	 * @private
	 */
	_handleClearResultsClick(event) {
		this.emit('clearButtonClicked', event);
	}

	/**
	 * Hides the search in mobile devices
	 * @private
	 */
	_handleCloseMobileSearchClick() {
		this._showSearchMobile = false;
	}

	/**
	 * Continues the propagation of the plus button clicked event
	 * @param {!Event} event
	 * @private
	 */
	_handleCreationButtonClicked(event) {
		this.emit('creationButtonClicked', event);
	}

	/**
	 * Continues the propagation of the creation menu more button clicked event
	 * @param {!Event} event
	 * @private
	 */
	_handleCreationMenuMoreButtonClicked(event) {
		this.emit('creationMenuMoreButtonClicked', event);
	}

	/**
	 * Continues the propagation of the deselect all button clicked event
	 * @param {!Event} event
	 * @private
	 */
	_handleDeselectAllClicked(event) {
		this.emit('deselectAllClicked', event);
	}

	/**
	 * Continues the propagation of the checkbox changed event
	 * @param {!Event} event
	 * @private
	 */
	_handleFilterDoneButtonClick(event) {
		this.emit('filterDoneClicked', event);
	}

	/**
	 * Continues the propagation of the Info button clicked event
	 * @param {!Event} event
	 * @private
	 */
	_handleInfoButtonClicked(event) {
		this.emit('infoButtonClicked', event);
	}

	/**
	 * Shows the search in mobile devices
	 * @private
	 */
	_handleOpenMobileSearchClick() {
		this._showSearchMobile = true;
	}

	/**
	 * Continues the propagation of the action item clicked event
	 * @param {!Event} event
	 * @private
	 */
	_handleQuickActionClicked(event) {
		let element = event.delegateTarget;
		let elementIndex = this._getQuickItemIndex(element);
		let item = this.actionItems[elementIndex];

		this.emit('actionClicked', item);
	}

	/**
	 * Continues the propagation of the search button clicked event
	 * @param {!Event} event
	 * @return {Boolean} If the event has been prevented or not.
	 * @private
	 */
	_handleSearchSearchClick(event) {
		return !this.emit('search', event);
	}

	/**
	 * Continues the propagation of the select all button clicked event
	 * @param {!Event} event
	 * @private
	 */
	_handleSelectAllClicked(event) {
		this.emit('selectAllClicked', event);
	}

	/**
	 * Continues the propagation of the checkbox changed event
	 * @param {!Event} event
	 * @private
	 */
	_handleSelectPageCheckboxChanged(event) {
		this.emit('selectPageCheckboxChanged', event);
	}

	/**
	 * Continues the propagation of the sorting button clicked event
	 * @private
	 */
	_handleSortingButtonClicked() {
		this.emit('sortingButtonClicked', {
			sortingOrder: this.sortingOrder,
		});
	}

	/**
	 * Continues the propagation of the view type item clicked event
	 * @param {!object} item
	 * @private
	 */
	_handleViewTypeClicked(item) {
		this.emit('viewTypeClicked', item);
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayManagementToolbar.STATE = {
	/**
	 * Flag to indicate if search should be shown or not. This is for the
	 * hide/show interaction in small devices.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?bool}
	 * @default false
	 */
	_showSearchMobile: Config.bool()
		.internal()
		.value(false),

	/**
	 * List of items to display in the actions menu on active state.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?array|undefined}
	 * @default undefined
	 */
	actionItems: actionItemsValidator,

	/**
	 * Url for clear results link.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	clearResultsURL: Config.string(),

	/**
	 * Name of the content renderer to use template variants.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	contentRenderer: Config.string(),

	/**
	 * Configuration of the creation menu.
	 * Set `true` to render a plain button that will emit an event onclick.
	 * Set `string` to use it as link href to render a link styled button.
	 * Set `object` to render a dropdown menu with items.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?object|string|bool|undefined}
	 * @default undefined
	 */
	creationMenu: Config.oneOfType([
		Config.bool().value(false),
		Config.string(),
		Config.shapeOf({
			caption: Config.string(),
			favoriteItems: creationMenuItemsValidator,
			helpText: Config.string(),
			mainItems: creationMenuItemsValidator,
		}),
	]),

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
	 * Value of the search input.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	searchValue: Config.string(),

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
	 * Flag to indicate if advanced search should be shown or not.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?bool}
	 * @default false
	 */
	showAdvancedSearch: Config.bool().value(false),

	/**
	 * Flag to indicate if the `Done` button in filter dropdown should be shown or
	 * not.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?bool}
	 * @default true
	 */
	showFiltersDoneButton: Config.bool().value(true),

	/**
	 * Flag to indicate if the Info button should be shown or not.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?bool}
	 * @default false
	 */
	showInfoButton: Config.bool().value(false),

	/**
	 * Flag to indicate if search should be shown or not.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?bool}
	 * @default true
	 */
	showSearch: Config.bool().value(true),

	/**
	 * Sorting url.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	sortingURL: Config.string(),

	/**
	 * Sorting order.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	sortingOrder: Config.oneOf(['asc', 'desc']),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

	/**
	 * Total number of items. If totalItems is 0 most of the elements in the bar
	 * will appear disabled.
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
			href: Config.string(),
			icon: Config.string().required(),
			label: Config.string().required(),
		})
	),
};

defineWebComponent('clay-management-toolbar', ClayManagementToolbar);

Soy.register(ClayManagementToolbar, templates);

export {ClayManagementToolbar};
export default ClayManagementToolbar;
