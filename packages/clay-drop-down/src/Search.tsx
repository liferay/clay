/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import React from 'react';
import {ClayInput} from '@clayui/form';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
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
	spritemap,
	...otherProps
}: IProps) => (
	<form className={className}>
		<div className="dropdown-section">
			<ClayInput.Group small>
				<ClayInput.GroupItem>
					<ClayInput {...otherProps} insetAfter type="text" />

					<ClayInput.GroupInsetItem after tag="span">
						<ClayButton displayType="unstyled" type="button">
							<ClayIcon spritemap={spritemap} symbol="search" />
						</ClayButton>
					</ClayInput.GroupInsetItem>
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</div>
	</form>
);

export default ClayDropDownSearch;
