import ClayBadge from '../ClayBadge';

let badge;

describe('ClayBadge', function() {
	afterEach(() => {
		if (badge) {
			badge.dispose();
		}
	});

	it('should render the default markup', () => {
		badge = new ClayBadge({
			label: 'Foo',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a badge with classes', () => {
		badge = new ClayBadge({
			elementClasses: 'my-custom-class',
			label: 'Foo',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a badge with id', () => {
		badge = new ClayBadge({
			id: 'myId',
			label: 'Foo',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a badge with label', () => {
		badge = new ClayBadge({
			label: 'Bar',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `default color` badge', () => {
		badge = new ClayBadge({
			label: 'Foo',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `primary color` badge', () => {
		badge = new ClayBadge({
			label: 'Foo',
			style: 'primary',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `secondary color` badge', () => {
		badge = new ClayBadge({
			label: 'Foo',
			style: 'secondary',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `success color` badge', () => {
		badge = new ClayBadge({
			label: 'Foo',
			style: 'success',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `info color` badge', () => {
		badge = new ClayBadge({
			label: 'Foo',
			style: 'info',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `warning color` badge', () => {
		badge = new ClayBadge({
			label: 'Foo',
			style: 'warning',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `danger color` badge', () => {
		badge = new ClayBadge({
			label: 'Foo',
			style: 'danger',
		});

		expect(badge).toMatchSnapshot();
	});
});
