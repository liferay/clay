import ClayDatasetDisplay from '../ClayDatasetDisplay';

let component;

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
	{
		href: '#3',
		icon: 'edit',
		label: 'Edit',
	},
];

let creationMenuConfig = {
	primaryItems: [
		{
			href: '#1',
			label: 'Add Content 1',
		},
		{
			href: '#2',
			label: 'Add Content 2',
		},
	],
	secondaryItems: [
		{
			items: [
				{
					href: '#fav1',
					label: 'Favorite 1',
				},
				{
					href: '#fav2',
					label: 'Favorite 2',
				},
				{
					href: '#fav3',
					label: 'Favorite 3',
				},
				{
					href: '#fav4',
					label: 'Favorite 4',
				},
				{
					href: '#fav5',
					label: 'Favorite 5',
				},
				{
					href: '#fav6',
					label: 'Favorite 6',
				},
				{
					href: '#fav7',
					label: 'Favorite 7',
				},
				{
					href: '#fav8',
					label: 'Favorite 8',
				},
			],
		},
	],
};

let folderItems = [
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

let recipesItems = [
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

let chefsItems = [
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

let groupedItems = [
	{
		items: folderItems,
		label: 'Folders',
	},
	{
		items: recipesItems,
		label: 'Recipes',
	},
	{
		items: chefsItems,
		label: 'Chefs',
	},
];

let spritemap = '../../../node_modules/clay-css/lib/images/icons/icons.svg';

groupedItems.forEach(item => {
	item.items.forEach(nestedItem => {
		nestedItem.actionItems = actionItemsWithQuickItems;
	});
});

let defaultConfig = {
	actionItems: actionItemsWithQuickItems,
	filterItems: [
		{
			items: [
				{
					label: 'Item 1',
					inputName: 'filteritem1checkbox',
					inputValue: '1',
					type: 'checkbox',
				},
				{
					checked: true,
					label: 'Item 2',
					inputName: 'filteritem2checkbox',
					inputValue: '2',
					type: 'checkbox',
				},
				{
					disabled: true,
					label: 'Item 3',
					inputName: 'filteritem3checkbox',
					inputValue: '3',
					type: 'checkbox',
				},
			],
			label: 'Filter By',
			type: 'group',
		},
		{
			items: [
				{
					label: 'Item 1',
					inputName: 'orderitem1checkbox',
					inputValue: '1',
					type: 'checkbox',
				},
				{
					checked: true,
					label: 'Item 2',
					inputName: 'orderitem2checkbox',
					inputValue: '2',
					type: 'checkbox',
				},
				{
					disabled: true,
					label: 'Item 3',
					inputName: 'orderitem3checkbox',
					inputValue: '3',
					type: 'checkbox',
				},
			],
			label: 'Order By',
			type: 'group',
		},
		{
			items: [
				{
					label: 'Item 1',
					inputValue: '1',
				},
				{
					checked: true,
					label: 'Item 2',
					inputValue: '2',
				},
				{
					disabled: true,
					label: 'Item 3',
					inputValue: '3',
				},
			],
			inputName: 'item1radio',
			label: 'Group 1',
			type: 'radiogroup',
		},
	],
	filterLabels: [
		{
			closeable: false,
			label: 'Label 1',
		},
		{
			label: 'Label 2',
		},
		{
			label: '<strong>Category:</strong>Label 3',
		},
	],
	items: groupedItems,
	selectedView: 0,
	searchActionURL: 'mySearchURL',
	searchFormName: 'mySearchName',
	searchInputName: 'mySearchInputName',
	selectable: true,
	spritemap: spritemap,
	title: 'Group Header 1',
	views: [
		{
			active: true,
			contentRenderer: 'cards',
			href: '#cards',
			icon: 'cards2',
			label: 'Cards',
			schema: {
				contentRendererMap: {
					chef: 'user',
					folder: 'horizontal',
					MKV: 'file',
				},
				fieldsMap: {
					contentRenderer: 'type',
					description: 'origin',
					stickerLabel: 'format',
					href: 'downloadHref',
					icon: 'type',
					imageAlt: 'name',
					imageSrc: 'image',
					initials: 'initials',
					labels: 'spicyLevel',
					title: 'name',
					userColor: 'style',
					username: 'name',
				},
				iconsMap: {
					'folder': 'folder',
					'*': 'exclamation-circle',
				},
				inputNameField: 'type',
				inputNamesMap: {
					'folder': 'folder',
					'chef': 'chef',
					'*': 'recipe',
				},
				inputValueField: 'id',
				labelStylesMap: {
					'Spicy': 'warning',
					'Very Spicy': 'danger',
					'*': 'success',
				},
				stickerShapesMap: {
					PDF: 'circle',
				},
				stickerStylesMap: {
					PDF: 'danger',
				},
				userColorsMap: {
					'fusion': 'danger',
					'*': 'primary',
				},
			},
		},
		{
			contentRenderer: 'list',
			icon: 'list',
			label: 'List',
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
		},
		{
			contentRenderer: 'table',
			icon: 'table',
			label: 'Table',
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
					{
						contentRenderer: 'number',
						fieldName: 'time',
						label: 'Time',
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
					{
						contentRenderer: 'button',
						fieldName: 'downloadHref',
						label: 'Download',
					},
					{
						contentRenderer: 'progressbar',
						fieldName: 'difficulty',
						label: 'Difficulty',
						maxValue: 10,
						minValue: 0,
					},
				],
				inputNameField: 'type',
				inputNamesMap: {
					'folder': 'folder',
					'chef': 'chef',
					'*': 'recipe',
				},
				inputValueField: 'id',
			},
		},
	],
};

describe('ClayDatasetDisplay', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}

		recipesItems[0].selected = false;
	});

	beforeEach(() => {
		jest.useFakeTimers();

		defaultConfig.creationMenu = creationMenuConfig;
		defaultConfig.items = groupedItems;
		defaultConfig.selectedView = 0;
	});

	it('should render the default markup', () => {
		component = new ClayDatasetDisplay({
			spritemap,
		});

		expect(component).toMatchSnapshot();
	});
	/*
	it('should render a ClayDatasetDisplay with items and list of type `cards` active', () => {
		defaultConfig.selectedView = 0;

		component = new ClayDatasetDisplay(defaultConfig);

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDatasetDisplay with items and list of type `list` active', () => {
		defaultConfig.selectedView = 1;

		component = new ClayDatasetDisplay(defaultConfig);

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDatasetDisplay with items and list of type `table` active', () => {
		defaultConfig.selectedView = 2;

		component = new ClayDatasetDisplay(defaultConfig);

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDatasetDisplay with ungrouped items', () => {
		defaultConfig.items = recipesItems;

		component = new ClayDatasetDisplay(defaultConfig);

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDatasetDisplay with classes', () => {
		component = new ClayDatasetDisplay({
			elementClasses: 'my-custom-class',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDatasetDisplay with id', () => {
		component = new ClayDatasetDisplay({
			id: 'myId',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDatasetDisplay with selected items', () => {
		defaultConfig.items = recipesItems;

		recipesItems[0].selected = true;

		component = new ClayDatasetDisplay(defaultConfig);

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDatasetDisplay with selected grouped items', () => {
		recipesItems[0].selected = true;

		component = new ClayDatasetDisplay(defaultConfig);

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDatasetDisplay and emit an event on management toolbar action click', () => {
		recipesItems[0].selected = true;

		component = new ClayDatasetDisplay(defaultConfig);

		const spy = jest.spyOn(component, 'emit');

		component.refs.managementToolbar.refs.quickAction0.element.click();

		jest.runAllTimers();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				data: expect.any(Object),
				name: 'actionItemClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a ClayDatasetDisplay and emit an event on management toolbar filter done button click', () => {
		component = new ClayDatasetDisplay(defaultConfig);

		const spy = jest.spyOn(component, 'emit');

		let filtersDropdown = component.refs.managementToolbar.refs.filtersDropdown;
		filtersDropdown.refs.portal.refs.dropdownButton.element.click();

		jest.runAllTimers();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'filterDoneClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a ClayDatasetDisplay and emit an event on management toolbar creation menu button click', () => {
		defaultConfig.creationMenu = undefined;

		component = new ClayDatasetDisplay(defaultConfig);

		const spy = jest.spyOn(component, 'emit');

		component.refs.managementToolbar.refs.creationMenu.element.click();

		jest.runAllTimers();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'creationButtonClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a ClayDatasetDisplay and emit an event on creation menu item click', () => {
		component = new ClayDatasetDisplay(defaultConfig);

		const spy = jest.spyOn(component, 'emit');

		const element =
			component.refs.managementToolbar.refs.creationMenuDropdown.refs.dropdown
				.refs.portal.element;
		element.querySelector('ul li').click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				data: expect.any(Object),
				name: 'creationMenuItemClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a ClayDatasetDisplay and emit an event on filter item click', () => {
		component = new ClayDatasetDisplay(defaultConfig);

		const spy = jest.spyOn(component, 'emit');

		const element =
			component.refs.managementToolbar.refs.filtersDropdown.refs.portal.element;
		element.querySelector('ul li:not(.dropdown-subheader)').click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				data: expect.any(Object),
				name: 'filterItemClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a ClayDatasetDisplay and emit an event on management toolbar creation menu more button click', () => {
		component = new ClayDatasetDisplay(defaultConfig);

		const spy = jest.spyOn(component, 'emit');

		// eslint-disable-next-line
		component.refs.managementToolbar.refs.creationMenuDropdown.refs.dropdown.refs.portal.refs.dropdownButton.element.click();

		jest.runAllTimers();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'creationMenuMoreButtonClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a ClayDatasetDisplay and emit an event on management toolbar search', () => {
		component = new ClayDatasetDisplay(defaultConfig);

		const spy = jest.spyOn(component, 'emit');

		component.refs.managementToolbar.refs.searchButton.element.click();

		jest.runAllTimers();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'search',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a ClayDatasetDisplay and emit an event on management toolbar sorting button click', () => {
		component = new ClayDatasetDisplay(defaultConfig);

		const spy = jest.spyOn(component, 'emit');

		component.refs.managementToolbar.refs.sortingButton.element.click();

		jest.runAllTimers();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				data: expect.any(Object),
				name: 'sortingButtonClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a ClayDatasetDisplay and select all items on management toolbar checkbox click', () => {
		defaultConfig.items = [
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

		component = new ClayDatasetDisplay(defaultConfig);

		component.refs.managementToolbar.refs.selectPageCheckbox.element
			.querySelector('input')
			.click();

		jest.runAllTimers();

		expect(component.getSelectedItems().length).toEqual(component._totalItems);
	});

	it('should render a ClayDatasetDisplay with selected items and deselect all items on management toolbar checked checkbox click', () => {
		defaultConfig.items = [
			{
				id: '1',
				name: 'Photos',
				selected: true,
				type: 'folder',
			},
			{
				id: '2',
				name: 'Videos',
				type: 'folder',
			},
		];

		component = new ClayDatasetDisplay(defaultConfig);

		component.refs.managementToolbar.refs.selectPageCheckbox.element
			.querySelector('input')
			.click();

		jest.runAllTimers();

		expect(component.getSelectedItems().length).toEqual(0);
	});

	it('should render a ClayDatasetDisplay with items and select an item on click', () => {
		defaultConfig.items = [
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

		component = new ClayDatasetDisplay(defaultConfig);

		component.element.querySelector('input[name="folder"]').click();

		jest.runAllTimers();

		expect(component.getSelectedItems().length).toEqual(1);
		expect(component.getSelectedItems()).toEqual([defaultConfig.items[0]]);
		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDatasetDisplay with grouped items and select an item on click', () => {
		defaultConfig.items = [
			{
				items: [
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
				],
				label: 'Group',
			},
		];

		component = new ClayDatasetDisplay(defaultConfig);

		component.element.querySelector('input[name="folder"]').click();

		jest.runAllTimers();

		expect(component.getSelectedItems().length).toEqual(1);
		expect(component.getSelectedItems()).toEqual([
			defaultConfig.items[0].items[0],
		]);
		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDatasetDisplay with items and deselect a selected item on click', () => {
		defaultConfig.items = [
			{
				id: '1',
				name: 'Photos',
				selected: true,
				type: 'folder',
			},
			{
				id: '2',
				name: 'Videos',
				type: 'folder',
			},
		];

		component = new ClayDatasetDisplay(defaultConfig);

		jest.runAllTimers();

		expect(component.getSelectedItems().length).toEqual(1);
		expect(component.getSelectedItems()).toEqual([defaultConfig.items[0]]);

		component.element.querySelector('input[name="folder"]').click();

		jest.runAllTimers();

		expect(component.getSelectedItems().length).toEqual(0);
		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDatasetDisplay with grouped items and deselect a selected item on click', () => {
		defaultConfig.items = [
			{
				items: [
					{
						id: '1',
						name: 'Photos',
						selected: true,
						type: 'folder',
					},
					{
						id: '2',
						name: 'Videos',
						type: 'folder',
					},
				],
				label: 'Group',
			},
		];

		component = new ClayDatasetDisplay(defaultConfig);

		jest.runAllTimers();

		expect(component.getSelectedItems().length).toEqual(1);
		expect(component.getSelectedItems()).toEqual([
			defaultConfig.items[0].items[0],
		]);

		component.element.querySelector('input[name="folder"]').click();

		jest.runAllTimers();

		expect(component.getSelectedItems().length).toEqual(0);
		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDatasetDisplay and change view on management toolbar view type click', () => {
		defaultConfig.selectedView = 0;

		component = new ClayDatasetDisplay(defaultConfig);

		expect(component).toMatchSnapshot();

		component.refs.managementToolbar.refs.viewTypesDropdown.refs.dropdown.refs.portal.element
			.querySelectorAll('ul li')[1]
			.click();

		jest.runAllTimers();

		expect(component).toMatchSnapshot();

		component.refs.managementToolbar.refs.viewTypesDropdown.refs.dropdown.refs.portal.element
			.querySelectorAll('ul li')[2]
			.click();

		jest.runAllTimers();

		expect(component).toMatchSnapshot();
	});

	it('should select and unselect all items', () => {
		let totalItems = 0;
		defaultConfig.items.map(item => {
			if (Array.isArray(item.items)) {
				item.items.map(() => totalItems++);
			} else {
				totalItems++;
			}
		});

		component = new ClayDatasetDisplay(defaultConfig);

		expect(component).toMatchSnapshot();

		const checkbox = component.refs.managementToolbar.refs.selectPageCheckbox.element.querySelector(
			'input[type="checkbox"]'
		);

		checkbox.click();

		jest.runAllTimers();

		expect(component).toMatchSnapshot();

		let selectedItems = component.getSelectedItems().length;

		expect(selectedItems).toBeGreaterThan(0);
		expect(selectedItems).toEqual(totalItems);

		checkbox.click();

		jest.runAllTimers();

		expect(component).toMatchSnapshot();

		selectedItems = component.getSelectedItems().length;

		expect(selectedItems).toBe(0);
	});
	*/
});
