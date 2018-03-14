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
		const elementCollapse = this.element.querySelector('.navbar-collapse');

		if (this._isTransitioning && !this._visible) {
			const heightCollapse = elementCollapse.querySelector('.container')
				.clientHeight;

			elementCollapse.setAttribute(
				'style',
				`height: ${heightCollapse}px`
			);
		} else if (this._isTransitioning && this._visible) {
			elementCollapse.setAttribute('style', 'height: 0');
			elementCollapse.removeAttribute('style');
		}
	}

	/**
	 * Check the click and set transition true.
	 * @private
	 */
	_handleClickToggler() {
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
		} else if (element == event.target) {
			this._visible = false;
			this._isTransitioning = false;
		}
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
	 * @instance
	 * @memberof ClayNavigationBar
	 * @type {?boolean}
	 * @default false
	 * @private
	 */
	_isTransitioning: Config.bool()
		.value(false)
		.internal(),

	/**
	 * Navmenus visible in mobile when click in the button.
	 * @instance
	 * @memberof ClayNavigationBar
	 * @type {?bool}
	 * @default false
	 * @private
	 */
	_visible: Config.bool()
		.value(false)
		.internal(),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayNavigationBar
	 * @type {?(string|undefined)}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayNavigationBar
	 * @type {?(string|undefined)}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * The display style attribute.
	 * @instance
	 * @memberof ClayNavigationBar
	 * @type {?boolean}
	 * @default false
	 */
	inverted: Config.bool().value(false),

	/**
	 * List of items to show in the Navbar.
	 * @instance
	 * @memberof ClayNavigationBar
	 * @type {!Array}
	 * @default undefined
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
	 * @instance
	 * @memberof ClayNavigationBar
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),
};

defineWebComponent('clay-navigation-bar', ClayNavigationBar);

Soy.register(ClayNavigationBar, templates);

export {ClayNavigationBar};
export default ClayNavigationBar;
