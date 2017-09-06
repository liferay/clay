'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';
import { Config } from 'metal-state';

import templates from './ClayBadge.soy.js';

/**
 * Metal Clay Badge component.
 */
class ClayBadge extends Component {
	/**
	 * @inheritDoc
	 */
	created() {
		this.suffixes = ['K', 'M', 'B', 'T'];
	}

	/**
	 * Check if the value it is a number.
	 * @param {number} value
	 * @return {string|number}
	 * @protected
	 */
	hasNumberLabel_(value) {
		if (core.isNumber(value)) {
			value = this.abbreviationNumbers_(value);
		}

		return value;
	}

	/**
	 * Make abbreviation of numbers and return with suffixes if necessary.
	 * @param {number} value
	 * @return {string|number} return the value with the suffix.
	 * @protected
	 */
	abbreviationNumbers_(value) {
		for (let i = this.suffixes.length; i >= 0; i--) {
			let size = Math.pow(10, (i + 1) * 3);

			if (size <= value) {
				value = Math.floor(Math.round(value * 10 / size) / 10);
				value += this.suffixes[i];

				break;
			}
		}

		return value;
	}
}

/**
 * State definition.
 * @static
 * #type {!Object}
 */
ClayBadge.STATE = {
	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayBadge
	 * @type {?string|undefined}
	 * default undefined
	 */
	id: Config.string(),

	/**
	 * The label of the badge element.
	 * @instance
	 * @memberof ClayBadge
	 * @type {number}
	 * default undefined
	 */
	label: Config.number().setter('hasNumberLabel_').required(),

	/**
	 * Badge style color.
	 * @instance
	 * @memberof ClayBadge
	 * @type {?string|undefined}
	 * default undefined
	 */
	style: Config.oneOf([
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
	]).value('primary'),
};

Soy.register(ClayBadge, templates);

export { ClayBadge };
export default ClayBadge;
