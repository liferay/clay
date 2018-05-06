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

		if (isServerSide()) {
			return;
		}

		let getAttribute = this.element.getAttribute.bind(this.element);

		this.element.getAttribute = attributeName => {
			let attributeValue = getAttribute(attributeName);

			if (!attributeValue) {
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

		for (let dataKey in this.data) {
			if (Object.prototype.hasOwnProperty.call(this.data, dataKey)) {
				this.element.setAttribute(
					'data-' + dataKey,
					this.data[dataKey]
				);
			}
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

		if (listeners.length === 0) {
			return false;
		}

		this.runListeners_(listeners, args, facade);
		return true;
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
};

export {ClayComponent};
export default ClayComponent;
