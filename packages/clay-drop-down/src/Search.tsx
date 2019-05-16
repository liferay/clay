/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
	onChange: (event: React.FormEvent<HTMLInputElement>) => void;
	spritemap: string;
	value: React.ReactText;
}

const DropDownSearch: React.FunctionComponent<Props> = ({
	children,
	className,
	spritemap,
	...otherProps
}) => {
	return (
		<form>
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

export default DropDownSearch;
