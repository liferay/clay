/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React, {useMemo} from 'react';

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Gets the accepted characters of the input
	 * element values
	 */
	allowedCharacters?: RegExp;

	/**
	 * Input component to render. Can either be a string like 'input' or a component.
	 */
	component?: 'input' | React.ForwardRefExoticComponent<any>;
}

const Input = React.forwardRef<HTMLInputElement, IProps>(
	(
		{
			allowedCharacters,
			className,
			component: Component = 'input',
			value,
			...otherProps
		},
		ref
	) => {
		const getCharactersAllowed = (value: string) => {
			const regexp = new RegExp(allowedCharacters as RegExp);
			const match = value.match(regexp);

			return Array.isArray(match) ? match.join('') : '';
		};

		const memoValue = useMemo(
			() =>
				allowedCharacters
					? getCharactersAllowed(value as string)
					: value,
			[allowedCharacters, value]
		);

		return (
			<Component
				{...otherProps}
				className={classNames('form-control', className)}
				ref={ref}
				value={memoValue}
			/>
		);
	}
);

export default Input;
