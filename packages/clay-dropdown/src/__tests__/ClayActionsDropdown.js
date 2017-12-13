import ClayActionsDropdown from '../ClayActionsDropdown';

let clayActionsDropdown;

let items = [
	{
		items: [
			{
				href: '#1',
				label: 'Edit',
			},
			{
				href: '#1',
				label: 'Preview',
			},
		],
		separator: true,
		type: 'group',
	},
	{
		items: [
			{
				href: '#1',
				label: 'Expire',
			},
			{
				href: '#1',
				label: 'View History',
			},
		],
		separator: true,
		type: 'group',
	},
	{
		items: [
			{
				href: '#1',
				label: 'Permissions',
			},
		],
		separator: true,
		type: 'group',
	},
	{
		items: [
			{
				href: '#1',
				label: 'Copy',
			},
			{
				href: '#1',
				label: 'Move',
			},
		],
		separator: true,
		type: 'group',
	},
	{
		items: [
			{
				href: '#1',
				label: 'Move to the Recycle Bin',
			},
		],
		type: 'group',
	},
];

describe('ClayActionsDropdown', function() {
	afterEach(() => {
		if (clayActionsDropdown) {
			clayActionsDropdown.dispose();
		}
	});

	it('should render default markdown', () => {
		clayActionsDropdown = new ClayActionsDropdown({
			items: items,
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		expect(clayActionsDropdown).toMatchSnapshot();
	});

	it('should render an actions dropdown with classes', () => {
		clayActionsDropdown = new ClayActionsDropdown({
			elementClasses: 'my-custom-class',
			items: items,
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		expect(clayActionsDropdown).toMatchSnapshot();
	});

	it('should render an actions dropdown with id', () => {
		clayActionsDropdown = new ClayActionsDropdown({
			id: 'myId',
			items: items,
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		expect(clayActionsDropdown).toMatchSnapshot();
	});

	it('should render an expanded action dropdown', () => {
		clayActionsDropdown = new ClayActionsDropdown({
			expanded: true,
			items: items,
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		expect(clayActionsDropdown).toMatchSnapshot();
	});

	it('should render a dropdown and emit an event on button click', () => {
		clayActionsDropdown = new ClayActionsDropdown({
			button: {
				label: 'Button',
				style: 'primary',
			},
			items: [
				{
					label: 'Item 1',
					href: 'item1url',
				},
			],
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		const spy = jest.spyOn(clayActionsDropdown.refs.dropdown, 'emit');

		clayActionsDropdown.refs.dropdown.refs.dropdownButton.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith('buttonClicked', expect.any(Object));
	});
});
