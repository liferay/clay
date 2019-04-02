/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	containerProps?: React.HTMLAttributes<HTMLDivElement>;
	indeterminate?: boolean;
	inline?: boolean;
	label?: React.ReactText;
}

const ClayCheckbox: React.FunctionComponent<Props> = ({
	checked,
	children,
	className,
	containerProps = {className: ''},
	indeterminate = false,
	inline,
	label,
	...otherProps
}) => {
	const inputRef = React.useRef<HTMLInputElement | null>(null);

	React.useEffect(() => {
		if (inputRef.current) {
			inputRef.current.indeterminate = indeterminate;
		}
	}, [indeterminate]);

	return (
		<div
			{...containerProps}
			className={classNames(
				'custom-control custom-checkbox',
				containerProps.className,
				{
					'custom-control-inline': inline,
				}
			)}
		>
			<label>
				<input
					{...otherProps}
					checked={checked}
					className={classNames('custom-control-input', className)}
					ref={inputRef}
					type="checkbox"
					value={checked ? 'true' : 'false'}
				/>

				<span className="custom-control-label">
					{label && (
						<span className="custom-control-label-text">
							{label}
						</span>
					)}
				</span>

				{children}
			</label>
		</div>
	);
};

export default ClayCheckbox;
