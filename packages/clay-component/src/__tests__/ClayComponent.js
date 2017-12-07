import ClayComponent from '../ClayComponent';
import Soy from 'metal-soy';

import templates from './fixtures/MyComponent.soy.js';

/**
 * My Component.
 */
class MyComponent extends ClayComponent {}
Soy.register(MyComponent, templates);

let component;

describe('ClayComponent', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should create a ClayComponent with `virtual` data attributes', () => {
		component = new ClayComponent({
			data: {
				'my-attribute': 'Luke Skywalker',
			},
		});

		expect(component.element.getAttribute('data-my-attribute')).toEqual(
			'Luke Skywalker'
		);
	});

	it('should create a ClayComponent with accesible data attributes from dom', () => {
		component = new MyComponent();

		expect(component.element.getAttribute('data-my-dom-attribute')).toEqual(
			'Han Solo'
		);
	});

	it('should create a ClayComponent and element.getAttribute must return dom attribute in case both real dom and `virtual` data exists', () => {
		component = new MyComponent({
			data: {
				'data-my-dom-attribute': 'Luke Skywalker',
			},
		});

		expect(component.element.getAttribute('data-my-dom-attribute')).toEqual(
			'Han Solo'
		);
	});
});
