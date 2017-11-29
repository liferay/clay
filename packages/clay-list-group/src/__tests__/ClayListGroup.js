import ClayListGroup from '../ClayListGroup';

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

let component;

let actionItems = [
	{
		label: 'Option 1',
		url: '#1',
	},
	{
		label: 'Option 2',
		separator: true,
		url: '#2',
	},
	{
		label: 'Option 3',
		url: '#3',
	},
];

let actionItemsWithQuickItems = [
	{
		indicatorSymbol: 'trash',
		label: 'Option 1',
		quickAction: true,
		url: '#1',
	},
	{
		indicatorSymbol: 'download',
		label: 'Option 2',
		quickAction: true,
		separator: true,
		url: '#2',
	},
	{
		indicatorSymbol: 'info-circle-open',
		label: 'Option 3',
		quickAction: true,
		url: '#3',
	},
];

describe('ClayListGroup', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayListGroup({
			items: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroup with classes', () => {
		component = new ClayListGroup({
			elementClasses: 'my-custom-class',
			items: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroup with id', () => {
		component = new ClayListGroup({
			id: 'myId',
			items: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroup with simple list elements', () => {
		component = new ClayListGroup({
			items: [
				{
					title: 'Item 1',
				},
				{
					title: 'Item 2',
				},
				{
					title: 'Item 3',
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroup with simple list elements with links', () => {
		component = new ClayListGroup({
			items: [
				{
					title: 'Item 1',
					url: '#1',
				},
				{
					title: 'Item 2',
					url: '#2',
				},
				{
					title: 'Item 3',
					url: '#3',
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroup with list elements with description', () => {
		component = new ClayListGroup({
			items: [
				{
					description: 'Description 1',
					title: 'Item 1',
				},
				{
					description: 'Description 2',
					title: 'Item 2',
				},
				{
					description: 'Description 3',
					title: 'Item 3',
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroup with list elements with description and url', () => {
		component = new ClayListGroup({
			items: [
				{
					description: 'Description 1',
					title: 'Item 1',
					url: '#1',
				},
				{
					description: 'Description 2',
					title: 'Item 2',
					url: '#2',
				},
				{
					description: 'Description 3',
					title: 'Item 3',
					url: '#3',
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayListGroup', () => {
		component = new ClayListGroup({
			items: [
				{
					description: 'Description 1',
					title: 'Item 1',
					url: '#1',
				},
				{
					description: 'Description 2',
					title: 'Item 2',
					url: '#2',
				},
				{
					description: 'Description 3',
					title: 'Item 3',
					url: '#3',
				},
			],
			selectable: true,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayListGroup with list elements with icons', () => {
		component = new ClayListGroup({
			items: [
				{
					description: 'Description 1',
					icon: 'folder',
					title: 'Item 1',
					url: '#1',
				},
				{
					description: 'Description 2',
					icon: 'folder',
					title: 'Item 2',
					url: '#2',
				},
				{
					description: 'Description 3',
					icon: 'folder',
					title: 'Item 3',
					url: '#3',
				},
			],
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayListGroup with list elements with circle icons', () => {
		component = new ClayListGroup({
			items: [
				{
					description: 'Description 1',
					icon: 'folder',
					iconShape: 'circle',
					title: 'Item 1',
					url: '#1',
				},
				{
					description: 'Description 2',
					icon: 'folder',
					iconShape: 'circle',
					title: 'Item 2',
					url: '#2',
				},
				{
					description: 'Description 3',
					icon: 'folder',
					iconShape: 'circle',
					title: 'Item 3',
					url: '#3',
				},
			],
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayListGroup with list elements with label', () => {
		component = new ClayListGroup({
			items: [
				{
					description: 'Description 1',
					icon: 'folder',
					label: 'Status',
					title: 'Item 1',
					url: '#1',
				},
				{
					description: 'Description 2',
					icon: 'folder',
					label: 'Pending',
					labelStyle: 'warning',
					title: 'Item 2',
					url: '#2',
				},
				{
					description: 'Description 3',
					icon: 'folder',
					label: 'Aproved',
					labelStyle: 'success',
					title: 'Item 3',
					url: '#3',
				},
			],
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayListGroup with list elements with action menu', () => {
		component = new ClayListGroup({
			items: [
				{
					actionItems: actionItems,
					description: 'Description 1',
					icon: 'folder',
					title: 'Item 1',
					url: '#1',
				},
				{
					actionItems: actionItems,
					description: 'Description 2',
					icon: 'folder',
					title: 'Item 2',
					url: '#2',
				},
				{
					actionItems: actionItems,
					description: 'Description 3',
					icon: 'folder',
					title: 'Item 3',
					url: '#3',
				},
			],
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayListGroup with list elements with quick action menu', () => {
		component = new ClayListGroup({
			items: [
				{
					actionItems: actionItemsWithQuickItems,
					description: 'Description 1',
					icon: 'folder',
					title: 'Item 1',
					url: '#1',
				},
				{
					actionItems: actionItemsWithQuickItems,
					description: 'Description 2',
					icon: 'folder',
					title: 'Item 2',
					url: '#2',
				},
				{
					actionItems: actionItemsWithQuickItems,
					description: 'Description 3',
					icon: 'folder',
					title: 'Item 3',
					url: '#3',
				},
			],
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayListGroup with header title', () => {
		component = new ClayListGroup({
			items: [
				{
					actionItems: actionItemsWithQuickItems,
					description: 'Description 1',
					icon: 'folder',
					title: 'Item 1',
					url: '#1',
				},
				{
					actionItems: actionItemsWithQuickItems,
					description: 'Description 2',
					icon: 'folder',
					title: 'Item 2',
					url: '#2',
				},
				{
					actionItems: actionItemsWithQuickItems,
					description: 'Description 3',
					icon: 'folder',
					title: 'Item 3',
					url: '#3',
				},
			],
			selectable: true,
			spritemap: spritemap,
			title: 'Group Header 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayListGroup with select list items', () => {
		component = new ClayListGroup({
			items: [
				{
					actionItems: actionItems,
					description: 'Description 1',
					icon: 'folder',
					selected: true,
					title: 'Item 1',
					url: '#1',
				},
				{
					actionItems: actionItems,
					description: 'Description 2',
					icon: 'folder',
					selected: true,
					title: 'Item 2',
					url: '#2',
				},
				{
					actionItems: actionItems,
					description: 'Description 3',
					icon: 'folder',
					selected: true,
					title: 'Item 3',
					url: '#3',
				},
			],
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroup and emit an event on item toggled', () => {
		component = new ClayListGroup({
			items: [
				{
					actionItems: actionItems,
					description: 'Description 1',
					icon: 'folder',
					selected: true,
					title: 'Item 1',
					url: '#1',
				},
				{
					actionItems: actionItems,
					description: 'Description 2',
					icon: 'folder',
					title: 'Item 2',
					url: '#2',
				},
				{
					actionItems: actionItems,
					description: 'Description 3',
					icon: 'folder',
					title: 'Item 3',
					url: '#3',
				},
			],
			selectable: true,
			spritemap: spritemap,
		});

		const spy = jest.spyOn(component, 'emit');

		component.refs.selectItem1Checkbox.element
			.querySelector('input')
			.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith('itemToggled', expect.any(Object));
	});

	it('should fail when no items are passed', function() {
		expect(() => {
			component = new ClayListGroup();
		}).toThrow();
	});
});
