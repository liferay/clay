'use strict';

import anim from 'metal-anim';
import core from 'metal';
import dom from 'metal-dom';
import { EventHandler } from 'metal-events';
import State from 'metal-state';

/**
 * Collapse Metal Quartz component.
 */
class MetalQuartzCollapse extends State {
	/**
	 * @inheritDoc
	 */
	constructor(opt_config) {
		super(opt_config);

		this.eventHandler_ = new EventHandler();
		this.transitionEventHandler_ = new EventHandler();

		this.supportsTransitionEnd = this.getTransitionEndEvent_();
		this.transitionEnd = this.getTransitionEndEvent_() || 'transitionend';

		this.on('headersChanged', this.syncHeaders);
		this.syncHeaders();

		this.on('collapsedChanged', this.syncCollapsed);

		if (this.content) {
			this.collapsed ? this.close_() : this.open_();
		}
	}

	/**
	 * @inheritDoc
	 */
	disposeInternal() {
		super.disposeInternal();
		this.eventHandler_.removeAllListeners();
		this.transitionEventHandler_.removeAllListeners();
	}

	/**
	 * Animates close when `collapsed` is true
	 */
	animateClose_() {
		this.content.transitionType = 0;

		this.updateContentHeight_();

		dom.addClasses(this.content, this.transitionClass);
		dom.removeClasses(this.content, this.closedClass);
		dom.removeClasses(this.content, this.openClass);

		this.content.offsetHeight;
		this.content.style.removeProperty('height');

		this.shimUnsupportedTransition_(this.content);
	}

	/**
	 * Animates open when `collapsed` is false
	 */
	animateOpen_() {
		this.content.transitionType = 1;

		dom.removeClasses(this.content, this.closedClass);
		dom.addClasses(this.content, this.transitionClass);

		this.updateContentHeight_();

		this.shimUnsupportedTransition_(this.content);
	}

	/**
	 * Adds CSS classes and properties to the `content` element when `collapsed`
	 * is true
	 */
	close_() {
		dom.addClasses(this.content, this.closedClass);
		dom.removeClasses(this.content, this.openClass);
		dom.removeClasses(this.content, this.transitionClass);
		this.content.setAttribute('aria-expanded', false);
		this.content.style.removeProperty('height');
	}

	/**
	 * Checks to see if browser supports CSS3 Transitions and returns the name 
	 * of the transitionend event; returns false if it's not supported
	 * @protected
	 */
	getTransitionEndEvent_() {
		let el = document.createElement('metalQuartzTransitionEnd');

		let transitionEndEvents = {
			transition: 'transitionend',
			WebkitTransition: 'webkitTransitionEnd',
			MozTransition: 'transitionend',
			OTransition: 'oTransitionEnd otransitionend'
		};

		for (let name in transitionEndEvents) {
			if (el.style[name] !== undefined) {
				return transitionEndEvents[name];
			}
		}

		return false;
	}

	/**
	 * Handles a `click` event on the headers.
	 * @param {!Event} event
	 * @protected
	 */
	handleClick_(event) {
		this.toggle();
	}

	/**
	 * Handles a `keydown` event on the headers.
	 * @param {!Event} event
	 * @protected
	 */
	handleKeydown_(event) {
		if (event.keyCode === 13 || event.keyCode === 32) {
			this.toggle();
			event.preventDefault();
		}
	}

	/**
	 * Handles the `transitionend` event on the content.
	 * @param {!Event} event
	 * @protected
	 */
	handleTransitionEnd_(event) {
		this.content.transitionType ? this.open_() : this.close_();

		this.transitionEventHandler_.removeAllListeners();
	}

	/**
	 * Adds CSS classes and properties to the `content` element when `collapsed`
	 * is false
	 */
	open_() {
		dom.addClasses(this.content, this.closedClass);
		dom.addClasses(this.content, this.openClass);
		dom.removeClasses(this.content, this.transitionClass);
		this.content.setAttribute('aria-expanded', true);
		this.content.style.removeProperty('height');
	}

	/**
	 * Fires a synthetic `transitionend` event for browsers that don't support
	 * CSS3 transitions
	 * @param {!Element} element
	 * @protected
	 */
	shimUnsupportedTransition_(element) {
		if (!this.supportsTransitionEnd) {
			anim.emulateTransitionEnd(element);
		}
	}

	/**
	 * Syncs the `content` element according to the value of the `collapsed`
	 * state, attaching and removing css properties and classes needed to open
	 * and close the element.
	 */
	syncCollapsed() {
		this.collapsed ? this.animateClose_() : this.animateOpen_();
	}

	/**
	 * Syncs the component according to the value of the `headers` state,
	 * attaching events to the new element and detaching from any previous one.
	 */
	syncHeaders() {
		this.eventHandler_.removeAllListeners();

		if (Array.isArray(this.headers)) {
			for (let i = 0; i < this.headers.length; i++) {
				this.eventHandler_.add(
					dom.on(this.headers[i], 'click', this.handleClick_.bind(this)),
					dom.on(this.headers[i], 'keydown', this.handleKeydown_.bind(this))
				);
			}
		} else {
			this.eventHandler_.add(
				dom.on(this.headers, 'click', this.handleClick_.bind(this)),
				dom.on(this.headers, 'keydown', this.handleKeydown_.bind(this))
			);
		}
	}

	/**
	 * Toggles the content's visibility.
	 */
	toggle() {
		this.transitionEventHandler_.add(
			dom.delegate(document, this.transitionEnd, `.${this.transitionClass}`, this.handleTransitionEnd_.bind(this))
		);

		this.collapsed = !this.collapsed;
	}

	/**
	 * Calculates what the content height should be and sets it.
	 */
	updateContentHeight_() {
		this.content.setAttribute('style', `height: ${this.content.firstElementChild.offsetHeight}px;`);
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalQuartzCollapse.STATE = {
	/**
	 * The CSS class added to `content` when it's collapsed.
	 * @type {string}
	 */
	closedClass: {
		validator: core.isString(),
		value: 'collapse'
	},

	/**
	 * The open or closed state of the `content` element, false and true
	 * respectively.
	 * @type {boolean}
	 */
	collapsed: {
		validator: core.isBoolean(),
		value: true
	},

	/**
	 * The element or selector that should collapse. 
	 * @type {string|!Element}
	 */
	content: {
		setter: dom.toElement,
		validator: value => core.isString(value) || core.isElement(value)
	},

	/**
	 * The element that should trigger the toggling. If you pass in a
	 * core.isElement value you will lose reference to the element once it is
	 * removed from the dom. If you pass in a selector it will delegate it on
	 * the document across all headers matching that selector.
	 * @type {string|!Array<!Object>}
	 */
	headers: {
		validator: value => core.isString(value) || Array.isArray(value) || core.isElement(value)
	},

	/**
	 * The CSS class added to `content` when it's open.
	 * @type {string}
	 */
	openClass: {
		validator: core.isString(),
		value: 'in'
	},

	/**
	 * The CSS class added to `content` when it's transitioning.
	 * @type {string}
	 */
	transitionClass: {
		validator: core.isString(),
		value: 'collapsing'
	}
};

export default MetalQuartzCollapse;