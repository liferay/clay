import 'clay-button';
import 'clay-icon';
import {Config} from 'metal-state';
import {EventHandler} from 'metal-events';
import * as Helpers from './Helpers';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import dom from 'metal-dom';
import moment from 'moment';
import Soy from 'metal-soy';

import templates from './ClayDatePicker.soy.js';

/**
 * Metal ClayDatePicker component.
 * @extends ClayComponent
 */
class ClayDatePicker extends ClayComponent {
	/**
	 * Continues the propagation of the event clicked on the content.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleContentClick(event) {
		if (!this.contentRenderer) {
			const {hour, minute} = event.target.form;
			this.currentTime = moment(this.currentMonth)
				.set('h', hour.value)
				.set('m', minute.value)
				.format(this.timeFormat);
		}

		return !this.emit({
			name: 'contentClicked',
			originalEvent: event,
		});
	}

	/**
	 * Handles the click on element of the day
	 * @param {!Event} event
	 * @protected
	 */
	_handleDayClicked(event) {
		const ariaLabel = event.target.getAttribute('ariaLabel');

		this._daySelected = ariaLabel;
		this._inputValue = Helpers.formatDate(this._daySelected);
	}

	/**
	 * Handles the click of the document to hide the datepicker.
	 * @param {!Event} event
	 * @protected
	 */
	_handleDocClick(event) {
		if (this.element.contains(event.target)) {
			return;
		}
		this.expanded = false;
	}

	/**
	 * Handles the click on the dot button.
	 * @protected
	 */
	_handleDotClicked() {
		this.currentMonth = Helpers.formatDate(this._daySelected);
	}

	/**
	 * Handles the change of the year and month of the header
	 * @param {!Event} event
	 * @protected
	 */
	_handleNavigateChange(event) {
		const {month, year} = event.target.form;
		this.currentMonth = new Date(year.value, month.value);
	}

	/**
	 * Handles the next month button
	 * @protected
	 */
	_handleNextMonth() {
		this.currentMonth = moment(this.currentMonth)
			.clone()
			.add(1, 'M')
			.toDate();
	}

	/**
	 * Handles the input change.
	 * @param {!Event} event
	 */
	_handleOnInput(event) {
		const {value} = event.target;
		const format = `${this.dateFormat} ${this.time ? this.timeFormat : ''}`;
		const date = moment(value, format);

		if (date.isValid()) {
			this.currentMonth = date.toDate();
			this._daySelected = Helpers.setDateSelected(this.currentMonth);

			if (this.time) {
				this.currentTime = date.format(this.timeFormat);
			}
		}
	}

	/**
	 * Handles the previous month button
	 * @protected
	 */
	_handlePreviousMonth() {
		this.currentMonth = moment(this.currentMonth)
			.clone()
			.add(-1, 'M')
			.toDate();
	}

	/**
	 * Handles datepicker view
	 * @protected
	 */
	_handleToggle() {
		this.expanded = !this.expanded;
	}

	/**
	 * Set the current month formatted
	 * @param {!Date} value
	 * @protected
	 * @return {!Date}
	 */
	_setCurrentMonth(value) {
		const currentMonth = moment(value)
			.clone()
			.set('date', 1)
			.set('hour', 12)
			.toDate();

		return currentMonth;
	}

	/**
	 * Sets the formatted time.
	 * @param {!Date} value
	 * @protected
	 * @return {!String}
	 */
	_setCurrentTime(value) {
		if (value) {
			return value;
		}

		return moment()
			.set('h', 0)
			.set('m', 0)
			.format(this.timeFormat);
	}

	/**
	 * Sets the formatted date and time of the input.
	 * @param {!Date} value
	 * @protected
	 * @return {!String}
	 */
	_setValue(value) {
		if (moment(value).isValid() && !isNaN(value)) {
			const date = moment(value)
				.clone()
				.format(this.dateFormat);
			return this.time ? `${date} ${this.currentTime}` : date;
		}

		return '';
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
		this._eventHandler.removeAllListeners();
	}

	/**
	 * @inheritDoc
	 */
	syncCurrentMonth(value) {
		if (value) {
			this._weeks = Helpers.getWeekArray(value, this.firstDayOfWeek);
			this._month = value.getMonth();
			this._year = value.getFullYear();
		}
	}

	/**
	 * @inheritDoc
	 */
	syncCurrentTime(value) {
		if (value && this._daySelected) {
			const date = moment(value, this.timeFormat);
			this._inputValue = Helpers.formatDate(this._daySelected);
			this.dataContent = {
				hour: date.get('hour'),
				minute: date.get('minute'),
			};
		}
	}

