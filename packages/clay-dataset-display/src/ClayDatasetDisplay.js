import 'clay-card-grid';
import 'clay-list';
import 'clay-management-toolbar';
import 'clay-table';

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
	/**
	 * @inheritDoc
	 */
	created() {
		let selectedItems = [];
		let totalItems = 0;

		for (let item of this.items) {
			if (item.items) {
				totalItems += item.items.length;

				for (let childrenItem of item.items) {
					if (childrenItem.selected) {
						selectedItems.push(childrenItem);
					}
				}
			} else {
				if (item.selected) {
					selectedItems.push(item);
				}
			}
		}

		this.selectedItems_ = selectedItems;
		this.totalItems_ = totalItems;
	}

	/**
	 * Deselects all items on management toolbar deselect all button click.
	 * @private
	 */
	handleDeselectAllClicked_() {
		this.deselectAllItems();
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
						this.viewTypes[this.viewType].schema.inputValueField
					] === itemId
				) {
					item.selected = false;
					this.selectedItems_.splice(index, 1);
					break;
				}
			}
		} else {
			let found = false;

			for (let item of this.items) {
				if (item.items) {
					for (let childrenItem of item.items) {
						if (
							childrenItem[
								this.viewTypes[this.viewType].schema
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
							this.viewTypes[this.viewType].schema.inputValueField
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

		this.items = this.items;
		this.selectedItems_ = this.selectedItems_;
	}

	/**
	 * Selects all items on management toolbar select all button click.
	 * @private
	 */
	handleSelectAllClicked_() {
		this.selectAllItems();
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
			this.selectAllItems();
		} else {
			this.deselectAllItems();
		}
	}

	/**
	 * Changes the view on management toolbar view type click.
	 * @param {!Event} event
	 * @private
	 */
	handleViewTypeClicked_(event) {
		this.viewTypes[this.viewType].active = false;

		for (let [index, viewType] of this.viewTypes.entries()) {
			if (viewType === event.viewType) {
				this.viewTypes[index].active = true;
				this.viewType = index;
				break;
			}
		}
	}

	/**
	 * Iterates over the selected items array, mark all as not selected and
	 * removes them from the selectedItems array.
	 * @private
	 */
	deselectAllItems() {
		for (let item of this.selectedItems_) {
			item.selected = false;
		}

		this.selectedItems_ = [];
	}

	/**
	 * Iterates over the items array, mark all as selected and adds them to the
	 * selectedItems array.
	 * @private
	 */
	selectAllItems() {
		let selectedItems = [];

		for (let item of this.items) {
			if (item.items) {
				for (let childrenItem of item.items) {
					childrenItem.selected = true;

					selectedItems.push(childrenItem);
				}
			} else {
				item.selected = true;

				selectedItems.push(childrenItem);
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
	 * Configuration of the management bar plus button.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?object|undefined}
	 * @default undefined
	 */
	plusButton: Config.shapeOf({
		button: Config.object(),
		caption: Config.string(),
		helpText: Config.string(),
		items: actionItemsValidator,
	}),

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
	 * The selected items of the item list. For internatl purposes.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?array|undefined}
	 * @default undefined
	 */
	selectedItems_: Config.array().internal(),

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
	 * Position in the views list of the selected view.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?number|undefined}
	 * @default undefined
	 */
	viewType: Config.number(),

	/**
	 * List of view items.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?array|undefined}
	 * @default undefined
	 */
	viewTypes: Config.arrayOf(
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
