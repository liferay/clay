import ClayTable from '../ClayTable';

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

const actionItems = [
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
		icon: 'info-circle-open',
		label: 'Mark as watched',
		quickAction: true,
	},
];

let component;

describe('ClayTable', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayTable({
			schema: [],
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
					fieldName: 'title',
					label: 'Title',
				},
				{
					fieldName: 'director',
					label: 'Director',
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with a basic schema with sortable fields and no items', () => {
		component = new ClayTable({
			schema: [
				{
					fieldName: 'title',
					label: 'Title',
					sortable: true,
					sortingOrder: 'asc',
				},
				{
					fieldName: 'director',
					label: 'Director',
					sortable: true,
				},
				{
					fieldName: 'year',
					label: 'Year',
				},
			],
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
			schema: [
				{
					fieldName: 'title',
					label: 'Title',
					sortable: true,
					sortingOrder: 'asc',
				},
				{
					fieldName: 'director',
					label: 'Director',
					sortable: true,
				},
				{
					fieldName: 'year',
					label: 'Year',
				},
			],
		});

		component.element.querySelector('table thead tr th button').click();

		expect(spy).toHaveBeenCalled();
	});

	it('should render a ClayTable with a basic schema and items', () => {
		component = new ClayTable({
			items: [
				{
					director: 'George Lucas',
					title: 'Episode I: The Phantom Menace',
				},
				{
					director: 'George Lucas',
					title: 'Episode II: Attack of the Clones',
				},
			],
			schema: [
				{
					fieldName: 'title',
					label: 'Title',
				},
				{
					fieldName: 'director',
					label: 'Director',
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with a basic schema and grouped items', () => {
		component = new ClayTable({
			items: [
				{
					items: [
						{
							director: 'George Lucas',
							title: 'Episode I: The Phantom Menace',
						},
						{
							director: 'George Lucas',
							title: 'Episode II: Attack of the Clones',
						},
					],
					label: 'Saga',
				},
				{
					items: [
						{
							director: 'Gareth Edwards',
							title: 'Rogue One: A Star Wars Story',
						},
						{
							director: 'Ron Howard',
							title: 'Solo: A Star Wars Story',
						},
					],
					label: 'Expanded Universe',
				},
			],
			schema: [
				{
					fieldName: 'title',
					label: 'Title',
				},
				{
					fieldName: 'director',
					label: 'Director',
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with an schema with button field and items', () => {
		component = new ClayTable({
			items: [
				{
					title: 'Episode I: The Phantom Menace',
				},
				{
					title: 'Episode II: Attack of the Clones',
				},
			],
			schema: [
				{
					fieldName: 'title',
					label: 'Title',
				},
				{
					contentRenderer: 'button',
					fieldName: 'downloadHref',
					label: 'Download',
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with schema with button field and emit an event on click', () => {
		const spy = jest.fn();

		component = new ClayTable({
			events: {
				cellContentClicked: spy,
			},
			items: [
				{
					title: 'Episode I: The Phantom Menace',
				},
				{
					title: 'Episode II: Attack of the Clones',
				},
			],
			schema: [
				{
					fieldName: 'title',
					label: 'Title',
				},
				{
					contentRenderer: 'button',
					fieldName: 'downloadHref',
					label: 'Download',
				},
			],
		});

		component.element.querySelector('table tr td button').click();

		expect(spy).toHaveBeenCalled();
	});

	it('should render a ClayTable with an schema with label field and items', () => {
		component = new ClayTable({
			items: [
				{
					status: 'Watched',
					title: 'Episode I: The Phantom Menace',
				},
				{
					status: 'Watched',
					title: 'Episode II: Attack of the Clones',
				},
			],
			schema: [
				{
					fieldName: 'title',
					label: 'Title',
				},
				{
					contentRenderer: 'label',
					fieldName: 'status',
					label: 'Status',
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with an schema with label field with styles map and items', () => {
		component = new ClayTable({
			items: [
				{
					status: 'Error',
					title: 'Episode I: The Phantom Menace',
				},
				{
					status: 'Watched',
					title: 'Episode II: Attack of the Clones',
				},
				{
					status: 'Pending',
					title: 'Episode III: Revenge of the Sith',
				},
			],
			schema: [
				{
					fieldName: 'title',
					label: 'Title',
				},
				{
					contentRenderer: 'label',
					fieldName: 'status',
					label: 'Status',
					labelStylesMap: {
						'Watched': 'success',
						'Pending': 'warning',
						'*': 'danger',
					},
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with an schema with link field and items', () => {
		component = new ClayTable({
			items: [
				{
					imdbHref: '#phantom',
					title: 'Episode I: The Phantom Menace',
				},
				{
					imdbHref: '#attack',
					title: 'Episode II: Attack of the Clones',
				},
				{
					imdbHref: '#revenge',
					title: 'Episode III: Revenge of the Sith',
				},
			],
			schema: [
				{
					fieldName: 'title',
					label: 'Title',
				},
				{
					contentRenderer: 'link',
					fieldName: 'title',
					hrefFieldName: 'imdbHref',
					label: 'IMDB',
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with an schema with number field and items', () => {
		component = new ClayTable({
			items: [
				{
					title: 'Episode I: The Phantom Menace',
					year: '1999',
				},
				{
					title: 'Episode II: Attack of the Clones',
					year: '2002',
				},
				{
					title: 'Episode III: Revenge of the Sith',
					year: '2005',
				},
			],
			schema: [
				{
					fieldName: 'title',
					label: 'Title',
				},
				{
					contentRenderer: 'number',
					fieldName: 'year',
					label: 'Year',
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with an schema with progress bar field and items', () => {
		component = new ClayTable({
			items: [
				{
					rating: 1,
					title: 'Episode I: The Phantom Menace',
				},
				{
					rating: 5,
					title: 'Episode II: Attack of the Clones',
				},
				{
					rating: 6,
					title: 'Episode III: Revenge of the Sith',
				},
			],
			schema: [
				{
					fieldName: 'title',
					label: 'Title',
				},
				{
					contentRenderer: 'progressbar',
					fieldName: 'rating',
					label: 'Rating',
					maxValue: 10,
					minValue: 0,
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayTable with an schema and items', () => {
		component = new ClayTable({
			items: [
				{
					title: 'Episode I: The Phantom Menace',
				},
				{
					title: 'Episode II: Attack of the Clones',
				},
				{
					title: 'Episode III: Revenge of the Sith',
				},
			],
			schema: [
				{
					fieldName: 'title',
					label: 'Title',
				},
			],
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
			items: [
				{
					title: 'Episode I: The Phantom Menace',
				},
				{
					title: 'Episode II: Attack of the Clones',
				},
				{
					title: 'Episode III: Revenge of the Sith',
				},
			],
			schema: [
				{
					fieldName: 'title',
					label: 'Title',
				},
			],
			selectable: true,
		});

		component.element
			.querySelector('table tr td input[type="checkbox"]')
			.click();

		expect(spy).toHaveBeenCalled();
	});

	it('should render a ClayTable with an schema, items and action menu', () => {
		component = new ClayTable({
			items: [
				{
					actionItems: actionItems,
					title: 'Episode I: The Phantom Menace',
				},
				{
					actionItems: actionItems,
					title: 'Episode II: Attack of the Clones',
				},
				{
					actionItems: actionItems,
					title: 'Episode III: Revenge of the Sith',
				},
			],
			schema: [
				{
					fieldName: 'title',
					label: 'Title',
				},
			],
			showActionsMenu: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with an schema, items and action menu with quick action items', () => {
		component = new ClayTable({
			items: [
				{
					actionItems: actionItemsWithQuickItems,
					title: 'Episode I: The Phantom Menace',
				},
				{
					actionItems: actionItemsWithQuickItems,
					title: 'Episode II: Attack of the Clones',
				},
				{
					actionItems: actionItemsWithQuickItems,
					title: 'Episode III: Revenge of the Sith',
				},
			],
			schema: [
				{
					fieldName: 'title',
					label: 'Title',
				},
			],
			showActionsMenu: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});
});

it('should render a ClayTable with a basic schema and items and add a class on row focus', () => {
	component = new ClayTable({
		items: [
			{
				director: 'George Lucas',
				title: 'Episode I: The Phantom Menace',
			},
			{
				director: 'George Lucas',
				title: 'Episode II: Attack of the Clones',
			},
		],
		schema: [
			{
				fieldName: 'title',
				label: 'Title',
			},
			{
				fieldName: 'director',
				label: 'Director',
			},
		],
	});

	component.element
		.querySelector('table tbody tr:not(.table-divider)')
		.focus();

	expect(component).toMatchSnapshot();
});
