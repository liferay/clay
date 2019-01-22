/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from './Icon';

/**
 * @param {Object} param
 * @return {React.createElement}
 */
function Button({
	className,
	icon,
	monospaced,
	onClick,
	size,
	spritemap,
	style,
	type,
}) {
	const classNames = classnames('btn', className, {
		'btn-monospaced': monospaced,
		[`btn-${size}`]: size,
		[`btn-${style}`]: style,
	});

	return (
		<button className={classNames} onClick={onClick} type={type}>
			<Icon spritemap={spritemap} symbol={icon} />
		</button>
	);
}

Button.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.string,
	monospaced: PropTypes.bool,
	onClick: PropTypes.func,
	size: PropTypes.oneOf(['sm']),
	spritemap: PropTypes.string,
	style: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.oneOf([
			'link',
			'primary',
			'secondary',
			'unstyled',
			'primary',
		]),
	]),
	type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
	monospaced: false,
	style: 'primary',
	type: 'button',
};

export {Button};
export default Button;
