import Component from 'metal-component';
import Soy from 'metal-soy';
import {Align} from 'metal-position';
import {Config} from 'metal-state';
import {EventHandler} from 'metal-events';
import {core, object} from 'metal';
import {dom} from 'metal-dom';

import templates from './ClayTooltip.soy.js';

const singleton = Symbol();
const singletonEnforcer = Symbol();

/**
 * Implementation of ClayTooltip.
 * @extends Component
 */
class ClayTooltip extends Component {
	/**
	 * @inheritDoc
	 */
	constructor(enforcer, config, parentElement) {
		if (enforcer !== singletonEnforcer) {
			throw new Error('Use ClayTooltip.init to initialize ClayTooltip');
		}
		super(config, parentElement);
	}

	/**
	 * Returns the instance for this ClayTooltip.
	 * @memberof ClayTooltip
	 * @param {Object=} config An object with the initial values for this
	 *                         component's state.
	 * @param {boolean|string|Element=} parentElement The element where the
	 * component should be rendered. Can be given as a selector or an element.
	 * If `false` is passed, the component won't be rendered automatically
	 * after created.
	 * @static
	 * @return {ClayTooltip}
	 */
	static init(config, parentElement) {
		if (!this[singleton]) {
			this[singleton] = new ClayTooltip(
				singletonEnforcer,
				config,
				parentElement
			);
		}
		return this[singleton];
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
	 * Handles mouseenter events.
	 * @memberof ClayTooltip
	 * @param {Object} event The event object.
	 * @protected
	 */
	_handleMouseEnter(event) {
		const target = event.target;
		const content =
			target.getAttribute('data-title') || target.getAttribute('title');

		this._content = content;
		this.alignedPosition = Align.align(this.element, target, this.position);
		this._showTooltip = true;
	}

	/**
	 * Handles mouseleave events.
	 * @memberof ClayTooltip
	 * @param {Object} event The event object.
	 * @protected
	 */
	_handleMouseLeave() {
		this._showTooltip = false;
	}

	/**
	 * The setter function for the `classMap` staet.
	 * @memberof ClayTooltip
	 * @param {Object} val
	 * @return {!Object}
	 * @protected
	 */
	setterClassMapFn_(val) {
		return object.mixin(this.valueClassMapFn_(), val);
	}

	/**
	 * Sync selectors
	 * @memberof ClayTooltip
	 * @param {Array.<string>} newValue  The new value of `this.selectors`.
	 * @param {Array.<string>} prevValue The previous value of `this.selectors`.
	 * @protected
	 */
	syncSelectors(newValue, prevValue) {
		if (newValue) {
			const prevSelectors = Array.isArray(prevValue) ? prevValue : [];

			const newSelectors = newValue.reduce((arr, val) => {
				if (arr.indexOf(val) === -1) {
					arr.push(val);
				}
				return arr;
			}, prevSelectors);

			this._eventHandler.removeAllListeners();

			for (let selector of newSelectors) {
				this._eventHandler.add(
					dom.delegate(
						document,
						'blur',
						selector,
						this._handleMouseLeave.bind(this)
					),
					dom.delegate(
						document,
						'focus',
						selector,
						this._handleMouseEnter.bind(this)
					),
					dom.delegate(
						document,
						'mouseenter',
						selector,
						this._handleMouseEnter.bind(this)
					),
					dom.delegate(
						document,
						'mouseleave',
						selector,
						this._handleMouseLeave.bind(this)
					)
				);
			}
		}
	}

	/**
	 * Gets the default value for the `classMap` state.
	 * @return {!Object}
	 * @protected
	 */
	valueClassMapFn_() {
		return {
			[Align.TopLeft]: 'clay-tooltip-top-left',
			[Align.TopCenter]: 'clay-tooltip-top',
			[Align.TopRight]: 'clay-tooltip-top-right',
			[Align.BottomLeft]: 'clay-tooltip-bottom-left',
			[Align.BottomCenter]: 'clay-tooltip-bottom',
			[Align.BottomRight]: 'clay-tooltip-bottom-right',
			[Align.RightCenter]: 'clay-tooltip-right',
			[Align.LeftCenter]: 'clay-tooltip-left',
		};
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayTooltip.STATE = {
	/**
	 * Content of the tooltip.
	 * @default undefined
	 * @instance
	 * @memberof ClayTooltip
	 * @type {!(html|string)}
	 */
	_content: Config.any()
		.value('')
		.internal(),

	/**
	 * A flag indicating if the tooltip should be shown.
	 * @default false
	 * @instance
	 * @memberof ClayTooltip
	 * @type {boolean}
	 */
	_showTooltip: Config.bool()
		.value(false)
		.internal(),

	/**
	 * The current position of the tooltip after being aligned via `Align.align`.
	 * @default undefined
	 * @type {number}
	 * @instance
	 * @memberof ClayTooltip
	 */
	alignedPosition: {
		validator: Align.isValidPosition,
	},

	/**
	 * Element classes.
	 * @default undefined
	 * @instance
	 * @memberof ClayTooltip
	 * @type {string}
	 */
	elementClasses: Config.string(),

	/**
	 * A map from `Align` position constants to the CSS class that should be
	 * added to the tooltip when it's aligned in that position.
	 * @instance
	 * @memberof ClayTooltip
	 * @type {!Object}
	 */
	classMap: {
		setter: 'setterClassMapFn_',
		validator: core.isObject,
		valueFn: 'valueClassMapFn_',
	},

	/**
	 * Tooltip position
	 * @default Align.Bottom
	 * @instance
	 * @memberof ClayTooltip
	 * @type {!string}
	 */
	position: {
		validator: Align.isValidPosition,
		value: Align.Bottom,
	},

	/**
	 * Selectors
	 * @default ['[data-title]', '[title]']
	 * @instance
	 * @memberof ClayTooltip
	 * @type {!Array.<string>}
	 */
	selectors: Config.array().value(['[data-title]', '[title]']),
};

Soy.register(ClayTooltip, templates);

export {ClayTooltip};
export default ClayTooltip;
