import ClayList from '../ClayList';

let component;

const actionItems = [
	{
		href: '#1',
		label: 'Remove',
	},
	{
		href: '#2',
		label: 'Download',
		separator: true,
	},
];

const actionItemsWithQuickItems = [
	{
		href: '#1',
		icon: 'trash',
		label: 'Remove',
		quickAction: true,
	},
	{
		href: '#2',
		icon: 'download',
		label: 'Download',
		quickAction: true,
		separator: true,
	},
];

const folderItems = [
	{
		id: '1',
		name: 'Photos',
		type: 'folder',
	},
	{
		id: '2',
		name: 'Videos',
		type: 'folder',
	},
];

const recipeItems = [
	{
		difficulty: 2,
		downloadHref: '#',
		format: 'PDF',
		id: '3',
		name: 'Hamburger',
		origin: 'U.S.A',
		spicyLevel: ['No Spicy'],
		time: '10 min.',
	},
	{
		difficulty: 8,
		downloadHref: '#',
		format: 'PDF',
		id: '4',
		image: './ramen.jpg',
		name: 'Ramen',
		origin: 'China',
		spicyLevel: ['Spicy'],
		time: '90 min.',
	},
	{
		difficulty: 9,
		downloadHref: '#',
		format: 'PDF',
		id: '5',
		image: './paella.jpg',
		name: 'Paella',
		origin: 'Spain',
		spicyLevel: ['No Spicy'],
		time: '90 min.',
	},
	{
		difficulty: 6,
		downloadHref: '#',
		format: 'PDF',
		id: '6',
		name: 'Pizza',
		origin: 'Italy',
		spicyLevel: ['No Spicy'],
		time: '30 min.',
	},
	{
		difficulty: 5,
		downloadHref: '#',
		format: 'PDF',
		id: '7',
		image: './carcamusas.jpg',
		name: 'Carcamusas',
		origin: 'Toledo',
		spicyLevel: ['Spicy'],
		time: '50 min.',
	},
	{
		difficulty: 5,
		downloadHref: '#',
		format: 'PDF',
		id: '8',
		name: 'Tacos',
		origin: 'Mexico',
		spicyLevel: ['Very Spicy'],
		time: '30 min.',
	},
];

const chefsItems = [
	{
		id: '9',
		initials: 'FA',
		name: 'Ferrán Adriá',
		style: 'fusion',
		type: 'chef',
	},
	{
		id: '10',
		image: './ramsay.jpg',
		initials: 'GR',
		name: 'Gordon Ramsay',
		style: 'general',
		type: 'chef',
	},
	{
		id: '11',
		initials: 'AC',
		name: 'Alberto Chicote',
		style: 'general',
		type: 'chef',
	},
];

