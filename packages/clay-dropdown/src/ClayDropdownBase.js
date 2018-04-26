import 'clay-button';
import 'clay-checkbox';
import 'clay-icon';
import 'clay-link';
import 'clay-portal';
import 'clay-radio';
import ClayComponent from 'clay-component';
import Soy from 'metal-soy';
import dom from 'metal-dom';
import {Align} from 'metal-position';
import {Config} from 'metal-state';
import {EventHandler} from 'metal-events';

import itemsValidator from './items_validator';
import templates from './ClayDropdownBase.soy.js';

/**
 * Implementation of the base for Metal Clay Dropdown.
 * @extends ClayComponent
 */
class ClayDropdownBase extends ClayComponent {
	/**
	 * @inheritDoc
	 */
	attached() {
		this.refs.portal.on('rendered', this._handleRenderedPortal.bind(this));
	}

	/**
	 * @inheritDoc
	 */
	created() {
		this._eventHandler = new EventHandler();

		this._eventHandler.add(
			dom.on(document, 'click', this._handleDocClick.bind(this))
		);
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
	 * Closes the dropdown.
	 * @protected
	 */
	_close() {
		this.expanded = false;
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
		this._close();
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
		const flatenItems = this.items
			.map(item => item.items || item)
			.reduce((acc, cur) => acc.concat(cur), []);
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
					Align.BottomLeft
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
	 * Toggles the dropdown, closing it when open or opening it when closed.
	 */
	toggle() {
		if (!this.expanded) {
			this.expanded = true;
		} else {
			this.expanded = false;
		}
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
	itemsIconAlignment: Config.oneOf(['left', 'right']),

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
};

Soy.register(ClayDropdownBase, templates);

export {ClayDropdownBase};
export default ClayDropdownBase;
