import ClayComponent from '../ClayComponent';

let component;

describe('ClayComponent', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should create a ClayComponent with accesible data attributes', () => {
		component = new ClayComponent({
			data: {
				myAttribute1: 'myValue1',
				myAttribute2: 'myValue2',
			},
			id: 'prueba',
		});

		expect(component.element.getAttribute('myAttribute1')).toEqual(
			'myValue1'
		);
		expect(component.element.getAttribute('myAttribute2')).toEqual(
			'myValue2'
		);
	});
});
