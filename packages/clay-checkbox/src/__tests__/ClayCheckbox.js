import ClayCheckbox from '../ClayCheckbox';

let clayCheckbox;

describe('ClayCheckbox', function() {
	afterEach(() => {
		if (clayCheckbox) {
			clayCheckbox.dispose();
		}
	});

	it('should render default markup', () => {
		clayCheckbox = new ClayCheckbox({
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should render a checkbox with classes', () => {
		clayCheckbox = new ClayCheckbox({
			elementClasses: 'my-custom-class',
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should render a checkbox with id', () => {
		clayCheckbox = new ClayCheckbox({
			id: 'myId',
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should render a checked checkbox', () => {
		clayCheckbox = new ClayCheckbox({
			checked: true,
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should render an indeterminate checkbox', () => {
		clayCheckbox = new ClayCheckbox({
			indeterminate: true,
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should render a disabled checkbox', () => {
		clayCheckbox = new ClayCheckbox({
			disabled: true,
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should render a checked and disabled checkbox', () => {
		clayCheckbox = new ClayCheckbox({
			checked: true,
			disabled: true,
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should render a checkbox with hidden label', () => {
		clayCheckbox = new ClayCheckbox({
			hideLabel: true,
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should render an inline checkbox', () => {
		clayCheckbox = new ClayCheckbox({
			inline: true,
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should render an inline checkbox with classes', () => {
		clayCheckbox = new ClayCheckbox({
			elementClasses: 'my-custom-class',
			inline: true,
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should render an inline checkbox with custom id', () => {
		clayCheckbox = new ClayCheckbox({
			id: 'myCheckbox',
			inline: true,
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should render a checkbox with name', () => {
		clayCheckbox = new ClayCheckbox({
			name: 'myCheckbox',
			label: 'My Checkbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should render a checkbox with value', () => {
		clayCheckbox = new ClayCheckbox({
			label: 'My Checkbox',
			value: 'mycheckbox',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});

	it('should render a checkbox with custom label content', () => {
		clayCheckbox = new ClayCheckbox({
			labelContent: '<div><h4>My Checkbox</h4></div>',
		});

		expect(clayCheckbox).toMatchSnapshot();
	});
});
