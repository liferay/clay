import 'clay-card-grid';
import 'clay-list';
import 'clay-table';
import {
	actionItemsValidator,
	filterItemsValidator,
} from 'clay-management-toolbar';
import {Config} from 'metal-state';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayDatasetDisplay.soy.js';

/**
 * Metal ClayDatasetDisplay component.
 */
class ClayDatasetDisplay extends Component {
	/**
	 * @inheritDoc
	 */
	created() {
		let selectedItems = [];
		let totalItems = 0;

		if (this.items) {
			for (let item of this.items) {
				if (item.items) {
					totalItems += item.items.length;

					for (let childrenItem of item.items) {
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
		for (let item of this._selectedItems) {
			item.selected = false;
		}

		this._selectedItems = [];
	}

	/**
	 * Returns the selected items.
	 * @return {?array|undefined} the items.
	 * @private
	 */
	getSelectedItems() {
		return this._selectedItems;
	}

	/**
	 * Continues the propagation of the action item clicked event
	 * @param {!Event} event
	 * @private
	 */
	_handleActionClicked(event) {
		this.emit('actionClicked', event);
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
	 * Deselects all items on management toolbar deselect all button click.
	 * @private
	 */
	_handleDeselectAllClicked() {
		this._deselectAllItems();
	}

	/**
	 * Continues the propagation of the filter done clicked event
	 * @param {!Event} event
	 * @private
	 */
	_handleFilterDoneClicked(event) {
		this.emit('filterDoneClicked', event);
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
			for (let [index, item] of this._selectedItems.entries()) {
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
				for (let item of this.items) {
					if (item.items) {
						for (let childrenItem of item.items) {
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
	 */
	_handleSearch(event) {
		this.emit('search', event);
	}

	/**
	 * Continues the propagation of the sorting button clicked event
	 * @param {!Event} event
	 * @private
	 */
	_handleSortingButtonClicked(event) {
		this.emit('sortingButtonClicked', event);
	}

	/**
	 * Selects all items on management toolbar select all button click.
	 * @private
	 */
	_handleSelectAllClicked() {
		this._selectAllItems();
	}

	/**
	 * Changes the selection status of the dataset items on management toolbar
	 * select page checkbox change.
	 * @param {!Event} event
	 * @private
	 */
	_handleSelectPageCheckboxChanged(event) {
		let checkboxStatus = event.target.checked;

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
	_handleViewTypeClicked(event) {
		this.views[this.selectedView].active = false;

		for (let [index, view] of this.views.entries()) {
			if (view === event.viewType) {
				this.views[index].active = true;
				this.selectedView = index;
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
		let selectedItems = [];

		for (let item of this.items) {
			if (item.items) {
				for (let childrenItem of item.items) {
					childrenItem.selected = true;

					selectedItems.push(childrenItem);
				}
			} else {
				item.selected = true;

				selectedItems.push(item);
			}
		}

		this._selectedItems = selectedItems;
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayDatasetDisplay.STATE = {
	/**
	 * The selected items of the item list. For internatl purposes.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?array|undefined}
	 * @default undefined
	 */
	_selectedItems: Config.array().internal(),

	/**
	 * The total number of items in the item list. For internatl purposes.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?int|undefined}
	 * @default undefined
	 */
	_totalItems: Config.number().internal(),

	/**
	 * List of items to display in the management toolbar actions menu.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?array|undefined}
	 * @default undefined
	 */
	actionItems: actionItemsValidator,

	/**
	 * Configuration of the management bar plus button.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?object|string|bool|undefined}
	 * @default undefined
	 */
	creationMenu: Config.oneOfType([
		Config.bool().value(false),
		Config.string(),
		Config.shapeOf({
			button: Config.object(),
			caption: Config.string(),
			helpText: Config.string(),
			items: actionItemsValidator,
		}),
	]),

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
	 * @type {?bool}
	 * @default false
	 */
	selectable: Config.bool().value(false),

	/**
	 * Position in the views list of the selected view.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?number|undefined}
	 * @default undefined
	 */
	selectedView: Config.number(),

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
	 * List of view items.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?array|undefined}
	 * @default undefined
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
