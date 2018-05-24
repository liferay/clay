import 'clay-button';
import 'clay-checkbox';
import 'clay-icon';
import 'clay-link';
/* eslint-disable */
import {
	ClayActionsDropdown,
	ClayCreationMenuDropdown,
	ClayDropdownBase,
} from 'clay-dropdown';
/* eslint-enable */
import {Config} from 'metal-state';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import {
	actionItemsValidator,
	creationMenuItemsValidator,
	filterItemsValidator,
} from './validators';
import templates from './ClayManagementToolbar.soy.js';

/**
 * Metal ClayManagementToolbar component.
 * @extends ClayComponent
 */
class ClayManagementToolbar extends ClayComponent {
	/**
	 * Returns the dropdown index of the element.
	 * @param {!Node} element
	 * @private
	 * @return {?(array|undefined)} the index.
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
	 * @param {!Event} event
	 * @private
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleActionItemClicked(event) {
		return !this.emit({
			data: event.data,
			name: 'actionItemClicked',
			originalEvent: event,
		});
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
	 * Continues the propagation of the creation menu item clicked event
	 * @param {!Event} event
	 * @private
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleCreationMenuItemClicked(event) {
		return !this.emit({
			data: event.data,
			name: 'creationMenuItemClicked',
			originalEvent: event,
		});
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
	 * Continues the propagation of the filter item click event
	 * @param {!Event} event
	 * @private
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleFilterItemClicked(event) {
		return !this.emit({
			data: event.data,
			name: 'filterItemClicked',
			originalEvent: event,
		});
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
	 * @param {!MouseEvent} event
	 * @private
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleQuickActionClicked(event) {
		let element = event.delegateTarget;
		let elementIndex = this._getQuickItemIndex(element);
		let item = this.actionItems[elementIndex];

		return !this.emit({
			data: {
				item: item,
			},
			name: 'actionItemClicked',
			originalEvent: event,
		});
	}

	/**
	 * Continues the propagation of the search button clicked event
	 * @param {!Event} event
	 * @private
	 * @return {Boolean} If the event has been prevented or not.
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
	 * @param {!Event} event
	 * @private
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleViewTypeClicked(event) {
		return !this.emit({
			data: event.data,
			name: 'viewTypeItemClicked',
			originalEvent: event,
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
	 * Flag to indicate if search should be shown or not. This is for the
	 * hide/show interaction in small devices.
	 * @default false
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?bool}
	 */
	_showSearchMobile: Config.bool()
		.internal()
		.value(false),

	/**
	 * List of items to display in the actions menu on active state.
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(array|undefined)}
	 */
	actionItems: actionItemsValidator,

	/**
	 * Url for clear results link.
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(string|undefined)}
	 */
	clearResultsURL: Config.string(),

	/**
	 * Name of the content renderer to use template variants.
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(string|undefined)}
	 */
	contentRenderer: Config.string(),

	/**
	 * Configuration of the creation menu.
	 * Set `true` to render a plain button that will emit an event onclick.
	 * Set `string` to use it as link href to render a link styled button.
	 * Set `object` to render a dropdown menu with items.
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(object|string|bool|undefined)}
	 */
	creationMenu: Config.shapeOf({
		caption: Config.string(),
		helpText: Config.string(),
		maxPrimaryItems: Config.number(),
		maxSecondaryItems: Config.number(),
		maxTotalItems: Config.number(),
		primaryItems: creationMenuItemsValidator,
		secondaryItems: creationMenuItemsValidator,
		viewMoreURL: Config.string(),
	}),

	/**
	 * Data that will be passed to deltemplates.
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?object}
	 */
	customData: Config.object(),

	/**
	 * Flag to indicate if the managment toolbar is disabled or not.
	 * @default false
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?bool}
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * List of filter menu items.
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(array|undefined)}
	 */
	filterItems: filterItemsValidator,

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * URL of the search form action
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(string|undefined)}
	 */
	searchActionURL: Config.string(),

	/**
	 * Method of the search form.
	 * @default GET
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(string|undefined)}
	 */
	searchFormMethod: Config.oneOf(['GET', 'POST']).value('GET'),

	/**
	 * Name of the search form.
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(string|undefined)}
	 */
	searchFormName: Config.string(),

	/**
	 * Name of the search input.
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(string|undefined)}
	 */
	searchInputName: Config.string(),

	/**
	 * Value of the search input.
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(string|undefined)}
	 */
	searchValue: Config.string(),

	/**
	 * Flag to indicate if the managment toolbar will control the selection of
	 * elements.
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(bool|undefined)}
	 */
	selectable: Config.bool().value(false),

	/**
	 * Number of selected items.
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(number|undefined)}
	 */
	selectedItems: Config.number(),

	/**
	 * Flag to indicate if advanced search should be shown or not.
	 * @default false
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?bool}
	 */
	showAdvancedSearch: Config.bool().value(false),

	/**
	 * Flag to indicate if creation menu button should be shown or not.
	 * @default true
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?bool}
	 */
	showCreationMenu: Config.bool().value(true),

	/**
	 * Flag to indicate if the `Done` button in filter dropdown should be shown or
	 * not.
	 * @default true
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?bool}
	 */
	showFiltersDoneButton: Config.bool().value(true),

	/**
	 * Flag to indicate if the Info button should be shown or not.
	 * @default false
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?bool}
	 */
	showInfoButton: Config.bool().value(false),

	/**
	 * Flag to indicate if search should be shown or not.
	 * @default true
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?bool}
	 */
	showSearch: Config.bool().value(true),

	/**
	 * Sorting url.
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(string|undefined)}
	 */
	sortingURL: Config.string(),

	/**
	 * Sorting order.
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(string|undefined)}
	 */
	sortingOrder: Config.oneOf(['asc', 'desc']),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(string|undefined)}
	 */
	spritemap: Config.string().required(),

	/**
	 * Total number of items. If totalItems is 0 most of the elements in the bar
	 * will appear disabled.
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(number|undefined)}
	 */
	totalItems: Config.number(),

	/**
	 * List of view items.
	 * @default undefined
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?(array|undefined)}
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
