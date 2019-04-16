import 'clay-button';
import 'clay-link';
import 'clay-portal';
import './ClayDropdownItem';
import ClayComponent from 'clay-component';
import Soy from 'metal-soy';
import dom from 'metal-dom';
import {Align} from 'metal-position';
import {Config} from 'metal-state';
import {EventHandler} from 'metal-events';

import {itemsValidator, preferredAlign} from './validators';
import templates from './ClayDropdownBase.soy.js';

const KEY_CODE_ESC = 27;

const KEY_ESCAPE = 'Escape';
const KEY_TAB = 'Tab';

/**
 * Flattens all items into an array of arrays.
 * @param {Array} items
 * @param {Bool} groupItems This keeps items in their original groupings
 * @private
 * @return {Array}
 */
const flatten = (items, groupItems) => {
	const newItems = items.map(item => (item.items ? item.items : [item]));

	return groupItems
		? newItems
		: newItems.reduce((acc, cur) => acc.concat(cur), []);
};

/**
 * Implementation of the base for Metal Clay Dropdown.
 * @extends ClayComponent
 */
class ClayDropdownBase extends ClayComponent {
	/**
	 * @inheritDoc
	 */
	attached() {
		this.addListener('toggle', this._defaultToggle, true);
		this.refs.portal.on('rendered', this._handleRenderedPortal.bind(this));
	}

	/**
	 * @inheritDoc
	 */
	created() {
		this._eventHandler = new EventHandler();
	}

	/**
	 * @inheritDoc
	 */
	detached() {
		this._eventHandler.removeAllListeners();
	}

	/**
	 * @inheritDoc
	 */
	disposed() {
		this._eventHandler.removeAllListeners();
	}

	/**
	 * Reassembles flattened items into the correct items structure.
	 * This method is used in conjunction with `flatten(..., true)`
	 * @param {Array} flattenedItems
	 * @private
	 * @return {Array}
	 */
	_assembleFromFlattenedGroups(flattenedItems) {
		return this.items.map((item, i) => {
			if (item.items) {
				item.items = flattenedItems[i];
			} else {
				item = flattenedItems[i][0];
			}

			return item;
		});
	}

	/**
	 * Toggles the dropdown, closing it when open or opening it when closed.
	 * @protected
	 */
	_defaultToggle() {
		this.expanded = !this.expanded;
	}

	/**
	 * Returns the dropdown index of the element.
	 * @param {!Node} element
	 * @private
	 * @return {?array|undefined} the index.
	 */
	_getDropdownItemIndex(element) {
		return Array.prototype.indexOf.call(
			Array.prototype.filter.call(
				element.parentElement.children,
				childrenElement =>
					childrenElement.getAttribute('role') !== 'presentation'
			),
			element
		);
	}

	/**
	 * Gets the indexes of the next active item.
	 * @param {Array} items
	 * @param {Number} initialActive
	 * @param {Number} initialSubActive
	 * @param {Boolean} reverse
	 * @private
	 * @return {Number}
	 */
	_getNextIndexes(items, initialActive, initialSubActive, reverse = false) {
		let {active, subActive} = this._incrementActiveItemIndex(
			items,
			initialActive === -1 ? 0 : initialActive,
			initialSubActive,
			reverse
		);

		const allItems = items.reduce((prev, curr) => prev.concat(curr), []);

		let tick = 0;

		while (items[active][subActive].disabled && tick < allItems.length) {
			const item = this._incrementActiveItemIndex(
				items,
				active,
				subActive,
				reverse
			);

			active = item.active;
			subActive = item.subActive;

			tick++;
		}

		return {active, subActive};
	}

	/**
	 * Handles document click in order to hide menu.
	 * @param {!Event} event
	 * @protected
	 */
	_handleDocClick(event) {
		if (
			this.element.contains(event.target) ||
			(this.refs.portal &&
				this.refs.portal.element.contains(event.target))
		) {
			return;
		}
		this.toggle();
	}

	/**
	 * Handles footer button click.
	 * @param {!Event} event
	 * @protected
	 */
	_handleButtonClick(event) {
		this.emit('buttonClicked', event);
	}

	/**
	 * Continues the propagation of the item clicked event
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleItemClick(event) {
		const element = event.delegateTarget;
		const elementIndex = this._getDropdownItemIndex(element);
		const flatenItems = flatten(this.items);
		const item = flatenItems[elementIndex];

		return !this.emit({
			data: {
				item: item,
			},
			name: 'itemClicked',
			originalEvent: event,
		});
	}

	/**
	 * Handles the item key down event
	 * @param {!Event} event
	 * @protected
	 */
	_handleItemKeyDown(event) {
		if (event.key === KEY_TAB) {
			const element = event.delegateTarget;
			const elementIndex = this._getDropdownItemIndex(element);
			const totalElements = element.parentElement.querySelectorAll(
				'li :not([role="presentation"])'
			).length;

			if (
				(elementIndex === 0 && event.shiftKey) ||
				(elementIndex === totalElements && !event.shiftKey)
			) {
				event.preventDefault();
				this.refs.triggerButton.focus();
			} else if (elementIndex === totalElements - 1 && !event.shiftKey) {
				this.toggle();
				this.refs.triggerButton.focus();
			}
		} else if (event.key === KEY_ESCAPE) {
			this.toggle();
			this.refs.triggerButton.focus();
		}
	}

