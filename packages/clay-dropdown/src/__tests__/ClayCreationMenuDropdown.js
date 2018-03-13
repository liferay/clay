import ClayCreationMenuDropdown from '../ClayCreationMenuDropdown';

let clayCreationMenuDropdown;

let mainItems = [
	{
		href: '#1',
		label: 'Edit',
	},
	{
		href: '#1',
		label: 'Preview',
	},
];

describe('ClayCreationMenuDropdown', function() {
	afterEach(() => {
		if (clayCreationMenuDropdown) {
			clayCreationMenuDropdown.dispose();
		}
	});

	it('should render default markdown', () => {
		clayCreationMenuDropdown = new ClayCreationMenuDropdown({
			mainItems: mainItems,
			spritemap: 'icons.svg',
		});

		expect(clayCreationMenuDropdown).toMatchSnapshot();
	});

	it('should render a creation menu dropdown with classes', () => {
		clayCreationMenuDropdown = new ClayCreationMenuDropdown({
			elementClasses: 'my-custom-class',
			mainItems: mainItems,
			spritemap: 'icons.svg',
		});

		expect(clayCreationMenuDropdown).toMatchSnapshot();
	});

	it('should render a creation menu dropdown with id', () => {
		clayCreationMenuDropdown = new ClayCreationMenuDropdown({
			id: 'myId',
			mainItems: mainItems,
			spritemap: 'icons.svg',
		});

		expect(clayCreationMenuDropdown).toMatchSnapshot();
	});

	it('should render a disabled creation menu dropdown', () => {
		clayCreationMenuDropdown = new ClayCreationMenuDropdown({
			disabled: true,
			mainItems: mainItems,
			spritemap: 'icons.svg',
		});

		expect(clayCreationMenuDropdown).toMatchSnapshot();
	});

	it('should render an expanded creation menu dropdown', () => {
		clayCreationMenuDropdown = new ClayCreationMenuDropdown({
			expanded: true,
			mainItems: mainItems,
			spritemap: 'icons.svg',
		});

		expect(clayCreationMenuDropdown).toMatchSnapshot();
	});

	it('should render a creation menu dropdown with favorite items', () => {
		clayCreationMenuDropdown = new ClayCreationMenuDropdown({
			favoriteItems: [
				{
					href: '#fav1',
					label: 'Favorite 1',
				},
				{
					href: '#fav2',
					label: 'Favorite 2',
				},
			],
			mainItems: mainItems,
			spritemap: 'icons.svg',
		});

		expect(clayCreationMenuDropdown).toMatchSnapshot();
	});

	it('should render a creation menu dropdown with 7 favorite items and more button when more than 7 favorite items are passed', () => {
		clayCreationMenuDropdown = new ClayCreationMenuDropdown({
			favoriteItems: [
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
			mainItems: mainItems,
			spritemap: 'icons.svg',
		});

		expect(clayCreationMenuDropdown).toMatchSnapshot();
	});

	it('should render a creation menu dropdown and emit an event on more button click', () => {
		clayCreationMenuDropdown = new ClayCreationMenuDropdown({
			favoriteItems: [
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
			mainItems: mainItems,
			spritemap: 'icons.svg',
		});

		const spy = jest.spyOn(clayCreationMenuDropdown, 'emit');

		const element =
			clayCreationMenuDropdown.refs.dropdown.refs.portal.refs
				.dropdownButton.element;
		element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			'moreButtonClicked',
			expect.any(Object)
		);
	});
});
