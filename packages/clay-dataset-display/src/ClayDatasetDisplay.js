import 'clay-card-grid';
import 'clay-list';
import 'clay-table';
import {
	actionItemsValidator,
	creationMenuItemsValidator,
	filterItemsValidator,
	filterLabelsValidator,
} from 'clay-management-toolbar';
import {Config} from 'metal-state';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayDatasetDisplay.soy.js';

/**
 * Metal ClayDatasetDisplay component.
 * @extends ClayComponent
 */
class ClayDatasetDisplay extends ClayComponent {
	/**
	 * @inheritDoc
	 */
	created() {
		let selectedItems = [];
		let totalItems = 0;

		if (this.items) {
			for (let i = 0, l = this.items.length; i < l; i++) {
				const item = this.items[i];

				if (item.items) {
					totalItems += item.items.length;

					for (let j = 0, k = item.items.length; j < k; j++) {
						const childrenItem = item.items[j];

						if (childrenItem.selected) {
							selectedItems.push(childrenItem);
						}
					}
				} else {
					totalItems++;

					if (item.selected) {
						selectedItems.push(item);
					}
				}
			}
		}

		this._selectedItems = selectedItems;
		this._totalItems = totalItems;
	}

	/**
	 * Iterates over the selected items array, mark all as not selected and
	 * removes them from the selectedItems array.
	 * @private
	 */
	_deselectAllItems() {
		this._selectedItems.map(item => (item.selected = false));

		this._selectedItems = [];
	}

	/**
	 * Flattens an array of items.
	 * @param {Array} items
	 * @return {Array}
	 */
	_flattenItems(items) {
		return items.reduce((list, value) => {
			return list.concat(
				Array.isArray(value) ? this._flattenItems(value) : value
			);
		}, []);
	}

