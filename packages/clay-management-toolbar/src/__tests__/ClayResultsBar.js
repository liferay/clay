import ClayResultsBar from '../ClayResultsBar';

let resultsBar;

const filterLabels = [
	{
		closeable: false,
		label: 'Label 1',
	},
	{
		label: 'Label 2',
	},
	{
		label: '<strong>Category:</strong>Label 3',
	},
];

const spritemap = '../node_modules/clay-css/lib/images/icons/icons.svg';

describe('ClayResultsBar', function() {
	afterEach(() => {
		if (resultsBar) {
			resultsBar.dispose();
		}
	});

	it('should render the default markup', () => {
		resultsBar = new ClayResultsBar({
			filterLabels: [],
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(resultsBar).toMatchSnapshot();
	});

	it('should render a results bar with search value', () => {
		resultsBar = new ClayResultsBar({
			filterLabels: [],
			searchValue: 'my search',
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(resultsBar).toMatchSnapshot();
	});

	it('should render a results bar with filter labels', () => {
		resultsBar = new ClayResultsBar({
			filterLabels: filterLabels,
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(resultsBar).toMatchSnapshot();
	});

	it('should render a results bar with filter labels and search value', () => {
		resultsBar = new ClayResultsBar({
			filterLabels: filterLabels,
			searchValue: 'my search',
			spritemap: spritemap,
			totalItems: 10,
		});

		expect(resultsBar).toMatchSnapshot();
	});

	it('should render a results bar and emit an event on clear button click', () => {
		resultsBar = new ClayResultsBar({
			filterLabels: [],
			searchValue: 'my search',
			spritemap: spritemap,
			totalItems: 10,
		});

		const spy = jest.spyOn(resultsBar, 'emit');

		resultsBar.refs.clearSearch.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'clearButtonClicked',
				originalEvent: expect.any(Object),
			})
		);
	});

	it('should render a results bar and emit an event on close label click', () => {
		resultsBar = new ClayResultsBar({
			filterLabels: filterLabels,
			spritemap: spritemap,
			totalItems: 10,
		});

		const spy = jest.spyOn(resultsBar, 'emit');

		resultsBar.refs.label1.refs.label.refs.closeButton.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'filterLabelCloseClicked',
				originalEvent: expect.any(Object),
			})
		);
	});
});
