import ClayProgressBar from '../ClayProgressBar';

let progressBar;

const spritemap = '../node_modules/clay-css/lib/images/icons/icons.svg';

describe('ClayProgressBar', function() {
	afterEach(() => {
		if (progressBar) {
			progressBar.dispose();
		}
	});

	it('should render a progress bar with classes', function() {
		progressBar = new ClayProgressBar({
			elementClasses: 'my-custom-class',
		});

		expect(progressBar).toMatchSnapshot();
	});

	it('should render a progress bar with id', function() {
		progressBar = new ClayProgressBar({
			id: 'myId',
		});

		expect(progressBar).toMatchSnapshot();
	});

	it('should render an in progress bar', function() {
		progressBar = new ClayProgressBar({
			spritemap: spritemap,
			value: 40,
		});

		expect(progressBar).toMatchSnapshot();
	});

	it('should render a progress bar at 0% of progress', function() {
		progressBar = new ClayProgressBar({
			spritemap: spritemap,
			value: 0,
		});

		expect(progressBar).toMatchSnapshot();
	});

	it('should render a progress bar at 0% of progress', function() {
		progressBar = new ClayProgressBar({});

		expect(progressBar).toMatchSnapshot();
	});

	it('should render a progress bar with warning', function() {
		progressBar = new ClayProgressBar({
			spritemap: spritemap,
			status: 'warning',
			value: 40,
		});

		expect(progressBar).toMatchSnapshot();
	});

	it('should render a completed progress bar', function() {
		progressBar = new ClayProgressBar({
			spritemap: spritemap,
			value: 100,
		});

		expect(progressBar).toMatchSnapshot();
	});

	it('should render a completed progress bar', function() {
		progressBar = new ClayProgressBar({
			spritemap: spritemap,
			status: 'complete',
		});

		expect(progressBar).toMatchSnapshot();
	});
});
