import ClayPortal from '../ClayPortal';

let component;

describe('ClayPortal', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the content', () => {
		component = new ClayPortal({
			content: function() {
				IncrementalDOM.elementOpen('div');
				IncrementalDOM.text('Portal');
				IncrementalDOM.elementClose('div');
			},
		});

		expect(component).toMatchSnapshot();
	});
});
