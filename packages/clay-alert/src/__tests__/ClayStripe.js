import ClayStripe from '../ClayStripe';

let stripe;

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

describe('ClayStripe', function() {
	afterEach(() => {
		if (stripe) {
			stripe.dispose();
		}
	});

	it('should render default markup', function() {
		stripe = new ClayStripe({
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

		expect(stripe.visible_).toBeFalsy();
	});

	// eslint-disable-next-line
	it('should close automatically an stripe after 5 seconds when message has no links', function() {
		jest.useFakeTimers();

		stripe = new ClayStripe({
			autoClose: true,
			message: 'message',
			spritemap: spritemap,
			title: 'Success!',
		});

		expect(setTimeout.mock.calls.length).toBe(1);
		expect(setTimeout.mock.calls[0][1]).toBe(5000);

		jest.runAllTimers();
		expect(stripe.visible_).toBeFalsy();
	});

	// eslint-disable-next-line
	it('should close automatically an stripe after 5 seconds when message has links', function() {
		jest.useFakeTimers();

		stripe = new ClayStripe({
			autoClose: true,
			message: 'message<a href="#">Link</a>',
			spritemap: spritemap,
			title: 'Success!',
		});

		expect(setTimeout.mock.calls.length).toBe(1);
		expect(setTimeout.mock.calls[0][1]).toBe(10000);

		jest.runAllTimers();
		expect(stripe.visible_).toBeFalsy();
	});

	it('should close and destroy an stripe', function() {
		stripe = new ClayStripe({
			destroyOnHide: true,
			message: 'message',
			spritemap: spritemap,
			title: 'Success!',
		});

		stripe.element.querySelector('button.close').click();

		expect(stripe.visible_).toBeFalsy();
		expect(stripe.disposed_).toBeTruthy();
	});

	it('should fail when no message is passed', function() {
		expect(() => {
			stripe = new ClayStripe({
				spritemap: spritemap,
				title: 'title',
			});
		}).toThrow();
	});

	it('should fail when no spritemap is passed', function() {
		expect(() => {
			stripe = new ClayStripe({
				message: 'message',
				title: 'title',
			});
		}).toThrow();
	});

	it('should fail when no title is passed', function() {
		expect(() => {
			stripe = new ClayStripe({
				message: 'message',
				spritemap: spritemap,
			});
		}).toThrow();
	});
});
