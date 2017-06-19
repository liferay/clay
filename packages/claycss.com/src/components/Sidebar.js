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
};

Soy.register(Sidebar, templates);

export default Sidebar;
