import ClayLoadingIndicator from '../ClayLoadingIndicator';

let clayLoading;

describe('ClayLoadingIndicator', function() {
	afterEach(() => {
		if (clayLoading) {
			clayLoading.dispose();
		}
	});

	it('should render', () => {
		clayLoading = new ClayLoadingIndicator();

		expect(clayLoading).toMatchSnapshot();
	});

	it('should render an indicator with classes', () => {
		clayLoading = new ClayLoadingIndicator({
			elementClasses: 'my-custom-class',
		});

		expect(clayLoading).toMatchSnapshot();
	});

	it('should render an indicator with light color', () => {
		clayLoading = new ClayLoadingIndicator({
			light: true,
		});

		expect(clayLoading).toMatchSnapshot();
	});

	it('should render an indicator with small size', () => {
		clayLoading = new ClayLoadingIndicator({
			small: true,
		});

		expect(clayLoading).toMatchSnapshot();
	});
});
