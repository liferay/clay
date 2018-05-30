import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import DataProvider from './DataProvider';
import templates from './ClayAutocomplete.soy';

/* eslint-disable require-jsdoc */

/**
 * Metal ClayAutocomplete component.
 */
class ClayAutocomplete extends Component {
	created() {
		this.provider = new DataProvider(this.dataSource, {
			elements: this.maxSuggestions,
			paramName: 'query',
		});
		this.provider.on(
			'suggestionsUpdated',
			this._updateSuggestions.bind(this)
		);
	}

	_updateSuggestions(list) {
		this.suggestions = list;
	}

	_handleClick(event) {
		this.submit(event);
	}

	_handleSearch(event) {
		this.query = event.delegateTarget.value.toLowerCase();
		this.value = this.query;
		this.provider.updateSuggestions(this.query);
		this.selectedSuggestionIndex = 0;
	}

	_handleFocus() {
		this.hasFocus = true;
	}

	_handleBlur() {
		this.hasFocus = false;
	}

	_handleHover(e) {
		this.selectSuggestion(parseInt(e.target.dataset.index, 10) + 1);
	}

	_handleKeydown(event) {
		switch (event.key) {
		case 'ArrowDown':
			event.preventDefault();
			this.selectSuggestion(this.selectedSuggestionIndex + 1);
			break;

		case 'ArrowUp':
			event.preventDefault();
			this.selectSuggestion(this.selectedSuggestionIndex - 1);
			break;

		case 'Enter':
			event.target.blur();
			this.submit(event);
			break;
		}
	}

	selectSuggestion(pos) {
		const total = this.suggestions.length + 1;

		this.selectedSuggestionIndex = (pos + total) % total;

		this.value =
			this.selectedSuggestionIndex > 0
				? this.suggestions[this.selectedSuggestionIndex - 1].label
				: this.query;
	}

	submit(event) {
		this.emit('submitQuery', {
			query: this.value,
			element: this.suggestions[this.selectedSuggestionIndex - 1],
			originalEvent: event || null,
		});
	}
}

const itemShape = {
	label: Config.string(),
};

ClayAutocomplete.STATE = {
	dataSource: Config.oneOfType([
		Config.arrayOf(Config.shapeOf(itemShape)),
		Config.string(),
	]),
	suggestions: Config.arrayOf(Config.shapeOf(itemShape)).value([]),
	maxSuggestions: Config.number().value(5),
	selectedSuggestionIndex: Config.number().value(0),
	elementClasses: Config.string(),
	hasFocus: Config.bool().value(false),
	id: Config.string(),
	query: Config.string().value(''),
	value: Config.string().value(''),
};

defineWebComponent('clay-autocomplete', ClayAutocomplete);

Soy.register(ClayAutocomplete, templates);

export {ClayAutocomplete};
export default ClayAutocomplete;
