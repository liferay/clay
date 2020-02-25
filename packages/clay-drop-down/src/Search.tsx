/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import {ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import classNames from 'classnames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
	/**
	 * Props to add to form element
	 */
	formProps?: React.HTMLAttributes<HTMLFormElement>;

	/**
	 * Callback for when input value changes.
	 */
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	/**
	 * Value of the searchInput
	 */
	value: React.ReactText;
}

const ClayDropDownSearch: React.FunctionComponent<IProps> = ({
	className,
	formProps = {},
	spritemap,
	...otherProps
}: IProps) => {
	const {className: formClassName, ...otherFormProps} = formProps;

	return (
		<form
			className={classNames(className, formClassName)}
			{...otherFormProps}
		>
			<div className="dropdown-section">
				<ClayInput.Group small>
					<ClayInput.GroupItem>
						<ClayInput {...otherProps} insetAfter type="text" />

						<ClayInput.GroupInsetItem after tag="span">
							<ClayButton displayType="unstyled" type="button">
								<ClayIcon
									spritemap={spritemap}
									symbol="search"
								/>
							</ClayButton>
						</ClayInput.GroupInsetItem>
					</ClayInput.GroupItem>
				</ClayInput.Group>
			</div>
		</form>
	);
};

export default ClayDropDownSearch;
