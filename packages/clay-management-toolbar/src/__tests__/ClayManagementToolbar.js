import ClayManagementToolbar from '../ClayManagementToolbar';

let component;

describe('ClayManagementToolbar', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should generate the default markup', () => {
		component = new ClayManagementToolbar();

		expect(component).toMatchSnapshot();
	});
});