	/**
	 * Handle click key code esc and close dropdown.
	 * @param {!Event} event
	 * @private
	 */
	_handleKeyup(event) {
		if (event.keyCode === KEY_CODE_ESC) {
			this.toggle();
		}
	}

	/**
	 * Handle when the lifecycle `rendered` is called in ClayPortal.
	 * @protected
	 */
	_handleRenderedPortal() {
		if (this.expanded && this._alignElementSelector) {
			let alignElement = this.element.querySelector(
				this._alignElementSelector
			);
			if (alignElement) {
				let bodyElement = this.refs.portal.refs.menu;

				this._alignedPosition = Align.align(
					bodyElement,
					alignElement,
					this.preferredAlign
				);
			}
		}
	}

	/**
	 * Handles Search in Dropdown.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleSearch(event) {
		let searchValue = event.delegateTarget.value.toLowerCase();

		if (!this._originalItems) {
			this._originalItems = this.items;
		}

		this.items = this._originalItems.filter(item => {
			if (item.items) {
				if (!item._originalItems) {
					item._originalItems = item.items;
				}

				item.items = item._originalItems.filter(nestedItem => {
					return (
						nestedItem.label &&
						nestedItem.type !== 'group' &&
						nestedItem.type !== 'header' &&
						nestedItem.type !== 'separator' &&
						nestedItem.label.toLowerCase().indexOf(searchValue) !==
							-1
					);
				});

				return item.items.length > 0;
			} else {
				return (
					item.label &&
					item.type !== 'group' &&
					item.type !== 'header' &&
					item.type !== 'separator' &&
					item.label.toLowerCase().indexOf(searchValue) !== -1
				);
			}
		});

		return !this.emit({
			data: {
				filteredItems: this.items,
				originalItems: this._originalItems,
			},
			name: 'itemsFiltered',
			originalEvent: event,
		});
	}

	/**
	 * Handles the key down event over the trigger
	 * @param {!Event} event
	 * @protected
	 */
	_handleTriggerKeyDown(event) {
		if (event.key === KEY_TAB) {
			if (event.shiftKey && this.expanded) {
				this.toggle();
			} else {
				let item = this.refs.portal.refs.item0;

				item = item.refs.item0 || item;

				if (item) {
					item.element.focus();
				}
			}
		}
	}

	/**
	 * Handles blur window in order to hide menu.
	 * @private
	 */
	_handleWinBlur() {
		const activeElement = document.activeElement;
		if (activeElement != null && activeElement.nodeName === 'IFRAME') {
			this.toggle();
		}
	}

	/**
	 * Increments to the index to the next item.
	 * @param {Array} items
	 * @param {Number} active
	 * @param {Number} subActive
	 * @param {Boolean} reverse
	 * @private
	 * @return {Object}
	 */
	_incrementActiveItemIndex(items, active, subActive, reverse) {
		const totalItems = items.length;

		subActive = reverse ? subActive - 1 : subActive + 1;

		if (reverse) {
			if (subActive < 0) {
				const nextActive = active - 1;

				active = nextActive < 0 ? totalItems - 1 : nextActive;

				subActive = items[active].length - 1;
			}
		} else {
			if (subActive === items[active].length) {
				const nextActive = active + 1;

				active = nextActive === totalItems ? 0 : nextActive;

				subActive = 0;
			}
		}

		return {active, subActive};
	}

	/**
	 * Sets the next item in the list as active.
	 * @param {Boolean} reverse
	 * @private
	 */
	_setNextActive(reverse) {
		const items = flatten(this.items, true);
		let activeSubIndex = -1;

		const activeIndex = items.findIndex(item => {
			const subIndex = item.findIndex(item => item.active);

			if (subIndex !== -1) {
				activeSubIndex = subIndex;

				return true;
			}
		});

		const {active, subActive} = this._getNextIndexes(
			items,
			activeIndex,
			activeSubIndex,
			reverse
		);

		if (items[activeIndex] && items[activeIndex][activeSubIndex]) {
			items[activeIndex][activeSubIndex].active = false;
		}

		items[active][subActive].active = true;

		this.items = this._assembleFromFlattenedGroups(items);
	}

