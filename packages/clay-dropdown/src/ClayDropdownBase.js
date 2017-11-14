import 'clay-button';
import 'clay-checkbox';
import 'clay-icon';
import 'clay-radio';
import {Align} from 'metal-position';
import {core, object} from 'metal';
import {Config} from 'metal-state';
import Component from 'metal-component';
import dom from 'metal-dom';
import {EventHandler} from 'metal-events';
import Soy from 'metal-soy';
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
		super.attached();
		this.eventHandler_.add(
			dom.on(document, 'click', this.handleDocClick_.bind(this))
		);
	}

	/**
	 * @inheritDoc
	 */
	created() {
		this.eventHandler_ = new EventHandler();
	}

	/**
	 * @inheritDoc
	 */
	detached() {
		super.attached();
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
	 * Toggles the dropdown, closing it when open or opening it when closed.
	 */
	toggle() {
		this.expanded = !this.expanded;
	}

	/**
	 * The setter function for the `classMap_` staet.
	 * @param {Object} value
	 * @return {!object}
	 * @protected
	 */
	setterClassMapFn_(value) {
		return object.mixin(this.valueClassMapFn_(), value);
	}

	/**
	 * The setter function for the `position` state. Converts the supported
	 * string positions into the appropriate `Align` position constants.
	 * @param {string|number} value
	 * @return {number}
	 * @protected
	 */
	setterPositionFn_(value) {
		if (core.isNumber(value)) {
			return value;
		}
		return value.toLowerCase() === 'up' ? Align.TopLeft : Align.BottomLeft;
	}

	/**
	 * Synchronization logic for `expanded` state.
	 * @param {boolean} expanded
	 */
	syncExpanded(expanded) {
		if (expanded && this.alignElementSelector) {
			// eslint-disable-next-line
			let alignElement = this.element.querySelector(this.alignElementSelector);
			if (alignElement) {
				let bodyElement = this.element.querySelector('.dropdown-menu');
				this.alignedPosition_ = Align.align(
					bodyElement,
					alignElement,
					this.position_
				);
			}
		}
	}

	/**
	 * Validator for the `position` state.
	 * @param {string|number} position
	 * @return {boolean}
	 * @protected
	 */
	validatePosition_(position) {
		if (Align.isValidPosition(position)) {
			return true;
		}

		switch (position.toLowerCase()) {
		case 'up':
		case 'down':
			return true;
		default:
			return false;
		}
	}

	/**
	 * Gets the default value for the `classMap_` state.
	 * @return {!Object}
	 * @protected
	 */
	valueClassMapFn_() {
		return {
			[Align.TopLeft]: 'dropup',
			[Align.TopCenter]: 'dropup',
			[Align.TopRight]: 'dropup',
			[Align.BottomLeft]: 'dropdown',
			[Align.BottomCenter]: 'dropdown',
			[Align.BottomRight]: 'dropdown',
			[Align.RightCenter]: 'dropright',
			[Align.LeftCenter]: 'dropleft',
		};
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

		if (searchValue !== '') {
			this.items = this.originalItems_.filter(item => {
				return (
					item.label &&
					item.type !== 'separator' &&
					item.type !== 'header' &&
					item.label.toLowerCase().indexOf(searchValue) !== -1
				);
			});
		} else {
			this.items = this.originalItems_;
		}

		this.emit('itemsFiltered', {
			originalItems: this.originalItems_,
			filteredItems: this.items,
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
	alignElementSelector: Config.string()
		.value('.dropdown-toggle')
		.internal(),

	/**
	 * Button configuration to place a button at dropdown footer.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string}
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
	 * @type {?string}
	 * @default undefined
	 */
	caption: Config.string(),

	/**
	 * A map from `Align` position constants to the CSS class that should be
	 * added to the dropdown when it's aligned in that position.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {!Object}
	 * @default valueClassMapFn_
	 */
	classMap_: Config.validator(object)
		.setter('setterClassMapFn_')
		.valueFn('valueClassMapFn_')
		.internal(),

	/**
	 * Flag to indicate if menu is expanded.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?bool}
	 * @default false
	 */
	expanded: Config.bool()
		.value(false)
		.internal(),

	/**
	 * Help text to be shown on top of the open dropdown.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string}
	 * @default undefined
	 */
	helpText: Config.string(),

	/**
	 * Position in which item indicator symbols will be placed. Needed if any
	 * item has indicators.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string}
	 * @default undefined
	 */
	indicatorsPosition: Config.oneOf(['left', 'right']),

	/**
	 * List of menu items.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {!Array}
	 * @default undefined
	 */
	items: itemsValidator.required(),

	/**
	 * The position of the dropdown (either 'up', 'down' or any of the position
	 * constants available in `Align`).
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {string|number}
	 * @default Align.BottomLeft
	 */
	position_: Config.setter('setterPositionFn_')
		.validator('validatePosition_')
		.value(Align.BottomLeft)
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
	 * @type {?string}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * Label of the trigger button.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {!string}
	 * @default undefined
	 */
	triggerLabel: Config.any().required(),

	/**
	 * Style of the trigger button.
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?string}
	 * @default unstyled
	 */
	triggerStyle: Config.oneOf([
		'borderless',
		'link',
		'primary',
		'secondary',
		'unstyled',
	]).value('unstyled'),

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
