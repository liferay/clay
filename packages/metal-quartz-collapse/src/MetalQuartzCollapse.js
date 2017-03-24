'use strict';

import anim from 'metal-anim';
import core from 'metal';
import dom from 'metal-dom';
import { EventHandler } from 'metal-events';
import State from 'metal-state';

const KEY_CODE_ENTER = 13;

const KEY_CODE_SPACE = 32;

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

		const transitionEnd = this.getTransitionEndEvent_();

		this.supportsTransitionEnd = transitionEnd !== false;
		this.transitionEnd = transitionEnd || 'transitionend';

		this.on('headersChanged', this.handleHeadersChanged_);
		this.syncHeaderListeners_();

		this.on('collapsedChanged', this.handleCollapsedChanged_);

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
	}

	/**
	 * Animates close when `collapsed` is true
	 * @protected
	 */
	animateClose_() {
		const {content, openClasses, transitionClasses} = this;

		content.transitionType = 0;

		this.updateContentHeight_();

		dom.addClasses(content, transitionClasses);
		dom.removeClasses(content, openClasses);

		content.offsetHeight;
		content.style.removeProperty('height');

		this.shimUnsupportedTransition_(content);
	}

	/**
	 * Animates open when `collapsed` is false
	 * @protected
	 */
	animateOpen_() {
		const {closedClasses, content, transitionClasses} = this;

		content.transitionType = 1;

		dom.removeClasses(content, closedClasses);
		dom.addClasses(content, transitionClasses);

		this.updateContentHeight_();

		this.shimUnsupportedTransition_(content);
	}

	/**
	 * Attaches click and keydown listeners to header.
	 * @param {!Element|!string} header
	 * @protected
	 */
	attachHeaderListeners_(header) {
		this.eventHandler_.add(
			dom.on(header, 'click', this.handleClick_.bind(this)),
			dom.on(header, 'keydown', this.handleKeydown_.bind(this))
		);
	}

	/**
	 * Adds CSS classes and properties to the `content` element when `collapsed`
	 * is true
	 * @protected
	 */
	close_() {
		const {closedClasses, content, openClasses, transitionClasses} = this;

		dom.removeClasses(content, `${openClasses} ${transitionClasses}`);
		dom.addClasses(content, closedClasses);
		content.setAttribute('aria-expanded', false);
		content.style.removeProperty('height');
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
	 * Syncs the `content` element according to the value of the `collapsed`
	 * state, attaching and removing css properties and classes needed to open
	 * and close the element.
	 */
	handleCollapsedChanged_() {
		this.collapsed ? this.animateClose_() : this.animateOpen_();
	}

	/**
	 * Handles `changed` event of `headers` and attaches listeners.
	 */
	handleHeadersChanged_() {
		this.syncHeaderListeners_();
	}

	/**
	 * Handles a `keydown` event on the headers.
	 * @param {!Event} event
	 * @protected
	 */
	handleKeydown_(event) {
		if (event.keyCode === KEY_CODE_ENTER || event.keyCode === KEY_CODE_SPACE) {
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
	}

	/**
	 * Adds CSS classes and properties to the `content` element when `collapsed`
	 * is false
	 * @protected
	 */
	open_() {
		const {content, openClasses, transitionClasses} = this;

		dom.addClasses(content, openClasses);
		dom.removeClasses(content, transitionClasses);
		content.setAttribute('aria-expanded', true);
		content.style.removeProperty('height');
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
	 * Syncs the component according to the value of the `headers` state,
	 * attaching events to the new element and detaching from any previous one.
	 * @protected
	 */
	syncHeaderListeners_() {
		const {headers} = this;

		this.eventHandler_.removeAllListeners();

		if (Array.isArray(headers)) {
			headers.forEach(header => {
				this.attachHeaderListeners_(header);
			});
		}
		else {
			this.attachHeaderListeners_(headers);
		}
	}

	/**
	 * Toggles the content's visibility.
	 * @public
	 */
	toggle() {
		const {collapsed, content, transitionEnd} = this;

		dom.once(content, transitionEnd, this.handleTransitionEnd_.bind(this));

		this.collapsed = !collapsed;
	}

	/**
	 * Calculates what the content height should be and sets it.
	 * @protected
	 */
	updateContentHeight_() {
		const {content} = this;

		content.setAttribute('style', `height: ${content.firstElementChild.offsetHeight}px;`);
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
	 * @type {!string}
	 */
	closedClasses: {
		validator: core.isString,
		value: 'collapse'
	},

	/**
	 * The open or closed state of the `content` element, false and true
	 * respectively.
	 * @type {boolean}
	 */
	collapsed: {
		validator: core.isBoolean,
		value: true
	},

	/**
	 * The element or selector that should collapse.
	 * @type {!string|!Element}
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
	 * @type {!string|!Array<!Object>|!Element}
	 */
	headers: {
		validator: value => core.isString(value) || Array.isArray(value) || core.isElement(value)
	},

	/**
	 * The CSS class added to `content` when it's open.
	 * @type {!string}
	 */
	openClasses: {
		validator: core.isString,
		value: 'collapse in'
	},

	/**
	 * The CSS class added to `content` when it's transitioning.
	 * @type {!string}
	 */
	transitionClasses: {
		validator: core.isString,
		value: 'collapsing'
	}
};

export default MetalQuartzCollapse;