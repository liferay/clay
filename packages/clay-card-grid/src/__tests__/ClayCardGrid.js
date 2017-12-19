import ClayCardGrid from '../ClayCardGrid';

let component;

let fileItems = [
	{
		title: 'File Item 1',
		type: 'file',
	},
	{
		title: 'File Item 2',
		type: 'file',
	},
	{
		title: 'File Item 3',
		type: 'file',
	},
];

let folderItems = [
	{
		title: 'Folder 1',
		type: 'folder',
	},
	{
		title: 'Folder 2',
		type: 'folder',
	},
	{
		title: 'Folder 3',
		type: 'folder',
	},
];

let imageItems = [
	{
		fileType: 'JPG',
		imageSrc: './image1.jpg',
		title: 'Image Item 1',
	},
	{
		fileType: 'JPG',
		imageSrc: './image1.jpg',
		title: 'Image Item 2',
	},
	{
		fileType: 'JPG',
		imageSrc: './image1.jpg',
		title: 'Image Item 3',
	},
];

let userItems = [
	{
		initials: 'CL',
		title: 'User Item 1',
		type: 'user',
	},
	{
		initials: 'MC',
		title: 'User Item 2',
		type: 'user',
	},
	{
		initials: 'CM',
		title: 'User Item 3',
		type: 'user',
	},
];

let items = [...fileItems, ...folderItems, ...imageItems, ...userItems];

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

describe('ClayCardGrid', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayCardGrid({
			items: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardGrid with classes', () => {
		component = new ClayCardGrid({
			elementClasses: 'my-custom-class',
			items: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardGrid with id', () => {
		component = new ClayCardGrid({
			id: 'myId',
			items: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardGrid with file items', () => {
		component = new ClayCardGrid({
			items: fileItems,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardGrid with file items and title', () => {
		component = new ClayCardGrid({
			items: fileItems,
			spritemap: spritemap,
			title: 'File Items',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardGrid with folder items', () => {
		component = new ClayCardGrid({
			items: folderItems,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardGrid with folder items and title', () => {
		component = new ClayCardGrid({
			items: folderItems,
			spritemap: spritemap,
			title: 'Folder Items',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardGrid with image items', () => {
		component = new ClayCardGrid({
			items: imageItems,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardGrid with image items and title', () => {
		component = new ClayCardGrid({
			items: imageItems,
			spritemap: spritemap,
			title: 'Image Items',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardGrid with user items', () => {
		component = new ClayCardGrid({
			items: userItems,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardGrid with user items and title', () => {
		component = new ClayCardGrid({
			items: userItems,
			spritemap: spritemap,
			title: 'User Items',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardGrid with all kind items', () => {
		component = new ClayCardGrid({
			items: userItems,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardGrid with all kind items and title', () => {
		component = new ClayCardGrid({
			items: items,
			spritemap: spritemap,
			title: 'All Items',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable items ClayCardGrid and emit an event on item toggle selection', () => {
		component = new ClayCardGrid({
			items: items,
			selectable: true,
			spritemap: spritemap,
			title: 'All Items',
		});

		const spy = jest.spyOn(component, 'emit');

		component.refs.item0.element
			.querySelector('input[type="checkbox"]')
			.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith('itemToggled', expect.any(Object));
	});
});