	/**
	 * Returns the selected items.
	 * @private
	 * @return {?array|undefined} the items.
	 */
	getSelectedItems() {
		return this._selectedItems;
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
	 * Continues the propagation of the plus button clicked event
	 * @param {!Event} event
	 * @private
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleCreationButtonClicked(event) {
		return !this.emit({
			name: 'creationButtonClicked',
			originalEvent: event,
		});
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
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleCreationMenuMoreButtonClicked(event) {
		return !this.emit({
			name: 'creationMenuMoreButtonClicked',
			originalEvent: event,
		});
	}

	/**
	 * Continues the propagation of the filter done clicked event
	 * @param {!Event} event
	 * @private
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleFilterDoneClicked(event) {
		return !this.emit({
			name: 'filterDoneClicked',
			originalEvent: event,
		});
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
	 * Toggles the selection of an item and adds or removes it from selected items
	 * list.
	 * @param {!Event} event
	 * @private
	 */
	_handleItemToggled(event) {
		let checkedStatus = event.target.checked;
		let itemId = event.target.getAttribute('value');

		if (!checkedStatus) {
			const entries = Object.entries(this._selectedItems);

			for (let i = 0, l = entries.length; i < l; i++) {
				const entry = entries[i];
				const index = entry[0];
				let item = entry[1];

				if (
					item[
						this.views[this.selectedView].schema.inputValueField
					] === itemId
				) {
					item.selected = false;
					this._selectedItems.splice(index, 1);
					break;
				}
			}
		} else {
			let found = false;

			if (this.items) {
				for (let i = 0, l = this.items.length; i < l; i++) {
					const item = this.items[i];

					if (item.items) {
						for (let j = 0, k = item.items.length; j < k; j++) {
							const childrenItem = item.items[j];

							if (
								childrenItem[
									this.views[this.selectedView].schema
										.inputValueField
								] === itemId
							) {
								childrenItem.selected = true;
								this._selectedItems.push(childrenItem);
								found = true;
								break;
							}
						}
					} else {
						if (
							item[
								this.views[this.selectedView].schema
									.inputValueField
							] === itemId
						) {
							item.selected = true;
							this._selectedItems.push(item);
							found = true;
						}
					}

					if (found) {
						break;
					}
				}
			}
		}

		this.items = this.items;
		this._selectedItems = this._selectedItems;
	}

	/**
	 * Continues the propagation of the search event
	 * @param {!Event} event
	 * @private
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleSearch(event) {
		return !this.emit({
			name: 'search',
			originalEvent: event,
		});
	}

	/**
	 * Continues the propagation of the sorting button clicked event
	 * @param {!Event} event
	 * @private
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleSortingButtonClicked(event) {
		return !this.emit({
			data: event.data,
			name: 'sortingButtonClicked',
			originalEvent: event,
		});
	}

	/**
	 * Changes the selection status of the dataset items on management toolbar
	 * select page checkbox change.
	 * @param {!Event} event
	 * @private
	 */
	_handleSelectPageCheckboxChanged(event) {
		let checkboxStatus = event.data.checked;

		if (checkboxStatus) {
			this._selectAllItems();
		} else {
			this._deselectAllItems();
		}
	}

	/**
	 * Changes the view on management toolbar view type click.
	 * @param {!Event} event
	 * @private
	 */
	_handleViewTypeItemClicked(event) {
		const item = event.data.item;

		this.views[this.selectedView].active = false;

		for (let i = 0, l = this.views.length; i < l; i++) {
			const view = this.views[i];

			if (view === item) {
				this.views[i].active = true;
				this.selectedView = i;
				break;
			}
		}
	}

	/**
	 * Iterates over the items array, mark all as selected and adds them to the
	 * selectedItems array.
	 * @private
	 */
	_selectAllItems() {
		const selectedItems = this.items.map(item => {
			if (Array.isArray(item.items)) {
				return item.items.map(item => {
					item.selected = true;
					return item;
				});
			} else {
				item.selected = true;
				return item;
			}
		});

		this._selectedItems = this._flattenItems(selectedItems);
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayDatasetDisplay.STATE = {
	/**
	 * The selected items of the item list. For internal purposes.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?(array|undefined)}
	 */
	_selectedItems: Config.array().internal(),

	/**
	 * The total number of items in the item list. For internal purposes.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?(number|undefined)}
	 */
	_totalItems: Config.number().internal(),

	/**
	 * List of items to display in the management toolbar actions menu.
	 * @default []
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?(array|undefined)}
	 */
	actionItems: actionItemsValidator,

	/**
	 * Configuration of the management bar plus button.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatasetDisplay
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
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * List of filter menu items.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?(array|undefined)}
	 */
	filterItems: filterItemsValidator,

	/**
	 * List of filter label items.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?(array|undefined)}
	 */
	filterLabels: filterLabelsValidator,

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Items of the dataset.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?(array|undefined)}
	 */
	items: Config.array(),

	/**
	 * URL of the search form action
	 * @default undefined
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?(string|undefined)}
	 */
	searchActionURL: Config.string(),

	/**
	 * Name of the search form.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?(string|undefined)}
	 */
	searchFormName: Config.string(),

	/**
	 * Name of the search input.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?(string|undefined)}
	 */
	searchInputName: Config.string(),

	/**
	 * Flag to indicate if the dataset is selectable.
	 * @default false
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?bool}
	 */
	selectable: Config.bool().value(false),

	/**
	 * Position in the views list of the selected view.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?(number|undefined)}
	 */
	selectedView: Config.number(),

	/**
	 * Flag to indicate if management toolbar creation menu button should be
	 * shown or not.
	 * @default true
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?bool}
	 */
	showCreationMenu: Config.bool().value(true),

	/**
	 * Flag to indicate if the `Done` button in management toolbar filter dropdown
	 * should be shown or not.
	 * @default true
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?bool}
	 */
	showFiltersDoneButton: Config.bool().value(true),

	/**
	 * Sorting order.
	 * @default asc
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?(string|undefined)}
	 */
	sortingOrder: Config.oneOf(['asc', 'desc']).value('asc'),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {!string}
	 */
	spritemap: Config.string().required(),

	/**
	 * Header of the list.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?(string|undefined)}
	 */
	title: Config.string(),

	/**
	 * List of view items.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?(array|undefined)}
	 */
	views: Config.arrayOf(
		Config.shapeOf({
			active: Config.bool().value(false),
			disabled: Config.bool().value(false),
			href: Config.string(),
			icon: Config.string().required(),
			id: Config.string().required(),
			label: Config.string().required(),
		})
	),
};

defineWebComponent('clay-dataset-display', ClayDatasetDisplay);

Soy.register(ClayDatasetDisplay, templates);

export {ClayDatasetDisplay};
export default ClayDatasetDisplay;
