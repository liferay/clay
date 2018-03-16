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

		Toggler.CSS_EXPANDED = 'open';

		this.toggler_ = new Toggler({
			content: '.sidebar-toggler-content',
			header: '.sidebar-toggler'
		});
	}

	disposed() {
		if (isServerSide()) {
			return;
		}

		this.toggler_.dispose();
	}
}

ElectricApiBundle.STATE = {
	project: {
	}
};

export default ElectricApiBundle;
