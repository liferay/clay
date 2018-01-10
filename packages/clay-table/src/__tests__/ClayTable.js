import ClayTable from '../ClayTable';

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

describe('ClayTable', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayTable({
			schema: {},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with classes', () => {
		component = new ClayTable({
			elementClasses: 'my-custom-class',
			schema: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with id', () => {
		component = new ClayTable({
			id: 'myId',
			schema: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with size `sm`', () => {
		component = new ClayTable({
			schema: [],
			size: 'sm',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with size `md`', () => {
		component = new ClayTable({
			schema: [],
			size: 'md',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with size `lg`', () => {
		component = new ClayTable({
			schema: [],
			size: 'lg',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with size `xl`', () => {
		component = new ClayTable({
			schema: [],
			size: 'xl',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with a basic schema and no items', () => {
		component = new ClayTable({
			schema: [
				{
					fieldName: 'name',
					label: 'Name',
				},
				{
					fieldName: 'origin',
					label: 'Origin',
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with a basic schema with sortable fields and no items', () => {
		component = new ClayTable({
			schema: {
				fields: [
					{
						fieldName: 'name',
						label: 'Name',
						sortable: true,
						sortingOrder: 'asc',
					},
					{
						fieldName: 'origin',
						label: 'Origin',
					},
				],
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with schema with sortable fields and emit an event on sorting button click', () => {
		const spy = jest.fn();

		component = new ClayTable({
			events: {
				sortingButtonClicked: spy,
			},
			schema: {
				fields: [
					{
						fieldName: 'name',
						label: 'Name',
						sortable: true,
						sortingOrder: 'asc',
					},
					{
						fieldName: 'origin',
						label: 'Origin',
					},
				],
			},
		});

		component.element.querySelector('table thead tr th button').click();

		expect(spy).toHaveBeenCalled();
	});

	it('should render a ClayTable with a basic schema and items', () => {
		component = new ClayTable({
			items: recipeItems,
			schema: {
				fields: [
					{
						fieldName: 'name',
						label: 'Name',
					},
					{
						fieldName: 'origin',
						label: 'Origin',
					},
				],
			},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with a basic schema and grouped items', () => {
		component = new ClayTable({
			items: groupedItems,
			schema: {
				fields: [
					{
						fieldName: 'name',
						label: 'Name',
					},
					{
						fieldName: 'origin',
						label: 'Origin',
					},
				],
			},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with an schema with button field and items', () => {
		component = new ClayTable({
			items: recipeItems,
			schema: {
				fields: [
					{
						fieldName: 'name',
						label: 'Name',
					},
					{
						contentRenderer: 'button',
						fieldName: 'downloadHref',
						label: 'Download',
					},
				],
			},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with schema with button field and emit an event on click', () => {
		const spy = jest.fn();

		component = new ClayTable({
			events: {
				cellContentClicked: spy,
			},
			items: recipeItems,
			schema: {
				fields: [
					{
						fieldName: 'name',
						label: 'Name',
					},
					{
						contentRenderer: 'button',
						fieldName: 'downloadHref',
						label: 'Download',
					},
				],
			},
		});

		component.element.querySelector('table tr td button').click();

		expect(spy).toHaveBeenCalled();
	});

	it('should render a ClayTable with an schema with label field and items', () => {
		component = new ClayTable({
			items: recipeItems,
			schema: {
				fields: [
					{
						fieldName: 'name',
						label: 'Name',
					},
					{
						contentRenderer: 'label',
						fieldName: 'spicyLevel',
						label: 'SpicyLevel',
					},
				],
			},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with an schema with label field with styles map and items', () => {
		component = new ClayTable({
			items: recipeItems,
			schema: {
				fields: [
					{
						fieldName: 'name',
						label: 'Name',
					},
					{
						contentRenderer: 'label',
						fieldName: 'spicyLevel',
						label: 'SpicyLevel',
						labelStylesMap: {
							'Spicy': 'warning',
							'Very Spicy': 'danger',
							'*': 'success',
						},
					},
				],
			},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with an schema with link field and items', () => {
		component = new ClayTable({
			items: recipeItems,
			schema: {
				fields: [
					{
						fieldName: 'name',
						label: 'Name',
					},
					{
						contentRenderer: 'link',
						fieldName: 'origin',
						hrefFieldName: 'downloadHref',
						label: 'Origin',
					},
				],
			},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with an schema with number field and items', () => {
		component = new ClayTable({
			items: recipeItems,
			schema: {
				fields: [
					{
						fieldName: 'name',
						label: 'Name',
					},
					{
						contentRenderer: 'number',
						fieldName: 'time',
						label: 'Time',
					},
				],
			},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with an schema with progress bar field and items', () => {
		component = new ClayTable({
			items: recipeItems,
			schema: {
				fields: [
					{
						fieldName: 'name',
						label: 'Name',
					},
					{
						contentRenderer: 'progressbar',
						fieldName: 'difficulty',
						label: 'Difficulty',
					},
				],
			},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayTable with an schema and items', () => {
		component = new ClayTable({
			items: recipeItems,
			schema: {
				fields: [
					{
						fieldName: 'name',
						label: 'Name',
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

	it('should render a selectable ClayTable and emit an event on item toggled', () => {
		const spy = jest.fn();

		component = new ClayTable({
			events: {
				itemToggled: spy,
			},
			items: recipeItems,
			schema: {
				fields: [
					{
						fieldName: 'name',
						label: 'Name',
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

		component.element
			.querySelector('table tr td input[type="checkbox"]')
			.click();

		expect(spy).toHaveBeenCalled();
	});

	it('should render a ClayTable with an schema, items and action menu', () => {
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

		component = new ClayTable({
			items: itemsWithActionItems,
			schema: {
				fields: [
					{
						fieldName: 'name',
						label: 'Name',
					},
				],
			},
			showActionsMenu: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with an schema, items and action menu with quick action items', () => {
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

		component = new ClayTable({
			items: itemsWithActionItems,
			schema: {
				fields: [
					{
						fieldName: 'name',
						label: 'Name',
					},
				],
			},
			showActionsMenu: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with a basic schema and items and add a class on row focus', () => {
		component = new ClayTable({
			items: recipeItems,
			schema: {
				fields: [
					{
						fieldName: 'name',
						label: 'Name',
						sortable: true,
						sortingOrder: 'asc',
					},
					{
						fieldName: 'origin',
						label: 'Origin',
					},
				],
			},
		});

		component.element
			.querySelector('table tbody tr:not(.table-divider)')
			.focus();

		expect(component).toMatchSnapshot();
	});
});
