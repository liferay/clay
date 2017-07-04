'use strict';

import dom from 'metal-dom';
import MetalClayLink from '../MetalClayLink';

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

		expect(dom.hasClass(component.element, 'my-test-class')).toBeTruthy();
	});

	it('should apply the download attribute to the anchor tag', () => {
		component = new MetalClayLink({
			download: 'http://www.example.com'
		});

		expect(component.element.getAttribute('download')).toEqual(
			'http://www.example.com'
		);
	});

	it('should apply an id to the anchor tag', () => {
		component = new MetalClayLink({
			id: 'myUniqueId'
		});

		expect(component.element.getAttribute('id')).toEqual('myUniqueId');
	});

	it('should apply an href to the anchor tag', () => {
		component = new MetalClayLink({
			href: 'http://www.example.com'
		});

		expect(component.element.getAttribute('href')).toEqual(
			'http://www.example.com'
		);
	});

	it('should apply the target attribute to the anchor tag', () => {
		component = new MetalClayLink({
			target: 'http://www.example.com'
		});

		expect(component.element.getAttribute('target')).toEqual(
			'http://www.example.com'
		);
	});

	it('should should be able to render straight html', () => {
		component = new MetalClayLink({
			html:
				'<a aria-label="my-aria-label" href="#1" target="_blank">Html</a>'
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the correct markup with icon on the right', () => {
		component = new MetalClayLink({
			href: '#1',
			icon: {
				alignment: 'right',
				spritemap:
					'../node_modules/lexicon-ux/build/images/icons/icons.svg',
				symbol: 'add-cell'
			},
			label: '<span>My Other Link Label</span>'
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the correct markup with icon on the left', () => {
		component = new MetalClayLink({
			href: '#1',
			icon: {
				alignment: 'left',
				spritemap:
					'../node_modules/lexicon-ux/build/images/icons/icons.svg',
				symbol: 'add-cell'
			},
			label: 'My Link Label'
		});

		expect(component).toMatchSnapshot();
	});
});
