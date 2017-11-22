import ClayDropdown from '../ClayDropdown';

let clayDropdown;

describe('ClayDropdown', function() {
	afterEach(() => {
		if (clayDropdown) {
			clayDropdown.dispose();
		}
	});

	it('should render a dropdown with items', () => {
		clayDropdown = new ClayDropdown({
			items: [
				{
					label: 'Item 1',
					url: 'item1url',
				},
				{
					label: 'Item 2',
					url: 'item2url',
				},
				{
					active: true,
					label: 'Item 3',
					url: 'item1ur3',
				},
				{
					disabled: true,
					label: 'Item 4',
					url: 'item1url',
				},
				{
					inputName: 'checkbox5name',
					inputValue: 'checkbox5value',
					label: 'Item 5',
					type: 'checkbox',
				},
				{
					checked: true,
					inputName: 'checkbox6name',
					inputValue: 'checkbox7value',
					label: 'Item 7',
					type: 'checkbox',
				},
				{
					disabled: true,
					inputName: 'checkbox7name',
					inputValue: 'checkbox7value',
					label: 'Item 7',
					type: 'checkbox',
				},
				{
					items: [
						{
							label: 'Item 8',
							inputValue: 'radio8value',
						},
						{
							checked: true,
							label: 'Item 9',
							inputValue: 'radio9value',
						},
						{
							disabled: true,
							label: 'Item 10',
							inputValue: 'radio10value',
						},
					],
					inputName: 'radioname',
					label: 'Radio Group',
					separator: true,
					type: 'radiogroup',
				},
			],
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		expect(clayDropdown).toMatchSnapshot();
	});

	it('should render an expanded dropdown', () => {
		clayDropdown = new ClayDropdown({
			expanded: true,
			items: [
				{
					label: 'Item 1',
					url: 'item1url',
				},
			],
			label: 'Trigger',
			spritemap: 'icons.svg',
		});

		expect(clayDropdown).toMatchSnapshot();
	});

	it('should render a dropdown with an icon trigger', () => {
		clayDropdown = new ClayDropdown({
			icon: 'list',
			items: [
				{
					label: 'Item 1',
					url: 'item1url',
				},
			],
			spritemap: 'icons.svg',
		});

		expect(clayDropdown).toMatchSnapshot();
	});

	it('should render a searchable dropdown', () => {
		clayDropdown = new ClayDropdown({
			items: [
				{
					label: 'Item 1',
					url: 'item1url',
				},
			],
			label: 'Trigger',
			searchable: true,
			spritemap: 'icons.svg',
		});

		expect(clayDropdown).toMatchSnapshot();
	});

	it('should render a dropdown with trigger custom classes', () => {
		clayDropdown = new ClayDropdown({
			items: [
				{
					label: 'Item 1',
					url: 'item1url',
				},
			],
			label: 'Trigger',
			spritemap: 'icons.svg',
			triggerClasses: 'my-custom-class',
		});

		expect(clayDropdown).toMatchSnapshot();
	});
});
