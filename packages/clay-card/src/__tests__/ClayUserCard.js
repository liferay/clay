import ClayUserCard from '../ClayUserCard';

let component;
let spritemap = 'icons.svg';
let actionItems = [
	{
		label: 'Edit',
		url: '#1',
	},
	{
		label: 'Save',
		url: '#1',
	},
];

describe('ClayUserCard', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayUserCard({
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with classes', () => {
		component = new ClayUserCard({
			spritemap: spritemap,
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with id', () => {
		component = new ClayUserCard({
			spritemap: spritemap,
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with actionItems', () => {
		component = new ClayUserCard({
			actionItems: actionItems,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selected ClayUserCard', () => {
		component = new ClayUserCard({
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a disabled ClayUserCard', () => {
		component = new ClayUserCard({
			disabled: true,
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with input `name`', () => {
		component = new ClayUserCard({
			inputName: 'checkbox01',
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with input `value`', () => {
		component = new ClayUserCard({
			inputValue: 'checkbox',
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with icon', () => {
		component = new ClayUserCard({
			icon: 'documents',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with imageAlt', () => {
		component = new ClayUserCard({
			imageAlt: 'thumbnail',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with imageSrc', () => {
		component = new ClayUserCard({
			imageSrc: 'thumbnail_coffee.jpg',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with subtitle', () => {
		component = new ClayUserCard({
			subtitle: 'Author Action',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with title', () => {
		component = new ClayUserCard({
			name: 'empty-background.png',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with type', () => {
		component = new ClayUserCard({
			initials: 'DOC',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with type `danger color`', () => {
		component = new ClayUserCard({
			initials: 'DOC',
			userColor: 'danger',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with type `dark color`', () => {
		component = new ClayUserCard({
			initials: 'DOC',
			userColor: 'dark',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with type `info color`', () => {
		component = new ClayUserCard({
			initials: 'DOC',
			userColor: 'info',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with type `light color`', () => {
		component = new ClayUserCard({
			initials: 'DOC',
			userColor: 'light',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with type `primary color`', () => {
		component = new ClayUserCard({
			initials: 'DOC',
			userColor: 'primary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with type `secondary color`', () => {
		component = new ClayUserCard({
			initials: 'DOC',
			userColor: 'secondary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with type `success color`', () => {
		component = new ClayUserCard({
			initials: 'DOC',
			userColor: 'success',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with type `warning color`', () => {
		component = new ClayUserCard({
			initials: 'DOC',
			userColor: 'warning',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with url', () => {
		component = new ClayUserCard({
			url: '#1',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});
});
