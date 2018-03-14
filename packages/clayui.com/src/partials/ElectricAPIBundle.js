'use strict';

import Autocomplete from 'metal-autocomplete';
import Component from 'metal-component';
import dom from 'metal-dom';
import Toggler from 'metal-toggler';
import ElectricAPIAutocomplete from './ElectricAPIAutocomplete';
import {isServerSide} from 'metal';

class ElectricApiBundle extends Component {
	attached() {
		if (isServerSide()) {
			return;
		}

		const {project} = this;

		this.autocomplete_ = new ElectricAPIAutocomplete({
			dataSource: `/api/${project.ref}/API.json`,
			maxResults: 4,
			project,
			input: document.querySelector('input[name="query"]')
		});

		this.dropdowns_ = new Toggler({
			content: '.version-dropdown .dropdown-menu',
			header: '.version-dropdown .btn'
		});

		this.toggler_ = new Toggler({
			content: '.sidebar-toggler-content',
			header: '.sidebar-header'
		});

		this.docClickHandler_ = dom.on(document, 'click', this.handleDocClick_.bind(this));
	}

	disposed() {
		if (isServerSide()) {
			return;
		}

		this.docClickHandler_.removeListener();
		this.dropdowns_.dispose();
		this.toggler_.dispose();
	}

	handleDocClick_(event) {
		if (!dom.parent(event.target, '.version-dropdown')) {
			let expanded = document.querySelector('.toggler-header-expanded');

			if (expanded) {
				this.dropdowns_.toggle(expanded);
			}
		}
	}
}

ElectricApiBundle.STATE = {
	project: {
	}
};

export default ElectricApiBundle;
