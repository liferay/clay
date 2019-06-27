/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
	/**
	 * Callback for when input value changes.
	 */
	onChange: (event: React.FormEvent<HTMLInputElement>) => void;

	/**
	 * Path to icon spritemap from clay-css.
	 */
	spritemap: string;

	/**
	 * Value of the searchInput
	 */
	value: React.ReactText;
}

const ClayDropDownSearch: React.FunctionComponent<IProps> = ({
	className,
	spritemap,
	...otherProps
}: IProps) => {
	return (
		<form className={className}>
			<div className="dropdown-section">
				<div className="input-group input-group-sm">
					<div className="input-group-item">
						<input
							{...otherProps}
							className="form-control input-group-inset input-group-inset-after"
							type="text"
						/>

						<span className="input-group-inset-item input-group-inset-item-after">
							<ClayButton displayType="unstyled" type="button">
								<ClayIcon
									spritemap={spritemap}
									symbol="search"
								/>
							</ClayButton>
						</span>
					</div>
				</div>
			</div>
		</form>
	);
};

export default ClayDropDownSearch;
