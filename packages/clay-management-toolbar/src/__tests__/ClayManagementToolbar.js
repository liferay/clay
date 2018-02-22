import ClayManagementToolbar from '../ClayManagementToolbar';

let managementToolbar;

const spritemap = '../node_modules/clay/lib/images/icons/icons.svg';

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
			hideFiltersDoneButton: true,
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

	it('should render a managment toolbar with plus button', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
			creationMenu: true,
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a managment toolbar with plus link', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
			creationMenu: '#1',
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with plus button with one option', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
			creationMenu: {
				items: [
					{
						href: '#1',
						label: 'Add Content 1',
					},
				],
			},
		});

		expect(managementToolbar).toMatchSnapshot();
	});

	it('should render a management toolbar with plus button with more than one option', () => {
		managementToolbar = new ClayManagementToolbar({
			spritemap: spritemap,
			creationMenu: {
				items: [
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

	it('should render a management toolbar with search results bar only when totalItems is greater than zero', () => {
		managementToolbar = new ClayManagementToolbar({
			id: 'myId',
			searchValue: 'foo',
			selectable: true,
			spritemap: spritemap,
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

	it('should render a management toolbar and emit an event on plus button click', () => {
		managementToolbar = new ClayManagementToolbar({
			creationMenu: true,
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

	it('should render a management toolbar and emit an event on select all button click', () => {
		managementToolbar = new ClayManagementToolbar({
			selectable: true,
			selectedItems: 1,
			spritemap: spritemap,
			totalItems: 10,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.selectAllButton.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			'selectAllClicked',
			expect.any(Object)
		);
	});

	it('should render a management toolbar and emit an event on deselect all button click', () => {
		managementToolbar = new ClayManagementToolbar({
			selectable: true,
			selectedItems: 10,
			spritemap: spritemap,
			totalItems: 10,
		});
		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.deselectAllButton.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			'deselectAllClicked',
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

		let filters = managementToolbar.refs.filters;
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
		expect(spy).toHaveBeenCalledWith('viewTypeClicked', expect.any(Object));
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
		expect(spy).toHaveBeenCalledWith('actionClicked', expect.any(Object));
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

	it('should render a management toolbar and emit an event on clear button click', () => {
		managementToolbar = new ClayManagementToolbar({
			searchValue: 'foo',
			selectable: true,
			spritemap: spritemap,
			totalItems: 10,
		});

		const spy = jest.spyOn(managementToolbar, 'emit');

		managementToolbar.refs.clearSearch.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			'clearButtonClicked',
			expect.any(Object)
		);
	});
});
