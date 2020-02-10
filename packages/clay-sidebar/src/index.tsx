/* eslint-disable no-console */

/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import {Buttons} from './Buttons';
import SidebarContext from './Context';
import {TDisplay, ISidebarItem, TSidebarPosition} from './types';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	displayType: TDisplay;

	items: Array<ISidebarItem>;

	position: TSidebarPosition;
}

const ClaySidebar: React.FunctionComponent<IProps> = ({
	children,
	className,
	displayType = 'light',
	items,
	position,
	...otherProps
}) => {
	console.log({children, displayType, position});

	return (
		<div {...otherProps} className={classNames('cm', className)}>
			<SidebarContext.Provider value={{displayType, items, position}}>
				<div className="cm-bar">
					<ul className="cm-menu">
						<li>
							<Buttons items={items} />
						</li>
					</ul>
				</div>
			</SidebarContext.Provider>
		</div>
	);
};

export default ClaySidebar;
