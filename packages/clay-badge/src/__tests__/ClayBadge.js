'use strict';

import ClayBadge from '../ClayBadge';

let badge;

describe('ClayBadge', function() {
	afterEach(() => {
		if (badge) {
			badge.dispose();
		}
	});

	it('should generate the default markup', () => {
		badge = new ClayBadge();

		expect(badge).toMatchSnapshot();
	});

	it('should render a badge with label', () => {
		badge = new ClayBadge({
			label: 'Primary',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a badge with id', () => {
		badge = new ClayBadge({
			id: 'myBadge',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a badge with href', () => {
		badge = new ClayBadge({
			href: '#1',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a small badge', () => {
		badge = new ClayBadge({
			size: 'sm',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a large badge', () => {
		badge = new ClayBadge({
			size: 'lg',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a badge with closeable', () => {
		badge = new ClayBadge({
			label: 'Badge',
			closeable: {
				monospaced: false,
				spritemap: 'icons.svg',
				symbol: 'times',
			},
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `primary color` badge', () => {
		badge = new ClayBadge({
			style: 'primary',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `secondary color` badge', () => {
		badge = new ClayBadge({
			style: 'secondary',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `success color` badge', () => {
		badge = new ClayBadge({
			style: 'success',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `info color` badge', () => {
		badge = new ClayBadge({
			style: 'info',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `warning color` badge', () => {
		badge = new ClayBadge({
			style: 'warning',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `danger color` badge', () => {
		badge = new ClayBadge({
			style: 'danger',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `light color` badge', () => {
		badge = new ClayBadge({
			style: 'light',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `dark color` badge', () => {
		badge = new ClayBadge({
			style: 'dark',
		});

		expect(badge).toMatchSnapshot();
	});
});
