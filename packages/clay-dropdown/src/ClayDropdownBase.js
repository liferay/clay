import 'clay-button';
import 'clay-checkbox';
import 'clay-icon';
import 'clay-link';
import 'clay-portal';
import 'clay-radio';
import Component from 'metal-component';
import Soy from 'metal-soy';
import dom from 'metal-dom';
import {Align} from 'metal-position';
import {Config} from 'metal-state';
import {EventHandler} from 'metal-events';

import itemsValidator from './items_validator';
import templates from './ClayDropdownBase.soy.js';

/**
 * Implementation of the base for Metal Clay Dropdown.
 */
class ClayDropdownBase extends Component {
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
	 */
	_handleItemClick(event) {
		this.emit('itemClicked', event);
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

		this.emit('itemsFiltered', {
			originalItems: this._originalItems,
			filteredItems: this.items,
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
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {number}
	 * @default Align.isValidPosition
	 */
	_alignedPosition: Config.validator(Align.isValidPosition).internal(),

	/**
	 * Element selector used to position dropdown according to trigger position.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string}
	 * @default .dropdown-toggle
	 */
	_alignElementSelector: Config.string()
		.value('.dropdown-toggle')
		.internal(),

	/**
	 * Button configuration to place a button at dropdown footer.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	button: Config.shapeOf({
		label: Config.string().required(),
		style: Config.oneOf(['primary', 'secondary']).value('primary'),
		type: Config.oneOf(['button', 'reset', 'submit']).value('button'),
	}),

	/**
	 * Caption text of the dropdown.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	caption: Config.string(),

	/**
	 * Content Renderer name of items.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	contentRenderer: Config.string(),

	/**
	 * Flag to indicate if menu is disabled
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?bool}
	 * @default false
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Flag to indicate if menu is expanded.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?bool}
	 * @default false
	 */
	expanded: Config.bool().value(false),

	/**
	 * Help text to be shown on top of the open dropdown.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	helpText: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * List of menu items.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {!array}
	 * @default undefined
	 */
	items: itemsValidator.required(),

	/**
	 * Position in which item icons will be placed. Needed if any item has icons.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	itemsIconAlignment: Config.oneOf(['left', 'right']),

	/**
	 * Label of the trigger button.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {!html|string}
	 * @default undefined
	 */
	label: Config.any().required(),

	/**
	 * Id to be used for portal element.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {!string}
	 * @default clay_dropdown_portal
	 */
	portalElementId: Config.string()
		.value('clay_dropdown_portal')
		.internal(),

	/**
	 * Flag to indicate if menu has a search field and search through elements
	 * is possible.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?bool}
	 * @default false
	 */
	searchable: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * Style of the trigger button.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string}
	 * @default unstyled
	 */
	style: Config.oneOf(['link', 'primary', 'secondary', 'unstyled']).value(
		'unstyled'
	),

	/**
	 * CSS classes to be applied to the trigger element.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	triggerClasses: Config.string(),

	/**
	 * Size of the trigger button.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	triggerSize: Config.oneOf(['sm']),
};

Soy.register(ClayDropdownBase, templates);

export {ClayDropdownBase};
export default ClayDropdownBase;
