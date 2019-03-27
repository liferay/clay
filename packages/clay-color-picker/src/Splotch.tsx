/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React from 'react';
import tinycolor from 'tinycolor2';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	active?: boolean;
	className?: string;
	size?: number;
	value: string;
}

/**
 * Renders component that displays a color
 * @return {React.Component}
 */
const Splotch: React.FunctionComponent<Props> = ({
	active,
	className,
	size = 24,
	value,
	...otherProps
}) => {
	const requireBorder = tinycolor.readability('#FFF', value) < 1.1;

	return (
		<button
			{...otherProps}
			className={`splotch${` ${className}`}`}
			style={{
				...(active ? {outline: 'auto 3px #55ADFF'} : {}),
				...(requireBorder
					? {border: '1px solid #E7E7ED'}
					: {borderWidth: 0}),
				background: value,
				height: size,
				width: size,
			}}
			title={value}
		/>
	);
};

export default Splotch;
