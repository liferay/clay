'use strict';

import ClayNavigationBar from '../ClayNavigationBar';

let navigationbar;
const spritemap = 'icons.svg';

describe('ClayNavigationBar', function() {
	afterEach(() => {
		if (navigationbar) {
			navigationbar.dispose();
		}
	});

	it('should render a navigatiom bar with one element', function() {
		navigationbar = new ClayNavigationBar({
			items: [{title: 'Page 1', url: '#1'}],
			spritemap: spritemap,
		});

		expect(navigationbar).toMatchSnapshot();
	});

	it('should render a navigatiom bar with classes', function() {
		navigationbar = new ClayNavigationBar({
			elementClasses: 'my-custom-class',
			items: [{title: 'Page 1', url: '#1'}],
			spritemap: spritemap,
		});

		expect(navigationbar).toMatchSnapshot();
	});

	it('should render a navigatiom bar with id', function() {
		navigationbar = new ClayNavigationBar({
			id: 'myId',
			items: [{title: 'Page 1', url: '#1'}],
			spritemap: spritemap,
		});

		expect(navigationbar).toMatchSnapshot();
	});

	it('should render an inverted colored navigatiom bar with one element', function() {
		navigationbar = new ClayNavigationBar({
			inverted: true,
			items: [{title: 'Page 1', url: '#1'}],
			spritemap: spritemap,
		});

		expect(navigationbar).toMatchSnapshot();
	});

	it('should render a navigatiom bar with one active element', function() {
		navigationbar = new ClayNavigationBar({
			items: [{active: true, title: 'Page 1', url: '#1'}],
			spritemap: spritemap,
		});

		expect(navigationbar).toMatchSnapshot();
	});

	it('should render a navigatiom bar with more than one element', function() {
		navigationbar = new ClayNavigationBar({
			items: [
				{title: 'Page 1', url: '#1'},
				{title: 'Page 2', url: '#2'},
			],
			spritemap: spritemap,
		});

		expect(navigationbar).toMatchSnapshot();
	});

	it('should fail when no items are passed', function() {
		expect(() => {
			navigationbar = new ClayNavigationBar({
				spritemap: spritemap,
			});
		}).toThrow();
	});

	it('should fail when no title is passed on each page', function() {
		expect(() => {
			navigationbar = new ClayNavigationBar({
				items: [{url: '#1'}],
				spritemap: spritemap,
			});
		}).toThrow();
	});

	it('should fail when no url is passed on each page', function() {
		expect(() => {
			navigationbar = new ClayNavigationBar({
				items: [{title: 'Page 1'}],
				spritemap: spritemap,
			});
		}).toThrow();
	});
});
