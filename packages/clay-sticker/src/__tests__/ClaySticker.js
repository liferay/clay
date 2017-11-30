import ClaySticker from '../ClaySticker';

let sticker;

describe('ClaySticker', function() {
	afterEach(() => {
		if (sticker) {
			sticker.dispose();
		}
	});

	it('should render the default markup', () => {
		sticker = new ClaySticker();

		expect(sticker).toMatchSnapshot();
	});

	it('should render a sticker with classes', () => {
		sticker = new ClaySticker({
			elementClasses: 'my-custom-class',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a sticker with id', () => {
		sticker = new ClaySticker({
			id: 'myId',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a sticker with icon', () => {
		sticker = new ClaySticker({
			icon: 'plus',
			spritemap: 'icons.svg',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a sticker with label', () => {
		sticker = new ClaySticker({
			label: '<span>Doc E. Brown</span>',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a small sticker', () => {
		sticker = new ClaySticker({
			size: 'sm',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a large sticker', () => {
		sticker = new ClaySticker({
			size: 'lg',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a extra large sticker', () => {
		sticker = new ClaySticker({
			size: 'xl',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a circle sticker', () => {
		sticker = new ClaySticker({
			shape: 'circle',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a bottom left positioned sticker', () => {
		sticker = new ClaySticker({
			position: 'bottom-left',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a bottom right positioned sticker', () => {
		sticker = new ClaySticker({
			position: 'bottom-right',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a top left positioned sticker', () => {
		sticker = new ClaySticker({
			position: 'top-left',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a top right positioned sticker', () => {
		sticker = new ClaySticker({
			position: 'top-right',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render an outside bottom left positioned sticker', () => {
		sticker = new ClaySticker({
			outside: true,
			position: 'bottom-left',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render an outside bottom right positioned sticker', () => {
		sticker = new ClaySticker({
			outside: true,
			position: 'bottom-right',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render an outside top left positioned sticker', () => {
		sticker = new ClaySticker({
			outside: true,
			position: 'top-left',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render an outside top right positioned sticker', () => {
		sticker = new ClaySticker({
			outside: true,
			position: 'top-right',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a `danger color` sticker', () => {
		sticker = new ClaySticker({
			style: 'danger',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a `dark color` sticker', () => {
		sticker = new ClaySticker({
			style: 'dark',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a `info color` sticker', () => {
		sticker = new ClaySticker({
			style: 'info',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a `light color` sticker', () => {
		sticker = new ClaySticker({
			style: 'light',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a `primary color` sticker', () => {
		sticker = new ClaySticker({
			style: 'primary',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a `secondary color` sticker', () => {
		sticker = new ClaySticker({
			style: 'secondary',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a `success color` sticker', () => {
		sticker = new ClaySticker({
			style: 'success',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a `unstyled` sticker', () => {
		sticker = new ClaySticker({
			style: 'unstyled',
		});

		expect(sticker).toMatchSnapshot();
	});

	it('should render a `warning color` sticker', () => {
		sticker = new ClaySticker({
			style: 'warning',
		});

		expect(sticker).toMatchSnapshot();
	});
});
