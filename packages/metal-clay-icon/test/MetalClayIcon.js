'use strict';

import dom from 'metal-dom';
import MetalClayIcon from '../src/MetalClayIcon';

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

let clayIcon;

describe('MetalClayIcon', function() {
	afterEach(() => {
		if (clayIcon) {
			clayIcon.dispose();
		}
	});

	it('should generate markup for icon `add-cell`', function() {
		clayIcon = new MetalClayIcon(
			{
				spritemap: spritemap,
				symbol: 'add-cell'
			}
		);

		assert.strictEqual(clayIcon.element.outerHTML, __html__['test/fixture/testDefaultMetalClayIcon.html'].trim());
	});

	it('should append elementClasses to the outer element', function() {
		clayIcon = new MetalClayIcon(
			{
				elementClasses: 'icon-monospaced',
				spritemap: spritemap,
				symbol: 'add-cell'
			}
		);

		assert(dom.hasClass(clayIcon.element, 'icon-monospaced'));
	});

	it('should not output any markup if symbol is undefined', function() {
		clayIcon = new MetalClayIcon(
			{
				spritemap: spritemap
			}
		);

		assert.equal(clayIcon.element, null);
	});

	it('should not output any markup if spritemap is undefined', function() {
		clayIcon = new MetalClayIcon(
			{
				symbol: 'add-cell'
			}
		);

		assert.equal(clayIcon.element, null);
	});

	it('should output markup for Glyphicons.', function() {
		clayIcon = new MetalClayIcon(
			{
				elementClasses: 'glyphicon glyphicon-plus'
			}
		);

		assert.strictEqual(clayIcon.element.outerHTML, __html__['test/fixture/testGlyphiconsMetalClayIcon.html'].trim());
	});

	it('should output markup for Clay Font Awesome Icons.', function() {
		clayIcon = new MetalClayIcon(
			{
				elementClasses: 'clay-fa icon-plus'
			}
		);

		assert.strictEqual(clayIcon.element.outerHTML, __html__['test/fixture/testClayFaMetalClayIcon.html'].trim());
	});
});
