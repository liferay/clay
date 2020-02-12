/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayButtonWithIcon} from '@clayui/button';
import classNames from 'classnames';
import React, {useState} from 'react';

import {Buttons} from './Buttons';
import SidebarContext from './Context';
import {TDisplay, ISidebarItem, TSidebarPosition} from './types';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	displayType?: TDisplay;

	items: Array<ISidebarItem>;

	position?: TSidebarPosition;

	spritemap: string;
}

const ClaySidebar: React.FunctionComponent<IProps> = ({
	children,
	className,
	displayType = 'light',
	items,
	position = 'left',
	spritemap,
	...otherProps
}) => {
	const [selectedPanelId, setSelectedPanelId] = useState<string>('');

	return (
		<div
			{...otherProps}
			className={classNames('cm', className, {
				'cm-active': selectedPanelId !== '',
			})}
		>
			<SidebarContext.Provider
				value={{
					children,
					displayType,
					position,
					selectedPanelId,
				}}
			>
				<div className="cm-bar">
					<Buttons
						items={items}
						onPanelSelected={panelKey =>
							setSelectedPanelId(panelKey)
						}
						spritemap={spritemap}
					/>
				</div>

				<ClayButtonWithIcon
					className="btn-lg cm-menu-button cm-toggle"
					displayType="unstyled"
					onClick={() => setSelectedPanelId('')}
					spritemap={spritemap}
					symbol="angle-left"
				/>
			</SidebarContext.Provider>
		</div>
	);
};

export default ClaySidebar;
