import ClayToast from '../ClayToast';

let toast;

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

describe('ClayToast', function() {
	afterEach(() => {
		if (toast) {
			toast.dispose();
		}
	});

	it('should render default markup', function() {
		toast = new ClayToast({
			message: 'message',
			spritemap: spritemap,
			title: 'info',
		});

		expect(toast).toMatchSnapshot();
	});

	it('should render a "danger" style toast', function() {
		toast = new ClayToast({
			message: 'message',
			spritemap: spritemap,
			style: 'danger',
			title: 'Danger!',
		});

		expect(toast).toMatchSnapshot();
	});

	it('should render an "info" style toast', function() {
		toast = new ClayToast({
			message: 'message',
			spritemap: spritemap,
			style: 'info',
			title: 'Info',
		});

		expect(toast).toMatchSnapshot();
	});

	it('should render a "success" style toast', function() {
		toast = new ClayToast({
			message: 'message',
			spritemap: spritemap,
			style: 'success',
			title: 'Success!',
		});

		expect(toast).toMatchSnapshot();
	});

	it('should render a "warning" style toast', function() {
		toast = new ClayToast({
			message: 'message',
			spritemap: spritemap,
			style: 'warning',
			title: 'Warning!',
		});

		expect(toast).toMatchSnapshot();
	});

	it('should close a toast', function() {
		toast = new ClayToast({
			message: 'message',
			spritemap: spritemap,
			title: 'Success!',
		});

		toast.element.querySelector('button.close').click();

		expect(toast.visible_).toBeFalsy();
	});

	// eslint-disable-next-line
	it('should close automatically a toast after 5 seconds when message has no links', function() {
		jest.useFakeTimers();

		toast = new ClayToast({
			autoClose: true,
			message: 'message',
			spritemap: spritemap,
			title: 'Success!',
		});

		expect(setTimeout.mock.calls.length).toBe(1);
		expect(setTimeout.mock.calls[0][1]).toBe(5000);

		jest.runAllTimers();
		expect(toast.visible_).toBeFalsy();
	});

	// eslint-disable-next-line
	it('should close automatically a toast after 5 seconds when message has links', function() {
		jest.useFakeTimers();

		toast = new ClayToast({
			autoClose: true,
			message: 'message<a href="#">Link</a>',
			spritemap: spritemap,
			title: 'Success!',
		});

		expect(setTimeout.mock.calls.length).toBe(1);
		expect(setTimeout.mock.calls[0][1]).toBe(10000);

		jest.runAllTimers();
		expect(toast.visible_).toBeFalsy();
	});

	it('should close and destroy a toast', function() {
		toast = new ClayToast({
			destroyOnHide: true,
			message: 'message',
			spritemap: spritemap,
			title: 'Success!',
		});

		toast.element.querySelector('button.close').click();

		expect(toast.visible_).toBeFalsy();
		expect(toast.disposed_).toBeTruthy();
	});

	it('should fail when no message is passed', function() {
		expect(() => {
			toast = new ClayToast({
				spritemap: spritemap,
				title: 'title',
			});
		}).toThrow();
	});

	it('should fail when no spritemap is passed', function() {
		expect(() => {
			toast = new ClayToast({
				message: 'message',
				title: 'title',
			});
		}).toThrow();
	});

	it('should fail when no title is passed', function() {
		expect(() => {
			toast = new ClayToast({
				message: 'message',
				spritemap: spritemap,
			});
		}).toThrow();
	});
});
