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

		this.selectedItems_ = selectedItems;
		this.totalItems_ = totalItems;
	}

	/**
	 * Iterates over the selected items array, mark all as not selected and
	 * removes them from the selectedItems array.
	 * @private
	 */
	deselectAllItems_() {
		for (let item of this.selectedItems_) {
			item.selected = false;
		}

		this.selectedItems_ = [];
	}

	/**
	 * Returns the selected items.
	 * @return {?array|undefined} the items.
	 * @private
	 */
	getSelectedItems() {
		return this.selectedItems_;
	}

	/**
	 * Continues the propagation of the action item clicked event
	 * @param {!Event} event
	 * @private
	 */
	handleActionClicked_(event) {
		this.emit('actionClicked', event);
	}

	/**
	 * Continues the propagation of the plus button clicked event
	 * @param {!Event} event
	 * @private
	 */
	handleCreationButtonClicked_(event) {
		this.emit('creationButtonClicked', event);
	}

	/**
	 * Deselects all items on management toolbar deselect all button click.
	 * @private
	 */
	handleDeselectAllClicked_() {
		this.deselectAllItems_();
	}

	/**
	 * Continues the propagation of the filter done clicked event
	 * @param {!Event} event
	 * @private
	 */
	handleFilterDoneClicked_(event) {
		this.emit('filterDoneClicked', event);
	}

	/**
	 * Toggles the selection of an item and adds or removes it from selected items
	 * list.
	 * @param {!Event} event
	 * @private
	 */
	handleItemToggled_(event) {
		let checkedStatus = event.target.checked;
		let itemId = event.target.getAttribute('value');

		if (!checkedStatus) {
			for (let [index, item] of this.selectedItems_.entries()) {
				if (
					item[
						this.views[this.selectedView].schema.inputValueField
					] === itemId
				) {
					item.selected = false;
					this.selectedItems_.splice(index, 1);
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
								this.selectedItems_.push(childrenItem);
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
							this.selectedItems_.push(item);
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
		this.selectedItems_ = this.selectedItems_;
	}

	/**
	 * Continues the propagation of the search event
	 * @param {!Event} event
	 * @private
	 */
	handleSearch_(event) {
		this.emit('search', event);
	}

	/**
	 * Continues the propagation of the sorting button clicked event
	 * @param {!Event} event
	 * @private
	 */
	handleSortingButtonClicked_(event) {
		this.emit('sortingButtonClicked', event);
	}

	/**
	 * Selects all items on management toolbar select all button click.
	 * @private
	 */
	handleSelectAllClicked_() {
		this.selectAllItems_();
	}

	/**
	 * Changes the selection status of the dataset items on management toolbar
	 * select page checkbox change.
	 * @param {!Event} event
	 * @private
	 */
	handleSelectPageCheckboxChanged_(event) {
		let checkboxStatus = event.target.checked;

		if (checkboxStatus) {
			this.selectAllItems_();
		} else {
			this.deselectAllItems_();
		}
	}

	/**
	 * Changes the view on management toolbar view type click.
	 * @param {!Event} event
	 * @private
	 */
	handleViewTypeClicked_(event) {
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
	selectAllItems_() {
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

		this.selectedItems_ = selectedItems;
	}
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
	 * Configuration of the management bar plus button.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?object|undefined}
	 * @default undefined
	 */
	creationMenu: Config.shapeOf({
		button: Config.object(),
		caption: Config.string(),
		helpText: Config.string(),
		items: actionItemsValidator,
	}),

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
	 * The selected items of the item list. For internatl purposes.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?array|undefined}
	 * @default undefined
	 */
	selectedItems_: Config.array().internal(),

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
	 * The total number of items in the item list. For internatl purposes.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?int|undefined}
	 * @default undefined
	 */
	totalItems_: Config.number().internal(),

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
