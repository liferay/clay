import 'clay-link';
import {Config} from 'metal-state';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayNavigationBar.soy.js';

/**
 * Metal Clay Navbar component.
 * @extends Component
 */
class ClayNavigationBar extends Component {
	/**
	 * @inheritDoc
	 */
	attached() {
		this.addListener('transitionend', this._handleTransitionEnd, true);
	}

	/**
	 * @inheritDoc
	 */
	// eslint-disable-next-line
	sync_isTransitioning() {
		if (this._isTransitioning && !this._visible) {
			this._setCollapseHeight();
		} else if (this._isTransitioning && this._visible) {
			this._removeCollapseHeight();
		}
	}

	/**
	 * Check the click and set transition true.
	 * @private
	 */
	_handleClickToggler() {
		if (this._visible && !this._isTransitioning) {
			this._setCollapseHeight();
		}

		if (!this._isTransitioning) {
			this._isTransitioning = true;
		}
	}

	/**
	 * Handle css transition end.
	 * @param {!Event} event
	 * @private
	 */
	_handleTransitionEnd(event) {
		const element = this.element.querySelector('.navbar-collapse');
		if (
			element == event.target &&
			this._isTransitioning &&
			!this._visible
		) {
			this._visible = true;
			this._isTransitioning = false;
			this._removeCollapseHeight();
		} else if (element == event.target) {
			this._visible = false;
			this._isTransitioning = false;
		}
	}

	/**
	 * Removes height css property on `.navbar-collapse`
	 * @private
	 */
	_removeCollapseHeight() {
		const elementCollapse = this.element.querySelector('.navbar-collapse');
		elementCollapse.style.removeProperty('height');
	}

	/**
	 * Sets the height css property on `.navbar-collapse`
	 * @private
	 */
	_setCollapseHeight() {
		const elementCollapse = this.element.querySelector('.navbar-collapse');
		const heightCollapse = elementCollapse.querySelector(
			'.container-fluid'
		).clientHeight;

		elementCollapse.setAttribute(
			'style',
			`height: ${heightCollapse}px`
		)
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayNavigationBar.STATE = {
	/**
	 * The toggle animation.
	 * @default false
	 * @instance
	 * @memberof ClayNavigationBar
	 * @private
	 * @type {?boolean}
	 */
	_isTransitioning: Config.bool()
		.value(false)
		.internal(),

	/**
	 * Navmenus visible in mobile when click in the button.
	 * @default false
	 * @instance
	 * @memberof ClayNavigationBar
	 * @private
	 * @type {?bool}
	 */
	_visible: Config.bool()
		.value(false)
		.internal(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayNavigationBar
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayNavigationBar
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * The display style attribute.
	 * @default false
	 * @instance
	 * @memberof ClayNavigationBar
	 * @type {?boolean}
	 */
	inverted: Config.bool().value(false),

	/**
	 * List of items to show in the Navbar.
	 * @default undefined
	 * @instance
	 * @memberof ClayNavigationBar
	 * @type {!Array}
	 */
	items: Config.arrayOf(
		Config.shapeOf({
			active: Config.bool().value(false),
			href: Config.string().required(),
			label: Config.string().required(),
		})
	).required(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayNavigationBar
	 * @type {!string}
	 */
	spritemap: Config.string().required(),
};

defineWebComponent('clay-navigation-bar', ClayNavigationBar);

Soy.register(ClayNavigationBar, templates);

export {ClayNavigationBar};
export default ClayNavigationBar;
