import State, {validators} from 'metal-state';
import anim from 'metal-anim';
import dom, {toElement} from 'metal-dom';
import {EventHandler} from 'metal-events';

const KEY_CODE_ENTER = 13;
const KEY_CODE_SPACE = 32;

/**
 * Collapse Metal Clay component.
 * @extends State
 */
class ClayCollapse extends State {
	/**
	 * @inheritDoc
	 */
	constructor(config) {
		super(config);

		this._eventHandler = new EventHandler();

		const transitionEnd = this._getTransitionEndEvent();

		this.supportsTransitionEnd = transitionEnd !== false;
		this.transitionEnd = transitionEnd || 'transitionend';

		this.on('headersChanged', this._handleHeadersChanged);
		this._syncHeaderListeners();

		this.on('collapsedChanged', this._handleCollapsedChanged);

		if (this.content) {
			this.collapsed ? this._close() : this._open();
		}
	}

	/**
	 * @inheritDoc
	 */
	disposeInternal() {
		super.disposeInternal();
		this._eventHandler.removeAllListeners();
	}

	/**
	 * Animates close when `collapsed` is true
	 * @protected
	 */
	_animateClose() {
		const {content, openClasses, transitionClasses} = this;

		content.transitionType = 0;

		this._updateContentHeight();

		dom.addClasses(content, transitionClasses);
		dom.removeClasses(content, openClasses);

		content.offsetHeight;
		content.style.removeProperty('height');

		this._shimUnsupportedTransition(content);
	}

	/**
	 * Animates open when `collapsed` is false
	 * @protected
	 */
	_animateOpen() {
		const {closedClasses, content, transitionClasses} = this;

		content.transitionType = 1;

		dom.removeClasses(content, closedClasses);
		dom.addClasses(content, transitionClasses);

		this._updateContentHeight();

		this._shimUnsupportedTransition(content);
	}

	/**
	 * Attaches click and keydown listeners to header.
	 * @param {!Element|!string} header
	 * @protected
	 */
	_attachHeaderListeners(header) {
		this._eventHandler.add(
			dom.on(header, 'click', this._handleClick.bind(this)),
			dom.on(header, 'keydown', this._handleKeydown.bind(this))
		);
	}

	/**
	 * Adds CSS classes and properties to the `content` and `headers` elements when
	 * `collapsed` is true
	 * @protected
	 */
	_close() {
		const {
			closedClasses,
			content,
			headers,
			openClasses,
			transitionClasses,
		} = this;

		dom.removeClasses(content, `${openClasses} ${transitionClasses}`);
		dom.addClasses(content, closedClasses);
		content.setAttribute('aria-expanded', false);
		content.style.removeProperty('height');

		if (Array.isArray(headers)) {
			headers.forEach(header => {
				dom.addClasses(header, 'collapsed');
				toElement(header).setAttribute('aria-expanded', false);
			});
		} else {
			dom.addClasses(headers, 'collapsed');
			toElement(headers).setAttribute('aria-expanded', false);
		}
	}

