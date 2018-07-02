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
		this._query = this.value;
		this.provider = new DataProvider(this.data, {
			elements: this.maxSuggestions,
			paramName: this.paramName,
		});
		this.provider.on(
			'suggestionsUpdated',
			this._updateSuggestions.bind(this)
		);
	}

	_clearSuggestions() {
		if (this._suggestions.length > 0) {
			this._updateSuggestions([]);
		}
	}

	_updateSuggestions(list) {
		this._suggestions = list;
	}

	_handleClick(event) {
		this.submit(event);
	}

	_handleSearch(event) {
		this.value = event.delegateTarget.value.toLowerCase();
		if (this.value.length >= 3) {
			this._query = this.value;
			this.provider.updateSuggestions(this._query);
		} else {
			this._clearSuggestions();
		}
		this._selectedSuggestionIndex = 0;
	}

	_handleFocus() {
		this._hasFocus = true;
	}

	_handleBlur() {
		this._hasFocus = false;
	}

	_handleHover(e) {
		this.selectSuggestion(parseInt(e.target.dataset.index, 10) + 1);
	}

	_handleKeydown(event) {
		this._hasFocus = true;
		switch (event.key) {
		case 'ArrowDown':
			event.preventDefault();
			this.selectSuggestion(this._selectedSuggestionIndex + 1);
			break;

		case 'ArrowUp':
			event.preventDefault();
			this.selectSuggestion(this._selectedSuggestionIndex - 1);
			break;

		case 'Enter':
			event.target.blur();
			this.submit(event);
			break;

		case 'Escape':
			this._hasFocus = false;
			this.selectSuggestion(0);
			break;
		}
	}

	selectSuggestion(pos) {
		const total = this._suggestions.length + 1;

		this._selectedSuggestionIndex = (pos + total) % total;

		this.value =
			this._selectedSuggestionIndex > 0
				? this._suggestions[this._selectedSuggestionIndex - 1]
				: this._query;
	}

	submit(event) {
		this.emit('submitQuery', {
			query: this.value,
			selectedItem: this._suggestions[this._selectedSuggestionIndex - 1],
			originalEvent: event || null,
		});
	}
}

ClayAutocomplete.STATE = {
	_hasFocus: Config.bool()
		.value(false)
		.internal(),
	_query: Config.string()
		.value('')
		.internal(),
	_selectedSuggestionIndex: Config.number()
		.value(0)
		.internal(),
	_suggestions: Config.array()
		.value([])
		.internal(),
	data: Config.oneOfType([Config.array(), Config.string()]),
	elementClasses: Config.string(),
	id: Config.string(),
	maxSuggestions: Config.number().value(5),
	paramName: Config.string().value('query'),
	value: Config.string().value(''),
};

defineWebComponent('clay-autocomplete', ClayAutocomplete);

Soy.register(ClayAutocomplete, templates);

export {ClayAutocomplete};
export default ClayAutocomplete;
