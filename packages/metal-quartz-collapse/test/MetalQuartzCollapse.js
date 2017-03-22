'use strict';

import anim from 'metal-anim';
import { async } from 'metal';
import core from 'metal';
import dom from 'metal-dom';
import MetalQuartzCollapse from '../src/MetalQuartzCollapse';

let component;

describe('MetalQuartzCollapse', () => {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	beforeEach(() => {
		dom.enterDocument('<button aria-controls="collapseExample1" class="btn btn-primary">Read more &raquo;</button><button aria-controls="collapseExample3" aria-expanded="false" class="btn btn-warning" id="toggle2">Toggle2</button>');
		dom.enterDocument('<div class="collapse in" id="collapseExample1"><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea qui sint distinctio recusandae quo ut eaque provident eius eos commodi natus labore culpa modi soluta quia repudiandae nulla ex. Reiciendis cupiditate quis voluptatum atque veniam assumenda itaque perferendis eos voluptatem dolores aut eum. Ut voluptatum amet earum delectus totam unde!</div></div>');
	});

	function checkClosedClasses(component) {
		assert.ok(!dom.hasClass(component.content, 'in'));
		assert.ok(!dom.hasClass(component.content, 'collapsing'));
		assert.ok(dom.hasClass(component.content, 'collapse'));
		assert.ok(component.content.getAttribute('aria-expanded') === 'false');
	}

	function checkOpenClasses(component) {
		assert.ok(!dom.hasClass(component.content, 'collapsing'));
		assert.ok(dom.hasClass(component.content, 'collapse'));
		assert.ok(dom.hasClass(component.content, 'in'));
		assert.ok(component.content.getAttribute('aria-expanded') === 'true');
	}

	describe('Content State', () => {
		it('should accept an element as a value', () => {
			component = new MetalQuartzCollapse({
				content: document.querySelector('#collapseExample1'),
				headers: '[aria-controls="collapseExample1"]'
			});

			assert.ok(core.isElement(component.content));
		});

		it('should accept a selector as value and convert it to an element', () => {
			component = new MetalQuartzCollapse({
				content: '#collapseExample1',
				headers: '[aria-controls="collapseExample1"]'
			});

			assert.ok(core.isElement(component.content));
		});

		it('should close when calling close()', () => {
			component = new MetalQuartzCollapse({
				collapsed: false,
				content: '#collapseExample1',
				headers: '[aria-controls="collapseExample1"]',
			});

			component.close_();

			checkClosedClasses(component);
		});

		it('should open when calling open()', () => {
			component = new MetalQuartzCollapse({
				content: '#collapseExample1',
				headers: '[aria-controls="collapseExample1"]',
			});

			component.open_();

			checkOpenClasses(component);
		});
	});

	describe('Collapsed State', () => {
		it('should be collapsed by default', () => {
			component = new MetalQuartzCollapse({
				content: document.querySelector('#collapseExample1'),
				headers: '[aria-controls="collapseExample1"]'
			});

			let content = dom.toElement(component.content);

			checkClosedClasses(component);
		});

		it('should not be collapsed on page load if state collapsed: false', () => {
			component = new MetalQuartzCollapse({
				collapsed: false,
				content: document.querySelector('#collapseExample1'),
				headers: '[aria-controls="collapseExample1"]'
			});

			let content = dom.toElement(component.content);

			checkOpenClasses(component);
		});
	});

	describe('Headers State', () => {
		it('should accept an element as a value', () => {
			component = new MetalQuartzCollapse({
				content: '#collapseExample1',
				headers: document.querySelector('[aria-controls="collapseExample1"]')
			});

			assert.ok(core.isElement(component.headers));
		});

		it('should accept a selector as value', () => {
			component = new MetalQuartzCollapse({
				content: '#collapseExample1',
				headers: '[aria-controls="collapseExample1"]'
			});

			assert.ok(core.isString(component.headers));
		});

		it('should accept an array of selectors and elements as a value', () => {
			component = new MetalQuartzCollapse({
				content: '#collapseExample1',
				headers: ['[aria-controls="collapseExample1"]', document.querySelector('#toggle2')]
			});

			assert.ok(Array.isArray(component.headers));
		});
	});
});
