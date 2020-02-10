/* eslint-disable no-console */
/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayButtonWithIcon} from '@clayui/button';
import React, {useContext} from 'react';

import SidebarContext from './Context';
import {ISidebarItem} from './types';

interface IButtonsProps extends React.HTMLAttributes<HTMLButtonElement> {
	items: Array<ISidebarItem>;
}

export const Buttons: React.FunctionComponent<IButtonsProps> = ({items}) => {
	const {displayType, position} = useContext(SidebarContext);

	console.log('info do contexto: ', {displayType, position});

    return (
        <>
            {items.map(
            ({icon, items, label, renderIcon, ...itemOtherProps}, key) => {
                if (items) {
                    return <Buttons items={items} key={key} />;
                }
    
                if (renderIcon && typeof renderIcon === 'function') {
                    return renderIcon({icon, label, ...itemOtherProps});
                }
    
                return (
                    <ClayButtonWithIcon
                        aria-label={label}
                        className="btn-lg cm-menu-button"
                        key={`key-${icon}`}
                        monospaced
                        symbol={icon}
                        {...itemOtherProps}
                    />
                );
            })}
        </>
    )
};
