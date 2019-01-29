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

	describe('Lifecycle', () => {
		it('should emit an event when the button is clicked', () => {
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
					name: 'buttonClicked',
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
			triggerEvent(input, 'input', {data: 'a'});
			triggerEvent(input, 'keydown', {key: 'ArrowDown'});

			jest.runAllTimers();

			const {
				dropdown,
			} = component.refs.autocomplete.refs.dataProvider.refs;

			dropdown.querySelector('a[data-dropdown-item-index]').click();

			expect(spy).toHaveBeenCalled();
			expect(spy).toHaveBeenCalledWith(
				expect.objectContaining({
					data: expect.any(Object),
					name: 'itemSelected',
					originalEvent: expect.any(Object),
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
			triggerEvent(input, 'input', {data: 'o'});

			jest.runAllTimers();

			expect(spy).toHaveBeenCalled();
			expect(spy).toHaveBeenCalledWith(
				expect.objectContaining({
					data: {
						value: 'foo',
					},
					name: 'queryChange',
					originalEvent: expect.any(Object),
				})
			);
		});

		it('should emit an event when items are filtered', () => {
			component = new ClayMultiSelect({
				dataSource,
				helpText,
				spritemap,
			});

			const spy = jest.spyOn(component, 'emit');
			const {input} = component.refs.autocomplete.refs;

			input.value = 'bre';
			triggerEvent(input, 'input', {data: 'e'});

			jest.runAllTimers();

			expect(spy).toHaveBeenCalled();
			expect(spy).toHaveBeenCalledWith(
				expect.objectContaining({
					data: expect.any(Object),
					name: 'filteredItems',
					originalEvent: expect.any(Object),
				})
			);
		});

		describe('itemAdded', () => {
			it('should not emit an event when allowItemCreationFromInput is false by press enter on input', () => {
				component = new ClayMultiSelect({
					allowItemCreationFromInput: false,
					dataSource,
					helpText,
					spritemap,
				});

				const spy = jest.spyOn(component, 'emit');
				const {input} = component.refs.autocomplete.refs;

				input.value = 'foo';
				triggerEvent(input, 'keydown', {key: 'Enter'});

				jest.runAllTimers();

				expect(spy).not.toHaveBeenCalled();
				expect(spy).not.toHaveBeenCalledWith(
					expect.objectContaining({
						data: expect.any(Object),
						name: 'itemAdded',
						originalEvent: expect.any(Object),
					})
				);
			});

			it('should not emit an event when allowItemCreationFromInput is false by press comma on input', () => {
				component = new ClayMultiSelect({
					allowItemCreationFromInput: false,
					dataSource,
					helpText,
					spritemap,
				});

				const spy = jest.spyOn(component, 'emit');
				const {input} = component.refs.autocomplete.refs;

				input.value = 'bar';
				triggerEvent(input, 'input', {data: ','});

				jest.runAllTimers();

				expect(spy).not.toHaveBeenCalledWith(
					expect.objectContaining({
						data: expect.any(Object),
						name: 'itemAdded',
						originalEvent: expect.any(Object),
					})
				);
			});

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

				input.value = 'bar';
				triggerEvent(input, 'input', {data: ','});

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
						name: 'itemAdded',
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
							label: 'foo',
							value: 'foo',
						},
					],
					spritemap,
				});

				const spy = jest.spyOn(component, 'emit');
				const {input} = component.refs.autocomplete.refs;

				input.value = 'foo';
				triggerEvent(input, 'keydown', {key: 'Enter'});

				jest.runAllTimers();

				expect(spy).not.toHaveBeenCalled();
				expect(spy).not.toHaveBeenCalledWith(
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
	});
});
