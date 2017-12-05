import Component from 'metal-component';
import {Config} from 'metal-state';
import {domData} from 'metal-dom';

/**
 * Clay Component.
 */
class ClayComponent extends Component {
	/**
	 * @inheritDoc
	 */
	attached() {
		super.attached();

		let getAttribute = this.element.getAttribute.bind(this.element);

		this.element.getAttribute = attributeName => {
			let attributeValue = getAttribute(attributeName);

			if (!attributeValue) {
				attributeValue = domData.get(this.element, attributeName);
			}

			return attributeValue;
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
