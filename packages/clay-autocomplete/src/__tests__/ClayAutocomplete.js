import {triggerEvent} from 'metal-dom';
import ClayAutocomplete from '../ClayAutocomplete';

let component;
let dataSource = [
	'Bread',
	'Ammonia cookie',
	'Cuisine of Antebellum America',
	'Apple butter',
	'Apple sauce',
	'Baked potato',
	'Barbecue',
	'Bear claw',
	'Beef Manhattan',
	'Blue cheese dressing',
	'Blue-plate special',
	'Bookbinder soup',
	'Breakfast burrito',
	'Brunswick stew',
	'Buffalo burger',
	'Buffalo wing',
	'Bull roast',
	'Burnt ends',
	'Butter cookie',
];

describe('ClayAutocomplete', function() {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayAutocomplete({
			dataSource,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayAutocomplete with classes', () => {
		component = new ClayAutocomplete({
			dataSource,
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayAutocomplete with id', () => {
		component = new ClayAutocomplete({
			dataSource,
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayAutocomplete with input name', () => {
		component = new ClayAutocomplete({
			dataSource,
			inputName: 'input name',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayAutocomplete with input element classes', () => {
		component = new ClayAutocomplete({
			dataSource,
			inputElementClasses: 'input element classes',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayAutocomplete with input value', () => {
		component = new ClayAutocomplete({
			dataSource,
			inputValue: 'input value',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayAutocomplete with placeholder', () => {
		component = new ClayAutocomplete({
			dataSource,
			placeholder: 'Placeholder',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayAutocomplete with unstable_content', () => {
		component = new ClayAutocomplete({
			dataSource,
			unstable_content: 'Some content...',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayAutocomplete and emit an event on input blur', () => {
		component = new ClayAutocomplete({
			dataSource,
		});

		const spy = jest.spyOn(component, 'emit');
		const {input} = component.refs;

		input.focus();
		input.blur();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'inputOnBlur',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a ClayAutocomplete and emit an event on input focus', () => {
		component = new ClayAutocomplete({
			dataSource,
		});

		const spy = jest.spyOn(component, 'emit');
		const {input} = component.refs;

		input.focus();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'inputOnFocus',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a ClayAutocomplete and emit an event on input keydown', () => {
		component = new ClayAutocomplete({
			dataSource,
		});

		const spy = jest.spyOn(component, 'emit');
		const {input} = component.refs;

		input.value = 'foo';
		triggerEvent(input, 'keydown', {key: 'o'});

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				data: {
					element: expect.any(Object),
					eventFromInput: true,
					key: 'o',
					value: 'foo',
				},
				name: 'inputOnKeydown',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a ClayAutocomplete and emit an event on query change', () => {
		component = new ClayAutocomplete({
			dataSource,
		});

		const spy = jest.spyOn(component, 'emit');
		const {input} = component.refs;

		input.value = 'bar';
		triggerEvent(input, 'input', {data: 'r'});

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				data: {
					value: 'bar',
					char: 'r',
				},
				name: 'inputChange',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a ClayAutocomplete with allowed characters and emit an event on query change', () => {
		component = new ClayAutocomplete({
			allowedCharacters: /[a-zA-Z0-9_]/g,
			dataSource,
		});

		const spy = jest.spyOn(component, 'emit');
		const {input} = component.refs;

		input.value = 'b!ar#$';
		triggerEvent(input, 'input', {});

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				data: {
					value: 'bar',
					char: 'r',
				},
				name: 'inputChange',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a ClayAutocomplete and emit an event on item selected', () => {
		component = new ClayAutocomplete({
			dataSource,
		});

		const spy = jest.spyOn(component, 'emit');
		const {input} = component.refs;

		input.value = 'brea';
		triggerEvent(input, 'input', {data: 'a'});
		triggerEvent(input, 'keydown', {key: 'ArrowDown'});

		jest.runAllTimers();

		const {dropdown} = component.refs.dataProvider.refs.portal.refs;

		dropdown.querySelector('a[data-dropdown-item-index]').click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				data: {
					item: {
						label: 'Bread',
						value: 'Bread',
					},
				},
				name: 'itemSelected',
				originalEvent: expect.any(Object),
			})
		);
		expect(component).toMatchSnapshot();
	});

	it('should render a ClayAutocomplete and emit an event on item selected when press enter', () => {
		component = new ClayAutocomplete({
			dataSource,
		});

		const spy = jest.spyOn(component, 'emit');
		const {input} = component.refs;

		input.value = 'brea';
		triggerEvent(input, 'input', {data: 'a'});
		triggerEvent(input, 'keydown', {key: 'ArrowDown'});

		jest.runAllTimers();

		const {dropdown} = component.refs.dataProvider.refs.portal.refs;

		triggerEvent(
			dropdown.querySelector('a[data-dropdown-item-index]'),
			'keydown',
			{key: 'Enter'}
		);

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				data: {
					item: {
						label: 'Bread',
						value: 'Bread',
					},
				},
				name: 'itemSelected',
				originalEvent: expect.any(Object),
			})
		);
		expect(component).toMatchSnapshot();
	});

	it('should render a ClayAutocomplete and not emit an event on item selected when press enter on input', () => {
		component = new ClayAutocomplete({
			dataSource,
		});

		const spy = jest.spyOn(component, 'emit');
		const {input} = component.refs;

		input.value = 'brea';
		triggerEvent(input, 'input', {data: 'a'});
		triggerEvent(input, {key: 'Enter'});

		jest.runAllTimers();

		expect(spy).not.toHaveBeenCalledWith(
			expect.objectContaining({
				data: 'Bread',
				name: 'itemSelected',
				originalEvent: expect.any(Object),
			})
		);
		expect(component).toMatchSnapshot();
	});

	it('should render a ClayAutocomplete and filtered items with structured data', () => {
		component = new ClayAutocomplete({
			dataSource: [
				{
					name: 'Bread',
				},
				{
					name: 'Ammonia cookie',
				},
			],
			extractData: elem => elem.name,
		});

		const {input} = component.refs;

		input.value = 'e';
		triggerEvent(input, 'input', {data: 'e'});

		jest.runAllTimers();

		expect(component).toMatchSnapshot();
	});

	describe('with keyboard interaction', () => {
		it('do nothing when the filtered items are empty', () => {
			component = new ClayAutocomplete({
				dataSource,
			});

			const {input} = component.refs;

			input.focus();

			triggerEvent(input, 'keydown', {key: 'ArrowDown'});
			expect(input).toEqual(document.activeElement);
			expect(component._dropdownItemFocused).toBe(null);
		});
		/*
		describe('when press the arrow up', () => {
			it('does nothing when it is in the input', () => {
				component = new ClayAutocomplete({
					dataSource,
				});

				const {input} = component.refs;

				input.value = 'brea';
				input.focus();
				triggerEvent(input, 'input', {data: 'a'});

				expect(component._dropdownItemFocused).toBe(null);

				jest.runAllTimers();

				triggerEvent(input, 'keydown', {key: 'ArrowUp'});
				expect(input).toEqual(document.activeElement);
				expect(component._dropdownItemFocused).toBe(null);
			});

			it('returns the focus to the input when it is in the first item', () => {
				component = new ClayAutocomplete({
					dataSource,
				});

				const {input, dataProvider} = component.refs;
				const {dropdown} = dataProvider.refs.portal.refs;

				input.value = 'brea';
				input.focus();
				triggerEvent(input, 'input', {data: 'a'});

				expect(component._dropdownItemFocused).toBe(null);

				jest.runAllTimers();

				component._dropdownItemFocused = 0;

				triggerEvent(dropdown, 'keydown', {key: 'ArrowUp'});
				expect(input).toEqual(document.activeElement);
				expect(component._dropdownItemFocused).toBe(null);
			});

			it('navigate between items to up', () => {
				component = new ClayAutocomplete({
					dataSource,
				});

				const {input} = component.refs;

				input.value = 'brea';
				input.focus();
				triggerEvent(input, 'input', {data: 'a'});

				expect(component._dropdownItemFocused).toBe(null);

				jest.runAllTimers();

				const {
					dropdown,
				} = component.refs.dataProvider.refs.portal.refs;
				const elements = dropdown.querySelectorAll(
					'a[data-dropdown-item-index]'
				);

				component._dropdownItemFocused = 1;

				triggerEvent(dropdown, 'keydown', {key: 'ArrowUp'});
				expect(elements[0]).toEqual(document.activeElement);
				expect(component._dropdownItemFocused).toBe(0);

				triggerEvent(dropdown, 'keydown', {key: 'ArrowUp'});
				expect(input).toEqual(document.activeElement);
				expect(component._dropdownItemFocused).toBe(null);
			});
		});

		describe('when press the arrow down', () => {
			it('exit the input to the dropdown', () => {
				component = new ClayAutocomplete({
					dataSource,
				});

				const {input} = component.refs;

				input.value = 'brea';
				input.focus();
				triggerEvent(input, 'input', {data: 'a'});

				expect(component._dropdownItemFocused).toBe(null);

				jest.runAllTimers();

				const {
					dropdown,
				} = component.refs.dataProvider.refs.portal.refs;

				triggerEvent(input, 'keydown', {key: 'ArrowDown'});
				expect(
					dropdown.querySelector('a[data-dropdown-item-index]')
				).toEqual(document.activeElement);
				expect(component._dropdownItemFocused).toBe(0);
			});

			it('move through dropdown items to the end', () => {
				component = new ClayAutocomplete({
					dataSource,
				});

				const {input} = component.refs;

				input.value = 'brea';
				input.focus();
				triggerEvent(input, 'input', {data: 'a'});

				expect(component._dropdownItemFocused).toBe(null);

				jest.runAllTimers();

				const {
					dropdown,
				} = component.refs.dataProvider.refs.portal.refs;
				const elements = dropdown.querySelectorAll(
					'a[data-dropdown-item-index]'
				);

				triggerEvent(input, 'keydown', {key: 'ArrowDown'});
				expect(elements[0]).toEqual(document.activeElement);
				expect(component._dropdownItemFocused).toBe(0);

				triggerEvent(dropdown, 'keydown', {
					key: 'ArrowDown',
				});
				expect(elements[1]).toEqual(document.activeElement);
				expect(component._dropdownItemFocused).toBe(1);
			});

			it('back to the beginning when it arrives at the last item', () => {
				component = new ClayAutocomplete({
					dataSource,
				});

				const {input} = component.refs;

				input.value = 'brea';
				triggerEvent(input, 'input', {data: 'a'});
				jest.runAllTimers();

				const {
					dropdown,
				} = component.refs.dataProvider.refs.portal.refs;
				const elements = dropdown.querySelectorAll(
					'a[data-dropdown-item-index]'
				);

				component._dropdownItemFocused = 1;

				triggerEvent(input, 'keydown', {key: 'ArrowDown'});
				expect(elements[0]).toEqual(document.activeElement);
				expect(component._dropdownItemFocused).toBe(0);
			});
		});
		*/
	});
});