const groupedItems = [
	{
		items: folderItems,
		label: 'Folders',
	},
	{
		items: recipeItems,
		label: 'Recipes',
	},
	{
		items: chefsItems,
		label: 'Chefs',
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
			schema: {},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList with classes', () => {
		component = new ClayList({
			elementClasses: 'my-custom-class',
			schema: {},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList with id', () => {
		component = new ClayList({
			id: 'myId',
			schema: {},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList with simple items', () => {
		component = new ClayList({
			items: folderItems,
			schema: {
				fields: [
					{
						contentRenderer: 'simple',
						fieldsMap: {
							title: 'name',
						},
					},
				],
			},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList with simple items with links', () => {
		component = new ClayList({
			items: folderItems,
			schema: {
				fields: [
					{
						contentRenderer: 'simple',
						fieldsMap: {
							href: 'downloadHref',
							title: 'name',
						},
					},
				],
			},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList with items', () => {
		component = new ClayList({
			items: folderItems,
			schema: {
				fields: [
					{
						contentRenderer: 'content',
						fieldsMap: {
							title: 'name',
						},
					},
				],
			},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList with items with links', () => {
		component = new ClayList({
			items: folderItems,
			schema: {
				fields: [
					{
						contentRenderer: 'content',
						fieldsMap: {
							href: 'downloadHref',
							title: 'name',
						},
					},
				],
			},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList with items with description', () => {
		component = new ClayList({
			items: folderItems,
			schema: {
				fields: [
					{
						contentRenderer: 'content',
						fieldsMap: {
							description: 'origin',
							href: 'downloadHref',
							title: 'name',
						},
					},
				],
			},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayList', () => {
		component = new ClayList({
			items: folderItems,
			schema: {
				fields: [
					{
						contentRenderer: 'content',
						fieldsMap: {
							description: 'origin',
							href: 'downloadHref',
							title: 'name',
						},
					},
				],
				inputNameField: 'type',
				inputNamesMap: {
					'folder': 'folder',
					'type': 'chef',
					'*': 'recipe',
				},
				inputValueField: 'id',
			},
			selectable: true,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayList with groups', () => {
		component = new ClayList({
			items: groupedItems,
			schema: {
				fields: [
					{
						contentRenderer: 'content',
						fieldsMap: {
							description: 'origin',
							href: 'downloadHref',
							title: 'name',
						},
					},
				],
			},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayList with icons', () => {
		component = new ClayList({
			items: groupedItems,
			schema: {
				fields: [
					{
						contentRenderer: 'icon',
						fieldName: 'type',
						iconsMap: {
							'folder': 'folder',
							'*': 'exclamation-circle',
						},
					},
					{
						contentRenderer: 'content',
						fieldsMap: {
							description: 'origin',
							href: 'downloadHref',
							title: 'name',
						},
					},
				],
				inputNameField: 'type',
				inputNamesMap: {
					'folder': 'folder',
					'type': 'chef',
					'*': 'recipe',
				},
				inputValueField: 'id',
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayList with circle icons', () => {
		component = new ClayList({
			items: groupedItems,
			schema: {
				fields: [
					{
						contentRenderer: 'icon',
						fieldName: 'type',
						iconsMap: {
							'folder': 'folder',
							'*': 'exclamation-circle',
						},
						iconShapesMap: {
							'folder': 'rounded',
							'*': 'circle',
						},
					},
					{
						contentRenderer: 'content',
						fieldsMap: {
							description: 'origin',
							href: 'downloadHref',
							title: 'name',
						},
					},
				],
				inputNameField: 'type',
				inputNamesMap: {
					'folder': 'folder',
					'type': 'chef',
					'*': 'recipe',
				},
				inputValueField: 'id',
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayList with label', () => {
		component = new ClayList({
			items: groupedItems,
			schema: {
				fields: [
					{
						contentRenderer: 'icon',
						fieldName: 'type',
						iconsMap: {
							'folder': 'folder',
							'*': 'exclamation-circle',
						},
						iconShapesMap: {
							'folder': 'rounded',
							'*': 'circle',
						},
					},
					{
						contentRenderer: 'content',
						fieldsMap: {
							description: 'origin',
							href: 'downloadHref',
							labels: 'spicyLevel',
							title: 'name',
						},
						labelStylesMap: {
							'Spicy': 'warning',
							'Very Spicy': 'danger',
							'*': 'success',
						},
					},
				],
				inputNameField: 'type',
				inputNamesMap: {
					'folder': 'folder',
					'type': 'chef',
					'*': 'recipe',
				},
				inputValueField: 'id',
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayList with action menu', () => {
		let itemsWithActionItems = [];

		folderItems.forEach(item => {
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
			schema: {
				fields: [
					{
						contentRenderer: 'icon',
						fieldName: 'type',
						iconsMap: {
							'folder': 'folder',
							'*': 'exclamation-circle',
						},
						iconShapesMap: {
							'folder': 'rounded',
							'*': 'circle',
						},
					},
					{
						contentRenderer: 'content',
						fieldsMap: {
							description: 'origin',
							href: 'downloadHref',
							labels: 'spicyLevel',
							title: 'name',
						},
						labelStylesMap: {
							'Spicy': 'warning',
							'Very Spicy': 'danger',
							'*': 'success',
						},
					},
				],
				inputNameField: 'type',
				inputNamesMap: {
					'folder': 'folder',
					'type': 'chef',
					'*': 'recipe',
				},
				inputValueField: 'id',
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayList with quick action menu', () => {
		let itemsWithActionItems = [];

		recipeItems.forEach(item => {
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
			schema: {
				fields: [
					{
						contentRenderer: 'icon',
						fieldName: 'type',
						iconsMap: {
							'folder': 'folder',
							'*': 'exclamation-circle',
						},
						iconShapesMap: {
							'folder': 'rounded',
							'*': 'circle',
						},
					},
					{
						contentRenderer: 'content',
						fieldsMap: {
							description: 'origin',
							href: 'downloadHref',
							labels: 'spicyLevel',
							title: 'name',
						},
						labelStylesMap: {
							'Spicy': 'warning',
							'Very Spicy': 'danger',
							'*': 'success',
						},
					},
				],
				inputNameField: 'type',
				inputNamesMap: {
					'folder': 'folder',
					'type': 'chef',
					'*': 'recipe',
				},
				inputValueField: 'id',
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList and emit an event on item toggled', () => {
		const spy = jest.fn();

		component = new ClayList({
			events: {itemToggled: spy},
			items: folderItems,
			schema: {
				fields: [
					{
						contentRenderer: 'simple',
						fieldsMap: {
							title: 'name',
						},
					},
				],
			},
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
