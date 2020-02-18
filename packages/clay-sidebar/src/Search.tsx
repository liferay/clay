/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayForm, {ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import classNames from 'classnames';
import React from 'react';

interface ISearchProps extends React.HTMLAttributes<HTMLDivElement> {
	spritemap: string;
}

const Search: React.FunctionComponent<ISearchProps> = ({
	className,
	placeholder,
	spritemap,
	...otherProps
}) => {
	return (
		<ClayForm.Group
			className={classNames('cm-panel-search', className)}
			{...otherProps}
		>
			<ClayInput.Group>
				<ClayInput.GroupItem prepend>
					<ClayInput
						placeholder={placeholder}
						sizing="sm"
						type="search"
					/>
				</ClayInput.GroupItem>

				<ClayInput.GroupItem append shrink>
					<ClayButton small type="submit">
						<ClayIcon spritemap={spritemap} symbol="search" />
					</ClayButton>
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</ClayForm.Group>
	);
};

Search.displayName = 'Search';

export default Search;
