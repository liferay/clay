import ClayRadio from '../ClayRadio';

let clayRadio;

describe('ClayRadio', function() {
	afterEach(() => {
		if (clayRadio) {
			clayRadio.dispose();
		}
	});

	it('should render default markup', () => {
		clayRadio = new ClayRadio({
			label: 'My Radio',
		});

		expect(clayRadio).toMatchSnapshot();
	});

	it('should render a radio with classes', () => {
		clayRadio = new ClayRadio({
			elementClasses: 'my-custom-class',
			label: 'My Radio',
		});

		expect(clayRadio).toMatchSnapshot();
	});

	it('should render a radio with id', () => {
		clayRadio = new ClayRadio({
			id: 'myId',
			label: 'My Radio',
		});

		expect(clayRadio).toMatchSnapshot();
	});

	it('should render a checked radio', () => {
		clayRadio = new ClayRadio({
			checked: true,
			label: 'My Radio',
		});

		expect(clayRadio).toMatchSnapshot();
	});

	it('should render a disabled radio', () => {
		clayRadio = new ClayRadio({
			disabled: true,
			label: 'My Radio',
		});

		expect(clayRadio).toMatchSnapshot();
	});

	it('should render a checked and disabled radio', () => {
		clayRadio = new ClayRadio({
			checked: true,
			disabled: true,
			label: 'My Radio',
		});

		expect(clayRadio).toMatchSnapshot();
	});

	it('should render a radio with hidden label', () => {
		clayRadio = new ClayRadio({
			hideLabel: true,
			label: 'My Radio',
		});

		expect(clayRadio).toMatchSnapshot();
	});

	it('should render an inline radio', () => {
		clayRadio = new ClayRadio({
			inline: true,
			label: 'My Radio',
		});

		expect(clayRadio).toMatchSnapshot();
	});

	it('should render a radio with name', () => {
		clayRadio = new ClayRadio({
			name: 'myradio',
			label: 'My Radio',
		});

		expect(clayRadio).toMatchSnapshot();
	});

	it('should render a radio with value', () => {
		clayRadio = new ClayRadio({
			label: 'My Radio',
			value: 'myradio',
		});

		expect(clayRadio).toMatchSnapshot();
	});

	it('should render a radio with custom label content', () => {
		clayRadio = new ClayRadio({
			labelContent: '<div><p>My Radio</p></div>',
		});

		expect(clayRadio).toMatchSnapshot();
	});
});
