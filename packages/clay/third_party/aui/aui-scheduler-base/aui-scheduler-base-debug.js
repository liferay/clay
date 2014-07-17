YUI.add('aui-scheduler-base', function (A, NAME) {

/**
 * The Scheduler Component
 *
 * @module aui-scheduler
 * @submodule aui-scheduler-base-event
 */

var Lang = A.Lang,
    isBoolean = Lang.isBoolean,
    isFunction = Lang.isFunction,
    isNumber = Lang.isNumber,
    isObject = Lang.isObject,
    isString = Lang.isString,
    isValue = Lang.isValue,

    Color = A.Color,
    DateMath = A.DataType.DateMath,

    getUSDateFormat = function(date) {
        var format = ['%l'];

        if (date.getMinutes() > 0) {
            format.push(':');
            format.push('%M');
        }

        if (date.getHours() >= 12) {
            format.push('pm');
        }

        return format.join('');
    },

    getCN = A.getClassName,

    CSS_ICON = getCN('glyphicon'),
    CSS_SCHEDULER_EVENT = getCN('scheduler-event'),
    CSS_SCHEDULER_EVENT_ALL_DAY = getCN('scheduler-event', 'all', 'day'),
    CSS_SCHEDULER_EVENT_CONTENT = getCN('scheduler-event', 'content'),
    CSS_SCHEDULER_EVENT_DISABLED = getCN('scheduler-event', 'disabled'),
    CSS_SCHEDULER_EVENT_HIDDEN = getCN('scheduler-event', 'hidden'),
    CSS_SCHEDULER_EVENT_ICON_DISABLED = getCN('scheduler-event', 'icon', 'disabled'),
    CSS_SCHEDULER_EVENT_ICON_MEETING = getCN('scheduler-event', 'icon', 'meeting'),
    CSS_SCHEDULER_EVENT_ICON_REMINDER = getCN('scheduler-event', 'icon', 'reminder'),
    CSS_SCHEDULER_EVENT_ICON_REPEATED = getCN('scheduler-event', 'icon', 'repeated'),
    CSS_SCHEDULER_EVENT_ICONS = getCN('scheduler-event', 'icons'),
    CSS_SCHEDULER_EVENT_MEETING = getCN('scheduler-event', 'meeting'),
    CSS_SCHEDULER_EVENT_PAST = getCN('scheduler-event', 'past'),
    CSS_SCHEDULER_EVENT_REMINDER = getCN('scheduler-event', 'reminder'),
    CSS_SCHEDULER_EVENT_REPEATED = getCN('scheduler-event', 'repeated'),
    CSS_SCHEDULER_EVENT_SHORT = getCN('scheduler-event', 'short'),
    CSS_SCHEDULER_EVENT_TITLE = getCN('scheduler-event', 'title'),

    TPL_HTML_OPEN_SPAN = '<span>',
    TPL_HTML_CLOSE_SPAN = '</span>';

/**
 * A base class for `SchedulerEvent`.
 *
 * @class A.SchedulerEvent
 * @extends Model
 * @param {Object} config Object literal specifying widget configuration properties.
 * @constructor
 */
var SchedulerEvent = A.Component.create({

    /**
     * Static property provides a string to identify the class.
     *
     * @property NAME
     * @type {String}
     * @static
     */
    NAME: 'scheduler-event',

    /**
     * Static property used to define the default attribute
     * configuration for the `SchedulerEvent`.
     *
     * @property ATTRS
     * @type {Object}
     * @static
     */
    ATTRS: {

        /**
         * Determines whether a new event will take place all day. When enabled,
         * the event will not contain 24-hour clock date inputs.
         *
         * @attribute allDay
         * @default false
         * @type {Boolean}
         */
        allDay: {
            setter: A.DataType.Boolean.parse,
            value: false
        },

        /**
         * Determines the CSS border color of a calendar event.
         *
         * @attribute borderColor
         * @default '#FFFFFF'
         * @type String
         */
        borderColor: {
            value: '#FFFFFF',
            validator: isString
        },

        /**
         * Determines the CSS border style of a calendar event.
         *
         * @attribute borderStyle
         * @default 'solid'
         * @type String
         */
        borderStyle: {
            value: 'solid',
            validator: isString
        },

        /**
         * Determines the CSS border width of a calendar event.
         *
         * @attribute borderWidth
         * @default '2px'
         * @type String
         */
        borderWidth: {
            value: '2px',
            validator: isString
        },

        /**
         * Contains the content of Scheduler event's body section.
         *
         * @attribute content
         */
        content: {
            setter: String,
            validator: isValue
        },

        /**
         * Contains the `color` of a calendar event.
         *
         * @attribute color
         * @default '#D96666'
         * @type {String}
         */
        color: {
            lazyAdd: false,
            value: '#376cd9',
            validator: isString
        },

        /**
         * Contains the color brightness factor is applied to the `color`
         * attribute.
         *
         * @attribute colorBrightnessFactor
         * @default 1.4
         * @type {Number}
         */
        colorBrightnessFactor: {
            value: 1.4,
            validator: isNumber
        },

        /**
         * Contains the color saturation factor is applied to the `color`
         * attribute.
         *
         * @attribute colorSaturationFactor
         * @default 0.88
         * @type {Number}
         */
        colorSaturationFactor: {
            value: 0.88,
            validator: isNumber
        },

        /**
         * Contains the formatted title date for this scheduler event, taking
         * into account ISO time. The value will not contain an `endDate` if
         * this event is `allDay`.
         *
         * @attribute titleDateFormat
         * @type {Object}
         */
        titleDateFormat: {
            getter: '_getTitleDateFormat',
            value: function() {
                var instance = this,
                    scheduler = instance.get('scheduler'),
                    isoTime = scheduler && scheduler.get('activeView').get('isoTime'),

                    format = {
                        endDate: TPL_HTML_OPEN_SPAN + '&ndash;' + ' ' + '%H:%M' + TPL_HTML_CLOSE_SPAN,
                        startDate: '%H:%M'
                    };

                if (!isoTime) {
                    format.endDate = TPL_HTML_OPEN_SPAN + '&ndash;' + ' ' + getUSDateFormat(instance.get('endDate')) +
                        TPL_HTML_CLOSE_SPAN;
                    format.startDate = getUSDateFormat(instance.get('startDate'));
                }

                if (instance.getMinutesDuration() <= 30) {
                    delete format.endDate;
                }
                else if (instance.get('allDay')) {
                    format = {};
                }

                return format;
            }
        },

        /**
         * Contains the date corresponding to the current ending date of a
         * scheduled event. By default, the value is one hour after the
         * `startDate`.
         *
         * @attribute endDate
         * @type {Date}
         * @default Today's date as set on the user's computer.
         */
        endDate: {
            setter: '_setDate',
            valueFn: function() {
                var date = DateMath.clone(this.get('startDate'));

                date.setHours(date.getHours() + 1);

                return date;
            }
        },

        /**
         * Determines if the event is disabled.
         *
         * @attribute disabled
         * @default false
         * @type {Boolean}
         */
        disabled: {
            value: false,
            validator: isBoolean
        },

        /**
         * Determines if the event is a meeting.
         *
         * @attribute meeting
         * @default false
         * @type {Boolean}
         */
        meeting: {
            value: false,
            validator: isBoolean
        },

        /**
         * Contains the event `NodeList`.
         *
         * @attribute node
         */
        node: {
            valueFn: function() {
                return A.NodeList.create(A.Node.create(this.EVENT_NODE_TEMPLATE).setData('scheduler-event', this));
            }
        },

        /**
         * Determines if the event is requires reminder.
         *
         * @attribute reminder
         * @default false
         * @type {Boolean}
         */
        reminder: {
            value: false,
            validator: isBoolean
        },

        /**
         * Determines if the event is to be repeated.
         *
         * @attribute repeated
         * @default false
         * @type {Boolean}
         */
        repeated: {
            value: false,
            validator: isBoolean
        },

        /**
         * Contains this `SchedulerEvent`'s `SchedulerBase' object.
         *
         * @attribute scheduler
         * @type {A.SchedulerBase}
         */
        scheduler: {},

        /**
         * Contains the date corresponding to the current starting date of a
         * scheduled event. By default, the value is the date set on the user's
         * computer.
         *
         * @attribute startDate
         * @type {Date}
         */
        startDate: {
            setter: '_setDate',
            valueFn: function() {
                return new Date();
            }
        },

        /**
         * Indicates whether the event is visible.
         *
         * @attribute visible
         * @default true
         * @type {Boolean}
         */
        visible: {
            value: true,
            validator: isBoolean
        }
    },

    /**
     * Static property used to define which component it extends.
     *
     * @property EXTENDS
     * @type {Object}
     * @static
     */
    EXTENDS: A.Model,

    /**
     * Defines the propegate attribute keys for `Scheduler` events.
     *
     * @property PROPAGATE_ATTRS
     * @type {Array}
     * @static
     */
    PROPAGATE_ATTRS: ['allDay', 'startDate', 'endDate', 'content', 'color', 'colorBrightnessFactor',
        'colorSaturationFactor', 'titleDateFormat', 'visible', 'disabled'],

    prototype: {
        EVENT_NODE_TEMPLATE: '<div class="' + CSS_SCHEDULER_EVENT + '">' + '<div class="' +
            CSS_SCHEDULER_EVENT_TITLE +
            '"></div>' + '<div class="' + CSS_SCHEDULER_EVENT_CONTENT + '"></div>' +
            '<div class="' + CSS_SCHEDULER_EVENT_ICONS + '">' + '<span class="' + [
            CSS_ICON, CSS_SCHEDULER_EVENT_ICON_DISABLED].join(' ') + '"></span>' + '<span class="' + [CSS_ICON,
            CSS_SCHEDULER_EVENT_ICON_MEETING].join(' ') + '"></span>' + '<span class="' + [CSS_ICON,
            CSS_SCHEDULER_EVENT_ICON_REMINDER].join(' ') + '"></span>' + '<span class="' + [CSS_ICON,
            CSS_SCHEDULER_EVENT_ICON_REPEATED].join(' ') + '"></span>' + '</div>' + '</div>',

        /**
         * Construction logic executed during `SchedulerEvent` instantiation.
         * Lifecycle.
         *
         * @method initializer
         * @protected
         */
        initializer: function() {
            var instance = this;

            instance.bindUI();
            instance.syncUI();
        },

        /**
         * Binds the events on the `SchedulerEvent` UI. Lifecycle.
         *
         * @method bindUI
         * @protected
         */
        bindUI: function() {
            var instance = this;

            instance.after({
                allDayChange: instance._afterAllDayChange,
                colorChange: instance._afterColorChange,
                disabledChange: instance._afterDisabledChange,
                endDateChange: instance._afterEndDateChange,
                meetingChange: instance._afterMeetingChange,
                reminderChange: instance._afterReminderChange,
                repeatedChange: instance._afterRepeatedChange,
                visibleChange: instance._afterVisibleChange
            });
        },

        /**
         * Syncs the `SchedulerEvent` UI. Lifecycle.
         *
         * @method syncUI
         * @protected
         */
        syncUI: function() {
            var instance = this;

            instance._uiSetAllDay(
                instance.get('allDay'));

            instance._uiSetColor(
                instance.get('color'));

            instance._uiSetDisabled(
                instance.get('disabled'));

            instance._uiSetEndDate(
                instance.get('endDate'));

            instance._uiSetMeeting(
                instance.get('meeting'));

            instance._uiSetPast(
                instance._isPastEvent());

            instance._uiSetReminder(
                instance.get('reminder'));

            instance._uiSetRepeated(
                instance.get('repeated'));

            instance._uiSetVisible(
                instance.get('visible'));

            instance.syncNodeTitleUI();
            instance.syncNodeContentUI();
        },

        /**
         * Destructor lifecycle implementation for the `SchedulerEvent` class.
         * Removes the `node` from DOM.
         *
         * @method destroy
         * @protected
         */
        destroy: function() {
            var instance = this;

            instance.get('node').remove(true);
        },

        /**
         * Sometimes an event will require a padding node that mimics the
         * behavior of the scheduler `event`'s `node`. This can occur in the
         * week view when an event spans multiple days.

         * For example, an event beginning at 10pm on January 1 and ending on
         * 3am January 2nd would require a padding node. The `event`'s `node`
         * appears from January 1 from 10:00pm to 11:59pm and the `paddingNode`
         * is rendered on the table from January 2 from 12:00am to 3:00am.
         *
         * @method addPaddingNode
         */
        addPaddingNode: function() {
            var instance = this;

            instance.get('node').push(
                A.Node.create(instance.EVENT_NODE_TEMPLATE).setData('scheduler-event', instance));

            instance.syncUI();
        },

        /**
         * Clones the scheduler `event`.
         *
         * @method clone
         * @return {Object} Scheduler's event model
         */
        clone: function() {
            var instance = this,
                cloned = null,
                scheduler = instance.get('scheduler');

            if (scheduler) {
                cloned = new scheduler.eventModel();
                cloned.copyPropagateAttrValues(instance, null, {
                    silent: true
                });
            }

            return cloned;
        },

        /**
         * Copies the dates from the `event` parameter to the instance `event`.
         *
         * @method copyDates
         * @param {A.SchedulerEvent} evt A `Scheduler` event.
         * @param {Object} options Zero or more options.
         */
        copyDates: function(evt, options) {
            var instance = this;

            instance.setAttrs({
                    endDate: DateMath.clone(evt.get('endDate')),
                    startDate: DateMath.clone(evt.get('startDate'))
                },
                options);
        },

        /**
         * Copies the propagate attribute vales from an `event` to this `event`.
         *
         * @method copyPropagateAttrValues
         * @param {A.SchedulerEvent} evt A `Scheduler` event.
         * @param {Boolean} dontCopyMap
         * @param {Object} options Zero or more options.
         */
        copyPropagateAttrValues: function(evt, dontCopyMap, options) {
            var instance = this,
                attrMap = {};

            instance.copyDates(evt, options);

            A.Array.each(instance.constructor.PROPAGATE_ATTRS, function(attrName) {
                if (!((dontCopyMap || {}).hasOwnProperty(attrName))) {
                    var value = evt.get(attrName);

                    if (!isObject(value)) {
                        attrMap[attrName] = value;
                    }
                }
            });

            instance.setAttrs(attrMap, options);
        },

        /**
         * Gets the number of days an `event` is scheduled to take place.
         *
         * @method getDaysDuration
         * @return {Number}
         */
        getDaysDuration: function() {
            var instance = this;

            return DateMath.getDayOffset(
                instance.get('endDate'), instance.get('startDate'));
        },

        /**
         * Gets the number of hours an `event` is scheduled to take place.
         *
         * @method getHoursDuration
         * @return {Number}
         */
        getHoursDuration: function() {
            var instance = this;

            return DateMath.getHoursOffset(
                instance.get('endDate'), instance.get('startDate'));
        },

        /**
         * Gets the number of minutes an `event` is scheduled to take place.
         *
         * @method getMinutesDuration
         * @return {Number}
         */
        getMinutesDuration: function() {
            var instance = this;

            return DateMath.getMinutesOffset(
                instance.get('endDate'), instance.get('startDate'));
        },

        /**
         * Gets the number of seconds an `event` is scheduled to take place.
         *
         * @method getSecondsDuration
         * @return {Number}
         */
        getSecondsDuration: function() {
            var instance = this;

            return DateMath.getSecondsOffset(
                instance.get('endDate'), instance.get('startDate'));
        },

        /**
         * Determines if an `event`'s end date is this same as this `event`.
         *
         * @method sameEndDate
         * @param {A.SchedulerEvent} evt A `Scheduler` event.
         * @return {Boolean}
         */
        sameEndDate: function(evt) {
            var instance = this;

            return DateMath.compare(instance.get('endDate'), evt.get('endDate'));
        },

        /**
         * Determines if an `event`'s start date is this same as this `event`.
         *
         * @method sameStartDate
         * @param {A.SchedulerEvent} evt A `Scheduler` event.
         * @return {Boolean}
         */
        sameStartDate: function(evt) {
            var instance = this;

            return DateMath.compare(
                instance.get('startDate'), evt.get('startDate'));
        },

        /**
         * Determines if an `event` is after this `event`.
         *
         * @method isAfter
         * @param {A.SchedulerEvent} evt A `Scheduler` event.
         * @return {Boolean}
         */
        isAfter: function(evt) {
            var instance = this;
            var startDate = instance.get('startDate');
            var evtStartDate = evt.get('startDate');

            return DateMath.after(startDate, evtStartDate);
        },

        /**
         * Determines if an `event` is before this `event`.
         *
         * @method isBefore
         * @param {A.SchedulerEvent} evt A `Scheduler` event.
         * @return {Boolean}
         */
        isBefore: function(evt) {
            var instance = this;
            var startDate = instance.get('startDate');
            var evtStartDate = evt.get('startDate');

            return DateMath.before(startDate, evtStartDate);
        },

        /**
         * Determines if an `event` interescts with this `event`.
         *
         * @method intersects
         * @param {A.SchedulerEvent} evt A `Scheduler` event.
         * @return {Boolean}
         */
        intersects: function(evt) {
            var instance = this;
            var endDate = instance.get('endDate');
            var startDate = instance.get('startDate');
            var evtStartDate = evt.get('startDate');

            return (instance.sameStartDate(evt) ||
                DateMath.between(evtStartDate, startDate, endDate));
        },

        /**
         * Determines if an `event`'s hours' interescts with this `event`'s
         * hours.
         *
         * @method intersectHours
         * @param {A.SchedulerEvent} evt A `Scheduler` event.
         * @return {Boolean}
         */
        intersectHours: function(evt) {
            var instance = this;
            var endDate = instance.get('endDate');
            var startDate = instance.get('startDate');
            var evtModifiedStartDate = DateMath.clone(startDate);

            DateMath.copyHours(evtModifiedStartDate, evt.get('startDate'));

            return (DateMath.compare(startDate, evtModifiedStartDate) ||
                DateMath.between(evtModifiedStartDate, startDate, endDate));
        },

        /**
         * Determines if a this `event` starts or ends at the beginning or end
         * of a day.
         *
         * @method isDayBoundaryEvent
         * @return {Boolean}
         */
        isDayBoundaryEvent: function() {
            var instance = this;

            return DateMath.isDayBoundary(
                instance.get('startDate'), instance.get('endDate'));
        },

        /**
         * Checks if the passed date is between `startDate` and `endDate`.
         *
         * @method isDayOverlapEvent
         * @return {Boolean}
         */
        isDayOverlapEvent: function() {
            var instance = this;

            return DateMath.isDayOverlap(
                instance.get('startDate'), instance.get('endDate'));
        },

        /**
         * Clears the time fields from the `endDate`, effectively setting the
         * time to 12 noon.
         *
         * @method getClearEndDate
         * @return {Date}
         */
        getClearEndDate: function() {
            var instance = this;

            return DateMath.safeClearTime(instance.get('endDate'));
        },

        /**
         * Clears the time fields from the `startDate`, effectively setting the
         * time to 12 noon.
         *
         * @method getClearStartDate
         * @return {Date}
         */
        getClearStartDate: function() {
            var instance = this;

            return DateMath.safeClearTime(instance.get('startDate'));
        },

        /**
         * Moves this Scheduler event to a new date specified by the date
         * parameter.
         *
         * @method move
         * @param {Date} date
         * @param {Object} options Zero or more options.
         */
        move: function(date, options) {
            var instance = this;
            var duration = instance.getMinutesDuration();

            instance.setAttrs({
                    endDate: DateMath.add(DateMath.clone(date), DateMath.MINUTES, duration),
                    startDate: date
                },
                options);
        },

        /**
         * Replaces each node's current content with the `content`.
         *
         * @method setContent
         * @param content
         */
        setContent: function(content) {
            var instance = this;

            instance.get('node').each(function(node) {
                var contentNode = node.one('.' + CSS_SCHEDULER_EVENT_CONTENT);

                contentNode.setContent(content);
            });
        },

        /**
         * Replaces each node's current title with the `content`.
         *
         * @method setTitle
         * @param content
         */
        setTitle: function(content) {
            var instance = this;

            instance.get('node').each(function(node) {
                var titleNode = node.one('.' + CSS_SCHEDULER_EVENT_TITLE);

                titleNode.setContent(content);
            });
        },

        /**
         * Sets the content of the Scheduler event to the content attribute
         * value.
         *
         * @method syncNodeContentUI
         */
        syncNodeContentUI: function() {
            var instance = this;

            instance.setContent(instance.get('content'));
        },

        /**
         * Sets the title of the Scheduler event to the a formated date.
         * @method syncNodeTitleUI
         */
        syncNodeTitleUI: function() {
            var instance = this,
                format = instance.get('titleDateFormat'),
                startDate = instance.get('startDate'),
                endDate = instance.get('endDate'),
                title = [];

            if (format.startDate) {
                title.push(instance._formatDate(startDate, format.startDate));
            }

            if (format.endDate) {
                title.push(instance._formatDate(endDate, format.endDate));
            }

            instance.setTitle(title.join(''));
        },

        /**
         * Splits an event into multiple days. Since an event can span across
         * multiple days in the week view, this event will be split into chunks
         * for each day column.
         *
         * @method split
         * @return {Array}
         */
        split: function() {
            var instance = this,
                s1 = DateMath.clone(instance.get('startDate')),
                e1 = DateMath.clone(instance.get('endDate'));

            if (instance.isDayOverlapEvent() && !instance.isDayBoundaryEvent()) {
                var s2 = DateMath.clone(s1);
                s2.setHours(24, 0, 0, 0);

                return [[s1, DateMath.toMidnight(DateMath.clone(s1))], [s2, DateMath.clone(e1)]];
            }

            return [[s1, e1]];
        },

        /**
         * Handles `allDay` events.
         *
         * @method _afterAllDayChange
         * @param {EventFacade} event
         * @protected
         */
        _afterAllDayChange: function(event) {
            var instance = this;

            instance._uiSetAllDay(event.newVal);
        },

        /**
         * Handles `color` events.
         *
         * @method _afterColorChange
         * @param {EventFacade} event
         * @protected
         */
        _afterColorChange: function(event) {
            var instance = this;

            instance._uiSetColor(event.newVal);
        },

        /**
         * Handles `disabled` events.
         *
         * @method _afterDisabledChange
         * @param {EventFacade} event
         * @protected
         */
        _afterDisabledChange: function(event) {
            var instance = this;

            instance._uiSetDisabled(event.newVal);
        },

        /**
         * Handles `endDate` events.
         *
         * @method _afterEndDateChange
         * @param {EventFacade} event
         * @protected
         */
        _afterEndDateChange: function(event) {
            var instance = this;

            instance._uiSetEndDate(event.newVal);
        },

        /**
         * Handles `meeting` events.
         *
         * @method _afterMeetingChange
         * @param {EventFacade} event
         * @protected
         */
        _afterMeetingChange: function(event) {
            var instance = this;

            instance._uiSetMeeting(event.newVal);
        },

        /**
         * Handles `reminder` events.
         *
         * @method _afterReminderChange
         * @param {EventFacade} event
         * @protected
         */
        _afterReminderChange: function(event) {
            var instance = this;

            instance._uiSetReminder(event.newVal);
        },

        /**
         * Handles `repeated` events.
         *
         * @method _afterRepeatedChange
         * @param {EventFacade} event
         * @protected
         */
        _afterRepeatedChange: function(event) {
            var instance = this;

            instance._uiSetRepeated(event.newVal);
        },

        /**
         * Handles `visible` events.
         *
         * @method _afterVisibleChange
         * @param {EventFacade} event
         * @protected
         */
        _afterVisibleChange: function(event) {
            var instance = this;

            instance._uiSetVisible(event.newVal);
        },

        /**
         * Returns `true` if the event ends before the current date.
         *
         * @method _isPastEvent
         * @protected
         * @return {Boolean}
         */
        _isPastEvent: function() {
            var instance = this,
                endDate = instance.get('endDate');

            return (endDate.getTime() < (new Date()).getTime());
        },

        /**
         * Sets the date to the given value.
         *
         * @method _setDate
         * @param {Date | Number} val The value of the property.
         * @protected
         */
        _setDate: function(val) {
            if (isNumber(val)) {
                val = new Date(val);
            }

            return val;
        },

        /**
         * Formats the given date with the given format.
         *
         * @method _formatDate
         * @param {Date} date
         * @param format
         * @protected
         */
        _formatDate: function(date, format) {
            var instance = this;
            var locale = instance.get('locale');

            return A.DataType.Date.format(date, {
                format: format,
                locale: locale
            });
        },

        /**
         * Returns the format for the title date.
         *
         * @method _getTitleDateFormat
         * @param {String|Function} val
         * @return {Object|Function}
         * @protected
         */
        _getTitleDateFormat: function(val) {
            var instance = this;

            if (isString(val)) {
                val = {
                    endDate: val,
                    startDate: val
                };
            }
            else if (isFunction(val)) {
                val = val.call(instance);
            }

            return val;
        },

        /**
         * Sets `allDay` on the UI.
         *
         * @method _uiSetAllDay
         * @param {Boolean} val The value of the property.
         * @protected
         */
        _uiSetAllDay: function(val) {
            var instance = this;

            instance.get('node').toggleClass(CSS_SCHEDULER_EVENT_ALL_DAY, !! val);
        },

        /**
         * Sets `color` on the UI.
         *
         * @method _uiSetColor
         * @param {String} val The value of the property.
         * @protected
         */
        _uiSetColor: function(val) {
            var instance = this;
            var node = instance.get('node');

            var color = Color.toHSL(val);
            var backgroundColor = Color.toArray(color);

            backgroundColor[1] *= instance.get('colorSaturationFactor');
            backgroundColor[2] *= instance.get('colorBrightnessFactor');
            backgroundColor = Color.fromArray(backgroundColor, Color.TYPES.HSL);

            // Some browsers doesn't support HSL colors, convert to RGB for
            // compatibility.
            color = Color.toRGB(color);
            backgroundColor = Color.toRGB(backgroundColor);

            if (node) {
                node.setStyles({
                    backgroundColor: backgroundColor,
                    borderColor: instance.get('borderColor'),
                    borderStyle: instance.get('borderStyle'),
                    borderWidth: instance.get('borderWidth'),
                    color: color
                });
            }
        },

        /**
         * Sets `disabled` on the UI.
         *
         * @method _uiSetDisabled
         * @param {Boolean} val The value of the property.
         * @protected
         */
        _uiSetDisabled: function(val) {
            var instance = this;

            instance.get('node').toggleClass(CSS_SCHEDULER_EVENT_DISABLED, !! val);
        },

        /**
         * Sets `endDate` on the UI.
         *
         * @method _uiSetEndDate
         * @protected
         */
        _uiSetEndDate: function() {
            var instance = this;

            instance.get('node').toggleClass(CSS_SCHEDULER_EVENT_SHORT, instance.getMinutesDuration() <= 30);
        },

        /**
         * Sets `meeting` on the UI.
         *
         * @method _uiSetMeeting
         * @param {Boolean} val The value of the property.
         * @protected
         */
        _uiSetMeeting: function(val) {
            var instance = this;

            instance.get('node').toggleClass(CSS_SCHEDULER_EVENT_MEETING, !! val);
        },

        /**
         * Sets `past` on the UI.
         *
         * @method _uiSetPast
         * @param {Boolean} val The value of the property.
         * @protected
         */
        _uiSetPast: function(val) {
            var instance = this;

            instance.get('node').toggleClass(CSS_SCHEDULER_EVENT_PAST, !! val);
        },

        /**
         * Sets `reminder` on the UI.
         *
         * @method _uiSetReminder
         * @param {Boolean} val The value of the property.
         * @protected
         */
        _uiSetReminder: function(val) {
            var instance = this;

            instance.get('node').toggleClass(CSS_SCHEDULER_EVENT_REMINDER, !! val);
        },

        /**
         * Sets `repeated` on the UI.
         *
         * @method _uiSetRepeated
         * @param {Boolean} val The value of the property.
         * @protected
         */
        _uiSetRepeated: function(val) {
            var instance = this;

            instance.get('node').toggleClass(CSS_SCHEDULER_EVENT_REPEATED, !! val);
        },

        /**
         * Sets `visible` on the UI.
         *
         * @method _uiSetVisible
         * @param {Boolean} val The value of the property.
         * @protected
         */
        _uiSetVisible: function(val) {
            var instance = this;

            instance.get('node').toggleClass(CSS_SCHEDULER_EVENT_HIDDEN, !val);
        }
    }
});

A.SchedulerEvent = SchedulerEvent;
/**
 * The Scheduler Component
 *
 * @module aui-scheduler
 * @submodule aui-scheduler-base-calendar
 */

var Lang = A.Lang,
    isArray = Lang.isArray,
    isBoolean = Lang.isBoolean,
    isString = Lang.isString;

/**
 * A base class for `SchedulerCalendar`.
 *
 * @class A.SchedulerCalendar
 * @extends ModelList
 * @param {Object} config Object literal specifying widget configuration
 *     properties.
 * @constructor
 */
var SchedulerCalendar = A.Base.create('scheduler-calendar', A.ModelList, [], {
    model: A.SchedulerEvent,

    /**
     * Construction logic executed during `SchedulerCalendar` instantiation.
     * Lifecycle.
     *
     * @method initializer
     * @protected
     */
    initializer: function() {
        var instance = this;

        instance.after('colorChange', instance._afterColorChange);
        instance.after('disabledChange', instance._afterDisabledChange);
        instance.after('visibleChange', instance._afterVisibleChange);
        instance.after(['add', 'remove', 'reset'], instance._afterEventsChange);
        instance.on(['remove', 'reset'], instance._onRemoveEvents);

        instance._uiSetEvents(
            instance.toArray()
        );

        instance._setModelsAttrs({
            color: instance.get('color'),
            disabled: instance.get('disabled'),
            visible: instance.get('visible')
        });
    },

    /**
     * Handles `color` events.
     *
     * @method _afterColorChange
     * @param {EventFacade} event
     * @protected
     */
    _afterColorChange: function(event) {
        var instance = this;

        instance._setModelsAttrs({
            color: instance.get('color')
        }, {
            silent: event.silent
        });
    },

    /**
     * Handles `disabled` events.
     *
     * @method _afterDisabledChange
     * @param {EventFacade} event
     * @protected
     */
    _afterDisabledChange: function(event) {
        var instance = this;

        instance._setModelsAttrs({
            disabled: instance.get('disabled')
        }, {
            silent: event.silent
        });
    },

    /**
     * Handles `events` events.
     *
     * @method _afterEventsChange
     * @param {EventFacade} event
     * @protected
     */
    _afterEventsChange: function() {
        var instance = this;

        instance._setModelsAttrs({
            color: instance.get('color'),
            disabled: instance.get('disabled'),
            visible: instance.get('visible')
        }, {
            silent: true
        });

        instance._uiSetEvents(instance.toArray());
    },

    /**
     * Handles `visible` events.
     *
     * @method _afterVisibleChange
     * @param {EventFacade} event
     * @protected
     */
    _afterVisibleChange: function(event) {
        var instance = this;

        instance._setModelsAttrs({
            visible: instance.get('visible')
        }, {
            silent: event.silent
        });
    },

    /**
     * Handles `remove` events.
     *
     * @method _onRemoveEvents
     * @param {EventFacade} event
     * @protected
     */
    _onRemoveEvents: function() {
        var instance = this;
        var scheduler = instance.get('scheduler');

        if (scheduler) {
            scheduler.removeEvents(instance);
        }
    },

    /**
     * Sets the model attributes for the base calendar.
     *
     * @method _setModelsAttrs
     * @param {Object} attrMap
     * @param {Object} options Zero or more options.
     * @protected
     */
    _setModelsAttrs: function(attrMap, options) {
        var instance = this;

        instance.each(function(schedulerEvent) {
            schedulerEvent.setAttrs(attrMap, options);
        });
    },

    /**
     * Sets the `events` on the UI.
     *
     * @method _uiSetEvents
     * @param {Array | ModelList | Model | SchedulerEvent} val The value of the
     *     property.
     * @protected
     */
    _uiSetEvents: function(val) {
        var instance = this;
        var scheduler = instance.get('scheduler');

        if (scheduler) {
            scheduler.addEvents(val);
            scheduler.syncEventsUI();
        }
    }
}, {

    /**
     * Static property used to define the default attribute
     * configuration for the `SchedulerCalendar`.
     *
     * @property ATTRS
     * @type {Object}
     * @static
     */
    ATTRS: {

        /**
         * Contains the `color` of the scheduler calendar.
         *
         * @attribute color
         * @type {String}
         */
        color: {
            valueFn: function() {
                var instance = this;
                var palette = instance.get('palette');
                var randomIndex = Math.ceil(Math.random() * palette.length) - 1;

                return palette[randomIndex];
            },
            validator: isString
        },

        /**
         * Determines if the calender is enabled.
         *
         * @attribute disabled
         * @default false
         * @type {Boolean}
         */
        disabled: {
            value: false,
            validator: isBoolean
        },

        /**
         * Determines the name for this calendar.
         *
         * @attribute name
         * @default '(no name)'
         * @type {String}
         */
        name: {
            value: '(no name)',
            validator: isString
        },

        /**
         * Contains a list of colors for the calendar.
         *
         * @attribute palette
         * @type {Array}
         */
        palette: {
            value: ['#d93636', '#e63973', '#b22eb3', '#6e36d9', '#2d70b3', '#376cd9', '#25998c', '#249960',
                '#24992e', '#6b9926', '#999926', '#a68f29', '#b3782d', '#bf6030', '#bf6060', '#997399', '#617181',
                '#6b7a99', '#548c85', '#747446', '#997e5c', '#b34d1b', '#993d48', '#802d70'],
            validator: isArray
        },

        /**
         * Contains this `SchedulerCalendar`'s `SchedulerBase' object.
         *
         * @attribute scheduler
         * @type {A.SchedulerBase}
         */
        scheduler: {},

        /**
         * Indicates whether the calendar is visible.
         *
         * @attribute visible
         * @default true
         * @type {Boolean}
         */
        visible: {
            value: true,
            validator: isBoolean
        }
    }
});

A.SchedulerCalendar = SchedulerCalendar;
/**
 * The Scheduler Component
 *
 * @module aui-scheduler
 * @submodule aui-scheduler-base
 */

var CSS_SCHEDULER_VIEW_ = A.getClassName('scheduler-base', 'view', ''),
    CSS_SCHEDULER_VIEW_SELECTED = A.getClassName('active'),

    DateMath = A.DataType.DateMath,
    Lang = A.Lang,
    isArray = Lang.isArray,
    isDate = Lang.isDate,
    isFunction = Lang.isFunction,
    isNumber = Lang.isNumber,
    WidgetStdMod = A.WidgetStdMod,

    isModelList = function(val) {
        return val instanceof A.ModelList;
    },

    isSchedulerView = function(val) {
        return val instanceof A.SchedulerView;
    },

    getCN = A.getClassName,

    CSS_SCHEDULER_NAV = getCN('scheduler-base', 'nav'),
    CSS_SCHEDULER_CONTROLS = getCN('scheduler-base', 'controls'),
    CSS_SCHEDULER_HD = getCN('scheduler-base', 'hd'),
    CSS_SCHEDULER_ICON_NEXT = getCN('scheduler-base', 'icon', 'next'),
    CSS_SCHEDULER_ICON_PREV = getCN('scheduler-base', 'icon', 'prev'),
    CSS_SCHEDULER_TODAY = getCN('scheduler-base', 'today'),
    CSS_SCHEDULER_VIEW = getCN('scheduler-base', 'view'),
    CSS_SCHEDULER_VIEW_ = getCN('scheduler-base', 'view', ''),
    CSS_SCHEDULER_VIEW_DATE = getCN('scheduler-base', 'view', 'date'),
    CSS_BTN = getCN('btn'),
    CSS_BTN_DEFAULT = getCN('btn', 'default'),
    CSS_ICON = getCN('glyphicon'),
    CSS_ICON_CHEVRON_RIGHT = getCN('glyphicon', 'chevron', 'right'),
    CSS_ICON_CHEVRON_LEFT = getCN('glyphicon', 'chevron', 'left'),
    CSS_SCHEDULER_VIEWS = getCN('scheduler-base', 'views'),

    TPL_SCHEDULER_CONTROLS = '<div class="col col-lg-7 col-md-7 col-sm-7 ' + CSS_SCHEDULER_CONTROLS + '"></div>',
    TPL_SCHEDULER_HD = '<div class="row ' + CSS_SCHEDULER_HD + '"></div>',
    TPL_SCHEDULER_ICON_NEXT = '<button type="button" class="' + [CSS_ICON, CSS_SCHEDULER_ICON_NEXT, CSS_BTN,
        CSS_BTN_DEFAULT].join(' ') + '"><span class="' + CSS_ICON_CHEVRON_RIGHT + '"></span></button>',
    TPL_SCHEDULER_ICON_PREV = '<button type="button" class="' + [CSS_ICON, CSS_SCHEDULER_ICON_PREV, CSS_BTN,
        CSS_BTN_DEFAULT].join(' ') + '"><span class="' + CSS_ICON_CHEVRON_LEFT + '"></span></button>',
    TPL_SCHEDULER_NAV = '<div class="btn-group"></div>',
    TPL_SCHEDULER_TODAY = '<button type="button" class="' + [CSS_SCHEDULER_TODAY, CSS_BTN, CSS_BTN_DEFAULT].join(' ') +
        '">{today}</button>',
    TPL_SCHEDULER_VIEW = '<button type="button" class="' + [CSS_SCHEDULER_VIEW, CSS_SCHEDULER_VIEW_].join(' ') +
        '{name}" data-view-name="{name}">{label}</button>',
    TPL_SCHEDULER_VIEW_DATE = '<span class="' + CSS_SCHEDULER_VIEW_DATE + '"></span>',
    TPL_SCHEDULER_VIEWS = '<div class="col col-lg-5 col-md-5 col-sm-5 ' + CSS_SCHEDULER_VIEWS + '"></div>';

/**
 * A base class for `SchedulerEvents`.
 *
 * @class A.SchedulerEvents
 * @extends ModelList
 * @param {Object} config Object literal specifying widget configuration
 *     properties.
 * @constructor
 */
A.SchedulerEvents = A.Base.create('scheduler-events', A.ModelList, [], {

    /**
     * Compares the inputs of a start and end date to see if adding `1` to the
     * start date time is larger than the difference between start and end date
     * times.
     *
     * @method comparator
     * @param {Object} model
     * @return {Number}
     */
    comparator: function(model) {
        var startDateTime = model.get('startDate'),
            endDateTime = model.get('endDate');

        return startDateTime + 1 / (endDateTime - startDateTime);
    },

    model: A.SchedulerEvent
}, {

    /**
     * Static property used to define the default attribute
     * configuration for the `SchedulerEvents`.
     *
     * @property ATTRS
     * @type {Object}
     * @static
     */
    ATTRS: {
        scheduler: {}
    }
});

/**
 * A base class for `SchedulerEventSupport`.
 *
 * @class A.SchedulerEventSupport
 * @param {Object} config Object literal specifying widget configuration
 *     properties.
 * @constructor
 */
var SchedulerEventSupport = function() {};

/**
 * Static property used to define the default attribute
 * configuration for the `SchedulerEventSupport`.
 *
 * @property ATTRS
 * @type {Object}
 * @static
 */
SchedulerEventSupport.ATTRS = {};

A.mix(SchedulerEventSupport.prototype, {
    calendarModel: A.SchedulerCalendar,

    eventModel: A.SchedulerEvent,

    eventsModel: A.SchedulerEvents,

    /**
     * Construction logic executed during `SchedulerEventSupport` instantiation.
     * Lifecycle.
     *
     * @method initializer
     * @param config
     * @protected
     */
    initializer: function(config) {
        var instance = this;

        instance._events = new instance.eventsModel({
            after: {
                add: A.bind(instance._afterAddEvent, instance)
            },
            bubbleTargets: instance,
            scheduler: instance
        });

        instance.addEvents(config.items || config.events);
    },

    /**
     * Adds and returns the collection of events for this `Scheduler`.
     *
     * @method addEvents
     * @param {Array | ModelList | Model | A.SchedulerEvent} models
     * @return {A.SchedulerEvents}
     */
    addEvents: function(models) {
        var instance = this,
            events = instance._toSchedulerEvents(models);

        return instance._events.add(events);
    },

    /**
     * Applies a `function` to the collection of `Scheduler` events.
     *
     * @method eachEvent
     * @param {Function} fn
     * @return {A.SchedulerEvents}
     */
    eachEvent: function(fn) {
        var instance = this;

        return instance._events.each(fn);
    },

    /**
     * Deletes each event in the collection of `Scheduler` events.
     *
     * @method flushEvents
     */
    flushEvents: function() {
        var instance = this;

        instance._events.each(function(evt) {
            delete evt._filtered;
        });
    },

    /**
     * Returns the event by matching it's `clientId`.
     *
     * @method getEventByClientId
     * @param {String} clientId
     * @return {Object}
     */
    getEventByClientId: function(clientId) {
        var instance = this;

        return instance._events.getByClientId(clientId);
    },

    /**
     * Gets a collection of events.
     *
     * @method getEvents
     * @param {Function} filterFn (optional) Filters `events` and returns a list
     *     of events.
     * @return {Array}
     */
    getEvents: function(filterFn) {
        var instance = this,
            events = instance._events;

        // TODO: Check why the items are not being sorted on add
        events.sort({
            silent: true
        });

        if (filterFn) {
            events = events.filter(filterFn);
        }
        else {
            events = events.toArray();
        }

        return events;
    },

    /**
     * Gets a collection of events within a given day. It will filter
     * overlapping events by default unless `includeOverlap` is true.
     *
     * @method getEventsByDay
     * @param {Date} date
     * @param {Boolean} includeOverlap
     * @return {Array}
     */
    getEventsByDay: function(date, includeOverlap) {
        var instance = this;

        date = DateMath.safeClearTime(date);

        return instance.getEvents(function(evt) {
            return DateMath.compare(evt.getClearStartDate(), date) ||
                (includeOverlap && DateMath.compare(evt.getClearEndDate(), date));
        });
    },

    /**
     * Returns the list of all events that intersect with a given date. Events
     * that are not visible are not included in this list.
     *
     * @method getIntersectEvents
     * @param {Date} date
     * @return {Array}
     */
    getIntersectEvents: function(date) {
        var instance = this;

        date = DateMath.safeClearTime(date);

        return instance.getEvents(function(evt) {
            var startDate = evt.getClearStartDate();
            var endDate = evt.getClearEndDate();

            return (evt.get('visible') &&
                (DateMath.compare(date, startDate) ||
                    DateMath.compare(date, endDate) ||
                    DateMath.between(date, startDate, endDate)));
        });
    },

    /**
     * Removes given `SchedulerEvents` from the scheduler.
     *
     * @method removeEvents
     * @param {Array | ModelList | Model | A.SchedulerEvent} models
     * @return {A.SchedulerEvents} Removed SchedulerEvents.
     */
    removeEvents: function(models) {
        var instance = this,
            events = instance._toSchedulerEvents(models);

        return instance._events.remove(events);
    },

    /**
     * Completely replaces all `SchedulerEvents` in the list with the given
     * `SchedulerEvents`.
     *
     * @method resetEvents
     * @param {Array | ModelList | Model | A.SchedulerEvent} models
     * @return {A.SchedulerEvents} Reset SchedulerEvents.
     */
    resetEvents: function(models) {
        var instance = this,
            events = instance._toSchedulerEvents(models);

        return instance._events.reset(events);
    },

    /**
     * Handles `add` events.
     *
     * @method _afterAddEvent
     * @param {EventFacade} event
     * @protected
     */
    _afterAddEvent: function(event) {
        var instance = this;

        event.model.set('scheduler', instance);
    },

    /**
     * Converts given values to `SchedulerEvents`.
     *
     * @method _toSchedulerEvents
     * @param {Array | ModelList | Model | A.SchedulerEvent} values Values to be
     *     used or converted to `SchedulerEvent` instances.
     * @return {A.SchedulerEvents} The values converted to `SchedulerEvents`.
     * @protected
     */
    _toSchedulerEvents: function(values) {
        var instance = this,
            events = [];

        if (isModelList(values)) {
            events = values.toArray();
            values.set('scheduler', instance);
        }
        else if (isArray(values)) {
            A.Array.each(values, function(value) {
                if (isModelList(value)) {
                    events = events.concat(value.toArray());
                    value.set('scheduler', instance);
                }
                else {
                    events.push(value);
                }
            });
        }
        else {
            events = values;
        }

        return events;
    }
});

A.SchedulerEventSupport = SchedulerEventSupport;

/**
 * A base class for `SchedulerBase`.
 *
 * @class A.SchedulerBase
 * @extends A.Component
 * @uses A.SchedulerEventSupport, WidgetStdMod
 * @param {Object} config Object literal specifying widget configuration
 *     properties.
 * @constructor
 * @include http://alloyui.com/examples/scheduler/basic-markup.html
 * @include http://alloyui.com/examples/scheduler/basic.js
 */
var SchedulerBase = A.Component.create({

    /**
     * Static property provides a string to identify the class.
     *
     * @property NAME
     * @type {String}
     * @static
     */
    NAME: 'scheduler-base',

    /**
     * Static property used to define the default attribute
     * configuration for the `SchedulerBase`.
     *
     * @property ATTRS
     * @type {Object}
     * @static
     */
    ATTRS: {

        /**
         * Contains the active view.
         *
         * @attribute activeView
         * @type {A.SchedulerView}
         */
        activeView: {
            validator: isSchedulerView
        },

        /**
         * Contains the date corresponding to the current date which is the
         * value of the date set on the user's computer.
         *
         * @attribute date
         * @type {Date}
         */
        date: {
            value: new Date(),
            validator: isDate
        },

        /**
         * Contains the `Scheduler`'s `SchedulerEventRecorder` instance.
         *
         * @attribute eventRecorder
         * @type {A.SchedulerEventRecorder}
         */
        eventRecorder: {
            setter: '_setEventRecorder'
        },

        /**
         * Contains the collection of strings used to label elements of the UI.
         *
         * @attribute strings
         * @type {Object}
         */
        strings: {
            value: {
                agenda: 'Agenda',
                day: 'Day',
                month: 'Month',
                today: 'Today',
                week: 'Week',
                year: 'Year'
            }
        },

        /**
         * Contains the function that formats the navigation date.
         *
         * @attribute navigationDateFormatter
         * @default %A - %d %b %Y
         * @type {Function}
         */
        navigationDateFormatter: {
            value: function(date) {
                var instance = this;

                return A.DataType.Date.format(
                    date, {
                        format: '%B %d, %Y',
                        locale: instance.get('locale')
                    }
                );
            },
            validator: isFunction
        },

        /**
         * Contains the list of views belonging to this `Scheduler`.
         *
         * @attribute views
         * @default []
         * @type {Array}
         */
        views: {
            setter: '_setViews',
            value: []
        },

        /**
         * Contains the `Scheduler`'s current date. If there is an `activeView`,
         * this attribute will contain the `activeView`'s current date.
         *
         * @attribute viewDate
         * @type {Date}
         * @readOnly
         */
        viewDate: {
            getter: '_getViewDate',
            readOnly: true
        },

        /**
         * First day of the week: Sunday is 0, Monday is 1.
         *
         * @attribute firstDayOfWeek
         * @default 0
         * @type {Number}
         */
        firstDayOfWeek: {
            value: 0,
            validator: isNumber
        },

        /*
         * HTML_PARSER attributes
         */
        controlsNode: {
            valueFn: function() {
                return A.Node.create(TPL_SCHEDULER_CONTROLS);
            }
        },

        viewDateNode: {
            valueFn: function() {
                return A.Node.create(TPL_SCHEDULER_VIEW_DATE);
            }
        },

        headerNode: {
            valueFn: function() {
                return A.Node.create(TPL_SCHEDULER_HD);
            }
        },

        iconNextNode: {
            valueFn: function() {
                return A.Node.create(TPL_SCHEDULER_ICON_NEXT);
            }
        },

        iconPrevNode: {
            valueFn: function() {
                return A.Node.create(TPL_SCHEDULER_ICON_PREV);
            }
        },

        navNode: {
            valueFn: function() {
                return A.Node.create(TPL_SCHEDULER_NAV);
            }
        },

        /**
         * Today date representation. This option allows the developer to
         * specify the date he wants to be used as the today date.
         *
         * @attribute todayDate
         * @default new Date()
         * @type {Date}
         */
        todayDate: {
            value: new Date(),
            validator: isDate
        },

        todayNode: {
            valueFn: function() {
                return A.Node.create(
                    this._processTemplate(TPL_SCHEDULER_TODAY)
                );
            }
        },

        viewsNode: {
            valueFn: function() {
                return A.Node.create(TPL_SCHEDULER_VIEWS);
            }
        }
    },

    /**
     * Contains an object hash, defining how attribute values are to be parsed
     * from markup contained in the widget's bounding box.
     *
     * @property HTML_PARSER
     * @type {Object}
     * @static
     */
    HTML_PARSER: {
        controlsNode: '.' + CSS_SCHEDULER_CONTROLS,
        viewDateNode: '.' + CSS_SCHEDULER_VIEW_DATE,
        headerNode: '.' + CSS_SCHEDULER_HD,
        iconNextNode: '.' + CSS_SCHEDULER_ICON_NEXT,
        iconPrevNode: '.' + CSS_SCHEDULER_ICON_PREV,
        navNode: '.' + CSS_SCHEDULER_NAV,
        todayNode: '.' + CSS_SCHEDULER_TODAY,
        viewsNode: '.' + CSS_SCHEDULER_VIEWS
    },

    /**
     * Static property used to define the UI attributes.
     *
     * @property UI_ATTRS
     * @type {Array}
     * @static
     */
    UI_ATTRS: ['date', 'activeView'],

    /**
     * Static property used to define the augmented classes.
     *
     * @property AUGMENTS
     * @type {Array}
     * @static
     */
    AUGMENTS: [A.SchedulerEventSupport, A.WidgetStdMod],

    prototype: {
        viewStack: null,

        /**
         * Construction logic executed during `SchedulerBase` instantiation.
         * Lifecycle.
         *
         * @method initializer
         * @protected
         */
        initializer: function() {
            var instance = this;

            instance.viewStack = {};

            instance.controlsNode = instance.get('controlsNode');
            instance.viewDateNode = instance.get('viewDateNode');
            instance.header = instance.get('headerNode');
            instance.iconNextNode = instance.get('iconNextNode');
            instance.iconPrevNode = instance.get('iconPrevNode');
            instance.navNode = instance.get('navNode');
            instance.todayNode = instance.get('todayNode');
            instance.viewsNode = instance.get('viewsNode');

            instance.after({
                activeViewChange: instance._afterActiveViewChange,
                render: instance._afterRender
            });
        },

        /**
         * Binds the events on the `SchedulerBase` UI. Lifecycle.
         *
         * @method bindUI
         * @protected
         */
        bindUI: function() {
            var instance = this;

            instance._bindDelegate();
        },

        /**
         * Syncs the `SchedulerBase` UI. Lifecycle.
         *
         * @method syncUI
         * @protected
         */
        syncUI: function() {
            var instance = this;

            instance.syncStdContent();
        },

        /**
         * Returns the `SchedulerView` that belongs to a given name.
         *
         * @method getViewByName
         * @param {String} name
         * @return {A.SchedulerView}
         */
        getViewByName: function(name) {
            var instance = this;

            return instance.viewStack[name];
        },

        /**
         * Returns this `Scheduler`'s `strings` attribute value.
         *
         * @method getStrings
         * @return {String}
         */
        getStrings: function() {
            var instance = this;

            return instance.get('strings');
        },

        /**
         * Returns the string that matches the `key` type.
         *
         * @method getString
         * @param {String} key
         * @return {String}
         */
        getString: function(key) {
            var instance = this;

            return instance.getStrings()[key];
        },

        /**
         * Renders the `SchedulerView` based on the given `view` parameter
         * under `instance.bodyNode`.
         *
         * @method renderView
         * @param {A.SchedulerView} view
         */
        renderView: function(view) {
            var instance = this;

            if (view) {
                view.show();

                if (!view.get('rendered')) {
                    if (!instance.bodyNode) {
                        instance.setStdModContent(WidgetStdMod.BODY, '');
                    }

                    view.render(instance.bodyNode);
                }
            }
        },

        /**
         * Plots all events for the current view.
         *
         * @method plotViewEvents
         * @param view
         */
        plotViewEvents: function(view) {
            var instance = this;

            view.plotEvents(
                instance.getEvents()
            );
        },

        /**
         * Plots the `activeView` events value.
         *
         * @method syncEventsUI
         */
        syncEventsUI: function() {
            var instance = this,
                activeView = instance.get('activeView');

            if (activeView) {
                instance.plotViewEvents(activeView);
            }
        },

        /**
         * Renders a new `ButtonGroup` and attaches it to the `Scheduler`
         * instances as a property `instance.buttonGroup`. It is rendered under
         * the `Scheduler` instance's `viewsNode`.
         *
         * @method renderButtonGroup
         */
        renderButtonGroup: function() {
            var instance = this;

            instance.buttonGroup = new A.ButtonGroup({
                boundingBox: instance.viewsNode,
                on: {
                    selectionChange: A.bind(instance._onButtonGroupSelectionChange, instance)
                }
            }).render();
        },

        /**
         * Sync `SchedulerBase` StdContent.
         *
         * @method syncStdContent
         */
        syncStdContent: function() {
            var instance = this;
            var views = instance.get('views');

            instance.navNode.append(instance.iconPrevNode);
            instance.navNode.append(instance.iconNextNode);

            instance.controlsNode.append(instance.todayNode);
            instance.controlsNode.append(instance.navNode);
            instance.controlsNode.append(instance.viewDateNode);

            A.Array.each(views, function(view) {
                instance.viewsNode.append(instance._createViewTriggerNode(view));
            });

            instance.header.append(instance.controlsNode);
            instance.header.append(instance.viewsNode);

            instance.setStdModContent(WidgetStdMod.HEADER, instance.header.getDOM());
        },

        /**
         * Handles `activeView` events.
         *
         * @method _afterActiveViewChange
         * @param {EventFacade} event
         * @protected
         */
        _afterActiveViewChange: function(event) {
            var instance = this;

            if (instance.get('rendered')) {
                var activeView = event.newVal;
                var lastActiveView = event.prevVal;

                if (lastActiveView) {
                    lastActiveView.hide();
                }

                instance.renderView(activeView);

                var eventRecorder = instance.get('eventRecorder');

                if (eventRecorder) {
                    eventRecorder.hidePopover();
                }

                instance._uiSetDate(instance.get('date'));
            }
        },

        /**
         * Handles `render` events.
         *
         * @method _afterRender
         * @param {EventFacade} event
         * @protected
         */
        _afterRender: function() {
            var instance = this,
                activeView = instance.get('activeView');

            instance.renderView(activeView);
            instance.renderButtonGroup();

            instance._uiSetDate(instance.get('date'));
            instance._uiSetActiveView(activeView);
        },

        /**
         * Binds click events to an event delegate.
         *
         * @method _bindDelegate
         * @protected
         */
        _bindDelegate: function() {
            var instance = this;

            instance.controlsNode.delegate('click', instance._onClickPrevIcon, '.' + CSS_SCHEDULER_ICON_PREV,
                instance);
            instance.controlsNode.delegate('click', instance._onClickNextIcon, '.' + CSS_SCHEDULER_ICON_NEXT,
                instance);
            instance.controlsNode.delegate('click', instance._onClickToday, '.' + CSS_SCHEDULER_TODAY, instance);
        },

        /**
         * Creates the given `SchedulerView`'s trigger `Node`.
         *
         * @method _createViewTriggerNode
         * @param {A.SchedulerView} view
         * @protected
         * @return {Node} The `SchedulerView`'s trigger `Node`.
         */
        _createViewTriggerNode: function(view) {
            var instance = this;

            if (!view.get('triggerNode')) {
                var name = view.get('name');

                view.set(
                    'triggerNode',
                    A.Node.create(
                        A.Lang.sub(TPL_SCHEDULER_VIEW, {
                            name: name,
                            label: (instance.getString(name) || name)
                        })
                    )
                );
            }

            return view.get('triggerNode');
        },

        /**
         * Returns the `SchedulerView`'s `date`.
         *
         * @method _getViewDate
         * @protected
         * @return {Date} The `SchedulerView`'s `date`.
         */
        _getViewDate: function() {
            var instance = this,
                date = instance.get('date'),
                activeView = instance.get('activeView');

            if (activeView) {
                date = activeView.getAdjustedViewDate(date);
            }

            return date;
        },

        /**
         * Handles `clickToday` events.
         *
         * @method _onClickToday
         * @param {EventFacade} event
         * @protected
         */
        _onClickToday: function(event) {
            var instance = this,
                activeView = instance.get('activeView');

            if (activeView) {
                instance.set('date', instance.get('todayDate'));
            }

            event.preventDefault();
        },

        /**
         * Handles `clickNextIcon` events.
         *
         * @method _onClickNextIcon
         * @param {EventFacade} event
         * @protected
         */
        _onClickNextIcon: function(event) {
            var instance = this,
                activeView = instance.get('activeView');

            if (activeView) {
                instance.set('date', activeView.get('nextDate'));
            }

            event.preventDefault();
        },

        /**
         * Handles `clickPrevIcon` events.
         *
         * @method _onClickPrevIcon
         * @param {EventFacade} event
         * @protected
         */
        _onClickPrevIcon: function(event) {
            var instance = this,
                activeView = instance.get('activeView');

            if (activeView) {
                instance.set('date', activeView.get('prevDate'));
            }

            event.preventDefault();
        },

        /**
         * Handles `buttonGroupSelectionChange` events.
         *
         * @method _onButtonGroupSelectionChange
         * @param {EventFacade} event
         * @protected
         */
        _onButtonGroupSelectionChange: function(event) {
            var instance = this,
                viewName = event.originEvent.target.attr('data-view-name');

            instance.set('activeView', instance.getViewByName(viewName));

            event.preventDefault();
        },

        /**
         * Applies substitution to a given template.
         *
         * @method _processTemplate
         * @param {String} tpl
         * @protected
         */
        _processTemplate: function(tpl) {
            var instance = this;

            return A.Lang.sub(tpl, instance.getStrings());
        },

        /**
         * Replaces this `SchedulerBase`'s `eventRecorder` with the given
         * `eventRecorder` value.
         *
         * @method _setEventRecorder
         * @param {A.SchedulerEventRecorder} val A `SchedulerEventRecorder`
         *     instance.
         * @protected
         */
        _setEventRecorder: function(val) {
            var instance = this;

            if (val) {
                val.setAttrs({
                    scheduler: instance
                }, {
                    silent: true
                });

                val.addTarget(instance);
            }
        },

        /**
         * Replaces this `SchedulerBase`'s `views` with the given `views` value.
         *
         * @method _setViews
         * @param {Array} val Array of `SchedulerView` instances.
         * @protected
         * @return {Array} The replaced `SchedulerBase`'s `views`.
         */
        _setViews: function(val) {
            var instance = this;
            var views = [];

            A.Array.each(val, function(view) {
                if (isSchedulerView(view) && !view.get('rendered')) {
                    view.setAttrs({
                        scheduler: instance
                    });

                    views.push(view);

                    instance.viewStack[view.get('name')] = view;
                }
            });

            if (!instance.get('activeView')) {
                instance.set('activeView', val[0]);
            }

            return views;
        },

        /**
         * Sets `activeView` on the UI.
         *
         * @method _uiSetActiveView
         * @param {SchedulerView} val A `SchedulerView` instance.
         * @protected
         */
        _uiSetActiveView: function(val) {
            var instance = this;

            if (val) {
                var activeView = val.get('name'),
                    activeNav = instance.viewsNode.one('.' + CSS_SCHEDULER_VIEW_ + activeView);

                if (activeNav) {
                    instance.viewsNode.all('button').removeClass(CSS_SCHEDULER_VIEW_SELECTED);
                    activeNav.addClass(CSS_SCHEDULER_VIEW_SELECTED);
                }
            }
        },

        /**
         * Sets `date` on the UI.
         *
         * @method _uiSetDate
         * @param {Date} date
         * @protected
         */
        _uiSetDate: function(date) {
            var instance = this;

            var formatter = instance.get('navigationDateFormatter');
            var navigationTitle = formatter.call(instance, date);

            if (instance.get('rendered')) {
                var activeView = instance.get('activeView');

                if (activeView) {
                    activeView._uiSetDate(date);

                    formatter = activeView.get('navigationDateFormatter');
                    navigationTitle = formatter.call(activeView, date);
                }

                instance.viewDateNode.html(navigationTitle);

                instance.syncEventsUI();
            }
        }
    }
});

A.Scheduler = SchedulerBase;
/**
 * Contains the Scheduler Component
 *
 * @module aui-scheduler
 * @submodule aui-scheduler-base-view
 */

var Lang = A.Lang,
    isBoolean = Lang.isBoolean,
    isFunction = Lang.isFunction,
    isString = Lang.isString,

    DateMath = A.DataType.DateMath,

    CSS_SCHEDULER_VIEW_NOSCROLL = A.getClassName('scheduler-view', 'noscroll'),
    CSS_SCHEDULER_VIEW_SCROLLABLE = A.getClassName('scheduler-view', 'scrollable');

/**
 * A base class for `SchedulerView`.
 *
 * @class A.SchedulerView
 * @extends A.Component
 * @uses WidgetStdMod
 * @param {Object} config Object literal specifying widget configuration
 *     properties.
 * @constructor
 */
var SchedulerView = A.Component.create({

    /**
     * Static property provides a string to identify the class.
     *
     * @property NAME
     * @type {String}
     * @static
     */
    NAME: 'scheduler-view',

    /**
     * Static property used to define the augmented classes.
     *
     * @property AUGMENTS
     * @type {Array}
     * @static
     */
    AUGMENTS: [A.WidgetStdMod],

    /**
     * Static property used to define the default attribute
     * configuration for the `SchedulerView`.
     *
     * @property ATTRS
     * @type {Object}
     * @static
     */
    ATTRS: {

        /**
         * Determines the content of Scheduler view's body section.
         *
         * @attribute bodyContent
         * @default ''
         * @type {String}
         */
        bodyContent: {
            value: ''
        },

        /**
         * Applies a filter to `SchedulerEvent`s.
         *
         * @attribute filterFn
         * @type {Function} The function to filter a `SchedulerEvent`.
         */
        filterFn: {
            validator: isFunction,
            value: function() {
                return true;
            }
        },

        /**
         * Contains the height of a `SchedulerView` in pixels.
         *
         * @attribute height
         * @default 600
         * @type {Number}
         */
        height: {
            value: 600
        },

        /**
         * Indicates whether this `SchedulerView` should use international
         * standard time.
         *
         * @attribute isoTime
         * @default false
         * @type {Boolean}
         */
        isoTime: {
            value: false,
            validator: isBoolean
        },

        /**
         * Determines the name for this view.
         *
         * @attribute name
         * @default ''
         * @type {String}
         */
        name: {
            value: '',
            validator: isString
        },

        /**
         * Contains the function that formats the navigation date.
         *
         * @attribute navigationDateFormatter
         * @default %A - %d %b %Y
         * @type {Function}
         */
        navigationDateFormatter: {
            value: function(date) {
                var instance = this;
                var scheduler = instance.get('scheduler');

                return A.DataType.Date.format(date, {
                    format: '%A, %d %B, %Y',
                    locale: scheduler.get('locale')
                });
            },
            validator: isFunction
        },

        /**
         * Contains the next `Date` in the `SchedulerView`.
         *
         * @attribute nextDate
         * @type {Date}
         * @readOnly
         */
        nextDate: {
            getter: 'getNextDate',
            readOnly: true
        },

        /**
         * Contains the previous `Date` in the `SchedulerView`.
         *
         * @attribute prevDate
         * @type {Date}
         * @readOnly
         */
        prevDate: {
            getter: 'getPrevDate',
            readOnly: true
        },

        /**
         * Contains this `SchedulerView`'s `SchedulerBase' object.
         *
         * @attribute scheduler
         * @type {A.SchedulerBase}
         */
        scheduler: {
            lazyAdd: false,
            setter: '_setScheduler'
        },

        /**
         * Indicates whether this `SchedulerView` is scrollable.
         *
         * @attribute scrollable
         * @default true
         * @type {Boolean}
         */
        scrollable: {
            value: true,
            validator: isBoolean
        },

        /**
         * Contains the `Node` that triggers.
         *
         * @attribute triggerNode
         */
        triggerNode: {
            setter: A.one
        },

        /**
         * Indicates whether the calendar is visible.
         *
         * @attribute visible
         * @default false
         * @type {Boolean}
         */
        visible: {
            value: false
        }
    },

    /**
     * Static property used to define the attributes
     * for the bindUI lifecycle phase.
     *
     * @property BIND_UI_ATTRS
     * @type {Array}
     * @static
     */
    BIND_UI_ATTRS: ['scrollable'],

    prototype: {

        /**
         * Construction logic executed during `SchedulerView` instantiation.
         * Lifecycle.
         *
         * @method initializer
         * @protected
         */
        initializer: function() {
            var instance = this;

            instance.after('render', instance._afterRender);
        },

        /**
         * Syncs the `SchedulerView` UI. Lifecycle.
         *
         * @method syncUI
         * @protected
         */
        syncUI: function() {
            var instance = this;

            instance.syncStdContent();
        },

        /**
         * Returns a date value of the date with its time adjusted
         * to midnight.
         *
         * @method getAdjustedViewDate
         * @param {Date} date The value of the property.
         * @return {Date}
         */
        getAdjustedViewDate: function(date) {
            return DateMath.toMidnight(date);
        },

        /**
         * Removes all data from `evtDateStack`, `evtRenderedStack` and
         * `rowDateTableStack`.
         *
         * @method flushViewCache
         */
        flushViewCache: function() {},

        /**
         * Returns the value of the date that follows the view's current
         * date.
         *
         * @method getNextDate
         * @return {Date}
         */
        getNextDate: function() {},

        /**
         * Returns the value of the date that preceeds the view's current
         * date.
         *
         * @method getPrevDate
         * @return {Date}
         */
        getPrevDate: function() {},

        /**
         * Returns the value of the current date.
         *
         * @method getToday
         * @return {Date}
         */
        getToday: function() {
            return DateMath.clearTime(new Date());
        },

        /**
         * Returns a clone of a given `date` that will adjust to the `maxDate`
         * if it occurs after `maxDate`.
         *
         * @method limitDate
         * @param {Date} date
         * @param {Date} maxDate
         * @return {Date}
         */
        limitDate: function(date, maxDate) {
            if (DateMath.after(date, maxDate)) {
                date = DateMath.clone(maxDate);
            }

            return date;
        },

        /**
         * Plots all events in the current view.
         *
         * @method plotEvents
         */
        plotEvents: function() {},

        /**
         * Sync `SchedulerView` StdContent.
         *
         * @method syncStdContent
         */
        syncStdContent: function() {},

        /**
         * Sync `event` on the UI.
         *
         * @method syncEventUI
         * @param {A.SchedulerEvent} evt A `Scheduler` event.
         */
        syncEventUI: function() {},

        /**
         * Sets `date` on the UI.
         *
         * @method _uiSetDate
         * @protected
         */
        _uiSetDate: function() {},

        /**
         * Handles `render` events.
         *
         * @method _afterRender
         * @param {EventFacade} event
         * @protected
         */
        _afterRender: function() {
            var instance = this;

            instance._uiSetScrollable(
                instance.get('scrollable')
            );
        },

        /**
         * Sets this `SchedulerView`'s `scheduler` object to the given value.
         *
         * @method _setScheduler
         * @param {Scheduler} val A `Scheduler` instance.
         * @protected
         * @return {Object}
         */
        _setScheduler: function(val) {
            var instance = this;
            var scheduler = instance.get('scheduler');

            if (scheduler) {
                instance.removeTarget(scheduler);
            }

            if (val) {
                instance.addTarget(val);

                val.after(['*:add', '*:remove', '*:reset'], A.bind(instance.flushViewCache, instance));
            }

            return val;
        },

        /**
         * Sets `scrollable` on the UI.
         *
         * @method _uiSetScrollable
         * @param {Boolean} val The value of the property.
         * @protected
         */
        _uiSetScrollable: function(val) {
            var instance = this;
            var bodyNode = instance.bodyNode;

            if (bodyNode) {
                bodyNode.toggleClass(CSS_SCHEDULER_VIEW_SCROLLABLE, val);
                bodyNode.toggleClass(CSS_SCHEDULER_VIEW_NOSCROLL, !val);
            }
        }
    }
});

A.SchedulerView = SchedulerView;


}, '2.5.0', {
    "requires": [
        "model",
        "model-list",
        "widget-stdmod",
        "color-hsl",
        "aui-event-base",
        "aui-node-base",
        "aui-component",
        "aui-datatype",
        "aui-button"
    ],
    "skinnable": true
});
