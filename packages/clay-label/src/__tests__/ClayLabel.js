'use strict';

import ClayLabel from '../ClayLabel';

let label;

describe('ClayLabel', function() {
	afterEach(() => {
		if (label) {
			label.dispose();
		}
	});

	it('shound generate the default markup', () => {
		label = new ClayLabel();

		expect(label).toMatchSnapshot();
	});

	it('shound render a label with label', () => {
		label = new ClayLabel({
			label: 'Foo',
		});

		expect(label).toMatchSnapshot();
	});

	it('shound render a label with id', () => {
		label = new ClayLabel({
			id: 'Foo',
		});

		expect(label).toMatchSnapshot();
	});

	it('shound render a small label', () => {
		label = new ClayLabel({
			small: true,
		});

		expect(label).toMatchSnapshot();
	});

	it('shound render a label with removable', () => {
		label = new ClayLabel({
			label: 'Foo',
			closeable: true,
			spritemap: 'icons.svg',
		});

		expect(label).toMatchSnapshot();
	});

	it('shound render a label with link', () => {
		label = new ClayLabel({
			label: 'Foo',
			href: '#1',
		});

		expect(label).toMatchSnapshot();
	});

	it('shound render a `default color` label', () => {
		label = new ClayLabel({
			style: 'secondary',
		});

		expect(label).toMatchSnapshot();
	});

	it('shound render a `info color` label', () => {
		label = new ClayLabel({
			style: 'info',
		});

		expect(label).toMatchSnapshot();
	});

	it('shound render a `warning color` label', () => {
		label = new ClayLabel({
			style: 'warning',
		});

		expect(label).toMatchSnapshot();
	});

	it('shound render a `danger color` label', () => {
		label = new ClayLabel({
			style: 'danger',
		});

		expect(label).toMatchSnapshot();
	});

	it('shound render a `success color` label', () => {
		label = new ClayLabel({
			style: 'success',
		});

		expect(label).toMatchSnapshot();
	});
});
