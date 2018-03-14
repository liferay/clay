'use strict';

import {isServerSide} from 'metal';
import Ajax from 'metal-ajax';
import Autocomplete from 'metal-autocomplete';
import Component from 'metal-component';
import core from 'metal';
import Promise from 'metal-promise';

class ElectricAPIAutocomplete extends Component {
	attached() {
		if (isServerSide()) {
			return;
		}

		this.autocomplete = new Autocomplete({
			autoBestAlign: false,
			data: this.search_.bind(this),
			format: this.format_.bind(this),
			inputElement: this.input,
			select: function(event) {
				window.location = event.url;
			}
		});
	}

	disposed() {
		let autocomplete = this.autocomplete;

		if (autocomplete) {
			autocomplete.dispose();
		}
	}

	format_(data) {
		let url = this.formatURL_(data);

		return {
			textPrimary: `<a class="autocomplete-link" href="${url}">
				<div class="autocomplete-result">
					<p class="autocomplete-title">${data.name}</p>
					<p class="autocomplete-text">${data.memberof}</p>
				</div>
			</a>`,
			url: url
		};
	}

	formatURL_(data) {
		let memberof = data.memberof;
		let name = data.name;

		let url = `/api/${this.project.ref}/${memberof || name}.html`;

		if (memberof && name !== memberof) {
			url += '#' + name;
		}

		return url;
	}

	matchesQuery_(entity, query) {
		let name = entity.name;

		name = name ? name.toLowerCase() : '';

		return name.indexOf(query) > -1;
	}

	filterResults_(data, query) {
		let instance = this;
		let results = [];

		data.forEach(function(entity) {
			if (instance.matchesQuery_(entity, query)) {
				results.push(entity);
			}

			if (entity.members) {
				results = results.concat(instance.filterResults_(entity.members.instance, query));
				results = results.concat(instance.filterResults_(entity.members.static, query));
			}
		});

		return results;
	}

	search_(query) {
		let instance = this;

		return Promise.resolve(this.data)
			.then(function(data) {
				if (data) {
					return data;
				}
				else {
					return Ajax.request(instance.dataSource)
				}
			})
			.then(function(data) {
				if (data.response) {
					data = JSON.parse(data.response);

					instance.data = data;
				}

				let results = [];

				if (data && query) {
					results = instance.filterResults_(data, query.toLowerCase());

					if (results.length > instance.maxResults) {
						results = results.slice(0, instance.maxResults);
					}
				}

				return results;
			});
	}
}

ElectricAPIAutocomplete.STATE = {
	dataSource: {
		validator: core.isString
	},

	maxResults: {
		validator: core.isNumber
	},

	project: {
		validator: core.isObject
	},

	input: {
		validator: core.isElement
	}
};

export default ElectricAPIAutocomplete;
