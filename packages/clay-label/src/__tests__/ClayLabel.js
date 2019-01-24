'use strict';

import ClayLabel from '../ClayLabel';

let label;

describe('ClayLabel', function() {
	afterEach(() => {
		if (label) {
			label.dispose();
		}
	});

	it('should render the default markup', () => {
		label = new ClayLabel();

		expect(label).toMatchSnapshot();
	});

	it('should render a label with classes', () => {
		label = new ClayLabel({
			elementClasses: 'my-custom-class',
		});

		expect(label).toMatchSnapshot();
	});

	it('should render a label with id', () => {
		label = new ClayLabel({
			id: 'myId',
		});

		expect(label).toMatchSnapshot();
	});

	it('should render a label with label', () => {
		label = new ClayLabel({
			label: 'Foo',
		});

		expect(label).toMatchSnapshot();
	});

	it('should render a large label', () => {
		label = new ClayLabel({
			size: 'lg',
		});

		expect(label).toMatchSnapshot();
	});

	it('should render a removable label', () => {
		label = new ClayLabel({
			label: 'Foo',
			closeable: true,
			spritemap: 'icons.svg',
		});

		expect(label).toMatchSnapshot();
	});

	it('should render a label with link', () => {
		label = new ClayLabel({
			label: 'Foo',
			href: '#1',
		});

		expect(label).toMatchSnapshot();
	});

	it('should render a `default color` label', () => {
		label = new ClayLabel({
			style: 'secondary',
		});

		expect(label).toMatchSnapshot();
	});

	it('should render a `info color` label', () => {
		label = new ClayLabel({
			style: 'info',
		});

		expect(label).toMatchSnapshot();
	});

	it('should render a `warning color` label', () => {
		label = new ClayLabel({
			style: 'warning',
		});

		expect(label).toMatchSnapshot();
	});

	it('should render a `danger color` label', () => {
		label = new ClayLabel({
			style: 'danger',
		});

		expect(label).toMatchSnapshot();
	});

	it('should render a `success color` label', () => {
		label = new ClayLabel({
			style: 'success',
		});

		expect(label).toMatchSnapshot();
	});

	it('should render a label with no style', () => {
		label = new ClayLabel({
			style: false,
		});

		expect(label).toMatchSnapshot();
	});

	it('should render a label with tabIndex', function() {
		label = new ClayLabel({
			tabIndex: '0',
		});

		expect(label).toMatchSnapshot();
	});

	it('should render a closeable label and emit an event on close button click', () => {
		label = new ClayLabel({
			label: 'Foo',
			closeable: true,
			spritemap: 'icons.svg',
		});

		const spy = jest.spyOn(label, 'emit');

		label.refs.closeButton.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'close',
				originalEvent: expect.any(Object),
			})
		);
	});
});
