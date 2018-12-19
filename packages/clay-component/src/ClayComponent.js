import Component from 'metal-component';
import {Config} from 'metal-state';
import {domData} from 'metal-dom';
import {core, isObject, isServerSide} from 'metal';

/**
 * Clay Component.
 * @extends Component
 */
class ClayComponent extends Component {
	/**
	 * @inheritDoc
	 */
	attached(...args) {
		super.attached(...args);

		if (isServerSide() || !this.element) {
			return;
		}

		let getAttribute = this.element.getAttribute.bind(this.element);

		this.element.getAttribute = attributeName => {
			let attributeValue = getAttribute(attributeName);

			if (this.element && !attributeValue) {
				attributeValue = domData.get(this.element, attributeName);
			}

			return core.isDefAndNotNull(attributeValue) ? attributeValue : '';
		};

		for (let dataKey in this.data) {
			if (this.data.hasOwnProperty(dataKey)) {
				domData.get(
					this.element,
					'data-' + dataKey,
					this.data[dataKey]
				);
			}
		}
	}

	/**
	 * @inheritDoc
	 */
	rendered(...args) {
		super.rendered(...args);

		this._renderDataAttributes();
	}

	/**
	 * @inheritDoc
	 */
	syncData(newVal, prevVal) {
		if (newVal != prevVal) {
			this._renderDataAttributes();
		}
	}

	/**
	 * @inheritDoc
	 */
	buildFacade_(eventName, data, originalEvent) {
		if (this.getShouldUseFacade()) {
			const facade = {
				data: data,
				preventDefault: function() {
					facade.preventedDefault = true;
					if (
						originalEvent &&
						originalEvent.preventDefault &&
						(!originalEvent.preventDefault ||
							!originalEvent.defaultPrevented)
					) {
						originalEvent.preventDefault();
					}
				},
				stopInmediatePropagation: function() {
					if (
						originalEvent &&
						originalEvent.stopInmediatePropagation
					) {
						originalEvent.stopInmediatePropagation();
					}
				},
				stopPropagation: function() {
					if (originalEvent && originalEvent.stopPropagation) {
						originalEvent.stopPropagation();
					}
				},
				target: this,
				type: eventName,
			};

			return facade;
		}
	}

	/**
	 * Execute each of the listeners in order with te supplied arguments.
	 * @param {string|object} event
	 * @param {*} opt_args [arg1], [arg2], [...]
	 * @return {boolean} Returns true if event had listeners, false otherwise.
	 */
	emit(event, ...args) {
		const eventName = isObject(event) ? event.name : event;
		const facade = this.buildFacade_(
			eventName,
			event.data,
			event.originalEvent
		);

		args = isObject(event) ? [facade] : args;

		const listeners = this.getRawListeners_(eventName);

		const handlerName =
			'handle' + eventName.charAt(0).toUpperCase() + eventName.slice(1);

		this.runListeners_(
			listeners,
			args,
			facade,
			this.defaultEventHandler,
			handlerName
		);
		return true;
	}

	/**
	 * Runs the given listeners.
	 * @param {!Array} listeners
	 * @param {!Array} args
	 * @param {Object} facade
	 * @param {Object} defaultEventHandler
	 * @param {String} handlerName
	 * @protected
	 */
	runListeners_(listeners, args, facade, defaultEventHandler, handlerName) {
		if (facade) {
			args.push(facade);
		}

		const defaultListeners = [];
		for (let i = 0; i < listeners.length; i++) {
			const listener = listeners[i].fn || listeners[i];
			if (listeners[i].default) {
				defaultListeners.push(listener);
			} else {
				listener.apply(this, args);
			}
		}

		defaultEventHandler &&
			defaultEventHandler[handlerName] &&
			defaultEventHandler[handlerName](...args);

		if (!facade || !facade.preventedDefault) {
			for (let j = 0; j < defaultListeners.length; j++) {
				defaultListeners[j].apply(this, args);
			}
		}
	}

	/**
	 * Places the data attributes in the dom.
	 */
	_renderDataAttributes() {
		for (let dataKey in this.data) {
			if (Object.prototype.hasOwnProperty.call(this.data, dataKey)) {
				this.element.setAttribute(
					'data-' + dataKey,
					this.data[dataKey]
				);
			}
		}
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayComponent.STATE = {
	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayComponent
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayComponent
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),
};

export {ClayComponent};
export default ClayComponent;
