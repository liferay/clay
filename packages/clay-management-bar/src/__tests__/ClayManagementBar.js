import ClayManagementBar from '../ClayManagementBar';

let component;

describe('ClayManagementBar', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should generate the default markup', () => {
		component = new ClayManagementBar();

		expect(component).toMatchSnapshot();
	});
});
