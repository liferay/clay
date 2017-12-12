import ClayDropdownBase from '../ClayDropdownBase';

let clayDropdownBase;

describe('ClayDropdownBase', function() {
	afterEach(() => {
		if (clayDropdownBase) {
			clayDropdownBase.dispose();
		}
	});

	it('should render a dropdown with classes', () => {
		clayDropdownBase = new ClayDropdownBase({
			elementClasses: 'my-cutsom-class',
			items: [
				{
					label: 'Item 1',
					url: 'item1url',
				},
				{
					label: 'Item 2',
					url: 'item2url',
				},
			],
			label: 'Trigger',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with id', () => {
		clayDropdownBase = new ClayDropdownBase({
			id: 'myId',
			items: [
				{
					label: 'Item 1',
					url: 'item1url',
				},
				{
					label: 'Item 2',
					url: 'item2url',
				},
			],
			label: 'Trigger',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with trigger custom classes', () => {
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					label: 'Item 1',
					url: 'item1url',
				},
				{
					label: 'Item 2',
					url: 'item2url',
				},
			],
			label: 'Trigger',
			triggerClasses: 'my-cutsom-class',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with items of type item', () => {
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					label: 'Item 1',
					url: 'item1url',
				},
				{
					label: 'Item 2',
					url: 'item2url',
				},
			],
			label: 'Trigger',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with items of type item and active', () => {
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					active: true,
					label: 'Item 1',
					url: 'item1url',
				},
			],
			label: 'Trigger',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with items of type item and disabled', () => {
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					disabled: true,
					label: 'Item 1',
					url: 'item1url',
				},
			],
			label: 'Trigger',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown of type form with items', () => {
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					disabled: true,
					label: 'Item 1',
					url: 'item1url',
				},
			],
			label: 'Trigger',
			type: 'form',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with items of type checkbox', () => {
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					inputName: 'checkbox1name',
					inputValue: 'checkbox1value',
					label: 'Item 1',
					type: 'checkbox',
				},
				{
					inputName: 'checkbox2name',
					inputValue: 'checkbox2value',
					label: 'Item 2',
					separator: true,
					type: 'checkbox',
				},
			],
			label: 'Trigger',
			type: 'form',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with type list with items of type checkbox', () => {
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					inputName: 'checkbox1name',
					inputValue: 'checkbox1value',
					label: 'Item 1',
					separator: true,
					type: 'checkbox',
				},
				{
					inputName: 'checkbox2name',
					inputValue: 'checkbox2value',
					label: 'Item 2',
					separator: true,
					type: 'checkbox',
				},
			],
			label: 'Trigger',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with items of type checkbox and checked', () => {
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					checked: true,
					inputName: 'checkbox1name',
					inputValue: 'checkbox1value',
					label: 'Item 1',
					type: 'checkbox',
				},
			],
			label: 'Trigger',
			type: 'form',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	// eslint-disable-next-line
	it('should render a dropdown with items of type checkbox and disabled', () => {
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					disabled: true,
					inputName: 'checkbox1name',
					inputValue: 'checkbox1value',
					label: 'Item 1',
					type: 'checkbox',
				},
			],
			label: 'Trigger',
			type: 'form',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with items of type radio', () => {
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					items: [
						{
							label: 'Item 1',
							inputValue: '1',
						},
						{
							label: 'Item 2',
							inputValue: '2',
						},
					],
					inputName: 'item1radio',
					label: 'Group 1',
					separator: true,
					type: 'radiogroup',
				},
				{
					items: [
						{
							label: 'Item 4',
							inputValue: '4',
						},
						{
							label: 'Item 5',
							inputValue: '5',
						},
					],
					inputName: 'item2radio',
					label: 'Group 2',
					type: 'radiogroup',
				},
			],
			label: 'Trigger Label',
			spritemap: 'icons.svg',
			type: 'form',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with items of type radio and checked', () => {
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					items: [
						{
							label: 'Item 1',
							inputValue: '1',
						},
						{
							checked: true,
							label: 'Item 2',
							inputValue: '2',
						},
					],
					inputName: 'item1radio',
					label: 'Group 1',
					separator: true,
					type: 'radiogroup',
				},
				{
					items: [
						{
							label: 'Item 4',
							inputValue: '4',
						},
						{
							checked: true,
							label: 'Item 5',
							inputValue: '5',
						},
					],
					inputName: 'item2radio',
					label: 'Group 2',
					type: 'radiogroup',
				},
			],
			label: 'Trigger Label',
			spritemap: 'icons.svg',
			type: 'form',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with items of type radio and disabled', () => {
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					items: [
						{
							label: 'Item 1',
							inputValue: '1',
						},
						{
							disabled: true,
							label: 'Item 3',
							inputValue: '3',
						},
					],
					inputName: 'item1radio',
					label: 'Group 1',
					separator: true,
					type: 'radiogroup',
				},
				{
					items: [
						{
							label: 'Item 4',
							inputValue: '4',
						},
						{
							disabled: true,
							label: 'Item 6',
							inputValue: '6',
						},
					],
					inputName: 'item2radio',
					label: 'Group 2',
					type: 'radiogroup',
				},
			],
			label: 'Trigger Label',
			spritemap: 'icons.svg',
			type: 'form',
		});
		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with groups', () => {
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					label: 'Group 1',
					items: [
						{
							active: true,
							label: 'Item 1',
							url: '#1',
						},
						{
							label: 'Item 2',
							url: '#2',
						},
					],
					type: 'group',
				},
				{
					label: 'Group 2',
					items: [
						{
							label: 'Item 3',
							url: '#3',
						},
						{
							disabled: true,
							label: 'Item 3',
							url: '#4',
						},
					],
					type: 'group',
				},
			],
			label: 'Trigger Label',
			spritemap: 'icons.svg',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown of type form with groups', () => {
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					label: 'Group 1',
					items: [
						{
							active: true,
							label: 'Item 1',
							url: '#1',
						},
						{
							label: 'Item 2',
							url: '#2',
						},
					],
					separator: true,
					type: 'group',
				},
				{
					label: 'Group 2',
					items: [
						{
							label: 'Item 3',
							url: '#3',
						},
						{
							disabled: true,
							label: 'Item 3',
							url: '#4',
						},
					],
					type: 'group',
				},
			],
			label: 'Trigger Label',
			spritemap: 'icons.svg',
			type: 'form',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with items with separators', () => {
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					label: 'Element 1',
					separator: true,
					url: '#1',
				},
				{
					label: 'Group 1',
					items: [
						{
							label: 'Item 2',
							url: '#2',
						},
						{
							label: 'Item 3',
							url: '#3',
						},
					],
					separator: true,
					type: 'group',
				},
				{
					label: 'Element 4',
					url: '#4',
				},
			],
			label: 'Trigger Label',
			spritemap: 'icons.svg',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with icons on the left', () => {
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					icon: 'check',
					label: 'Item 1',
					url: 'item1url',
				},
				{
					icon: 'check',
					label: 'Item 2',
					url: 'item2url',
				},
			],
			itemsIconAlignment: 'left',
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with icons on the right', () => {
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					icon: 'check',
					label: 'Item 1',
					url: 'item1url',
				},
				{
					icon: 'check',
					label: 'Item 2',
					url: 'item2url',
				},
			],
			itemsIconAlignment: 'right',
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with help text', () => {
		clayDropdownBase = new ClayDropdownBase({
			helpText: 'Help!',
			items: [
				{
					label: 'Item 1',
					url: 'item1url',
				},
			],
			label: 'Trigger',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with primary button', () => {
		clayDropdownBase = new ClayDropdownBase({
			button: {
				label: 'Button',
				style: 'primary',
			},
			items: [
				{
					label: 'Item 1',
					url: 'item1url',
				},
			],
			label: 'Trigger',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with secondary button', () => {
		clayDropdownBase = new ClayDropdownBase({
			button: {
				label: 'Button',
				style: 'secondary',
			},
			items: [
				{
					label: 'Item 1',
					url: 'item1url',
				},
			],
			label: 'Trigger',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a dropdown with caption', () => {
		clayDropdownBase = new ClayDropdownBase({
			caption: 'My caption!',
			items: [
				{
					label: 'Item 1',
					url: 'item1url',
				},
			],
			label: 'Trigger',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should render a searchable dropdown', () => {
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					label: 'Item 1',
					url: 'item1url',
				},
				{
					label: 'Item 2',
					url: 'item2url',
				},
			],
			label: 'Trigger',
			searchable: true,
			spritemap: 'icons.svg',
		});

		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should open dropdown', () => {
		jest.useFakeTimers();
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					label: 'Item 1',
					url: 'item1url',
				},
			],
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		expect(clayDropdownBase.expanded).toBeFalsy();

		clayDropdownBase.toggle();
		jest.runAllTimers();

		expect(clayDropdownBase.expanded).toBeTruthy();
		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should close dropdown', () => {
		jest.useFakeTimers();
		clayDropdownBase = new ClayDropdownBase({
			expanded: true,
			items: [
				{
					label: 'Item 1',
					url: 'item1url',
				},
			],
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		clayDropdownBase.toggle();
		jest.runAllTimers();

		expect(clayDropdownBase.expanded).toBeFalsy();
		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should close dropdown on document click', () => {
		jest.useFakeTimers();
		clayDropdownBase = new ClayDropdownBase({
			items: [
				{
					label: 'Item 1',
					url: 'item1url',
				},
			],
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		document.body.click();
		jest.runAllTimers();

		expect(clayDropdownBase.expanded).toBeFalsy();
		expect(clayDropdownBase).toMatchSnapshot();
	});

	it('should filter items', () => {
		let item1 = {
			label: 'Item 1',
			url: 'item1url',
		};

		let item2 = {
			label: 'Item 2',
			url: 'item2url',
		};

		let item3 = {
			items: [
				{
					label: 'Item 3',
				},
			],
			label: 'Group 1',
			type: 'group',
		};

		let items = [item1, item2, item3];

		clayDropdownBase = new ClayDropdownBase({
			items: items,
			label: 'Trigger',
			searchable: true,
			spritemap: 'icons.svg',
		});

		expect(clayDropdownBase.items).toEqual(items);

		let input = clayDropdownBase.refs['searchInput'];
		input.value = 'Item 1';

		clayDropdownBase.handleSearch_({
			delegateTarget: input,
		});

		expect(clayDropdownBase.items).toEqual([item1]);

		input.value = 'Item 2';

		clayDropdownBase.handleSearch_({
			delegateTarget: input,
		});

		input.value = 'Item 3';

		clayDropdownBase.handleSearch_({
			delegateTarget: input,
		});

		expect(clayDropdownBase.items).toEqual([item3]);

		input.value = '';

		clayDropdownBase.handleSearch_({
			delegateTarget: input,
		});

		expect(clayDropdownBase.items).toEqual([item1, item2, item3]);
	});

	it('should render a dropdown and emit an event on button click', () => {
		clayDropdownBase = new ClayDropdownBase({
			button: {
				label: 'Button',
				style: 'primary',
			},
			items: [
				{
					label: 'Item 1',
					url: 'item1url',
				},
			],
			label: 'Trigger',
		});

		const spy = jest.spyOn(clayDropdownBase, 'emit');

		clayDropdownBase.refs.dropdownButton.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith('buttonClicked', expect.any(Object));
	});
});
