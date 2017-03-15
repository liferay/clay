'use strict';

import dom from 'metal-dom';
import MetalQuartzIcon from '../src/MetalQuartzIcon';

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

let quartzIcon;

describe('MetalQuartzIcon', function() {
	afterEach(() => {
		if (quartzIcon) {
			quartzIcon.dispose();
		}
	});

	it('should generate markup for icon `add-cell`', function() {
		quartzIcon = new MetalQuartzIcon(
			{
				spritemap: spritemap,
				symbol: 'add-cell'
			}
		);

		assert.strictEqual(quartzIcon.element.outerHTML, __html__['test/fixture/testDefaultMetalQuartzIcon.html'].trim());
	});

	it('should append elementClasses to the outer element', function() {
		quartzIcon = new MetalQuartzIcon(
			{
				elementClasses: 'icon-monospaced',
				spritemap: spritemap,
				symbol: 'add-cell'
			}
		);

		assert(dom.hasClass(quartzIcon.element, 'icon-monospaced'));
	});

	it('should not output any markup if symbol is undefined', function() {
		quartzIcon = new MetalQuartzIcon(
			{
				spritemap: spritemap
			}
		);

		assert.equal(quartzIcon.element, null);
	});

	it('should not output any markup if spritemap is undefined', function() {
		quartzIcon = new MetalQuartzIcon(
			{
				symbol: 'add-cell'
			}
		);

		assert.equal(quartzIcon.element, null);
	});

	it('should output markup for Glyphicons if spritemap is `glyphicons`.', function() {
		quartzIcon = new MetalQuartzIcon(
			{
				spritemap: 'glyphicons',
				symbol: 'glyphicon-plus'
			}
		);

		assert.strictEqual(quartzIcon.element.outerHTML, __html__['test/fixture/testGlyphiconsMetalQuartzIcon.html'].trim());
	});

	it('should append elementClasses to the glyphicon element', function() {
		quartzIcon = new MetalQuartzIcon(
			{
				elementClasses: 'icon-monospaced',
				spritemap: 'glyphicons',
				symbol: 'glyphicon-plus'
			}
		);

		assert(dom.hasClass(quartzIcon.element, 'icon-monospaced'));
	});

	it('should output markup for Quartz Font Awesome Icons if spritemap is `quartz-fa`.', function() {
		quartzIcon = new MetalQuartzIcon(
			{
				spritemap: 'quartz-fa',
				symbol: 'icon-plus'
			}
		);

		assert.strictEqual(quartzIcon.element.outerHTML, __html__['test/fixture/testQuartzFaMetalQuartzIcon.html'].trim());
	});

	it('should append elementClasses to the quartz-fa element', function() {
		quartzIcon = new MetalQuartzIcon(
			{
				elementClasses: 'icon-monospaced',
				spritemap: 'quartz-fa',
				symbol: 'icon-plus'
			}
		);

		assert(dom.hasClass(quartzIcon.element, 'icon-monospaced'));
	});
});
