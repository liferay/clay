import ClayCardUser from '../ClayCardUser';

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

describe('ClayCardUser', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayCardUser({
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with classes', () => {
		component = new ClayCardUser({
			spritemap: spritemap,
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with id', () => {
		component = new ClayCardUser({
			spritemap: spritemap,
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with actionItems', () => {
		component = new ClayCardUser({
			actionItems: actionItems,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selected ClayCardUser', () => {
		component = new ClayCardUser({
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a disabled ClayCardUser', () => {
		component = new ClayCardUser({
			disabled: true,
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with input `name`', () => {
		component = new ClayCardUser({
			inputName: 'checkbox01',
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with input `value`', () => {
		component = new ClayCardUser({
			inputValue: 'checkbox',
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with icon', () => {
		component = new ClayCardUser({
			icon: 'documents',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with imageAlt', () => {
		component = new ClayCardUser({
			imageAlt: 'thumbnail',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with imageSrc', () => {
		component = new ClayCardUser({
			imageSrc: 'thumbnail_coffee.jpg',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with subtitle', () => {
		component = new ClayCardUser({
			subtitle: 'Author Action',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with title', () => {
		component = new ClayCardUser({
			name: 'empty-background.png',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with type', () => {
		component = new ClayCardUser({
			initials: 'DOC',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with type `danger color`', () => {
		component = new ClayCardUser({
			initials: 'DOC',
			userColor: 'danger',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with type `dark color`', () => {
		component = new ClayCardUser({
			initials: 'DOC',
			userColor: 'dark',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with type `info color`', () => {
		component = new ClayCardUser({
			initials: 'DOC',
			userColor: 'info',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with type `light color`', () => {
		component = new ClayCardUser({
			initials: 'DOC',
			userColor: 'light',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with type `primary color`', () => {
		component = new ClayCardUser({
			initials: 'DOC',
			userColor: 'primary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with type `secondary color`', () => {
		component = new ClayCardUser({
			initials: 'DOC',
			userColor: 'secondary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with type `success color`', () => {
		component = new ClayCardUser({
			initials: 'DOC',
			userColor: 'success',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with type `warning color`', () => {
		component = new ClayCardUser({
			initials: 'DOC',
			userColor: 'warning',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with url', () => {
		component = new ClayCardUser({
			url: '#1',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});
});
