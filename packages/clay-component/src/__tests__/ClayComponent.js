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

	it('should create a ClayComponent with data attributes', () => {
		component = new ClayComponent({
			data: {
				'my-attribute': 'Luke Skywalker',
			},
		});

		expect(component.element.getAttribute('data-my-attribute')).toEqual(
			'Luke Skywalker'
		);

		expect(component).toMatchSnapshot();
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

	it('should create a ClayComponent and element.getAttribute must return empty string in case no attribute exists', () => {
		component = new MyComponent();

		expect(component.element.getAttribute('non-existing-attribute')).toBe(
			''
		);
	});

	it('should create a ClayComponent and run default event handler on event emit', () => {
		const defaultEventHandler = {
			handleEventName: function() {},
		};
		const spy = jest.spyOn(defaultEventHandler, 'handleEventName');

		component = new MyComponent({
			defaultEventHandler: defaultEventHandler,
		});

		component.emit('eventName');

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(expect.any(Object));
	});

	it('should create a ClayComponent, run default event handler on event emit and prevent default listener', () => {
		const defaultEventHandler = {
			handleEventName: function(event) {
				event.preventDefault();
			},
		};

		component = new MyComponent({
			defaultEventHandler: defaultEventHandler,
		});

		component.eventNameDefaultListener = function() {};

		const spy = jest.spyOn(component, 'eventNameDefaultListener');

		component.addListener(
			'eventName',
			component.eventNameDefaultListener,
			true
		);

		component.emit('eventName');

		expect(spy).not.toHaveBeenCalled();
	});
});
