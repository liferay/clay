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
			name: 'User Name',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with classes', () => {
		component = new ClayUserCard({
			name: 'User Name',
			spritemap: spritemap,
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with id', () => {
		component = new ClayUserCard({
			name: 'User Name',
			spritemap: spritemap,
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with actionItems', () => {
		component = new ClayUserCard({
			actionItems: actionItems,
			name: 'User Name',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayUserCard', () => {
		component = new ClayUserCard({
			name: 'User Name',
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selected ClayUserCard', () => {
		component = new ClayUserCard({
			name: 'User Name',
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a disabled ClayUserCard', () => {
		component = new ClayUserCard({
			disabled: true,
			name: 'User Name',
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayUserCard with input `name`', () => {
		component = new ClayUserCard({
			inputName: 'checkbox01',
			name: 'User Name',
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayUserCard with input `value`', () => {
		component = new ClayUserCard({
			inputValue: 'checkbox',
			name: 'User Name',
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with imageAlt', () => {
		component = new ClayUserCard({
			imageAlt: 'thumbnail',
			name: 'User Name',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with imageSrc', () => {
		component = new ClayUserCard({
			imageSrc: 'thumbnail_coffee.jpg',
			name: 'User Name',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with subtitle', () => {
		component = new ClayUserCard({
			name: 'User Name',
			subtitle: 'Author Action',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with user initials', () => {
		component = new ClayUserCard({
			initials: 'DOC',
			name: 'User Name',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with user initials and style `danger color`', () => {
		component = new ClayUserCard({
			initials: 'DOC',
			name: 'User Name',
			userColor: 'danger',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with user initials and style `dark color`', () => {
		component = new ClayUserCard({
			initials: 'DOC',
			name: 'User Name',
			userColor: 'dark',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with user initials and style `info color`', () => {
		component = new ClayUserCard({
			initials: 'DOC',
			name: 'User Name',
			userColor: 'info',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with user initials and style `light color`', () => {
		component = new ClayUserCard({
			initials: 'DOC',
			name: 'User Name',
			userColor: 'light',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with user initials and style `primary color`', () => {
		component = new ClayUserCard({
			initials: 'DOC',
			name: 'User Name',
			userColor: 'primary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with user initials and style `secondary color`', () => {
		component = new ClayUserCard({
			initials: 'DOC',
			name: 'User Name',
			userColor: 'secondary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with user initials and style `success color`', () => {
		component = new ClayUserCard({
			initials: 'DOC',
			name: 'User Name',
			userColor: 'success',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with user initials and style `warning color`', () => {
		component = new ClayUserCard({
			initials: 'DOC',
			name: 'User Name',
			userColor: 'warning',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with url', () => {
		component = new ClayUserCard({
			name: 'User Name',
			url: '#1',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should fail when no name is passed', function() {
		expect(() => {
			component = new ClayUserCard();
		}).toThrow();
	});
});
