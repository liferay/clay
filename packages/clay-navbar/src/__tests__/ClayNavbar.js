'use strict';

import ClayNavbar from '../ClayNavbar';

let navbar;

describe('ClayNavbar', function() {
	afterEach(() => {
		if (navbar) {
			navbar.dispose();
		}
	});

	it('should generate the default markup', function() {
		navbar = new ClayNavbar();

		expect(navbar).toMatchSnapshot();
	});

	it('should render an inverted colored navbar', function() {
		navbar = new ClayNavbar({
			inverted: true,
		});

		expect(navbar).toMatchSnapshot();
	});

	it('should render a navbar with one element', function() {
		navbar = new ClayNavbar({
			pages: [{ title: 'Page 1', url: '#1' }],
		});

		expect(navbar).toMatchSnapshot();
	});

	it('should render an inverted colored navbar with one element', function() {
		navbar = new ClayNavbar({
			inverted: true,
			pages: [{ title: 'Page 1', url: '#1' }],
		});

		expect(navbar).toMatchSnapshot();
	});

	it('should render a navbar with one active element', function() {
		navbar = new ClayNavbar({
			pages: [{ active: true, title: 'Page 1', url: '#1' }],
		});

		expect(navbar).toMatchSnapshot();
	});

	it('should render a navbar with more than one element', function() {
		navbar = new ClayNavbar({
			pages: [
				{ title: 'Page 1', url: '#1' },
				{ title: 'Page 2', url: '#2' },
			],
		});

		expect(navbar).toMatchSnapshot();
	});
});
