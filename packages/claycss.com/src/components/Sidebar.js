'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import Toggler from 'metal-toggler';

import templates from './Sidebar.soy';

class Sidebar extends Component {
	attached() {
		Toggler.CSS_EXPANDED = 'open'; /* Until metal-toggler can manage classenames on states */

		new Toggler({
			content: '.sidebar-toggler-content',
			header: '.sidebar-toggler'
		});
	}

	handleThemeChange_(event) {
		const linkTag = document.getElementById('mainCssLink');

		let href = '/styles/main.css';

		if (!event.target.checked) {
			href = '/styles/base.css';
		}

		linkTag.setAttribute('href', href);
	}
};

Soy.register(Sidebar, templates);

export default Sidebar;
