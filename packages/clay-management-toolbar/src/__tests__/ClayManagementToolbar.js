import ClayManagementToolbar from '../ClayManagementToolbar';

let managementToolbar;

const spritemap = '../node_modules/clay-css/lib/images/icons/icons.svg';

describe('ClayManagementToolbar', function() {
	afterEach(() => {
		if (managementToolbar) {
			managementToolbar.dispose();
		}
	});

	it('should render the default markup', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with classes', () => {
		managementToolbar = new ClayManagementToolbar({
			elementClasses: 'my-custom-class',
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with id', () => {
		managementToolbar = new ClayManagementToolbar({
			id: 'myId',
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with no search', () => {
		managementToolbar = new ClayManagementToolbar({
			showSearch: false,
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with search action url', () => {
		managementToolbar = new ClayManagementToolbar({
			searchActionURL: 'mySearchURL',
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with search form name', () => {
		managementToolbar = new ClayManagementToolbar({
			searchFormName: 'mySearchName',
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with search input name', () => {
		managementToolbar = new ClayManagementToolbar({
			searchInputName: 'mySearchName',
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with search and customized placeholder', () => {
		managementToolbar = new ClayManagementToolbar({
			searchInputPlaceholder: 'Search thread...',
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with advanced search', () => {
		managementToolbar = new ClayManagementToolbar({
			showAdvancedSearch: true,
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with selection enabled', () => {
		managementToolbar = new ClayManagementToolbar({
			selectable: true,
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with selection enabled and no filters, sorting and search', () => {
		managementToolbar = new ClayManagementToolbar({
			selectable: true,
			showSearch: false,
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with ascending sorting', () => {
		managementToolbar = new ClayManagementToolbar({
			sortingOrder: 'asc',
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with descending sorting', () => {
		managementToolbar = new ClayManagementToolbar({
			sortingOrder: 'desc',
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with sorting href', () => {
		managementToolbar = new ClayManagementToolbar({
			sortingOrder: 'desc',
			sortingURL: '#sorting',
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with filters dropdown with items of type checkbox', () => {
		managementToolbar = new ClayManagementToolbar({
			filterItems: [
				{
					label: 'Item 1',
					inputName: 'item1checkbox',
					inputValue: '1',
					type: 'checkbox',
				},
				{
					label: 'Item 2',
					inputName: 'item2checkbox',
					inputValue: '2',
					type: 'checkbox',
				},
			],
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with filters dropdown with items of type radio', () => {
		managementToolbar = new ClayManagementToolbar({
			filterItems: [
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
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with filters dropdown with items of type item', () => {
		managementToolbar = new ClayManagementToolbar({
			filterItems: [
				{
					href: '#myItem1',
					label: 'Item 1',
					type: 'item',
				},
				{
					href: '#myItem2',
					label: 'Item 2',
					type: 'item',
				},
			],
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with filters dropdown with items and no done button', () => {
		managementToolbar = new ClayManagementToolbar({
			filterItems: [
				{
					href: '#myItem1',
					label: 'Item 1',
					type: 'item',
				},
				{
					href: '#myItem2',
					label: 'Item 2',
					type: 'item',
				},
			],
			showFiltersDoneButton: false,
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with view types', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
			viewTypes: [
				{
					active: true,
					icon: 'list',
					label: 'List',
				},
				{
					disabled: true,
					icon: 'table',
					label: 'Table',
				},
				{
					icon: 'cards2',
					label: 'Card',
				},
			],
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with links as view types', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
			viewTypes: [
				{
					active: true,
					href: '#list',
					icon: 'list',
					label: 'List',
				},
				{
					disabled: true,
					href: '#table',
					icon: 'table',
					label: 'Table',
				},
				{
					href: '#cards',
					icon: 'cards2',
					label: 'Card',
				},
			],
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with creation menu', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar without creation menu', () => {
		managementToolbar = new ClayManagementToolbar({
			showCreationMenu: false,
			spritemap: spritemap,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with creation menu with one option', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
			creationMenu: {
				primaryItems: [
					{
						href: '#1',
						label: 'Add Content 1',
					},
				],
			},
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with creation menu with more than one option', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
			creationMenu: {
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
			},
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with creation menu with primary and secondary items', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
			creationMenu: {
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
						],
					},
				],
			},
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with creation menu with primary items and 7 secondary items when more than 7 are passed', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
			creationMenu: {
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
				viewMoreURL: '#viewMore',
			},
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with state active', () => {
		managementToolbar = new ClayManagementToolbar({
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a disabled management toolbar', () => {
		managementToolbar = new ClayManagementToolbar({
			filterItems: [
				{
					label: 'Item 1',
					inputName: 'item1checkbox',
					inputValue: '1',
					type: 'checkbox',
				},
				{
					label: 'Item 2',
					inputName: 'item2checkbox',
					inputValue: '2',
					type: 'checkbox',
				},
			],
			selectable: true,
			sortingOrder: 'asc',
			showInfoButton: true,
			spritemap: spritemap,
			totalItems: 0,
			viewTypes: [
				{
					active: true,
					icon: 'list',
					label: 'List',
				},
				{
					disabled: true,
					icon: 'table',
					label: 'Table',
				},
				{
					icon: 'cards2',
					label: 'Card',
				},
			],
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a disabled management toolbar with enabled search', () => {
		managementToolbar = new ClayManagementToolbar({
			filterItems: [
				{
					label: 'Item 1',
					inputName: 'item1checkbox',
					inputValue: '1',
					type: 'checkbox',
				},
				{
					label: 'Item 2',
					inputName: 'item2checkbox',
					inputValue: '2',
					type: 'checkbox',
				},
			],
			searchValue: 'carcamusas',
			selectable: true,
			sortingOrder: 'asc',
			showInfoButton: true,
			spritemap: spritemap,
			totalItems: 0,
			viewTypes: [
				{
					active: true,
					icon: 'list',
					label: 'List',
				},
				{
					disabled: true,
					icon: 'table',
					label: 'Table',
				},
				{
					icon: 'cards2',
					label: 'Card',
				},
			],
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with classes in active state', () => {
		managementToolbar = new ClayManagementToolbar({
			elementClasses: 'my-custom-class',
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with id in active state', () => {
		managementToolbar = new ClayManagementToolbar({
			id: 'myId',
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with actions in active state', () => {
		managementToolbar = new ClayManagementToolbar({
			actionItems: [
				{
					label: 'Edit',
					href: '#editurl',
				},
				{
					label: 'Delete',
					href: '#deleteurl',
				},
			],
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with actions as quick actions in active state', () => {
		managementToolbar = new ClayManagementToolbar({
			actionItems: [
				{
					label: 'Edit',
					quickAction: true,
				},
				{
					label: 'Delete',
					href: '#deleteurl',
					quickAction: true,
				},
			],
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with disabled actions as quick actions in active state', () => {
		managementToolbar = new ClayManagementToolbar({
			actionItems: [
				{
					disabled: true,
					icon: 'edit',
					label: 'Edit',
					quickAction: true,
				},
				{
					disabled: true,
					href: '#deleteurl',
					icon: 'trash',
					label: 'Delete',
					quickAction: true,
				},
			],
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with info button', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
			showInfoButton: true,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with info button in active state', () => {
		managementToolbar = new ClayManagementToolbar({
			selectable: true,
			selectedItems: 1,
			showInfoButton: true,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with search results bar', () => {
		managementToolbar = new ClayManagementToolbar({
			id: 'myId',
			searchValue: 'foo',
			selectable: true,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with search results bar when state is active', () => {
		managementToolbar = new ClayManagementToolbar({
			id: 'myId',
			searchValue: 'foo',
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with search results bar with filter labels', () => {
		managementToolbar = new ClayManagementToolbar({
			filterLabels: [
				{
					label: 'Label 1',
				},
				{
					label: 'Label 2',
				},
				{
					label: '<strong>Category:</strong>Label 3',
				},
			],
			id: 'myId',
			searchValue: 'foo',
			selectable: true,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a selectable management toolbar and emit an event on checkbox click', () => {
		managementToolbar = new ClayManagementToolbar({
			selectable: true,
			spritemap: spritemap,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.selectPageCheckbox.element
			.querySelector('input')
			.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			'selectPageCheckboxChanged',
			expect.any(Object)
		);
	});

	it('should render a selectable management toolbar and emit an event on checkbox click on active state', () => {
		managementToolbar = new ClayManagementToolbar({
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.selectPageCheckbox.element
			.querySelector('input')
			.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			'selectPageCheckboxChanged',
			expect.any(Object)
		);
	});

	it('should render a management toolbar and emit an event on sorting button click', () => {
		managementToolbar = new ClayManagementToolbar({
			sortingOrder: 'asc',
			spritemap: spritemap,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.sortingButton.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			'sortingButtonClicked',
			expect.any(Object)
		);
	});

	it('should render a management toolbar and emit an event on creation menu click', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.creationMenu.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			'creationButtonClicked',
			expect.any(Object)
		);
	});

	it('should render a management toolbar and emit an event on creation menu more button click', () => {
		managementToolbar = new ClayManagementToolbar({
			creationMenu: {
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
			},
			spritemap: spritemap,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		// eslint-disable-next-line
		managementToolbar.refs.creationMenuDropdown.refs.dropdown.refs.portal.refs.dropdownButton.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			'creationMenuMoreButtonClicked',
			expect.any(Object)
		);
	});

	it('should render a management toolbar and emit an event on filter done button click', () => {
		managementToolbar = new ClayManagementToolbar({
			filterItems: [
				{
					label: 'Item 1',
					inputName: 'item1checkbox',
					inputValue: '1',
					type: 'checkbox',
				},
				{
					label: 'Item 2',
					inputName: 'item2checkbox',
					inputValue: '2',
					type: 'checkbox',
				},
			],
			spritemap: spritemap,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		let filters = managementToolbar.refs.filtersDropdown;
		filters.refs.portal.refs.dropdownButton.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			'filterDoneClicked',
			expect.any(Object)
		);
	});

	it('should render a management toolbar and emit an on search', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.searchButton.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith('search', expect.any(Object));
	});

	it('should render a management toolbar with creation menu with options and emit an event on creation menu item click', () => {
		managementToolbar = new ClayManagementToolbar({
			creationMenu: {
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
			},
			spritemap: spritemap,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		const element =
			managementToolbar.refs.creationMenuDropdown.refs.dropdown.refs
				.portal.element;
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

	it('should render a management toolbar with filters dropdown and emit an event on filter item click', () => {
		managementToolbar = new ClayManagementToolbar({
			filterItems: [
				{
					label: 'Item 1',
					inputName: 'item1checkbox',
					inputValue: '1',
					type: 'checkbox',
				},
				{
					label: 'Item 2',
					inputName: 'item2checkbox',
					inputValue: '2',
					type: 'checkbox',
				},
			],
			spritemap: spritemap,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		const element =
			managementToolbar.refs.filtersDropdown.refs.portal.element;
		element.querySelector('ul li').click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				data: expect.any(Object),
				name: 'filterItemClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a management toolbar with view types and emit an event on viewType click', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
			viewTypes: [
				{
					active: true,
					icon: 'list',
					label: 'List',
				},
				{
					disabled: true,
					icon: 'table',
					label: 'Table',
				},
				{
					icon: 'cards2',
					label: 'Card',
				},
			],
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		const element =
			managementToolbar.refs.viewTypesDropdown.refs.dropdown.refs.portal
				.element;
		element.querySelector('ul li').click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				data: expect.any(Object),
				name: 'viewTypeItemClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a management toolbar with actions and emit an event on action click', () => {
		managementToolbar = new ClayManagementToolbar({
			actionItems: [
				{
					label: 'Edit',
					href: '#editurl',
					icon: 'edit',
					quickAction: true,
				},
				{
					label: 'Delete',
					href: '#deleteurl',
					icon: 'trash',
					quickAction: true,
				},
			],
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.quickAction0.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				data: expect.any(Object),
				name: 'actionItemClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a management toolbar with actions mixed between quick actions and emit an event on action click and return the expected value', () => {
		managementToolbar = new ClayManagementToolbar({
			actionItems: [
				{
					label: 'Edit',
					href: '#editurl',
					icon: 'edit',
					quickAction: true,
				},
				{
					label: 'Download',
					href: '#downloadurl',
					icon: 'download',
					quickAction: false,
				},
				{
					label: 'Delete',
					href: '#deleteurl',
					icon: 'trash',
					quickAction: true,
				},
			],
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		let dataToExpect = {
			item: {
				label: 'Delete',
				href: '#deleteurl',
				icon: 'trash',
				quickAction: true,
			},
		};

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.quickAction2.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				data: dataToExpect,
				name: 'actionItemClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a management toolbar with info button and emit an event on infoButton click', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
			showInfoButton: true,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.infoButton.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			'infoButtonClicked',
			expect.any(Object)
		);
	});

	it('should render a management toolbar with info button in active state and emit an event on infoButton click', () => {
		managementToolbar = new ClayManagementToolbar({
			selectable: true,
			selectedItems: 1,
			showInfoButton: true,
			spritemap: spritemap,
			totalItems: 10,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.infoButton.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			'infoButtonClicked',
			expect.any(Object)
		);
	});

	it('should render a management toolbar with a clear results link', () => {
		managementToolbar = new ClayManagementToolbar({
			clearResultsURL: '#clear',
			searchValue: 'foo',
			selectable: true,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.resultsBar.refs.clearSearch.element.click();

		expect(spy).toHaveBeenCalledWith(
			'clearButtonClicked',
			expect.any(Object)
		);
	});

	it('should render a management toolbar and emit an event on clear button click', () => {
		managementToolbar = new ClayManagementToolbar({
			searchValue: 'foo',
			selectable: true,
			spritemap: spritemap,
			totalItems: 10,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.resultsBar.refs.clearSearch.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			'clearButtonClicked',
			expect.any(Object)
		);
	});
});
