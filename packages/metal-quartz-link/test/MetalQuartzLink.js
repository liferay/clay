'use strict';

import dom from 'metal-dom';
import MetalQuartzLink from '../src/MetalQuartzLink';

let component;

describe('MetalQuartzLink', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should apply classes to the anchor tag', () => {
		component = new MetalQuartzLink({
			elementClasses: 'my-test-class'
		});

		assert.ok(dom.hasClass(component.element, 'my-test-class'));
	});

	it('should apply the download attribute to the anchor tag', () => {
		component = new MetalQuartzLink({
			download: 'http://www.example.com'
		});

		assert.strictEqual(component.element.getAttribute('download'), 'http://www.example.com');
	});

	it('should apply an id to the anchor tag', () => {
		component = new MetalQuartzLink({
			id: 'myUniqueId'
		});

		assert.strictEqual(component.element.getAttribute('id'), 'myUniqueId');
	});

	it('should apply an href to the anchor tag', () => {
		component = new MetalQuartzLink({
			href: 'http://www.example.com'
		});

		assert.strictEqual(component.element.getAttribute('href'), 'http://www.example.com');
	});

	it('should apply the target attribute to the anchor tag', () => {
		component = new MetalQuartzLink({
			target: 'http://www.example.com'
		});

		assert.strictEqual(component.element.getAttribute('target'), 'http://www.example.com');
	});

	it('should should be able to render straight html', () => {
		component = new MetalQuartzLink({
			html: '<a aria-label="my-aria-label" href="#1" target="_blank">Html</a>'
		});

		assert.strictEqual(component.element.outerHTML, __html__['test/fixture/testDefaultMetalQuartzLink.html'].trim());
	});

	it('should render the correct markup with icon on the right', () => {
		component = new MetalQuartzLink({
			href: '#1',
			icon: {
				alignment: 'right',
				spritemap: '../node_modules/lexicon-ux/build/images/icons/icons.svg',
				symbol: 'add-cell'
			},
			label: '<span>My Other Link Label</span>'
		});

		assert.strictEqual(component.element.outerHTML, __html__['test/fixture/testDefaultMetalQuartzLinkIconRight.html'].trim());
	});

	it('should render the correct markup with icon on the left', () => {
		component = new MetalQuartzLink({
			href: '#1',
			icon: {
				alignment: 'left',
				spritemap: '../node_modules/lexicon-ux/build/images/icons/icons.svg',
				symbol: 'add-cell'
			},
			label: 'My Link Label'
		});

		assert.strictEqual(component.element.outerHTML, __html__['test/fixture/testDefaultMetalQuartzLinkIconLeft.html'].trim());
	});
});
