import ClayModal from '../ClayModal';

let clayModal;
let body = '<h4>Hello world!</h4>';
let spritemap = 'icons.svg';

describe('ClayModal', function() {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		if (clayModal) {
			clayModal.dispose();
		}
	});

	it('should render the default markup', () => {
		clayModal = new ClayModal();

		expect(clayModal).toMatchSnapshot();
	});

	it('should render a modal with classes', () => {
		clayModal = new ClayModal({
			elementClasses: 'my-custom-class',
		});

		expect(clayModal).toMatchSnapshot();
	});

	it('should render a modal with id', () => {
		clayModal = new ClayModal({
			id: 'myId',
		});

		expect(clayModal).toMatchSnapshot();
	});

	it('should render a modal with title', () => {
		clayModal = new ClayModal({
			title: 'My title',
		});

		expect(clayModal).toMatchSnapshot();
	});

	it('should render a modal with title and header closing button', () => {
		clayModal = new ClayModal({
			spritemap: spritemap,
			title: 'My title',
		});

		expect(clayModal).toMatchSnapshot();
	});

	it('should render a modal with body', () => {
		clayModal = new ClayModal({
			body: 'My body',
		});

		expect(clayModal).toMatchSnapshot();
	});

	it('should render a modal with footer buttons', () => {
		clayModal = new ClayModal({
			footerButtons: [
				{
					label: 'Cancel',
					type: 'close',
				},
				{
					label: 'Save',
				},
			],
		});

		expect(clayModal).toMatchSnapshot();
	});

	// eslint-disable-next-line
	it('should render a modal with footer buttons aligned to left and right', () => {
		clayModal = new ClayModal({
			footerButtons: [
				{
					label: 'Cancel',
					type: 'close',
				},
				{
					label: 'Save',
				},
				{
					alignment: 'left',
					label: 'My button 1',
				},
				{
					alignment: 'left',
					label: 'My button 2',
				},
			],
		});

		expect(clayModal).toMatchSnapshot();
	});

	it('should render a modal with iframe as body', () => {
		clayModal = new ClayModal({
			url: 'http://www.clayui.com',
		});

		expect(clayModal).toMatchSnapshot();
	});

	it('should render a modal with status `danger` and title', () => {
		clayModal = new ClayModal({
			status: 'danger',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(clayModal).toMatchSnapshot();
	});

	it('should render a modal with status `info` and title', () => {
		clayModal = new ClayModal({
			status: 'info',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(clayModal).toMatchSnapshot();
	});

	it('should render a modal with status `success` and title', () => {
		clayModal = new ClayModal({
			status: 'success',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(clayModal).toMatchSnapshot();
	});

	it('should render a modal with status `warning` and title', () => {
		clayModal = new ClayModal({
			status: 'warning',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(clayModal).toMatchSnapshot();
	});

	it('should render a modal with size `small`', () => {
		clayModal = new ClayModal({
			body: body,
			size: 'sm',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(clayModal).toMatchSnapshot();
	});

	it('should render a modal with size `large`', () => {
		clayModal = new ClayModal({
			body: body,
			size: 'lg',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(clayModal).toMatchSnapshot();
	});

	it('should render a modal with size `full-screen`', () => {
		clayModal = new ClayModal({
			body: body,
			size: 'full-screen',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(clayModal).toMatchSnapshot();
	});

	it('should render a modal opened', () => {
		clayModal = new ClayModal({
			body: body,
			spritemap: spritemap,
			title: 'My Title',
			visible: true,
		});

		expect(clayModal).toMatchSnapshot();
	});

	it('should render a modal opened using the method show', () => {
		clayModal = new ClayModal({
			body: body,
			spritemap: spritemap,
			title: 'My Title',
		});
		const spy = jest.spyOn(clayModal, 'show');

		expect(clayModal).toMatchSnapshot();

		clayModal.show();
		jest.runAllTimers();

		expect(spy).toHaveBeenCalled();
		expect(clayModal.visible).toBeTruthy();
		expect(clayModal.isTransitioning_).toBeFalsy();
		expect(clayModal).toMatchSnapshot();

		spy.mockReset();
		spy.mockRestore();
	});
});