	/**
	 * @inheritDoc
	 */
	syncExpanded() {
		if (this.expanded) {
			this._eventHandler.add(
				dom.on(document, 'click', this._handleDocClick.bind(this), true)
			);
		} else {
			this._eventHandler.removeAllListeners();
		}
	}

	/**
	 * @inheritDoc
	 */
	syncInitialMonth(value) {
		this.currentMonth = this._setCurrentMonth(value);
		this._daySelected = Helpers.setDateSelected(value);
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayDatePicker.STATE = {
	/**
	 * The day selected by the user.
	 * @default Date Month
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {!Date}
	 */
	_daySelected: Config.any().internal(),

	/**
	 * The input value.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {?(Date|string|undefined)}
	 */
	_inputValue: Config.oneOfType([
		Config.instanceOf(Date),
		Config.string(),
	]).setter('_setValue').internal(),

	/**
	 * The selected month.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {!int}
	 */
	_month: Config.number().internal(),

	/**
	 * An array of the weeks and days list for the current month
	 * @default undefined
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {!Array<Array>}
	 */
	_weeks: Config.array(Config.array()).internal(),

	/**
	 * The selected year.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {!int}
	 */
	_year: Config.number().internal(),

	/**
	 * Aria label attribute for the button element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {?(string|undefined)}
	 */
	ariaLabel: Config.string(),

	/**
	 * The name of the variant of the deltemplate.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {?(string|undefined)}
	 */
	contentRenderer: Config.any(),

	/**
	 * Indicates the current month rendered on the screen.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {!Date}
	 */
	currentMonth: Config.instanceOf(Date).internal(),

	/**
	 * Indicates the time selected by the user.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {!String}
	 */
	currentTime: Config.string()
		.setter('_setCurrentTime')
		.internal(),

	/**
	 * Set the data to be accessed at the extension point.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {?(object|undefined)}
	 */
	dataContent: Config.object(),

	/**
	 * Set the format of how the date will appear in the input element.
	 * See available: https://momentjs.com/docs/#/parsing/string-format/
	 * @default YYYY-MM-DD
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {?string}
	 */
	dateFormat: Config.string().value('YYYY-MM-DD'),

	/**
	 * Set the initial value of the input.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {?(Date|string|undefined)}
	 */
	defaultValue: Config.oneOfType([
		Config.instanceOf(Date),
		Config.string(),
	]).setter('_setValue'),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Flag to indicate if date is expanded.
	 * @default false
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {?bool}
	 */
	expanded: Config.bool().value(false),

	/**
	 * Set the first day of the week, starting from 0
	 * (Sunday) to 6 (Saturday).
	 * @default 0
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {?int}
	 */
	firstDayOfWeek: Config.oneOf([0, 1, 2, 3, 4, 5, 6]).value(0),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * The month to display in the calendar on the first render.
	 * @default Date
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {!Date}
	 */
	initialMonth: Config.instanceOf(Date).value(new Date()),

	/**
	 * The names of the months.
	 * @default January...
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {?array<String>}
	 */
	months: Config.array().value([
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]),

	/**
	 * Describe a brief tip to help users interact.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {?(string|undefined)}
	 */
	placeholder: Config.string(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {!string}
	 */
	spritemap: Config.string().required(),

	/**
	 * Flag to enable datetime selection.
	 * @default false
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {?bool}
	 */
	time: Config.bool().value(false),

	/**
	 * Set the format of how the time will appear in the input element.
	 * See available: https://momentjs.com/docs/#/parsing/string-format/
	 * @default HH:mm
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {?string}
	 */
	timeFormat: Config.string().value('HH:mm'),

	/**
	 * Short names of days of the week to use in the header
	 * of the month. It should start from Sunday.
	 * @default S M T W T F S
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {!Array<String>}
	 */
	weekdaysShort: Config.array().value(['S', 'M', 'T', 'W', 'T', 'F', 'S']),

	/**
	 * List of years available for navigate that are added in the selector.
	 * @default undefined
	 * @instance
	 * @memberof ClayDatePicker
	 * @type {!Array<String>}
	 */
	years: Config.array().required(),
};

defineWebComponent('clay-date-picker', ClayDatePicker);

Soy.register(ClayDatePicker, templates);

export {ClayDatePicker};
export default ClayDatePicker;
