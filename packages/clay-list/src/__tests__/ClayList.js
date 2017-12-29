import ClayList from '../ClayList';

let component;

const actionItems = [
	{
		href: '#1',
		icon: 'trash',
		label: 'Option 1',
	},
	{
		href: '#2',
		icon: 'download',
		label: 'Option 2',
		separator: true,
	},
	{
		href: '#3',
		icon: 'info-circle-open',
		label: 'Option 3',
	},
];

const actionItemsWithQuickItems = [
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

const sagaItems = [
	{
		director: 'George Lucas',
		downloadHref: '#',
		rating: 10,
		releaseDate: 'May 19th 1999',
		status: ['Error', 'Pending'],
		title: 'Episode I: The Phantom Menace',
	},
	{
		director: 'George Lucas',
		downloadHref: '#',
		rating: 50,
		releaseDate: 'May 12th 2002',
		status: ['Watched'],
		title: 'Episode II: Attack of the Clones',
	},
	{
		director: 'George Lucas',
		downloadHref: '#',
		rating: 60,
		releaseDate: 'May 12th 2005',
		status: ['Watched'],
		title: 'Episode III: Revenge of the Sith',
	},
	{
		director: 'George Lucas',
		downloadHref: '#',
		rating: 90,
		releaseDate: 'May 25th 1977',
		status: ['Watched'],
		title: 'Episode IV: A New Hope',
	},
	{
		director: 'Irvin Kershner',
		downloadHref: '#',
		rating: 100,
		releaseDate: 'May 21th 1980',
		status: ['Watched'],
		title: 'Episode V: The Empire Strikes Back',
	},
	{
		director: 'Richard Marquand',
		downloadHref: '#',
		rating: 90,
		releaseDate: 'May 25th 1983',
		status: ['Watched'],
		title: 'Episode VI: Return of the Jedi',
	},
	{
		director: 'J. J. Abrams',
		downloadHref: '#',
		rating: 70,
		releaseDate: 'December 14th 2015',
		status: ['Watched'],
		title: 'Episode VII: The Force Awakens',
	},
	{
		director: 'Rian Johnson',
		downloadHref: '#',
		rating: 0,
		releaseDate: 'December 9th 2017',
		status: ['Pending'],
		title: 'Episode VIII: The Last Jedi',
	},
];

const expandedItems = [
	{
		director: 'Gareth Edwards',
		downloadHref: '#',
		rating: 70,
		releaseDate: 'December 10th 2016',
		status: ['Watched'],
		title: 'Rogue One: A Star Wars Story',
	},
	{
		director: 'Ron Howard',
		downloadHref: '#',
		rating: 0,
		releaseDate: 'May 25th 2018',
		status: ['Pending'],
		title: 'Solo: A Star Wars Story',
	},
];

const groupedItems = [
	{
		items: sagaItems,
		label: 'Saga',
	},
	{
		items: expandedItems,
		label: 'Expanded Universe',
	},
];

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

describe('ClayList', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayList({
			schema: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList with classes', () => {
		component = new ClayList({
			elementClasses: 'my-custom-class',
			schema: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList with id', () => {
		component = new ClayList({
			id: 'myId',
			schema: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList with simple items', () => {
		component = new ClayList({
			items: sagaItems,
			schema: [
				{
					contentRenderer: 'simple',
					fieldsMap: {
						title: 'title',
					},
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList with simple items with links', () => {
		component = new ClayList({
			items: sagaItems,
			schema: [
				{
					contentRenderer: 'simple',
					fieldsMap: {
						href: 'downloadHref',
						title: 'title',
					},
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList with items', () => {
		component = new ClayList({
			items: sagaItems,
			schema: [
				{
					contentRenderer: 'content',
					fieldsMap: {
						title: 'title',
					},
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList with items with links', () => {
		component = new ClayList({
			items: sagaItems,
			schema: [
				{
					contentRenderer: 'content',
					fieldsMap: {
						href: 'downloadHref',
						title: 'title',
					},
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList with items with description', () => {
		component = new ClayList({
			items: sagaItems,
			schema: [
				{
					contentRenderer: 'content',
					fieldsMap: {
						description: 'director',
						href: 'downloadHref',
						title: 'title',
					},
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayList', () => {
		component = new ClayList({
			items: sagaItems,
			schema: [
				{
					contentRenderer: 'content',
					fieldsMap: {
						description: 'director',
						href: 'downloadHref',
						title: 'title',
					},
				},
			],
			selectable: true,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayList with groups', () => {
		component = new ClayList({
			items: groupedItems,
			schema: [
				{
					contentRenderer: 'content',
					fieldsMap: {
						description: 'director',
						href: 'downloadHref',
						title: 'title',
					},
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayList with icons', () => {
		component = new ClayList({
			items: groupedItems,
			schema: [
				{
					contentRenderer: 'icon',
					fieldName: 'status',
					iconsMap: {
						'Watched': 'check-circle',
						'*': 'exclamation-circle',
					},
				},
				{
					contentRenderer: 'content',
					fieldsMap: {
						description: 'director',
						href: 'downloadHref',
						title: 'title',
					},
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayList with circle icons', () => {
		component = new ClayList({
			items: groupedItems,
			schema: [
				{
					contentRenderer: 'icon',
					fieldName: 'status',
					iconsMap: {
						'Watched': 'check-circle',
						'*': 'exclamation-circle',
					},
					iconShapesMap: {
						'Watched': 'circle',
						'*': 'rounded',
					},
				},
				{
					contentRenderer: 'content',
					fieldsMap: {
						description: 'director',
						href: 'downloadHref',
						title: 'title',
					},
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayList with label', () => {
		component = new ClayList({
			items: groupedItems,
			schema: [
				{
					contentRenderer: 'icon',
					fieldName: 'status',
					iconsMap: {
						'Watched': 'check-circle',
						'*': 'exclamation-circle',
					},
					iconShapesMap: {
						'Watched': 'circle',
						'*': 'rounded',
					},
				},
				{
					contentRenderer: 'content',
					fieldsMap: {
						description: 'director',
						href: 'downloadHref',
						labels: 'status',
						title: 'title',
					},
					labelStylesMap: {
						'Watched': 'success',
						'Pending': 'warning',
						'*': 'danger',
					},
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayList with action menu', () => {
		let itemsWithActionItems = [];

		sagaItems.forEach(item => {
			let itemWithActionItems = {};

			for (let key in item) {
				if (Object.prototype.hasOwnProperty.call(item, key)) {
					itemWithActionItems[key] = item[key];
				}
			}

			itemWithActionItems.actionItems = actionItems;

			itemsWithActionItems.push(itemWithActionItems);
		});

		component = new ClayList({
			items: itemsWithActionItems,
			schema: [
				{
					contentRenderer: 'icon',
					fieldName: 'status',
					iconsMap: {
						'Watched': 'check-circle',
						'*': 'exclamation-circle',
					},
					iconShapesMap: {
						'Watched': 'circle',
						'*': 'rounded',
					},
				},
				{
					contentRenderer: 'content',
					fieldsMap: {
						description: 'director',
						href: 'downloadHref',
						labels: 'status',
						title: 'title',
					},
					labelStylesMap: {
						'Watched': 'success',
						'Pending': 'warning',
						'*': 'danger',
					},
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayList with quick action menu', () => {
		let itemsWithActionItems = [];

		sagaItems.forEach(item => {
			let itemWithActionItems = {};

			for (let key in item) {
				if (Object.prototype.hasOwnProperty.call(item, key)) {
					itemWithActionItems[key] = item[key];
				}
			}

			itemWithActionItems.actionItems = actionItemsWithQuickItems;

			itemsWithActionItems.push(itemWithActionItems);
		});

		component = new ClayList({
			items: itemsWithActionItems,
			schema: [
				{
					contentRenderer: 'icon',
					fieldName: 'status',
					iconsMap: {
						'Watched': 'check-circle',
						'*': 'exclamation-circle',
					},
					iconShapesMap: {
						'Watched': 'circle',
						'*': 'rounded',
					},
				},
				{
					contentRenderer: 'content',
					fieldsMap: {
						description: 'director',
						href: 'downloadHref',
						labels: 'status',
						title: 'title',
					},
					labelStylesMap: {
						'Watched': 'success',
						'Pending': 'warning',
						'*': 'danger',
					},
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList and emit an event on item toggled', () => {
		const spy = jest.fn();

		component = new ClayList({
			events: {itemToggled: spy},
			items: groupedItems,
			schema: [
				{
					contentRenderer: 'simple',
					fieldsMap: {
						title: 'title',
					},
				},
			],
			selectable: true,
		});

		component.element.querySelector('input[type="checkbox"]').click();

		expect(spy).toHaveBeenCalled();
	});

	it('should fail when no schema is passed', function() {
		expect(() => {
			component = new ClayList({
				items: [],
			});
		}).toThrow();
	});
});
