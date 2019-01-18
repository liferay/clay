import classnames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, {useMemo} from 'react';

/**
 * @param {Object} param
 * @return {React.createElement}
 */
function InputDate({
	ariaLabel,
	currentTime,
	dateFormat,
	inputName,
	onChange,
	placeholder,
	time,
	timeFormat,
	useNative,
	value,
}) {
	/**
	 * @param {!string} value
	 * @return {string}
	 */
	function isValidValue(value) {
		const format = time ? `${dateFormat} ${timeFormat}` : dateFormat;

		if (moment(value, format).isValid() && !isNaN(value)) {
			const date = moment(value)
				.clone()
				.format(dateFormat);

			return time ? `${date} ${currentTime}` : date;
		}

		return value;
	}

	const memoizedValue = useMemo(() => isValidValue(value), [
		value,
		currentTime,
	]);

	const className = classnames('form-control input-group-inset', {
		'input-group-inset-after': !useNative,
	});

	return (
		<React.Fragment>
			<input name={inputName} type="hidden" value={memoizedValue} />
			<input
				aria-label={ariaLabel}
				className={className}
				onChange={onChange}
				placeholder={placeholder}
				type={useNative ? 'date' : 'text'}
				value={memoizedValue}
			/>
		</React.Fragment>
	);
}

InputDate.propTypes = {
	ariaLabel: PropTypes.string,
	currentTime: PropTypes.string.isRequired,
	dateFormat: PropTypes.string.isRequired,
	inputName: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	time: PropTypes.bool,
	timeFormat: PropTypes.string,
	useNative: PropTypes.bool,
	value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
};

InputDate.defaultProps = {
	inputName: 'datePicker',
	time: false,
	useNative: false,
	value: undefined,
};

export {InputDate};
export default InputDate;
