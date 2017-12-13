import 'clay-button';
import 'clay-icon';
import {Config} from 'metal-state';
import {EventHandler} from 'metal-events';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import dom from 'metal-dom';
import Soy from 'metal-soy';

import templates from './ClayModal.soy.js';

const KEY_CODE_ESC = 27;

/**
 * Metal ClayModal component.
 */
class ClayModal extends Component {
	/**
	 * @inheritDoc
	 */
	created() {
		this.overlayElement_ = this.valueOverlayElementFn_();
		this.eventHandler_ = new EventHandler();
	}

	/**
	 * @inheritDoc
	 */
	attached() {
		this.addListener('click', this.handleDocumentClick_.bind(this), true);
		this.addListener('hide', this.defaultHideModal_, true);
		this.addListener('show', this.defaultShowModal_, true);
		this.addListener(
			'touchend',
			this.handleDocumentClick_.bind(this),
			true
		);
		this.addListener('transitionend', this.handleTransitionEnd_, true);
	}

	/**
	 * @inheritDoc
	 */
	detached() {
		super.detached();
		this.eventHandler_.removeAllListeners();
	}

	/**
	 * @inheritDoc
	 */
	syncVisible() {
		if (this.visible) {
			dom.enterDocument(this.overlayElement_);
			this.overlayElement_.offsetHeight;
			dom.addClasses(this.overlayElement_, 'show');
		} else {
			dom.exitDocument(this.overlayElement_);
		}
	}

	/**
	 * @inheritDoc
	 */
	syncIsTransitioning_() {
		if (this.isTransitioning_ && !this.visible) {
			this.isTransitioning_ = false;
			this.visible = true;
		} else if (this.isTransitioning_ && this.visible) {
			this.visible = false;
		}
	}

	/**
	 * Close modal and remove transitions.
	 * @private
	 */
	defaultHideModal_() {
		dom.removeClasses(this.overlayElement_, 'show');
		dom.removeClasses(document.body, 'modal-open');

		this.isTransitioning_ = true;

		this.eventHandler_.removeAllListeners();
	}

	/**
	 * Open modal and add transition.
	 * @private
	 */
	defaultShowModal_() {
		dom.addClasses(document.body, 'modal-open');

		this.isTransitioning_ = true;

		this.eventHandler_.add(
			dom.on(document, 'keyup', this.handleKeyup_.bind(this))
		);
	}

	/**
	 * Handle the click buttons and emit event.
	 * @param {!Event} event
	 * @private
	 */
	handleClickFooterButton_(event) {
		this.emit('clickButton', event);
	}

	/**
	 * Handle the footer close button click and emits events.
	 * @param {!Event} event
	 * @private
	 */
	handleClickCloseButtonFooter_(event) {
		this.emit('clickButton', event);
		this.emit('hide');
	}

	/**
	 * Handle the click and emit close modal.
	 * @private
	 */
	handleCloseModal_() {
		this.emit('hide');
	}

	/**
	 * Check if contain click target event in element and emit close modal.
	 * @param {!Event} event
	 * @private
	 */
	handleDocumentClick_(event) {
		if (dom.contains(event.target, this.element)) {
			this.emit('hide');
		}
	}

	/**
	 * Handle click key code esc and emit close modal.
	 * @param {!Event} event
	 * @private
	 */
	handleKeyup_(event) {
		if (event.keyCode === KEY_CODE_ESC) {
			this.emit('hide');
		}
	}

	/**
	 * Handle css transition ends.
	 * @param {!Event} event
	 * @private
	 */
	handleTransitionEnd_(event) {
		if (
			event.target === this.element &&
			this.isTransitioning_ &&
			!this.visible
		) {
			this.isTransitioning_ = false;
		}
	}

	/**
	 * Create fragment of the overlay modal.
	 * @return {Element} The resulting document fragment.
	 * @private
	 */
	valueOverlayElementFn_() {
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
	 * @instance
	 * @memberof ClayModal
	 * @type {?string|html|undefined}
	 * @default undefined
	 */
	body: Config.any(),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayModal
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Buttons of the footer.
	 * @instance
	 * @memberof ClayModal
	 * @type {?array|undefined}
	 * @default undefined
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
	 * @instance
	 * @memberof ClayModal
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Adds transitions when show is called.
	 * @instance
	 * @memberof ClayModal
	 * @type {?bool}
	 * @default false
	 * @private
	 */
	isTransitioning_: Config.bool()
		.value(false)
		.internal(),

	/**
	 * The size of element modal.
	 * @instance
	 * @memberof ClayModal
	 * @type {?string|undefined}
	 * @default undefined
	 */
	size: Config.oneOf(['full-screen', 'lg', 'sm']),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayModal
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * Status messages.
	 * @instance
	 * @memberof ClayModal
	 * @type {?string|undefined}
	 * @default undefined
	 */
	status: Config.oneOf(['danger', 'info', 'success', 'warning']),

	/**
	 * Title of the modal.
	 * @instance
	 * @memberof ClayModal
	 * @type {?string|undefined}
	 * @default undefined
	 */
	title: Config.string(),

	/**
	 * Url to place an iframe in the body of the modal.
	 * @instance
	 * @memberof ClayModal
	 * @type {?string|undefined}
	 * @default undefined
	 */
	url: Config.string(),

	/**
	 * Modal visible when show is called.
	 * @instance
	 * @memberof ClayModal
	 * @type {?bool}
	 * @default false
	 * @private
	 */
	visible: Config.bool().value(false),
};

defineWebComponent('clay-modal', ClayModal);

Soy.register(ClayModal, templates);

export {ClayModal};
export default ClayModal;
