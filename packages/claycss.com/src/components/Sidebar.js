'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import Toggler from 'metal-toggler';

import templates from './Sidebar.soy.js';

class Sidebar extends Component {
	attached() {
		Toggler.CSS_EXPANDED = 'open';

	    this._toggler = new Toggler({
			content: '.sidebar-toggler-content',
			header: '.sidebar-toggler'
		});
	}

	disposed() {
		this._toggler.dispose();
	}

};

Soy.register(Sidebar, templates);

export default Sidebar;
