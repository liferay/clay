'use strict';

import ClayNavbar from '../ClayNavbar';

let navbar;

describe('ClayNavbar', function() {
	afterEach(() => {
		if (navbar) {
			navbar.dispose();
		}
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

	it('should fail when no pages are passed', function() {
		expect(() => {
			navbar = new ClayNavbar();
		}).toThrow();
	});

	it('should fail when no title is passed on each page', function() {
		expect(() => {
			navbar = new ClayNavbar({
				pages: [{ url: '#1' }],
			});
		}).toThrow();
	});

	it('should fail when no url is passed on each page', function() {
		expect(() => {
			navbar = new ClayNavbar({
				pages: [{ title: 'Page 1' }],
			});
		}).toThrow();
	});
});
