import ClayActionsDropdown from '../ClayActionsDropdown';

let clayActionsDropdown;

let items = [
	{
		items: [
			{
				label: 'Edit',
				url: '#1',
			},
			{
				label: 'Preview',
				url: '#1',
			},
		],
		separator: true,
		type: 'group',
	},
	{
		items: [
			{
				label: 'Expire',
				url: '#1',
			},
			{
				label: 'View History',
				url: '#1',
			},
		],
		separator: true,
		type: 'group',
	},
	{
		items: [
			{
				label: 'Permissions',
				url: '#1',
			},
		],
		separator: true,
		type: 'group',
	},
	{
		items: [
			{
				label: 'Copy',
				url: '#1',
			},
			{
				label: 'Move',
				url: '#1',
			},
		],
		separator: true,
		type: 'group',
	},
	{
		items: [
			{
				label: 'Move to the Recycle Bin',
				url: '#1',
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
});
