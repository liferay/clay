import 'clay-link';
import ClayComponent from 'clay-component';
import {Config} from 'metal-state';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayNavigationBar.soy.js';

/**
 * Metal Clay Navbar component.
 * @extends ClayComponent
 */
class ClayNavigationBar extends ClayComponent {
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
		if (this._isTransitioning) {
			this._setCollapseHeight();
			if (this._visible) {
				this._removeCollapseHeight();
			}
		}
	}

	/**
	 * Check the click and set transition true.
	 * @param {!Event} event
	 * @private
	 */
	_handleClickToggler(event) {
		event.preventDefault();

		if (this._visible && !this._isTransitioning) {
			this._setCollapseHeight();
		}

		if (!this._isTransitioning) {
			this._isTransitioning = true;
		}
	}

	/**
	 * Continues the propagation of the item click event
	 * @param {!Event} event
	 * @private
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleNavItemClicked(event) {
		const element = event.delegateTarget;
		const index = element.getAttribute('data-nav-item-index');
		const item = this.items[index];

		return !this.emit({
			data: {
				item: item,
			},
			name: 'itemClicked',
			originalEvent: event,
		});
	}

	/**
	 * Handle css transition end.
	 * @param {!Event} event
	 * @private
	 */
	_handleTransitionEnd(event) {
		const element = this.refs.content;
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
		this.refs.content.style.removeProperty('height');
	}

	/**
	 * Sets the height css property on `.navbar-collapse`
	 * @private
	 */
	_setCollapseHeight() {
		const elementCollapse = this.refs.content;

		elementCollapse.setAttribute(
			'style',
			`height: ${elementCollapse.children[0].clientHeight}px`
		);
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
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayNavigationBar
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayNavigationBar
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

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
