import 'clay-button';
import 'clay-checkbox';
import 'clay-icon';
import 'clay-link';
import 'clay-radio';
import {Align} from 'metal-position';
import Component from 'metal-component';
import {Config} from 'metal-state';
import dom from 'metal-dom';
import {EventHandler} from 'metal-events';
import itemsValidator from './items_validator';
import Soy from 'metal-soy';
import templates from './ClayDropdownBase.soy.js';

/**
 * Implementation of the base for Metal Clay Dropdown.
 */
class ClayDropdownBase extends Component {
	/**
	 * @inheritDoc
	 */
	created() {
		this.eventHandler_ = new EventHandler();

		this.eventHandler_.add(
			dom.on(document, 'click', this.handleDocClick_.bind(this))
		);
	}

	/**
	 * @inheritDoc
	 */
	disposed() {
		this.eventHandler_.removeAllListeners();
	}

	/**
	 * Closes the dropdown.
	 * @protected
	 */
	close_() {
		this.expanded = false;
	}

	/**
	 * @inheritDoc
	 */
	detached() {
		this.eventHandler_.removeAllListeners();
	}

	/**
	 * Handles document click in order to hide menu.
	 * @param {!Event} event
	 * @protected
	 */
	handleDocClick_(event) {
		if (this.element.contains(event.target)) {
			return;
		}
		this.close_();
	}

	/**
	 * Handles footer button click.
	 * @param {!Event} event
	 * @protected
	 */
	handleButtonClick_(event) {
		this.emit('buttonClicked', event);
	}

	/**
	 * Handles Search in Dropdown.
	 * @param {!Event} event
	 * @protected
	 */
	handleSearch_(event) {
		let searchValue = event.delegateTarget.value.toLowerCase();

		if (!this.originalItems_) {
			this.originalItems_ = this.items;
		}

		this.items = this.originalItems_.filter(item => {
			if (item.items) {
				if (!item.originalItems_) {
					item.originalItems_ = item.items;
				}

				item.items = item.originalItems_.filter(nested_item => {
					return (
						nested_item.label &&
						nested_item.type !== 'group' &&
						nested_item.type !== 'header' &&
						nested_item.type !== 'separator' &&
						nested_item.label.toLowerCase().indexOf(searchValue) !==
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
			originalItems: this.originalItems_,
			filteredItems: this.items,
		});
	}

	/**
	 * Synchronization logic for `expanded` state.
	 * @param {boolean} expanded
	 */
	syncExpanded(expanded) {
		if (expanded && this.alignElementSelector_) {
			// eslint-disable-next-line
			let alignElement = this.element.querySelector(
				this.alignElementSelector_
			);
			if (alignElement) {
				let bodyElement = this.element.querySelector('.dropdown-menu');
				this.alignedPosition_ = Align.align(
					bodyElement,
					alignElement,
					Align.BottomLeft
				);
			}
		}
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
	alignedPosition_: Config.validator(Align.isValidPosition).internal(),

	/**
	 * Element selector used to position dropdown according to trigger position.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string}
	 * @default .dropdown-toggle
	 */
	alignElementSelector_: Config.string()
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
	 * @type {!Array}
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
	style: Config.oneOf([
		'borderless',
		'link',
		'primary',
		'secondary',
		'unstyled',
	]).value('unstyled'),

	/**
	 * CSS classes to be applied to the trigger element.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	triggerClasses: Config.string(),

	/**
	 * Type of the dropdown menu.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string}
	 * @default list
	 */
	type: Config.oneOf(['form', 'list']).value('list'),
};

Soy.register(ClayDropdownBase, templates);

export {ClayDropdownBase};
export default ClayDropdownBase;
