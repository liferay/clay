import ClayStripe from '../ClayStripe';

let consoleErrorReference;
let stripe;
const spritemap = '../node_modules/clay-css/lib/images/icons/icons.svg';

/**
 * Stubs console.error
 */
function mockConsoleError() {
	console.error = () => {};
}

describe('ClayStripe', function() {
	beforeEach(() => {
		consoleErrorReference = console.error;
		jest.useFakeTimers();
	});

	afterEach(() => {
		if (stripe) {
			stripe.dispose();
		}

		console.error = consoleErrorReference;
	});

	it('should render default markup', function() {
		stripe = new ClayStripe({
			message: 'message',
			spritemap: spritemap,
			title: 'info',
		});

		expect(stripe).toMatchSnapshot();
	});

	it('should render an stripe with classes', function() {
		stripe = new ClayStripe({
			elementClasses: 'my-custom-class',
			message: 'message',
			spritemap: spritemap,
			title: 'info',
		});

		expect(stripe).toMatchSnapshot();
	});

	it('should render an stripe with id', function() {
		stripe = new ClayStripe({
			id: 'myId',
			message: 'message',
			spritemap: spritemap,
			title: 'info',
		});

		expect(stripe).toMatchSnapshot();
	});

	it('should render a "danger" style stripe', function() {
		stripe = new ClayStripe({
			message: 'message',
			spritemap: spritemap,
			style: 'danger',
			title: 'Danger!',
		});

		expect(stripe).toMatchSnapshot();
	});

	it('should render an "info" style stripe', function() {
		stripe = new ClayStripe({
			message: 'message',
			spritemap: spritemap,
			style: 'info',
			title: 'Info',
		});

		expect(stripe).toMatchSnapshot();
	});

	it('should render a "success" style stripe', function() {
		stripe = new ClayStripe({
			message: 'message',
			spritemap: spritemap,
			style: 'success',
			title: 'Success!',
		});

		expect(stripe).toMatchSnapshot();
	});

	it('should render a "warning" style stripe', function() {
		stripe = new ClayStripe({
			message: 'message',
			spritemap: spritemap,
			style: 'warning',
			title: 'Warning!',
		});

		expect(stripe).toMatchSnapshot();
	});

	it('should close an stripe', function() {
		stripe = new ClayStripe({
			message: 'message',
			spritemap: spritemap,
			title: 'Success!',
		});

		stripe.element.querySelector('button.close').click();

		expect(stripe._visible).toBeFalsy();
	});

	// eslint-disable-next-line
	it('should close automatically an stripe after 5 seconds', function() {
		stripe = new ClayStripe({
			autoClose: true,
			message: 'message',
			spritemap: spritemap,
			title: 'Success!',
		});

		expect(setTimeout.mock.calls.length).toBe(1);
		expect(setTimeout.mock.calls[0][1]).toBe(5000);

		jest.runAllTimers();
		expect(stripe._visible).toBeFalsy();
	});

	// eslint-disable-next-line
	it('should close automatically an stripe after 10 seconds', function() {
		stripe = new ClayStripe({
			autoClose: 10,
			message: 'message<a href="#">Link</a>',
			spritemap: spritemap,
			title: 'Success!',
		});

		expect(setTimeout.mock.calls.length).toBe(1);
		expect(setTimeout.mock.calls[0][1]).toBe(10000);

		jest.runAllTimers();
		expect(stripe._visible).toBeFalsy();
	});

	it('should close and destroy an stripe', function() {
		stripe = new ClayStripe({
			destroyOnHide: true,
			message: 'message',
			spritemap: spritemap,
			title: 'Success!',
		});

		stripe.element.querySelector('button.close').click();

		expect(stripe._visible).toBeFalsy();
		expect(stripe.disposed_).toBeTruthy();
	});

	it('should fail when no message is passed', function() {
		mockConsoleError();

		expect(() => {
			stripe = new ClayStripe({
				spritemap: spritemap,
				title: 'title',
			});
		}).toThrow();
	});

	it('should fail when no spritemap is passed', function() {
		mockConsoleError();

		expect(() => {
			stripe = new ClayStripe({
				message: 'message',
				title: 'title',
			});
		}).toThrow();
	});

	it('should fail when no title is passed', function() {
		mockConsoleError();

		expect(() => {
			stripe = new ClayStripe({
				message: 'message',
				spritemap: spritemap,
			});
		}).toThrow();
	});
});
