import ClayAlert from '../ClayAlert';

let consoleErrorReference;
let alert;
const spritemap = '../node_modules/clay-css/lib/images/icons/icons.svg';

/**
 * Stubs console.error
 */
function mockConsoleError() {
	console.error = () => {};
}

describe('ClayAlert', function() {
	beforeEach(() => {
		consoleErrorReference = console.error;
	});

	afterEach(() => {
		if (alert) {
			alert.dispose();
		}

		console.error = consoleErrorReference;
	});

	it('should render default markup', function() {
		alert = new ClayAlert({
			message: 'message',
			spritemap: spritemap,
			title: 'info',
		});

		expect(alert).toMatchSnapshot();
	});

	it('should render an alert with classes', function() {
		alert = new ClayAlert({
			elementClasses: 'my-custom-class',
			message: 'message',
			spritemap: spritemap,
			title: 'info',
		});

		expect(alert).toMatchSnapshot();
	});

	it('should render an alert with id', function() {
		alert = new ClayAlert({
			id: 'myId',
			message: 'message',
			spritemap: spritemap,
			title: 'info',
		});

		expect(alert).toMatchSnapshot();
	});

	it('should render a "danger" style alert', function() {
		alert = new ClayAlert({
			message: 'message',
			spritemap: spritemap,
			style: 'danger',
			title: 'Danger!',
		});

		expect(alert).toMatchSnapshot();
	});

	it('should render an "info" style alert', function() {
		alert = new ClayAlert({
			message: 'message',
			spritemap: spritemap,
			style: 'info',
			title: 'Info',
		});

		expect(alert).toMatchSnapshot();
	});

	it('should render a "success" style alert', function() {
		alert = new ClayAlert({
			message: 'message',
			spritemap: spritemap,
			style: 'success',
			title: 'Success!',
		});

		expect(alert).toMatchSnapshot();
	});

	it('should render a "warning" style alert', function() {
		alert = new ClayAlert({
			message: 'message',
			spritemap: spritemap,
			style: 'warning',
			title: 'Warning!',
		});

		expect(alert).toMatchSnapshot();
	});

	it('should render a closeable alert', function() {
		alert = new ClayAlert({
			closeable: true,
			message: 'message',
			spritemap: spritemap,
			style: 'warning',
			title: 'Warning!',
		});

		expect(alert).toMatchSnapshot();
	});

	it('should close a closeable alert', function() {
		alert = new ClayAlert({
			closeable: true,
			message: 'message',
			spritemap: spritemap,
			title: 'Success!',
		});

		alert.element.querySelector('button.close').click();

		expect(alert._visible).toBeFalsy();
	});

	it('should close and destroy an alert', function() {
		alert = new ClayAlert({
			closeable: true,
			destroyOnHide: true,
			message: 'message',
			spritemap: spritemap,
			title: 'Success!',
		});

		alert.element.querySelector('button.close').click();

		expect(alert._visible).toBeFalsy();
		expect(alert.disposed_).toBeTruthy();
	});

	it('should fail when no message is passed', function() {
		mockConsoleError();

		expect(() => {
			alert = new ClayAlert({
				spritemap: spritemap,
				title: 'title',
			});
		}).toThrow();
	});

	it('should fail when no spritemap is passed', function() {
		mockConsoleError();

		expect(() => {
			alert = new ClayAlert({
				message: 'message',
				title: 'title',
			});
		}).toThrow();
	});

	it('should fail when no title is passed', function() {
		mockConsoleError();

		expect(() => {
			alert = new ClayAlert({
				message: 'message',
				spritemap: spritemap,
			});
		}).toThrow();
	});
});
