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

	it('should render an actions dropdown with triggerClasses', () => {
		clayActionsDropdown = new ClayActionsDropdown({
			id: 'myId',
			items: items,
			label: 'Trigger',
			spritemap: 'icons.svg',
			triggerClasses: 'component-action',
		});

		expect(clayActionsDropdown).toMatchSnapshot();
	});

	it('should render a disabled dropdown', () => {
		clayActionsDropdown = new ClayActionsDropdown({
			disabled: true,
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

	/**
	 * ClayDropdownBase contains the internal state `_filteredItems` which is the source of the truth to
	 * perform operations so that the public state `items` is not changed, so as soon as the component is
	 * created `_filteredItems` is filled with `items` this will cause a new rendering, in the tests this
	 * behavior causes the Jest to be lost making this testing Flask. Metal probably needs an `act`
	 * equivalent to that of React so that it can control these renderings in tests.
	 */
	it.skip('should keep the expanded updated with that of the dropdown base', () => {
		jest.useFakeTimers();
		clayActionsDropdown = new ClayActionsDropdown({
			items: items,
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		expect(clayActionsDropdown.expanded).toBeFalsy();

		clayActionsDropdown.refs.dropdown.toggle();
		jest.runAllTimers();

		expect(clayActionsDropdown.expanded).toBeTruthy();
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

		const spy = jest.spyOn(clayActionsDropdown, 'emit');

		const element =
			clayActionsDropdown.refs.dropdown.refs.portal.refs.dropdownButton.element;
		element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith('buttonClicked', expect.any(Object));
	});

	it('should render a dropdown and emit an event on toggle', () => {
		clayActionsDropdown = new ClayActionsDropdown({
			items: [
				{
					label: 'Item 1',
					href: 'item1url',
				},
			],
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		const spy = jest.spyOn(clayActionsDropdown, 'emit');

		clayActionsDropdown.refs.dropdown.refs.triggerButton.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'toggle',
			})
		);
	});
});