	/**
	 * Checks to see if browser supports CSS3 Transitions and returns the name
	 * of the transitionend event; returns false if it's not supported
	 * @protected
	 * @return {string|boolean} The name of the transitionend event or false
	 * if not supported
	 */
	_getTransitionEndEvent() {
		let el = document.createElement('metalClayTransitionEnd');

		let transitionEndEvents = {
			transition: 'transitionend',
			WebkitTransition: 'webkitTransitionEnd',
			MozTransition: 'transitionend',
			OTransition: 'oTransitionEnd otransitionend',
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
	 * @protected
	 */
	_handleClick() {
		this.toggle();
	}

	/**
	 * Syncs the `content` element according to the value of the `collapsed`
	 * state, attaching and removing css properties and classes needed to open
	 * and close the element.
	 */
	_handleCollapsedChanged() {
		this.collapsed ? this._animateClose() : this._animateOpen();
	}

	/**
	 * Handles `changed` event of `headers` and attaches listeners.
	 */
	_handleHeadersChanged() {
		this._syncHeaderListeners();
	}

	/**
	 * Handles a `keydown` event on the headers.
	 * @param {!Event} event
	 * @protected
	 */
	_handleKeydown(event) {
		// eslint-disable-next-line
		if (
			event.keyCode === KEY_CODE_ENTER ||
			event.keyCode === KEY_CODE_SPACE
		) {
			this.toggle();
			event.preventDefault();
		}
	}

	/**
	 * Handles the `transitionend` event on the content.
	 * @protected
	 */
	_handleTransitionEnd() {
		this.content.transitionType ? this._open() : this._close();
	}

	/**
	 * Adds CSS classes and properties to the `content` and `headers` elements when
	 * `collapsed` is false
	 * @protected
	 */
	_open() {
		const {content, headers, openClasses, transitionClasses} = this;

		dom.addClasses(content, openClasses);
		dom.removeClasses(content, transitionClasses);
		content.setAttribute('aria-expanded', true);
		content.style.removeProperty('height');

		if (Array.isArray(headers)) {
			headers.forEach(header => {
				dom.removeClasses(header, 'collapsed');
				toElement(header).setAttribute('aria-expanded', true);
			});
		} else {
			dom.removeClasses(headers, 'collapsed');
			toElement(headers).setAttribute('aria-expanded', true);
		}
	}

	/**
	 * Fires a synthetic `transitionend` event for browsers that don't support
	 * CSS3 transitions
	 * @param {!Element} element
	 * @protected
	 */
	_shimUnsupportedTransition(element) {
		if (!this.supportsTransitionEnd) {
			anim.emulateTransitionEnd(element);
		}
	}

	/**
	 * Syncs the component according to the value of the `headers` state,
	 * attaching events to the new element and detaching from any previous one.
	 * @protected
	 */
	_syncHeaderListeners() {
		const {headers} = this;

		this._eventHandler.removeAllListeners();

		if (Array.isArray(headers)) {
			headers.forEach(header => {
				this._attachHeaderListeners(header);
			});
		} else {
			this._attachHeaderListeners(headers);
		}
	}

	/**
	 * Toggles the content's visibility.
	 * @public
	 */
	toggle() {
		const {collapsed, content, transitionEnd} = this;

		dom.once(content, transitionEnd, this._handleTransitionEnd.bind(this));

		this.collapsed = !collapsed;
	}

	/**
	 * Calculates what the content height should be and sets it.
	 * @protected
	 */
	_updateContentHeight() {
		const {content} = this;

		content.setAttribute(
			'style',
			`height: ${content.firstElementChild.offsetHeight}px;`
		);
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayCollapse.STATE = {
	/**
	 * The CSS class added to `content` when it's collapsed.
	 * @type {!string}
	 */
	closedClasses: {
		validator: validators.string,
		value: 'collapse',
	},

	/**
	 * The open or closed state of the `content` element, false and true
	 * respectively.
	 * @type {boolean}
	 */
	collapsed: {
		validator: validators.bool,
		value: true,
	},

	/**
	 * The element or selector that should collapse.
	 * @type {!(string|Element)}
	 */
	content: {
		setter: dom.toElement,
		validator: validators.oneOfType([validators.string, validators.object]),
	},

	/**
	 * The element that should trigger the toggling. If you pass in a
	 * core.isElement value you will lose reference to the element once it is
	 * removed from the dom. If you pass in a selector it will delegate it on
	 * the document across all headers matching that selector.
	 * @type {!(string|Array<string>|Element)}
	 */
	headers: {
		validator: validators.oneOfType([
			validators.string,
			validators.array,
			validators.object,
		]),
	},

	/**
	 * The CSS class added to `content` when it's open.
	 * @type {!string}
	 */
	openClasses: {
		validator: validators.string,
		value: 'collapse show',
	},

	/**
	 * The CSS class added to `content` when it's transitioning.
	 * @type {!string}
	 */
	transitionClasses: {
		validator: validators.string,
		value: 'collapsing',
	},
};

export {ClayCollapse};
export default ClayCollapse;
