import ClayTooltip from '../ClayTooltip';

let clayTooltip;

describe('ClayTooltip', function() {
	afterEach(() => {
		if (clayTooltip) {
			clayTooltip.dispose();
		}
	});

	it('should render a tooltip with content', () => {
		clayTooltip = ClayTooltip.init();
		expect(clayTooltip).toMatchSnapshot();
	});
});
