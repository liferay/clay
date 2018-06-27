import ClayToast from '../ClayToast';

let consoleErrorReference;
let toast;
const spritemap = '../node_modules/clay-css/lib/images/icons/icons.svg';

/**
 * Stubs console.error
 */
function mockConsoleError() {
	console.error = () => {};
}

describe('ClayToast', function() {
	beforeEach(() => {
		consoleErrorReference = console.error;

		jest.useFakeTimers();
	});

	afterEach(() => {
		if (toast) {
			toast.dispose();
		}

		console.error = consoleErrorReference;
	});

	it('should render default markup', function() {
		toast = new ClayToast({
			message: 'message',
			spritemap: spritemap,
			title: 'info',
		});

		expect(toast).toMatchSnapshot();
	});

	it('should render an toast with classes', function() {
		toast = new ClayToast({
			elementClasses: 'my-custom-class',
			message: 'message',
			spritemap: spritemap,
			title: 'info',
		});

		expect(toast).toMatchSnapshot();
	});

	it('should render an toast with id', function() {
		toast = new ClayToast({
			id: 'myId',
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

		expect(toast._visible).toBeFalsy();
	});

	// eslint-disable-next-line
	it('should close automatically a toast after 8 seconds', function() {
		toast = new ClayToast({
			autoClose: true,
			message: 'message',
			spritemap: spritemap,
			title: 'Success!',
		});

		expect(setTimeout.mock.calls.length).toBe(1);
		expect(setTimeout.mock.calls[0][1]).toBe(8000);

		jest.runAllTimers();
		expect(toast._visible).toBeFalsy();
	});

	// eslint-disable-next-line
	it('should close automatically a toast after 12 seconds', function() {
		toast = new ClayToast({
			autoClose: 12,
			message: 'message<a href="#">Link</a>',
			spritemap: spritemap,
			title: 'Success!',
		});

		expect(setTimeout.mock.calls.length).toBe(1);
		expect(setTimeout.mock.calls[0][1]).toBe(12000);

		jest.runAllTimers();
		expect(toast._visible).toBeFalsy();
	});

	it('should close and destroy a toast', function() {
		toast = new ClayToast({
			destroyOnHide: true,
			message: 'message',
			spritemap: spritemap,
			title: 'Success!',
		});

		toast.element.querySelector('button.close').click();

		expect(toast._visible).toBeFalsy();
		expect(toast.disposed_).toBeTruthy();
	});

	it('should fail when no message is passed', function() {
		mockConsoleError();

		expect(() => {
			toast = new ClayToast({
				spritemap: spritemap,
				title: 'title',
			});
		}).toThrow();
	});

	it('should fail when no spritemap is passed', function() {
		mockConsoleError();

		expect(() => {
			toast = new ClayToast({
				message: 'message',
				title: 'title',
			});
		}).toThrow();
	});

	it('should fail when no title is passed', function() {
		mockConsoleError();

		expect(() => {
			toast = new ClayToast({
				message: 'message',
				spritemap: spritemap,
			});
		}).toThrow();
	});
});
