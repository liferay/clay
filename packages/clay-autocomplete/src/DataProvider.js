import {isString} from 'metal';
import Uri from 'metal-uri';
import fuzzy from 'fuzzy';
import EventEmitter from 'metal-events';

/* eslint-disable require-jsdoc */

function getDataFromArray(query, data, cb) {
	cb(
		fuzzy
			.filter(query, data, {
				extract: el => el,
			})
			.map(e => e.string)
	);
}

function getDataFromURL(query, url, paramName = 'q', cb) {
	fetch(new Uri(url).setParameterValue(paramName, query))
		.then(response => response.json())
		.then(json => cb(json));
}

export default class DataProvider extends EventEmitter {
	constructor(dataSource, options) {
		super();
		this.options = Object.assign({}, this.defaults, options);
		this.dataSource = dataSource;
		this.setSuggestions = this.setSuggestions.bind(this);
	}

	get defaults() {
		return {elements: 5, paramName: 'q'};
	}

	updateSuggestions(query) {
		const {dataSource, setSuggestions, options} = this;

		if (this.lock) return false;
		this.lock = true;
		if (Array.isArray(dataSource)) {
			getDataFromArray(query, dataSource, setSuggestions);
		} else if (isString(dataSource)) {
			getDataFromURL(
				query,
				dataSource,
				options.paramName,
				setSuggestions
			);
		}
	}

	setSuggestions(data) {
		this.emit('suggestionsUpdated', data.slice(0, this.options.elements));
		this.lock = false;
	}
}
