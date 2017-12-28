import ClayListItem from '../ClayListItem';

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

let component;

let actionItems = [
	{
		href: '#1',
		label: 'Option 1',
	},
	{
		href: '#2',
		label: 'Option 2',
		separator: true,
	},
	{
		href: '#3',
		label: 'Option 3',
	},
];

let actionItemsWithQuickItems = [
	{
		href: '#1',
		icon: 'trash',
		label: 'Option 1',
		quickAction: true,
	},
	{
		href: '#2',
		icon: 'download',
		label: 'Option 2',
		quickAction: true,
		separator: true,
	},
	{
		href: '#3',
		icon: 'info-circle-open',
		label: 'Option 3',
		quickAction: true,
	},
];

describe('ClayListItem', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayListItem({
			title: 'My Item',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListItem with classes', () => {
		component = new ClayListItem({
			elementClasses: 'my-custom-class',
			title: 'My Item',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListItem with id', () => {
		component = new ClayListItem({
			id: 'myId',
			title: 'My Item',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListItem with link', () => {
		component = new ClayListItem({
			href: '#1',
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListItem with description', () => {
		component = new ClayListItem({
			description: 'Description 1',
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListItem with description and url', () => {
		component = new ClayListItem({
			description: 'Description 1',
			href: '#1',
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayListItem', () => {
		component = new ClayListItem({
			description: 'Description 1',
			href: '#1',
			selectable: true,
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selected ClayListItem', () => {
		component = new ClayListItem({
			description: 'Description 1',
			href: '#1',
			selectable: true,
			selected: true,
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListItem with icon', () => {
		component = new ClayListItem({
			icon: 'folder',
			spritemap: spritemap,
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListItem with circle icons', () => {
		component = new ClayListItem({
			icon: 'folder',
			iconShape: 'circle',
			spritemap: spritemap,
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListItem with label', () => {
		component = new ClayListItem({
			label: 'Status',
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListItem with labels with style', () => {
		component = new ClayListItem({
			label: 'Status',
			labelStylesMap: {
				'*': 'info',
			},
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListItem with action menu', () => {
		component = new ClayListItem({
			actionItems: actionItems,
			spritemap: spritemap,
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListItem with quick action menu', () => {
		component = new ClayListItem({
			actionItems: actionItemsWithQuickItems,
			spritemap: spritemap,
			title: 'Item 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListItem and emit an event on item toggled', () => {
		const spy = jest.fn();

		component = new ClayListItem({
			events: {itemToggled: spy},
			selectable: true,
			title: 'Item 1',
		});

		component.element.querySelector('input[type="checkbox"]').click();

		expect(spy).toHaveBeenCalled();
	});

	it('should fail when no title is passed', function() {
		expect(() => {
			component = new ClayListItem();
		}).toThrow();
	});
});
