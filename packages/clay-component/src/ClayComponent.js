import Component from 'metal-component';
import {Config} from 'metal-state';
import {domData} from 'metal-dom';
import {isServerSide} from 'metal';

/**
 * Clay Component.
 */
class ClayComponent extends Component {
	/**
	 * @inheritDoc
	 */
	attached() {
		super.attached();

		if (isServerSide()) {
			return;
		}

		let getAttribute = this.element.getAttribute.bind(this.element);

		this.element.getAttribute = attributeName => {
			let attributeValue = getAttribute(attributeName);

			if (!attributeValue) {
				attributeValue = domData.get(this.element, attributeName);
			}

			return typeof attributeValue !== 'undefined' ? attributeValue : '';
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
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayComponent.STATE = {
	/**
	 * Data to add to the element.
	 * @instance
	 * @memberof ClayComponent
	 * @type {?object}
	 * @default undefined
	 */
	data: Config.object(),
};

export {ClayComponent};
export default ClayComponent;
