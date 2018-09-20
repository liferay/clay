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

	it('should render a disabled dropdown with items', () => {
		clayDropdown = new ClayDropdown({
			disabled: true,
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

	it('should render a dropdown with the `link` style', () => {
		clayDropdown = new ClayDropdown({
			items: items,
			label: 'Trigger',
			spritemap: 'icons.svg',
			style: 'link',
		});

		expect(clayDropdown).toMatchSnapshot();
	});

	it('should render a dropdown with the `primary` style', () => {
		clayDropdown = new ClayDropdown({
			items: items,
			label: 'Trigger',
			spritemap: 'icons.svg',
			style: 'primary',
		});

		expect(clayDropdown).toMatchSnapshot();
	});

	it('should render a dropdown with the `secondary` style', () => {
		clayDropdown = new ClayDropdown({
			items: items,
			label: 'Trigger',
			spritemap: 'icons.svg',
			style: 'secondary',
		});

		expect(clayDropdown).toMatchSnapshot();
	});

	it('should render a dropdown with the `unstyled` style by default', () => {
		clayDropdown = new ClayDropdown({
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

	it('should render a dropdown with trigger size', () => {
		clayDropdown = new ClayDropdown({
			items: items,
			label: 'Trigger',
			spritemap: 'icons.svg',
			triggerSize: 'sm',
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

	it('should keep the expanded updated with that of the dropdown base', () => {
		jest.useFakeTimers();
		clayDropdown = new ClayDropdown({
			items: items,
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		expect(clayDropdown.expanded).toBeFalsy();

		clayDropdown.refs.dropdown.toggle();
		jest.runAllTimers();

		expect(clayDropdown.expanded).toBeTruthy();
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

	it('should render a dropdown with an icon and label trigger', () => {
		clayDropdown = new ClayDropdown({
			icon: 'list',
			items: items,
			label: 'Trigger',
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

		const spy = jest.spyOn(clayDropdown, 'emit');

		const element =
			clayDropdown.refs.dropdown.refs.portal.refs.dropdownButton.element;
		element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith('buttonClicked', expect.any(Object));
	});

	it('should render a dropdown and emit an event on toggle', () => {
		clayDropdown = new ClayDropdown({
			items: [
				{
					label: 'Item 1',
					href: 'item1url',
				},
			],
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		const spy = jest.spyOn(clayDropdown, 'emit');

		clayDropdown.refs.dropdown.refs.triggerButton.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'toggle',
			})
		);
	});
});
