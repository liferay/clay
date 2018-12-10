import 'clay-button';
import 'clay-checkbox';
import 'clay-label';
import 'clay-link';
import 'clay-progress-bar';
// eslint-disable-next-line
import { ClayActionsDropdown, flatten } from 'clay-dropdown';
import {Config} from 'metal-state';
import {EventHandler} from 'metal-events';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import dom from 'metal-dom';
import Soy from 'metal-soy';

import templates from './ClayTable.soy.js';

/**
 * Metal ClayTable component.
 * @extends ClayComponent
 */
class ClayTable extends ClayComponent {
	/**
	 * @inheritDoc
	 */
	attached() {
		this._eventHandler.add(
			dom.on(document, 'click', this._handleDocClick.bind(this)),
			dom.delegate(
				this.element,
				'focus',
				'tr',
				this._handleRowFocus.bind(this)
			)
		);
	}

	/**
	 * @inheritDoc
	 */
	created() {
		this._eventHandler = new EventHandler();
	}

	/**
	 * @inheritDoc
	 */
	detached() {
		super.detached();
		this._eventHandler.removeAllListeners();
	}

	/**
	 * Returns the index of the element.
	 * @param {!Node} element
	 * @private
	 * @return {?(number|undefined)} the index.
	 */
	_getItemIndex(element) {
		return Array.prototype.indexOf.call(
			Array.prototype.filter.call(
				element.parentElement.children,
				childrenElement => !childrenElement.getAttribute('id')
			),
			element
		);
	}

	/**
	 * Continues the propagation of the cell content click event
	 * @param {!Event} event
	 * @private
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleCellContentClick(event) {
		const element = dom.closest(event.target, 'tr');
		const elementIndex = this._getItemIndex(element);
		const flattenItems = flatten(this.items);
		const item = flattenItems[elementIndex];

		return !this.emit({
			data: {
				item,
			},
			name: 'cellContentClicked',
			originalEvent: event,
		});
	}

	/**
	 * Handles document click in order to remove the class `table-focus` from
	 * the focused table row. This is to handle quickMenu accessibility.
	 * @private
	 */
	_handleDocClick() {
		dom.removeClasses(this.element.querySelectorAll('tr'), 'table-focus');
	}

	/**
	 * Continues the propagation of the checkbox changed event
	 * @param {!Event} event
	 * @private
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleItemToggled(event) {
		return !this.emit({
			data: {
				event,
			},
			name: 'itemToggled',
			originalEvent: event,
		});
	}

	/**
	 * Continues the propagation of the row content click event
	 * @param {!Event} event
	 * @private
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleRowContentClick(event) {
		const elementIndex = this._getItemIndex(event.delegateTarget);
		const flattenItems = flatten(this.items);
		const item = flattenItems[elementIndex];

		return !this.emit({
			data: {
				item,
			},
			name: 'rowContentClicked',
			originalEvent: event,
		});
	}

	/**
	 * Handles each row focus in order to add the class `table-focus` to the row.
	 * This is to handle quickMenu accessibility.
	 * @param {!Event} event
	 * @private
	 */
	_handleRowFocus(event) {
		dom.removeClasses(
			this.element.querySelector('.table-focus'),
			'table-focus'
		);
		dom.addClasses(dom.closest(event.target, 'tr'), 'table-focus');
	}

	/**
	 * Continues the propagation of the column sorting button click event
	 * @param {!Event} event
	 * @private
	 */
	_handleSortingClick(event) {
		this.emit('sortingButtonClicked', event);
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayTable.STATE = {
	/**
	 * Variant name to render the actions menu
	 * @default undefined
	 * @instance
	 * @memberof ClayTable
	 * @type {?(string|undefined)}
	 */
	actionsMenuVariant: Config.string(),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayTable
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayTable
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayTable
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayTable
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * List of items to display in the table.
	 * @default undefined
	 * @instance
	 * @memberof ClayTable
	 * @type {?(array|undefined)}
	 */
	items: Config.array(),

	/**
	 * Schema of the table containing an element per column with label and the
	 * name of the field with the value.
	 * @default undefined
	 * @instance
	 * @memberof ClayTable
	 * @type {!object}
	 */
	schema: Config.shapeOf({
		fields: Config.arrayOf(
			Config.shapeOf({
				contentRenderer: Config.string(),
				contentRendererMap: Config.object(),
				fieldName: Config.string().required(),
				fieldsMap: Config.object(),
				label: Config.string(),
				sortable: Config.bool(),
				sortingOrder: Config.oneOf(['asc', 'desc']),
			})
		),
		inputNameField: Config.string(),
		inputNamesMap: Config.object(),
		inputValueField: Config.string(),
	}).required(),

	/**
	 * Flag to indicate if the table items are selectable or not.
	 * @default false
	 * @instance
	 * @memberof ClayTable
	 * @type {?bool}
	 */
	selectable: Config.bool().value(false),

	/**
	 * Flag to indicate if the rows will show an actions menu or not.
	 * @default false
	 * @instance
	 * @memberof ClayTable
	 * @type {?bool}
	 */
	showActionsMenu: Config.bool().value(false),

	/**
	 * Flag to indicate if the checkbox is show or not when selectable is true.
	 * @default false
	 * @instance
	 * @memberof ClayTable
	 * @type {?bool}
	 */
	showCheckbox: Config.bool().value(false),

	/**
	 * Table responsive sizes. Available `lg`, `md`, `sm` and `xl`.
	 * @default undefined
	 * @instance
	 * @memberof ClayTable
	 * @type {?(string|undefined)}
	 */
	size: Config.oneOf(['lg', 'md', 'sm', 'xl']),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayTable
	 * @type {?(string|undefined)}
	 */
	spritemap: Config.string(),

	/**
	 * CSS classes to be applied to the table.
	 * @default undefined
	 * @instance
	 * @memberof ClayTable
	 * @type {?(string|undefined)}
	 */
	tableClasses: Config.string(),

	/**
	 * Flag to indicate if the wrapper and the table should use default css
	 * classes or not.
	 * @default true
	 * @instance
	 * @memberof ClayTable
	 * @type {?string}
	 */
	useDefaultClasses: Config.bool().value(true),

	/**
	 * Flag to indicate if the table is wrapped inside a div or not.
	 * @default true
	 * @instance
	 * @memberof ClayTable
	 * @type {?string}
	 */
	wrapTable: Config.bool().value(true),
};

defineWebComponent('clay-table', ClayTable);

Soy.register(ClayTable, templates);

export {ClayTable};
export default ClayTable;
