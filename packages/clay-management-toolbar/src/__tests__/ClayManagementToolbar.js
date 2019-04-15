import {triggerEvent} from 'metal-dom';
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

	it('should render a management toolbar with creation menu and icons on left', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
			creationMenu: {
				itemsIconAlignment: 'left',
				primaryItems: [
					{
						href: '#1',
						label: 'Add Content 1',
						icon: 'download',
					},
					{
						href: '#2',
						label: 'Add Content 2',
						icon: 'users',
					},
				],
				secondaryItems: [
					{
						items: [
							{
								href: '#fav1',
								label: 'Favorite 1',
								icon: 'globe',
							},
							{
								href: '#fav2',
								label: 'Favorite 2',
								icon: 'code',
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

	it('should render a management toolbar with info button', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
			showInfoButton: true,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with results bar', () => {
		managementToolbar = new ClayManagementToolbar({
			id: 'myId',
			searchValue: 'foo',
			selectable: true,
			showResultsBar: true,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with results bar with filter labels', () => {
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
			showResultsBar: true,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar in state active with checkbox in indeterminate state', () => {
		managementToolbar = new ClayManagementToolbar({
			checkboxStatus: 'indeterminate',
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar in active state with checkbox checked', () => {
		managementToolbar = new ClayManagementToolbar({
			checkboxStatus: 'checked',
			clearSelectionURL: 'my-clear-selection-url',
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar in active state with checkbox checked selecting just one item', () => {
		managementToolbar = new ClayManagementToolbar({
			checkboxStatus: 'checked',
			clearSelectionURL: 'my-clear-selection-url',
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});
		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar in active state with checkbox checked selecting one item from a unique element selection', () => {
		managementToolbar = new ClayManagementToolbar({
			checkboxStatus: 'checked',
			clearSelectionURL: 'my-clear-selection-url',
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 1,
		});
		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar in active state with checkbox checked selecting one item from a unique element selection with bulkActions', () => {
		managementToolbar = new ClayManagementToolbar({
			checkboxStatus: 'checked',
			clearSelectionURL: 'my-clear-selection-url',
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			supportsBulkActions: true,
			totalItems: 1,
		});
		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar in active state with checkbox checked dont selecting any items', () => {
		managementToolbar = new ClayManagementToolbar({
			checkboxStatus: 'checked',
			clearSelectionURL: 'my-clear-selection-url',
			selectable: true,
			selectedItems: 0,
			spritemap: spritemap,
			totalItems: 1,
		});
		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar in active state with classes', () => {
		managementToolbar = new ClayManagementToolbar({
			elementClasses: 'my-custom-class',
			checkboxStatus: 'indeterminate',
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar in active state with id', () => {
		managementToolbar = new ClayManagementToolbar({
			checkboxStatus: 'indeterminate',
			id: 'myId',
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar in active state with clear selection link', () => {
		managementToolbar = new ClayManagementToolbar({
			checkboxStatus: 'indeterminate',
			clearSelectionURL: 'my-clear-selection-url',
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar in active state with select all button', () => {
		managementToolbar = new ClayManagementToolbar({
			checkboxStatus: 'indeterminate',
			selectable: true,
			selectedItems: 8,
			showSelectAllButton: true,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar in active state with select all link', () => {
		managementToolbar = new ClayManagementToolbar({
			checkboxStatus: 'indeterminate',
			selectAllURL: 'my-select-all-url',
			selectable: true,
			selectedItems: 8,
			showSelectAllButton: true,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar in active state with actions', () => {
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
			checkboxStatus: 'indeterminate',
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar in active state with no actions when actionsItems is empty', () => {
		managementToolbar = new ClayManagementToolbar({
			actionItems: [],
			checkboxStatus: 'indeterminate',
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar in active state with actions as quick actions', () => {
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
			checkboxStatus: 'indeterminate',
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar in active state with disabled actions as quick actions', () => {
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
			checkboxStatus: 'indeterminate',
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar in active state with info button', () => {
		managementToolbar = new ClayManagementToolbar({
			checkboxStatus: 'indeterminate',
			selectable: true,
			selectedItems: 1,
			showInfoButton: true,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar in active state with search results bar', () => {
		managementToolbar = new ClayManagementToolbar({
			checkboxStatus: 'indeterminate',
			id: 'myId',
			searchValue: 'foo',
			selectable: true,
			selectedItems: 1,
			showResultsBar: true,
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
			expect.objectContaining({
				data: {
					checked: expect.any(Boolean),
				},
				name: 'selectPageCheckboxChanged',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a selectable management toolbar in active state and emit an event on checkbox click', () => {
		managementToolbar = new ClayManagementToolbar({
			checkboxStatus: 'indeterminate',
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
			expect.objectContaining({
				data: {
					checked: expect.any(Boolean),
				},
				name: 'selectPageCheckboxChanged',
				originalEvent: expect.any(Object),
			})
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
			expect.objectContaining({
				data: {
					sortingOrder: expect.any(String),
				},
				name: 'sortingButtonClicked',
				originalEvent: expect.any(Object),
			})
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
			expect.objectContaining({
				data: null,
				name: 'creationButtonClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a management toolbar and emit an event on creation menu click with data from the primaryItems', () => {
		managementToolbar = new ClayManagementToolbar({
			creationMenu: {
				primaryItems: [
					{
						label: 'Add Content 1',
					},
				],
			},
			spritemap: spritemap,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.creationMenu.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				data: {
					label: 'Add Content 1',
				},
				name: 'creationButtonClicked',
				originalEvent: expect.any(Object),
			})
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
			expect.objectContaining({
				name: 'creationMenuMoreButtonClicked',
				originalEvent: expect.any(Object),
			})
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
			expect.objectContaining({
				name: 'filterDoneClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a management toolbar and emit an on search', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.searchButton.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'search',
				originalEvent: expect.any(Object),
			})
		);
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

		triggerEvent(element.querySelector('ul li'), 'change', {});

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

	it('should render a management toolbar in active state with actions and emit an event on action click', () => {
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
			checkboxStatus: 'indeterminate',
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

	it('should render a management toolbar in the active action state and not emit a click action event when it is disabled', () => {
		managementToolbar = new ClayManagementToolbar({
			actionItems: [
				{
					disabled: true,
					href: '#editurl',
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
			checkboxStatus: 'indeterminate',
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.quickAction0.element.click();

		expect(spy).not.toHaveBeenCalled();
		expect(spy).not.toHaveBeenCalledWith(
			expect.objectContaining({
				data: expect.any(Object),
				name: 'actionItemClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a management toolbar in active state with actions mixed between quick actions and emit an event on action click and return the expected value', () => {
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
			checkboxStatus: 'indeterminate',
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
			expect.objectContaining({
				name: 'infoButtonClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a management toolbar in active state with info button and emit an event on infoButton click', () => {
		managementToolbar = new ClayManagementToolbar({
			checkboxStatus: 'indeterminate',
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
			expect.objectContaining({
				name: 'infoButtonClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a management toolbar in active state and emit an event on clear selection button click', () => {
		managementToolbar = new ClayManagementToolbar({
			checkboxStatus: 'indeterminate',
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			supportsBulkActions: true,
			totalItems: 10,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.clearSelectionButton.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'clearSelectionButtonClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a management toolbar in active state and emit an event on select all button click', () => {
		managementToolbar = new ClayManagementToolbar({
			checkboxStatus: 'indeterminate',
			selectable: true,
			selectedItems: 5,
			showSelectAllButton: true,
			spritemap: spritemap,
			supportsBulkActions: true,
			totalItems: 10,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.selectAllButton.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'selectAllButtonClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a management toolbar with results bar and a clear results link', () => {
		managementToolbar = new ClayManagementToolbar({
			clearResultsURL: '#clear',
			searchValue: 'foo',
			selectable: true,
			showResultsBar: true,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(managementToolbar).toMatchSnapshot();

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.resultsBar.refs.clearSearch.element.click();

		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'clearButtonClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a management toolbar with results bar and emit an event on clear button click', () => {
		managementToolbar = new ClayManagementToolbar({
			searchValue: 'foo',
			selectable: true,
			showResultsBar: true,
			spritemap: spritemap,
			totalItems: 10,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.resultsBar.refs.clearSearch.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'clearButtonClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a management toolbar with results bar and emit an event on close label click', () => {
		managementToolbar = new ClayManagementToolbar({
			clearResultsURL: '#clear',
			filterLabels: [
				{
					closeable: false,
					label: 'Filter 1',
				},
				{
					label: 'Filter 2',
				},
				{
					label: 'Category: Label 3',
				},
			],
			searchValue: 'foo',
			selectable: true,
			showResultsBar: true,
			spritemap: spritemap,
			totalItems: 10,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		// eslint-disable-next-line
		managementToolbar.refs.resultsBar.refs.label1.refs.label.refs.closeButton.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'filterLabelCloseClicked',
				originalEvent: expect.any(Object),
			})
		);
	});
});
