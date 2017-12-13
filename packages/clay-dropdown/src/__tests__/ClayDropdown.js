import ClayDropdown from '../ClayDropdown';

let clayDropdown;

let items = [
	{
		href: 'item1url',
		label: 'Item 1',
	},
	{
		href: 'item2url',
		label: 'Item 2',
	},
	{
		active: true,
		href: 'item1ur3',
		label: 'Item 3',
	},
	{
		disabled: true,
		href: 'item1url',
		label: 'Item 4',
	},
	{
		inputName: 'checkbox5name',
		inputValue: 'checkbox5value',
		label: 'Item 5',
		type: 'checkbox',
	},
	{
		checked: true,
		inputName: 'checkbox6name',
		inputValue: 'checkbox7value',
		label: 'Item 7',
		type: 'checkbox',
	},
	{
		disabled: true,
		inputName: 'checkbox7name',
		inputValue: 'checkbox7value',
		label: 'Item 7',
		type: 'checkbox',
	},
	{
		items: [
			{
				label: 'Item 8',
				inputValue: 'radio8value',
			},
			{
				checked: true,
				label: 'Item 9',
				inputValue: 'radio9value',
			},
			{
				disabled: true,
				label: 'Item 10',
				inputValue: 'radio10value',
			},
		],
		inputName: 'radioname',
		label: 'Radio Group',
		separator: true,
		type: 'radiogroup',
	},
];

describe('ClayDropdown', function() {
	afterEach(() => {
		if (clayDropdown) {
			clayDropdown.dispose();
		}
	});

	it('should render a dropdown with items', () => {
		clayDropdown = new ClayDropdown({
			items: items,
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		expect(clayDropdown).toMatchSnapshot();
	});

	it('should render a dropdown with classes', () => {
		clayDropdown = new ClayDropdown({
			elementClasses: 'my-custom-class',
			items: items,
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		expect(clayDropdown).toMatchSnapshot();
	});

	it('should render a dropdown with id', () => {
		clayDropdown = new ClayDropdown({
			id: 'myId',
			items: items,
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		expect(clayDropdown).toMatchSnapshot();
	});

	it('should render a dropdown with trigger custom classes', () => {
		clayDropdown = new ClayDropdown({
			items: items,
			label: 'Trigger',
			spritemap: 'icons.svg',
			triggerClasses: 'my-custom-class',
		});

		expect(clayDropdown).toMatchSnapshot();
	});

	it('should render an expanded dropdown', () => {
		clayDropdown = new ClayDropdown({
			expanded: true,
			items: items,
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		expect(clayDropdown).toMatchSnapshot();
	});

	it('should render a dropdown with an icon trigger', () => {
		clayDropdown = new ClayDropdown({
			icon: 'list',
			items: items,
			spritemap: 'icons.svg',
		});

		expect(clayDropdown).toMatchSnapshot();
	});

	it('should render a searchable dropdown', () => {
		clayDropdown = new ClayDropdown({
			items: items,
			label: 'Trigger',
			searchable: true,
			spritemap: 'icons.svg',
		});

		expect(clayDropdown).toMatchSnapshot();
	});

	it('should render a dropdown and emit an event on button click', () => {
		clayDropdown = new ClayDropdown({
			button: {
				label: 'Button',
				style: 'primary',
			},
			items: [
				{
					href: 'item1url',
					label: 'Item 1',
				},
			],
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		const spy = jest.spyOn(clayDropdown.refs.dropdown, 'emit');

		clayDropdown.refs.dropdown.refs.dropdownButton.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith('buttonClicked', expect.any(Object));
	});
});
