import ClayTooltip from '../ClayTooltip';

let clayTooltip;

describe('ClayTooltip', () => {
	afterEach(() => {
		if (clayTooltip) {
			clayTooltip.dispose();
			clayTooltip = null;
		}
	});

	it('should create a tooltip', () => {
		clayTooltip = ClayTooltip.init();
		expect(clayTooltip).toMatchSnapshot();
	});

	it('should throw if called with new', () => {
		const fn = () => {
			return new ClayTooltip();
		};
		expect(fn).toThrow();
	});

	it('should return the same instance', () => {
		clayTooltip = ClayTooltip.init();
		const newTooltip = ClayTooltip.init();

		expect(newTooltip).toEqual(clayTooltip);
	});

	it('should allow setting selectors', () => {
		clayTooltip = ClayTooltip.init({
			selectors: ['button.my-class'],
		});
		expect(clayTooltip).toMatchSnapshot();
	});
});
