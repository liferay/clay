import ClaySelect from '../ClaySelect';

let select;

let options = [
	{
		label: 'Option 1',
		value: '1',
	},
	{
		label: 'Option 2',
		value: '2',
	},
];

describe('ClaySelect', function() {
	afterEach(() => {
		if (select) {
			select.dispose();
		}
	});

	it('should render a select element', function() {
		select = new ClaySelect({
			options: options,
		});

		expect(select).toMatchSnapshot();
	});

	it('should render a select element with classes', function() {
		select = new ClaySelect({
			elementClasses: 'my-custom-class',
			options: options,
		});

		expect(select).toMatchSnapshot();
	});

	it('should render a select element with id', function() {
		select = new ClaySelect({
			id: 'myId',
			options: options,
		});

		expect(select).toMatchSnapshot();
	});

	it('should render a select element with label', function() {
		select = new ClaySelect({
			label: 'My Select',
			options: options,
		});

		expect(select).toMatchSnapshot();
	});

	it('should render a select element with name', function() {
		select = new ClaySelect({
			name: 'myselectname',
			options: options,
		});

		expect(select).toMatchSnapshot();
	});

	it('should render a select element with id', function() {
		select = new ClaySelect({
			id: 'myselectid',
			options: options,
		});

		expect(select).toMatchSnapshot();
	});

	it('should render an inline group select element', function() {
		select = new ClaySelect({
			label: 'My Select',
			inline: true,
			options: options,
		});

		expect(select).toMatchSnapshot();
	});

	it('should render a select element with preselected option', function() {
		select = new ClaySelect({
			options: [
				{
					label: 'Option 1',
					value: '1',
				},
				{
					label: 'Option 2',
					selected: true,
					value: '2',
				},
			],
		});

		expect(select).toMatchSnapshot();
	});

	it('should render a disabled select element', function() {
		select = new ClaySelect({
			disabled: true,
			options: options,
		});

		expect(select).toMatchSnapshot();
	});

	it('should render a multiple select element', function() {
		select = new ClaySelect({
			multiple: true,
			options: options,
		});

		expect(select).toMatchSnapshot();
	});

	it('should render an inline group multiple select element', function() {
		select = new ClaySelect({
			multiple: true,
			inline: true,
			options: options,
		});

		expect(select).toMatchSnapshot();
	});
});
