'use strict';

import Component from 'metal-component';
import dom from 'metal-dom';
import Soy from 'metal-soy';

import templates from './MainNavigation.soy.js';

class MainNavigation extends Component {
	handleCollapseClick_(event) {
		event.preventDefault();

		const parent = dom.parent(event.target, 'li');

		let cssClass = 'active';

		dom.toggleClasses(parent, cssClass);
	}
};

Soy.register(MainNavigation, templates);

export default MainNavigation;