	/**
	 * Set preferred alignment with Align API.
	 * @private
	 * @param {!string} value
	 * @return {number}
	 */
	_setPreferredAlign(value) {
		switch (value) {
		case 'TopCenter':
			return Align.TopCenter;
		case 'RightCenter':
			return Align.RightCenter;
		case 'BottomCenter':
			return Align.BottomCenter;
		case 'LeftCenter':
			return Align.LeftCenter;
		case 'TopRight':
			return Align.TopRight;
		case 'BottomRight':
			return Align.BottomRight;
		case 'BottomLeft':
			return Align.BottomLeft;
		case 'TopLeft':
			return Align.TopLeft;
		default:
			return Align.BottomLeft;
		}
	}

	/**
	 * @inheritDoc
	 */
	syncExpanded() {
		if (this.expanded) {
			this._eventHandler.add(
				dom.on(
					document,
					'click',
					this._handleDocClick.bind(this),
					true
				),
				dom.on(
					document,
					'touchend',
					this._handleDocClick.bind(this),
					true
				),
				dom.on(window, 'blur', this._handleWinBlur.bind(this), true)
			);
		} else if (this._eventHandler.eventHandles_.length) {
			this._eventHandler.removeAllListeners();
		}
	}

	/**
	 * Propagate the event toggle.
	 * @param {!Event} event
	 * @return {Boolean} If the event has been prevented or not.
	 */
	toggle(event) {
		return !this.emit({
			name: 'toggle',
			originalEvent: event,
		});
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayDropdownBase.STATE = {
	/**
	 * The current position of the tooltip after being aligned via `Align.align`.
	 * @default Align.isValidPosition
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {!number}
	 */
	_alignedPosition: Config.validator(Align.isValidPosition).internal(),

	/**
	 * Element selector used to position dropdown according to trigger position.
	 * @default .dropdown-toggle
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string}
	 */
	_alignElementSelector: Config.string()
		.value('.dropdown-toggle')
		.internal(),

	/**
	 * Button configuration to place a button at dropdown footer.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?(string|undefined)}
	 */
	button: Config.shapeOf({
		href: Config.string(),
		label: Config.string().required(),
		style: Config.oneOf(['primary', 'secondary']).value('primary'),
		type: Config.oneOf(['button', 'reset', 'submit']).value('button'),
	}),

	/**
	 * Caption text of the dropdown.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?(string|undefined)}
	 */
	caption: Config.string(),

	/**
	 * Content Renderer name of items.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?(string|undefined)}
	 */
	contentRenderer: Config.string(),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownBase
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * Flag to indicate if menu is disabled
	 * @default false
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?bool}
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Flag to indicate if menu is expanded.
	 * @default false
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?bool}
	 */
	expanded: Config.bool().value(false),

	/**
	 * Help text to be shown on top of the open dropdown.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?(string|undefined)}
	 */
	helpText: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * List of menu items.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {!array}
	 */
	items: itemsValidator.required(),

	/**
	 * Position in which item icons will be placed. Needed if any item has icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?(string|undefined)}
	 */
	itemsIconAlignment: Config.oneOf(['left', 'right', 'left-right']),

	/**
	 * Label of the trigger button.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {!(html|string)}
	 */
	label: Config.any().required(),

	/**
	 * Id to be used for portal element.
	 * @default clay_dropdown_portal
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {!string}
	 */
	portalElementId: Config.string()
		.value('clay_dropdown_portal')
		.internal(),

	/**
	 * The preferred alignment for the dropdown content.
	 * @default BottomLeft
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?(string|undefined)}
	 */
	preferredAlign: preferredAlign
		.setter('_setPreferredAlign')
		.value('BottomLeft'),

	/**
	 * Flag to indicate if menu has a search field and search through elements
	 * is possible.
	 * @default false
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?bool}
	 */
	searchable: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?(string|undefined)}
	 */
	spritemap: Config.string(),

	/**
	 * Style of the trigger button.
	 * @default unstyled
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string}
	 */
	style: Config.oneOf(['link', 'primary', 'secondary', 'unstyled']).value(
		'unstyled'
	),

	/**
	 * Aria label attribute for the trigger element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?(string|undefined)}
	 */
	triggerAriaLabel: Config.string(),

	/**
	 * CSS classes to be applied to the trigger element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?(string|undefined)}
	 */
	triggerClasses: Config.string(),

	/**
	 * Size of the trigger button.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?(string|undefined)}
	 */
	triggerSize: Config.oneOf(['sm']),

	/**
	 * The title attribute of the trigger element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?(string|undefined)}
	 */
	triggerTitle: Config.string(),
};

Soy.register(ClayDropdownBase, templates);

export {ClayDropdownBase, flatten};
export default ClayDropdownBase;
