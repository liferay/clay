import ClayCheckbox from '../ClayCheckbox';

let clayCheckbox;

describe('ClayCheckbox', function() {
	afterEach(() => {
		if (clayCheckbox) {
			clayCheckbox.dispose();
		}
	});

	it('should generate default markup', () => {
		clayCheckbox = new ClayCheckbox({
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should generate a checked checkbox', () => {
		clayCheckbox = new ClayCheckbox({
			checked: true,
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should generate an indeterminate checkbox', () => {
		clayCheckbox = new ClayCheckbox({
			indeterminate: true,
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should generate a disabled checkbox', () => {
		clayCheckbox = new ClayCheckbox({
			disabled: true,
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should generate a checkbox with hidden label', () => {
		clayCheckbox = new ClayCheckbox({
			hideLabel: true,
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should generate a checkbox without wrapper', () => {
		clayCheckbox = new ClayCheckbox({
			hideWrapper: true,
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should generate a checkbox with custom classes', () => {
		clayCheckbox = new ClayCheckbox({
			elementClasses: 'my-custom-class',
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should generate a checkbox without wrapper and with classes', () => {
		clayCheckbox = new ClayCheckbox({
			elementClasses: 'my-custom-class',
			hideWrapper: true,
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should generate a checkbox with custom id', () => {
		clayCheckbox = new ClayCheckbox({
			id: 'myCheckbox',
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should generate a checkbox without wrapper and with custom id', () => {
		clayCheckbox = new ClayCheckbox({
			hideWrapper: true,
			id: 'myCheckbox',
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should generate a checkbox with name', () => {
		clayCheckbox = new ClayCheckbox({
			name: 'myCheckbox',
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should generate a checkbox with value', () => {
		clayCheckbox = new ClayCheckbox({
			label: 'My Checkbox',
			value: 'mycheckbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});
});
