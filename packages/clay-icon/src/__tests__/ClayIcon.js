'use strict';

import dom from 'metal-dom';
import ClayIcon from '../ClayIcon';

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

let clayIcon;

describe('ClayIcon', function() {
	afterEach(() => {
		if (clayIcon) {
			clayIcon.dispose();
		}
	});

	it('should generate markup for icon `add-cell`', function() {
		clayIcon = new ClayIcon({
			spritemap: spritemap,
			symbol: 'add-cell',
		});

		expect(clayIcon).toMatchSnapshot();
	});

	it('should not append monospaced class to the icon element', function() {
		clayIcon = new ClayIcon({
			monospaced: false,
			spritemap: spritemap,
			symbol: 'add-cell',
		});

		expect(dom.hasClass(clayIcon.element, 'icon-monospaced')).toBeFalsy();
	});

	it('should append monospaced class to the icon element', function() {
		clayIcon = new ClayIcon({
			monospaced: true,
			spritemap: spritemap,
			symbol: 'add-cell',
		});

		expect(dom.hasClass(clayIcon.element, 'icon-monospaced')).toBeTruthy();
	});
});
