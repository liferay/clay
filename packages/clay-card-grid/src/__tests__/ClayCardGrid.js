import ClayCardGrid from '../ClayCardGrid';

let component;

let items = [
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
		label: 'Folders',
	},
	{
		items: [
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
		],
		label: 'Recipes',
	},
	{
		items: [
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
		],
		label: 'Chefs',
	},
];

const schema = {
	contentRendererMap: {
		chef: 'user',
		folder: 'horizontal',
		MKV: 'file',
	},
	fieldsMap: {
		contentRenderer: 'type',
		description: 'origin',
		fileType: 'format',
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
	fileTypeStylesMap: {
		PDF: 'danger',
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
	userColorsMap: {
		'fusion': 'danger',
		'*': 'primary',
	},
};

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

describe('ClayCardGrid', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayCardGrid({
			items: items,
			schema: schema,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardGrid with classes', () => {
		component = new ClayCardGrid({
			elementClasses: 'my-custom-class',
			schema: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardGrid with id', () => {
		component = new ClayCardGrid({
			id: 'myId',
			schema: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable items ClayCardGrid and emit an event on item toggle selection', () => {
		component = new ClayCardGrid({
			items: items,
			schema: schema,
			selectable: true,
			spritemap: spritemap,
		});

		const spy = jest.spyOn(component, 'emit');

		component.element.querySelector('ul li input[type="checkbox"]').click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith('itemToggled', expect.any(Object));
	});
});
