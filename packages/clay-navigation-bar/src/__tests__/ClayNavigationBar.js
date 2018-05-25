'use strict';

import ClayNavigationBar from '../ClayNavigationBar';

let consoleErrorReference;
let navigationbar;
const spritemap = 'icons.svg';

/**
 * Stubs console.error
 */
function mockConsoleError() {
	console.error = () => {};
}

describe('ClayNavigationBar', function() {
	beforeEach(() => {
		consoleErrorReference = console.error;
	});

	afterEach(() => {
		if (navigationbar) {
			navigationbar.dispose();
		}

		console.error = consoleErrorReference;
	});

	it('should render a navigatiom bar with one element', function() {
		navigationbar = new ClayNavigationBar({
			items: [{label: 'Page 1', href: '#1'}],
			spritemap: spritemap,
		});

		expect(navigationbar).toMatchSnapshot();
	});

	it('should render a navigatiom bar with classes', function() {
		navigationbar = new ClayNavigationBar({
			elementClasses: 'my-custom-class',
			items: [{label: 'Page 1', href: '#1'}],
			spritemap: spritemap,
		});

		expect(navigationbar).toMatchSnapshot();
	});

	it('should render a navigatiom bar with id', function() {
		navigationbar = new ClayNavigationBar({
			id: 'myId',
			items: [{label: 'Page 1', href: '#1'}],
			spritemap: spritemap,
		});

		expect(navigationbar).toMatchSnapshot();
	});

	it('should render an inverted colored navigatiom bar with one element', function() {
		navigationbar = new ClayNavigationBar({
			inverted: true,
			items: [{label: 'Page 1', href: '#1'}],
			spritemap: spritemap,
		});

		expect(navigationbar).toMatchSnapshot();
	});

	it('should render a navigatiom bar with one active element', function() {
		navigationbar = new ClayNavigationBar({
			items: [{active: true, label: 'Page 1', href: '#1'}],
			spritemap: spritemap,
		});

		expect(navigationbar).toMatchSnapshot();
	});

	it('should render a navigatiom bar with more than one element', function() {
		navigationbar = new ClayNavigationBar({
			items: [
				{label: 'Page 1', href: '#1'},
				{label: 'Page 2', href: '#2'},
			],
			spritemap: spritemap,
		});

		expect(navigationbar).toMatchSnapshot();
	});

	it('should fail when no items are passed', function() {
		mockConsoleError();

		expect(() => {
			navigationbar = new ClayNavigationBar({
				spritemap: spritemap,
			});
		}).toThrow();
	});

	it('should fail when no label is passed on each page', function() {
		mockConsoleError();

		expect(() => {
			navigationbar = new ClayNavigationBar({
				items: [{href: '#1'}],
				spritemap: spritemap,
			});
		}).toThrow();
	});

	it('should fail when no href is passed on each page', function() {
		mockConsoleError();

		expect(() => {
			navigationbar = new ClayNavigationBar({
				items: [{label: 'Page 1'}],
				spritemap: spritemap,
			});
		}).toThrow();
	});

	it('should render a navigation bar and emit an event on nav item click', () => {
		navigationbar = new ClayNavigationBar({
			items: [
				{label: 'Page 1', href: '#1'},
				{label: 'Page 2', href: '#2'},
			],
			spritemap: spritemap,
		});

		const dataToExpect = {
			item: {
				label: 'Page 2',
				href: '#2',
			},
		};

		const spy = jest.spyOn(navigationbar, 'emit');

		navigationbar.refs.navItem1.element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				data: dataToExpect,
				name: 'itemClicked',
				originalEvent: expect.any(Object),
			})
		);
	});
});
