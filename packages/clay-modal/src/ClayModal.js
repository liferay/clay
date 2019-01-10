import 'clay-button';
import 'clay-icon';
import {Config} from 'metal-state';
import {EventHandler} from 'metal-events';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import dom from 'metal-dom';
import Soy from 'metal-soy';

import templates from './ClayModal.soy.js';

const KEY_CODE_ESC = 27;
const KEY_CODE_TAB = 9;

const FOCUSABLE_ELEMENTS = [
	'a[href]',
	'[contenteditable]',
	'[tabindex]:not([tabindex^="-"])',
	'area[href]',
	'button:not([disabled]):not([aria-hidden])',
	'embed',
	'iframe',
	'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
	'object',
	'select:not([disabled]):not([aria-hidden])',
	'textarea:not([disabled]):not([aria-hidden])',
];

/**
 * Metal ClayModal component.
 * @extends ClayComponent
 */
class ClayModal extends ClayComponent {
	/**
	 * @inheritDoc
	 */
	created() {
		this._overlayElement = this._valueOverlayElementFn();
		this._eventHandler = new EventHandler();
	}

	/**
	 * @inheritDoc
	 */
	attached() {
		this.addListener('click', this._handleDocumentClick.bind(this), true);
		this.addListener('hide', this._defaultHideModal, true);
		this.addListener('show', this._defaultShowModal, true);
		this.addListener(
			'touchend',
			this._handleDocumentClick.bind(this),
			true
		);
		this.addListener('transitionend', this._handleTransitionEnd, true);
	}

	/**
	 * @inheritDoc
	 */
	detached() {
		super.detached();
		this._eventHandler.removeAllListeners();
	}

	/**
	 * @inheritDoc
	 */
	// eslint-disable-next-line
	sync_isTransitioning() {
		if (this._isTransitioning && !this.visible) {
			this._isTransitioning = false;
			this.visible = true;
		} else if (this._isTransitioning && this.visible) {
			this.visible = false;
		}
	}

	/**
	 * @inheritDoc
	 */
	syncVisible() {
		if (this.visible) {
			dom.enterDocument(this._overlayElement);
			this._overlayElement.offsetHeight;
			dom.addClasses(this._overlayElement, 'show');
		} else {
			dom.exitDocument(this._overlayElement);
		}
	}

	/**
	 * Close modal and remove transitions.
	 * @private
	 */
	_defaultHideModal() {
		dom.removeClasses(this._overlayElement, 'show');
		dom.removeClasses(document.body, 'modal-open');

		this._isTransitioning = true;

		this._eventHandler.removeAllListeners();
	}

	/**
	 * Open modal and add transition.
	 * @private
	 */
	_defaultShowModal() {
		dom.addClasses(document.body, 'modal-open');

		this._isTransitioning = true;

		this._eventHandler.add(
			dom.on(document, 'keyup', this._handleKeyup.bind(this)),
			dom.on(document, 'keydown', this._handleKeyDown.bind(this))
		);
	}

	/**
	 * Get all nodes that can be focused.
	 * @protected
	 * @return {!Array}
	 */
	_getFocusableNodes() {
		const nodes = this.element.querySelectorAll(FOCUSABLE_ELEMENTS);
		return Object.keys(nodes).map(key => nodes[key]);
	}

	/**
	 * Handles the focus on the elements within the modal.
	 * @param {!Event} event
	 * @protected
	 */
	_handleKeyDown(event) {
		if (event.keyCode === KEY_CODE_TAB) {
			if (!this.element.contains(event.target)) {
				this.element.focus();
			} else {
				const focusableNodes = this._getFocusableNodes();
				const focusedItemIndex = focusableNodes.indexOf(
					document.activeElement
				);

				if (event.shiftKey && focusedItemIndex === 0) {
					focusableNodes[focusableNodes.length - 1].focus();
					event.preventDefault();
				}

				if (
					!event.shiftKey &&
					focusedItemIndex === focusableNodes.length - 1
				) {
					focusableNodes[0].focus();
					event.preventDefault();
				}
			}
		}
	}

