import {triggerEvent} from 'metal-dom';
import ClayMultiSelect from '../ClayMultiSelect';

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
let spritemap = 'icons.svg';
let helpText = 'You can use a comma to enter tags';

describe('ClayMultiSelect', function() {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayMultiSelect({
			dataSource,
			helpText,
			spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayMultiSelect with classes', () => {
		component = new ClayMultiSelect({
			dataSource,
			elementClasses: 'my-custom-class',
			helpText,
			spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayMultiSelect with id', () => {
		component = new ClayMultiSelect({
			dataSource,
			helpText,
			id: 'myId',
			spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayMultiSelect with placeholder', () => {
		component = new ClayMultiSelect({
			dataSource,
			helpText,
			placeholder: 'Placeholder',
			spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayMultiSelect with label', () => {
		component = new ClayMultiSelect({
			dataSource,
			helpText,
			inputName: 'foo',
			label: 'Foo',
			spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayMultiSelect with selected items', () => {
		component = new ClayMultiSelect({
			dataSource,
			helpText,
			selectedItems: [
				{
					label: 'Foo',
					value: 'foo',
				},
				{
					label: 'Bar',
					value: 'bar',
				},
			],
			spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayMultiSelect with input name from selected items', () => {
		component = new ClayMultiSelect({
			dataSource,
			helpText,
			inputName: 'foo',
			spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayMultiSelect with select button hidden', () => {
		component = new ClayMultiSelect({
			dataSource,
			helpText,
			showSelectButton: false,
			spritemap,
		});

		expect(component).toMatchSnapshot();
	});
	/*
	it('should render a ClayMultiSelect and add the class focus when focus on input', () => {
		component = new ClayMultiSelect({
			helpText,
			spritemap,
		});

		const {input} = component.refs.autocomplete.refs;

		triggerEvent(input, 'focus', {data: 'a'});

		jest.runAllTimers();

		expect(component._inputFocus).toBeTruthy();
		expect(component).toMatchSnapshot();
	});

	it('should render a ClayMultiSelect and remove the focus when blur on input', () => {
		component = new ClayMultiSelect({
			_inputFocus: true,
			dataSource,
			helpText,
			spritemap,
		});

		const {input} = component.refs.autocomplete.refs;

		triggerEvent(input, 'focus', {data: 'a'});

		expect(component._inputFocus).toBeTruthy();

		triggerEvent(input, 'blur', {data: 'a'});

		jest.runAllTimers();

		expect(component._inputFocus).toBeFalsy();
		expect(component).toMatchSnapshot();
	});
*/
	it('should render a ClayMultiSelect and keep the focus of the input when selecting an item', () => {
		component = new ClayMultiSelect({
			dataSource,
			helpText,
			selectedItems: [
				{
					label: 'Foo',
					value: 'foo',
				},
				{
					label: 'Bar',
					value: 'bar',
				},
			],
			spritemap,
		});

		const {autocomplete} = component.refs;

		triggerEvent(autocomplete.refs.input, 'keydown', {
			key: 'Backspace',
		});

		jest.runAllTimers();

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayMultiSelect and clear the input values after the onblur event', () => {
		component = new ClayMultiSelect({
			dataSource,
			helpText,
			spritemap,
			inputValue: 'foo',
		});

		const {input} = component.refs.autocomplete.refs;
		triggerEvent(input, 'blur', {});
		jest.runAllTimers();

		expect(component.inputValue).toBe('');
		expect(component).toMatchSnapshot();
	});

	it('should render a ClayMultiSelect and emit the onblur event', () => {
		component = new ClayMultiSelect({
			dataSource,
			helpText,
			spritemap,
			inputValue: 'foo',
		});

		const spy = jest.spyOn(component, 'emit');
		const {input} = component.refs.autocomplete.refs;

		triggerEvent(input, 'blur', {});
		jest.runAllTimers();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'inputBlur',
				originalEvent: expect.any(Object),
			})
		);
	});
	/*
	it('should render a ClayMultiSelect with multiple values with comma at the end', () => {
		component = new ClayMultiSelect({
			dataSource,
			helpText,
			spritemap,
		});

		const {input} = component.refs.autocomplete.refs;

		input.value = 'a , b , something,';
		triggerEvent(input, 'input', {data: {char:',', value: 'a , b , something,'}});

		jest.runAllTimers();

		expect(component).toMatchSnapshot();
	});
*/
	describe('Lifecycle', () => {
		it('should emit an event when the select button is clicked', () => {
			component = new ClayMultiSelect({
				dataSource,
				helpText,
				spritemap,
			});

			const spy = jest.spyOn(component, 'emit');
			const {button} = component.refs;

			button.element.click();

			expect(spy).toHaveBeenCalled();
			expect(spy).toHaveBeenCalledWith(
				expect.objectContaining({
					name: 'selectButtonClick',
					originalEvent: expect.any(Object),
				})
			);
		});

		it('should emit an event when the dropdown item is selected', () => {
			component = new ClayMultiSelect({
				dataSource,
				helpText,
				selectedItems: [
					{
						label: 'Foo',
						value: 'foo',
					},
					{
						label: 'Bar',
						value: 'bar',
					},
				],
				spritemap,
			});

			const spy = jest.spyOn(component, 'emit');
			const {input} = component.refs.autocomplete.refs;

			input.value = 'bre';
			triggerEvent(input, 'input', {data: {char: 'a', value: 'a'}});
			triggerEvent(input, 'keydown', {key: 'ArrowDown'});

			jest.runAllTimers();

			const {
				dropdown,
			} = component.refs.autocomplete.refs.dataProvider.refs.portal.refs;

			dropdown.querySelector('a[data-dropdown-item-index]').click();

			expect(spy).toHaveBeenCalled();
			expect(spy).toHaveBeenCalledWith(
				expect.objectContaining({
					data: expect.any(Object),
					name: 'labelItemAdded',
				})
			);
		});

		it('should emit an event when the input changed', () => {
			component = new ClayMultiSelect({
				dataSource,
				helpText,
				spritemap,
			});

			const spy = jest.spyOn(component, 'emit');
			const {input} = component.refs.autocomplete.refs;

			input.value = 'foo';
			triggerEvent(input, 'input', {data: {char: 'o', value: 'foo'}});

			jest.runAllTimers();

			expect(spy).toHaveBeenCalled();
			expect(spy).toHaveBeenCalledWith(
				expect.objectContaining({
					data: {
						char: 'o',
						value: 'foo',
					},
					name: 'inputChange',
					originalEvent: expect.any(Object),
				})
			);
		});

		/*
		describe('itemAdded', () => {
			it('should emit an event when press enter on the input', () => {
				component = new ClayMultiSelect({
					dataSource,
					helpText,
					spritemap,
				});

				const spy = jest.spyOn(component, 'emit');
				const {input} = component.refs.autocomplete.refs;

				input.value = 'foo';
				triggerEvent(input, 'keydown', {key: 'Enter'});

				jest.runAllTimers();

				expect(spy).toHaveBeenCalled();
				expect(spy).toHaveBeenCalledWith(
					expect.objectContaining({
						data: {
							item: {
								label: 'foo',
								value: 'foo',
							},
						},
						name: 'itemAdded',
						originalEvent: expect.any(Object),
					})
				);
			});

			it('should emit an event when press comma on the input', () => {
				component = new ClayMultiSelect({
					dataSource,
					helpText,
					spritemap,
				});

				const spy = jest.spyOn(component, 'emit');
				const {input} = component.refs.autocomplete.refs;

				input.value = 'bar,';
				triggerEvent(input, 'input', {data: {char: ',', value: 'bar,'}});

				jest.runAllTimers();

				expect(spy).toHaveBeenCalled();
				expect(spy).toHaveBeenCalledWith(
					expect.objectContaining({
						data: {
							item: {
								label: 'bar',
								value: 'bar',
							},
						},
						name: 'labelItemAdded',
						originalEvent: expect.any(Object),
					})
				);
			});

			it('should not emit an event when the input value exists on the selected items', () => {
				component = new ClayMultiSelect({
					dataSource,
					helpText,
					selectedItems: [
						{
							label: 'Foo',
							value: '1',
						},
						{
							label: 'Bar',
							value: '2',
						},
					],
					spritemap,
				});

				const spy = jest.spyOn(component, 'emit');
				const {input} = component.refs.autocomplete.refs;

				input.value = 'Foo';
				triggerEvent(input, 'keydown', {key: 'Enter'});

				jest.runAllTimers();

				expect(spy).not.toHaveBeenCalledWith(
					expect.objectContaining({
						data: {
							item: {
								label: 'Foo',
								value: 'Foo',
							},
						},
						name: 'itemAdded',
						originalEvent: expect.any(Object),
					})
				);
				expect(component).toMatchSnapshot();
			});

		});

		describe('itemRemoved', () => {
			it('should emit an event when the button close from item is clicked', () => {
				component = new ClayMultiSelect({
					dataSource,
					helpText,
					selectedItems: [
						{
							label: 'Foo',
							value: 'foo',
						},
						{
							label: 'Bar',
							value: 'bar',
						},
					],
					spritemap,
				});

				const spy = jest.spyOn(component, 'emit');
				const {autocomplete} = component.refs;

				autocomplete.refs.item1.refs.closeButton.element.click();

				expect(spy).toHaveBeenCalled();
				expect(spy).toHaveBeenCalledWith(
					expect.objectContaining({
						data: {
							item: {
								label: 'Bar',
								value: 'bar',
							},
						},
						name: 'itemRemoved',
						originalEvent: expect.any(Object),
					})
				);
			});

			it('should emit an event when the item is focused and press backspace', () => {
				component = new ClayMultiSelect({
					dataSource,
					helpText,
					selectedItems: [
						{
							label: 'Foo',
							value: 'foo',
						},
						{
							label: 'Bar',
							value: 'bar',
						},
					],
					spritemap,
				});

				const spy = jest.spyOn(component, 'emit');
				const {autocomplete} = component.refs;

				triggerEvent(autocomplete.refs.input, 'keydown', {
					key: 'Backspace',
				});

				jest.runAllTimers();

				const items = autocomplete.element.querySelectorAll(
					'span[id="item-tag"]'
				);

				expect(items[1]).toEqual(document.activeElement);

				triggerEvent(autocomplete.element, 'keydown', {
					key: 'Backspace',
				});

				expect(spy).toHaveBeenCalled();
				expect(spy).toHaveBeenCalledWith(
					expect.objectContaining({
						data: {
							item: {
								label: 'Bar',
								value: 'bar',
							},
						},
						name: 'itemRemoved',
						originalEvent: expect.any(Object),
					})
				);
			});

			it('should emit an event when the item is focused and enter backspace', () => {
				component = new ClayMultiSelect({
					dataSource,
					helpText,
					selectedItems: [
						{
							label: 'Foo',
							value: 'foo',
						},
						{
							label: 'Bar',
							value: 'bar',
						},
					],
					spritemap,
				});

				const spy = jest.spyOn(component, 'emit');
				const {autocomplete} = component.refs;

				triggerEvent(autocomplete.refs.input, 'keydown', {
					key: 'Backspace',
				});

				jest.runAllTimers();

				const items = autocomplete.element.querySelectorAll(
					'span[id="item-tag"]'
				);

				expect(items[1]).toEqual(document.activeElement);

				triggerEvent(autocomplete.element, 'keydown', {key: 'Enter'});

				expect(spy).toHaveBeenCalled();
				expect(spy).toHaveBeenCalledWith(
					expect.objectContaining({
						data: {
							item: {
								label: 'Bar',
								value: 'bar',
							},
						},
						name: 'itemRemoved',
						originalEvent: expect.any(Object),
					})
				);
			});
		});
	});

	describe('with keyboard interaction', () => {
		it('should focus on the left item when press the arrow left', () => {
			component = new ClayMultiSelect({
				dataSource,
				helpText,
				selectedItems: [
					{
						label: 'Foo',
						value: 'foo',
					},
					{
						label: 'Bar',
						value: 'bar',
					},
				],
				spritemap,
			});

			const {autocomplete} = component.refs;

			triggerEvent(autocomplete.refs.input, 'keydown', {
				key: 'Backspace',
			});

			jest.runAllTimers();

			const items = autocomplete.element.querySelectorAll(
				'span[id="item-tag"]'
			);

			expect(items[1]).toEqual(document.activeElement);

			triggerEvent(autocomplete.element, 'keydown', {key: 'ArrowLeft'});
			expect(items[0]).toEqual(document.activeElement);
		});

		it('should focus on the right item when press the arrow right', () => {
			component = new ClayMultiSelect({
				dataSource,
				helpText,
				selectedItems: [
					{
						label: 'Foo',
						value: 'foo',
					},
					{
						label: 'Bar',
						value: 'bar',
					},
				],
				spritemap,
			});

			const {autocomplete} = component.refs;

			triggerEvent(autocomplete.refs.input, 'keydown', {
				key: 'Backspace',
			});

			jest.runAllTimers();

			const items = autocomplete.element.querySelectorAll(
				'span[id="item-tag"]'
			);

			expect(items[1]).toEqual(document.activeElement);

			triggerEvent(autocomplete.element, 'keydown', {key: 'ArrowLeft'});
			expect(items[0]).toEqual(document.activeElement);

			triggerEvent(autocomplete.element, 'keydown', {
				key: 'ArrowRight',
			});
			expect(items[1]).toEqual(document.activeElement);
		});

		it('should focus on the input when pressing the arrow right when the focus is on the first item', () => {
			component = new ClayMultiSelect({
				dataSource,
				helpText,
				selectedItems: [
					{
						label: 'Foo',
						value: 'foo',
					},
					{
						label: 'Bar',
						value: 'bar',
					},
				],
				spritemap,
			});

			const {autocomplete} = component.refs;

			triggerEvent(autocomplete.refs.input, 'keydown', {
				key: 'Backspace',
			});

			jest.runAllTimers();

			const items = autocomplete.element.querySelectorAll(
				'span[id="item-tag"]'
			);

			expect(items[1]).toEqual(document.activeElement);

			triggerEvent(autocomplete.element, 'keydown', {
				key: 'ArrowRight',
			});
			expect(autocomplete.refs.input).toEqual(document.activeElement);
		});

		it('do nothing when the focus is on the last item when press the arrow left', () => {
			component = new ClayMultiSelect({
				dataSource,
				helpText,
				selectedItems: [
					{
						label: 'Foo',
						value: 'foo',
					},
					{
						label: 'Bar',
						value: 'bar',
					},
				],
				spritemap,
			});

			const {autocomplete} = component.refs;

			triggerEvent(autocomplete.refs.input, 'keydown', {
				key: 'Backspace',
			});

			jest.runAllTimers();

			const items = autocomplete.element.querySelectorAll(
				'span[id="item-tag"]'
			);

			expect(items[1]).toEqual(document.activeElement);

			triggerEvent(autocomplete.element, 'keydown', {key: 'ArrowLeft'});
			expect(items[0]).toEqual(document.activeElement);

			triggerEvent(autocomplete.element, 'keydown', {key: 'ArrowLeft'});
			expect(items[0]).toEqual(document.activeElement);

			triggerEvent(autocomplete.element, 'keydown', {key: 'ArrowLeft'});
			expect(items[0]).toEqual(document.activeElement);
		});
		*/
	});
});
