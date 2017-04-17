'use strict';

import dom from 'metal-dom';
import MetalClayLink from '../src/MetalClayLink';

let component;

describe('MetalClayLink', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should apply classes to the anchor tag', () => {
		component = new MetalClayLink({
			elementClasses: 'my-test-class'
		});

		assert.ok(dom.hasClass(component.element, 'my-test-class'));
	});

	it('should apply the download attribute to the anchor tag', () => {
		component = new MetalClayLink({
			download: 'http://www.example.com'
		});

		assert.strictEqual(component.element.getAttribute('download'), 'http://www.example.com');
	});

	it('should apply an id to the anchor tag', () => {
		component = new MetalClayLink({
			id: 'myUniqueId'
		});

		assert.strictEqual(component.element.getAttribute('id'), 'myUniqueId');
	});

	it('should apply an href to the anchor tag', () => {
		component = new MetalClayLink({
			href: 'http://www.example.com'
		});

		assert.strictEqual(component.element.getAttribute('href'), 'http://www.example.com');
	});

	it('should apply the target attribute to the anchor tag', () => {
		component = new MetalClayLink({
			target: 'http://www.example.com'
		});

		assert.strictEqual(component.element.getAttribute('target'), 'http://www.example.com');
	});

	it('should should be able to render straight html', () => {
		component = new MetalClayLink({
			html: '<a aria-label="my-aria-label" href="#1" target="_blank">Html</a>'
		});

		assert.strictEqual(component.element.outerHTML, __html__['test/fixture/testDefaultMetalClayLink.html'].trim());
	});

	it('should render the correct markup with icon on the right', () => {
		component = new MetalClayLink({
			href: '#1',
			icon: {
				alignment: 'right',
				spritemap: '../node_modules/lexicon-ux/build/images/icons/icons.svg',
				symbol: 'add-cell'
			},
			label: '<span>My Other Link Label</span>'
		});

		assert.strictEqual(component.element.outerHTML, __html__['test/fixture/testDefaultMetalClayLinkIconRight.html'].trim());
	});

	it('should render the correct markup with icon on the left', () => {
		component = new MetalClayLink({
			href: '#1',
			icon: {
				alignment: 'left',
				spritemap: '../node_modules/lexicon-ux/build/images/icons/icons.svg',
				symbol: 'add-cell'
			},
			label: 'My Link Label'
		});

		assert.strictEqual(component.element.outerHTML, __html__['test/fixture/testDefaultMetalClayLinkIconLeft.html'].trim());
	});
});