	/**
	 * Handle the click buttons and emit event.
	 * @param {!Event} event
	 * @private
	 */
	_handleClickFooterButton(event) {
		this.emit('clickButton', event);
	}

	/**
	 * Handle the footer close button click and emits events.
	 * @param {!Event} event
	 * @private
	 */
	_handleClickCloseButtonFooter(event) {
		this.emit('clickButton', event);
		this.emit('hide');
	}

	/**
	 * Handle the click and emit close modal.
	 * @private
	 */
	_handleCloseModal() {
		this.emit('hide');
	}

	/**
	 * Check if contain click target event in element and emit close modal.
	 * @param {!Event} event
	 * @private
	 */
	_handleDocumentClick(event) {
		if (dom.contains(event.target, this.element)) {
			this.emit('hide');
		}
	}

	/**
	 * Handle click key code esc and emit close modal.
	 * @param {!Event} event
	 * @private
	 */
	_handleKeyup(event) {
		if (event.keyCode === KEY_CODE_ESC) {
			this.emit('hide');
		}
	}

	/**
	 * Handle css transition ends.
	 * @param {!Event} event
	 * @private
	 */
	_handleTransitionEnd(event) {
		if (
			event.target === this.element &&
			this._isTransitioning &&
			!this.visible
		) {
			this._isTransitioning = false;
		}
	}

	/**
	 * Create fragment of the overlay modal.
	 * @return {Element} The resulting document fragment.
	 * @private
	 */
	_valueOverlayElementFn() {
		return dom.buildFragment('<div class="modal-backdrop fade"></div>')
			.firstChild;
	}

	/**
	 * Emit open modal.
	 * @public
	 */
	show() {
		this.emit('show');
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayModal.STATE = {
	/**
	 * Body of the modal.
	 * @default undefined
	 * @instance
	 * @memberof ClayModal
	 * @type {?(string|html|undefined)}
	 */
	body: Config.any(),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayModal
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayModal
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayModal
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Buttons of the footer.
	 * @default undefined
	 * @instance
	 * @memberof ClayModal
	 * @type {?(array|undefined)}
	 */
	footerButtons: Config.arrayOf(
		Config.shapeOf({
			alignment: Config.oneOf(['left', 'right']).value('right'),
			label: Config.string().required(),
			style: Config.oneOf(['link', 'primary', 'secondary', 'unstyled']),
			type: Config.oneOf(['button', 'close', 'reset', 'submit']).value(
				'button'
			),
		})
	),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayModal
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Adds transitions when show is called.
	 * @default false
	 * @instance
	 * @memberof ClayModal
	 * @private
	 * @type {?bool}
	 */
	_isTransitioning: Config.bool()
		.value(false)
		.internal(),

	/**
	 * The size of element modal.
	 * @default undefined
	 * @instance
	 * @memberof ClayModal
	 * @type {?(string|undefined)}
	 */
	size: Config.oneOf(['full-screen', 'lg', 'sm']),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayModal
	 * @type {?(string|undefined)}
	 */
	spritemap: Config.string(),

	/**
	 * Status messages.
	 * @default undefined
	 * @instance
	 * @memberof ClayModal
	 * @type {?(string|undefined)}
	 */
	status: Config.oneOf(['danger', 'info', 'success', 'warning']),

	/**
	 * Title of the modal.
	 * @default undefined
	 * @instance
	 * @memberof ClayModal
	 * @type {?(string|undefined)}
	 */
	title: Config.string(),

	/**
	 * Url to place an iframe in the body of the modal.
	 * @default undefined
	 * @instance
	 * @memberof ClayModal
	 * @type {?(string|undefined)}
	 */
	url: Config.string(),

	/**
	 * Modal visible when show is called.
	 * @default false
	 * @instance
	 * @memberof ClayModal
	 * @private
	 * @type {?bool}
	 */
	visible: Config.bool().value(false),
};

defineWebComponent('clay-modal', ClayModal);

Soy.register(ClayModal, templates);

export {ClayModal};
export default ClayModal;
