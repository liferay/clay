import ClayProgressBar from '../ClayProgressBar';

let progressBar;

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

describe('ClayProgressBar', function() {
	afterEach(() => {
		if (progressBar) {
			progressBar.dispose();
		}
	});

	it('should generate an in progress bar', function() {
		progressBar = new ClayProgressBar({
			minValue: 0,
			maxValue: 100,
			spritemap: spritemap,
			value: 40,
		});

		expect(progressBar).toMatchSnapshot();
	});

	it('should generate a progress bar at 0% of progress', function() {
		progressBar = new ClayProgressBar({
			minValue: 0,
			maxValue: 100,
			spritemap: spritemap,
			value: 0,
		});

		expect(progressBar).toMatchSnapshot();
	});

	it('should generate a progress bar at 0% of progress', function() {
		progressBar = new ClayProgressBar({});

		expect(progressBar).toMatchSnapshot();
	});

	it('should generate a progress bar with warning', function() {
		progressBar = new ClayProgressBar({
			minValue: 0,
			maxValue: 100,
			spritemap: spritemap,
			status: 'warning',
			value: 40,
		});

		expect(progressBar).toMatchSnapshot();
	});

	it('should generate a completed progress bar', function() {
		progressBar = new ClayProgressBar({
			minValue: 0,
			maxValue: 100,
			spritemap: spritemap,
			value: 100,
		});

		expect(progressBar).toMatchSnapshot();
	});

	it('should generate a completed progress bar', function() {
		progressBar = new ClayProgressBar({
			spritemap: spritemap,
			status: 'complete',
		});

		expect(progressBar).toMatchSnapshot();
	});
});
