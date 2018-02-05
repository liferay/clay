import {d3} from 'billboard.js';

/**
 * Creates SVG elements from an object.
 */
class SVG {
	/**
     * Create a pattern element of d3.
     * @param {!Object} object
     * @return {Object}
     */
	pattern({id, patternUnits, width, height, style}) {
		const pattern = d3.select(document.createElementNS(d3.namespaces.svg, 'pattern'))
			.attr('id', id)
			.attr('patternUnits', patternUnits)
			.attr('width', width)
			.attr('height', height)
			.attr('style', style);

		return pattern;
	}

	/**
     * Create a circle element of d3.
     * @param {!Element} element
     * @param {!Object} object
     * @return {Object}
     */
	circle(element, {cx, cy, r}) {
		const circle = element.append('circle')
			.attr('cx', cx)
			.attr('cy', cy)
			.attr('r', r);

		return circle;
	}

	/**
     * Create a polygon element of d3.
     * @param {!Element} element
     * @param {!Object} object
     * @return {Object}
     */
	polygon(element, {points}) {
		const polygon = element.append('polygon').attr('points', points);

		return polygon;
	}

	/**
     * Create a rect element of d3.
     * @param {!Element} element
     * @param {!Object} object
     * @return {Object}
     */
	rect(element, {x, y, width, height}) {
		const rect = element.append('rect')
			.attr('x', x).attr('y', y)
			.attr('width', width)
			.attr('height', height);

		return rect;
	}

	/**
     * @param {!Object} element
     * @param {!Array} children
     * @return {Object}
     * @protected
     */
	createChildren_(element, children) {
		return children.map(({nodeName, attributes}) => {
			return this[nodeName](element, attributes);
		});
	}

	/**
     * Creates an SVG element from an object and returns a list
     * of element.
     *
     * Example:
     * ```js
     * [
     *     {
     *         nodeName: 'pattern',
     *         attributes: {},
     *         children: [
     *              {
     *                  nodeName: 'rect',
     *                  attributes: {}
     *              }
     *         ]
     *     }
     * ]
     * ```
     *
     * @param {!Array} props
     * @return {Array}
     */
	create(props) {
		return props.map(val => {
			const {attributes, children, nodeName} = val;
			const element = this[nodeName](attributes);

			this.createChildren_(element, children);

			return element.node();
		});
	}
}

export default SVG;
