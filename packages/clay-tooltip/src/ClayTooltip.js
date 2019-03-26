import ClayComponent from 'clay-component';
import Soy from 'metal-soy';
import {Align} from 'metal-position';
import {Config} from 'metal-state';
import {EventHandler} from 'metal-events';
import {core, object} from 'metal';
import {dom} from 'metal-dom';

import templates from './ClayTooltip.soy.js';

/**
 * Singleton enforcer class
 */
class SingletonEnforcer {}

/**
 * Implementation of ClayTooltip.
 * @extends ClayComponent
 */
class ClayTooltip extends ClayComponent {
	/**
	 * @inheritDoc
	 */
	constructor(enforcer, config, parentElement) {
		if (!enforcer) {
			throw new Error('Use ClayTooltip.init to initialize ClayTooltip');
		}
		super(config, parentElement);
		this._timer = undefined;
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
		if (!this._instance) {
			this._instance = new ClayTooltip(
				new SingletonEnforcer(),
				config,
				parentElement
			);
		}
		return this._instance;
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
	attached() {
		this.addListener('transitionend', this._handleTransitionEnd, true);

		if (!this.visible) {
			this.element.style.display = 'none';
		}
	}

	/**
	 * @inheritDoc
	 */
	rendered() {
		if (this._target) {
			const alignedPosition = Align.align(
				this.element,
				this._target,
				this.position,
				this.bestAlign
			);

			if (this.alignedPosition !== alignedPosition) {
				this.alignedPosition = alignedPosition;
			}
		}
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
	 * Handles mouseenter event.
	 * @memberof ClayTooltip
	 * @param {!Element} element
	 * @return {!String}
	 * @private
	 */
	_getContent(element) {
		const titleAttribute = element.getAttribute('title');

		if (titleAttribute) {
			element.setAttribute('data-title', titleAttribute);
			element.setAttribute('data-restore-title', 'true');
			element.removeAttribute('title');
		} else if (element.tagName === 'svg') {
			let titleTag = element.querySelector('title');

			if (titleTag) {
				element.setAttribute('data-title', titleTag.innerHTML);
				element.setAttribute('data-restore-title', 'true');
				titleTag.remove();
			}
		}

		return element.getAttribute('data-title');
	}

	/**
	 * Handles click event.
	 * @memberof ClayTooltip
	 * @param {!Event} event
	 * @private
	 */
	_handleMouseClick(event) {
		this._restoreTitle(event.delegateTarget);

		this._isTransitioning = true;
		this.visible = false;
	}

	/**
	 * Handles mouseenter event.
	 * @memberof ClayTooltip
	 * @param {!Event} event
	 * @private
	 */
	_handleMouseEnter(event) {
		this._showTooltip(event.delegateTarget);
	}

	/**
	 * Handles tooltip element mouseenter event.
	 * @memberof ClayTooltip
	 * @private
	 */
	_handleMouseEnterTooltip() {
		if (this._isTransitioning) {
			this.visible = true;
		}
	}

	/**
	 * Handles mouseleave events.
	 * @memberof ClayTooltip
	 * @param {!Event} event
	 * @private
	 */
	_handleMouseLeave(event) {
		this._hideTooltip(event.delegateTarget);
	}

	/**
	 * Handles touchstart events.
	 * @memberof ClayTooltip
	 * @param {!Event} event
	 * @private
	 */
	_handleTouchStart(event) {
		this._timer = setTimeout(() => {
			this._showTooltip(event.srcElement);
			clearTimeout(this._timer);
		}, 500);
	}

	/**
	 * Handle touchend events.
	 * @memberof ClayTooltip
	 * @param {!Event} event
	 * @private
	 */
	_handleTouchEnd(event) {
		this._hideTooltip(event.srcElement);
	}

	/**
	 * Handles transitionend event.
	 * @memberof ClayTooltip
	 * @private
	 */
	_handleTransitionEnd() {
		this._isTransitioning = false;

		if (!this.visible) {
			this.element.style.display = 'none';
		}
	}

	/**
	 * Hides the tooltip on the given element.
	 * @param {!Element} element
	 * @private
	 */
	_hideTooltip(element) {
		if (this._timer) {
			clearTimeout(this._timer);
			this._timer = undefined;
		}
		if (this.visible) {
			this._restoreTitle(element);

			this._isTransitioning = true;
			this.visible = false;
		}
	}

	/**
	 * Restores the title attribute to an element
	 * @memberof ClayTooltip
	 * @param {Element} element
	 * @private
	 */
	_restoreTitle(element) {
		const title = element.getAttribute('data-title');
		const restoreTitle = element.getAttribute('data-restore-title');

		if (title && restoreTitle === 'true') {
			if (element.tagName === 'svg') {
				let titleTag = document.createElement('title');
				titleTag.innerHTML = title;

				element.appendChild(titleTag);
			} else {
				element.setAttribute('title', title);
			}

			element.removeAttribute('data-restore-title');
		}
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
			return Align.TopCenter;
		}
	}

	/**
	 * The setter function for the `classMap` state.
	 * @memberof ClayTooltip
	 * @param {Object} val
	 * @return {!Object}
	 * @private
	 */
	setterClassMapFn_(val) {
		return object.mixin(this.valueClassMapFn_(), val);
	}

	/**
	 * Shows the tooltip on a given element.
	 * @memberof ClayTooltip
	 * @param {!Element} target
	 * @private
	 */
	_showTooltip(target) {
		const content = this._getContent(target);
		this._target = target;

		this._content = content;

		if (!this.visible) {
			this.element.style.display = 'block';
		}
		this._isTransitioning = true;
		this.visible = true;
	}

	/**
	 * Sync selectors
	 * @memberof ClayTooltip
	 * @param {Array.<string>} newValue  The new value of `this.selectors`.
	 * @param {Array.<string>} prevValue The previous value of `this.selectors`.
	 * @private
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

			for (let i = 0, l = newSelectors.length; i < l; i++) {
				const selector = newSelectors[i];
				const handlers = [];

				if (/iPad|iPhone|iPod|android/i.test(navigator.userAgent)) {
					handlers.push(
						dom.delegate(
							document,
							'touchstart',
							selector,
							this._handleTouchStart.bind(this)
						),
						dom.delegate(
							document,
							'touchend',
							selector,
							this._handleTouchEnd.bind(this)
						),
						dom.delegate(
							document,
							'touchcancel',
							selector,
							this._handleTouchEnd.bind(this)
						)
					);
				} else {
					handlers.push(
						dom.delegate(
							document,
							'blur',
							selector,
							this._handleMouseLeave.bind(this)
						),
						dom.delegate(
							document,
							'click',
							selector,
							this._handleMouseClick.bind(this)
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

				this._eventHandler.add(...handlers);
			}
		}
	}

	/**
	 * @inheritDoc
	 */
	syncVisible() {
		// This is needed to make fade transition work
	}

	/**
	 * Gets the default value for the `classMap` state.
	 * @return {!Object}
	 * @private
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
	 * Flag to activate the auto best position.
	 * @default true
	 * @instance
	 * @memberof ClayTooltip
	 * @type {?bool}
	 */
	bestAlign: Config.bool().value(true),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayTooltip
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayTooltip
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

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
	 * @default TopCenter
	 * @instance
	 * @memberof ClayTooltip
	 * @type {!string}
	 */
	position: Config.oneOf([
		'BottomCenter',
		'BottomLeft',
		'BottomRight',
		'LeftCenter',
		'RightCenter',
		'TopCenter',
		'TopLeft',
		'TopRight',
	])
		.setter('_setPreferredAlign')
		.value('TopCenter'),

	/**
	 * Selectors
	 * @default ['[data-title]', '[title]']
	 * @instance
	 * @memberof ClayTooltip
	 * @type {!Array.<string>}
	 */
	selectors: Config.array().value([
		'[data-title]:not([data-title=""])',
		'[title]:not([title=""]',
	]),

	/**
	 * Tooltip visible when show is called.
	 * @default false
	 * @instance
	 * @memberof ClayTooltip
	 * @private
	 * @type {?bool}
	 */
	visible: Config.bool().value(false),
};

Soy.register(ClayTooltip, templates);

export {ClayTooltip};
export default ClayTooltip;
