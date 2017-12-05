import ClayListGroupItem from '../ClayListGroupItem';

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
		icon: 'trash',
		label: 'Option 1',
		quickAction: true,
		url: '#1',
	},
	{
		icon: 'download',
		label: 'Option 2',
		quickAction: true,
		separator: true,
		url: '#2',
	},
	{
		icon: 'info-circle-open',
		label: 'Option 3',
		quickAction: true,
		url: '#3',
	},
];

describe('ClayListGroupItem', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayListGroupItem({
			title: 'My Item',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroupItem with classes', () => {
		component = new ClayListGroupItem({
			elementClasses: 'my-custom-class',
			title: 'My Item',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroupItem with id', () => {
		component = new ClayListGroupItem({
			id: 'myId',
			title: 'My Item',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroupItem with link', () => {
		component = new ClayListGroupItem({
			title: 'Item 1',
			url: '#1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroupItem with description', () => {
		component = new ClayListGroupItem({
			description: 'Description 1',
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroupItem with description and url', () => {
		component = new ClayListGroupItem({
			description: 'Description 1',
			title: 'Item 1',
			url: '#1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayListGroupItem', () => {
		component = new ClayListGroupItem({
			description: 'Description 1',
			selectable: true,
			title: 'Item 1',
			url: '#1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selected ClayListGroupItem', () => {
		component = new ClayListGroupItem({
			description: 'Description 1',
			selectable: true,
			selected: true,
			title: 'Item 1',
			url: '#1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroupItem with icon', () => {
		component = new ClayListGroupItem({
			icon: 'folder',
			spritemap: spritemap,
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroupItem with circle icons', () => {
		component = new ClayListGroupItem({
			icon: 'folder',
			iconShape: 'circle',
			spritemap: spritemap,
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroupItem with one label', () => {
		component = new ClayListGroupItem({
			labels: [
				{
					label: 'Status',
				},
			],
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroupItem with two labels', () => {
		component = new ClayListGroupItem({
			labels: [
				{
					label: 'Aproved',
				},
				{
					label: 'Pending',
				},
			],
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroupItem with labels with style', () => {
		component = new ClayListGroupItem({
			labels: [
				{
					label: 'Aproved',
					style: 'info',
				},
				{
					label: 'Pending',
					style: 'warning',
				},
			],
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroupItem with action menu', () => {
		component = new ClayListGroupItem({
			actionItems: actionItems,
			spritemap: spritemap,
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroupItem with quick action menu', () => {
		component = new ClayListGroupItem({
			actionItems: actionItemsWithQuickItems,
			spritemap: spritemap,
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroupItem and emit an event on item toggled', () => {
		const spy = jest.fn();

		component = new ClayListGroupItem({
			events: {itemToggled: spy},
			selectable: true,
			title: 'Item 1',
		});

		component.element.querySelector('input[type="checkbox"]').click();

		expect(spy).toHaveBeenCalled();
	});

	it('should fail when no title is passed', function() {
		expect(() => {
			component = new ClayListGroupItem();
		}).toThrow();
	});
});
