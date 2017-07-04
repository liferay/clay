'use strict';

import dom from 'metal-dom';
import MetalClayIcon from '../MetalClayIcon';

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

let clayIcon;

describe('MetalClayIcon', function() {
	afterEach(() => {
		if (clayIcon) {
			clayIcon.dispose();
		}
	});

	it('should generate markup for icon `add-cell`', function() {
		clayIcon = new MetalClayIcon({
			spritemap: spritemap,
			symbol: 'add-cell',
		});

		expect(clayIcon).toMatchSnapshot();
	});

	it('should append elementClasses to the outer element', function() {
		clayIcon = new MetalClayIcon({
			elementClasses: 'icon-monospaced',
			spritemap: spritemap,
			symbol: 'add-cell',
		});

		expect(dom.hasClass(clayIcon.element, 'icon-monospaced')).toBeTruthy();
	});

	it('should not output any markup if symbol is undefined', function() {
		clayIcon = new MetalClayIcon({
			spritemap: spritemap,
		});

		expect(clayIcon.element).toBeNull();
	});

	it('should not output any markup if spritemap is undefined', function() {
		clayIcon = new MetalClayIcon({
			symbol: 'add-cell',
		});

		expect(clayIcon.element).toBeNull();
	});

	it('should output markup for Glyphicons.', function() {
		clayIcon = new MetalClayIcon({
			elementClasses: 'glyphicon glyphicon-plus',
		});

		expect(clayIcon).toMatchSnapshot();
	});

	it('should output markup for Clay Font Awesome Icons.', function() {
		clayIcon = new MetalClayIcon({
			elementClasses: 'clay-fa icon-plus',
		});

		expect(clayIcon).toMatchSnapshot();
	});
});
