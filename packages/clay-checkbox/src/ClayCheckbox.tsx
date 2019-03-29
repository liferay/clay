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
	label?: React.ReactElement | React.ReactText;
}

const ClayCheckbox: React.FunctionComponent<Props> = ({
	checked = false,
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
					value={checked.toString()}
				/>

				{label && (
					<span className="custom-control-label">
						<span className="custom-control-label-text">
							{label}
						</span>
					</span>
				)}
			</label>
		</div>
	);
};

export default ClayCheckbox;
