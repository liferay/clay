/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayButtonWithIcon} from '@clayui/button';
import classNames from 'classnames';
import React, {useContext, useState} from 'react';

import SidebarContext from './Context';
import {ISidebarItem} from './types';

interface IButtonsProps extends React.HTMLAttributes<HTMLUListElement> {
	items: Array<ISidebarItem>;
	onPanelSelected?: (panelKey: string) => void;
	spritemap: string;
}

interface IIconProps extends React.HTMLAttributes<HTMLButtonElement> {
	icon: string;
	items?: Array<ISidebarItem>;
	label: string;
	onPanelSelected?: (panelKey: string) => void;
	panelKey?: string;
	renderIcon?: Function;
	spritemap: string;
}

const Icon: React.FunctionComponent<IIconProps> = ({
	icon,
	label,
	onPanelSelected,
	panelKey,
	renderIcon,
	spritemap,
	...otherProps
}) => {
	const {children, selectedPanelId} = useContext(SidebarContext);

	if (renderIcon && typeof renderIcon === 'function') {
		return renderIcon({icon, label, onPanelSelected});
	}

	return (
		<>
			<ClayButtonWithIcon
				aria-label={label}
				className="btn-lg cm-menu-button"
				displayType="unstyled"
				onClick={() => {
					if (onPanelSelected && panelKey) {
						onPanelSelected(panelKey);
					}

					if (onPanelSelected && selectedPanelId === panelKey) {
						onPanelSelected('');
					}
				}}
				spritemap={spritemap}
				symbol={icon}
				title={label}
				{...otherProps}
			/>
			{React.Children.map(children, child => {
				if (
					React.isValidElement(child) &&
					child.props.panelKey === selectedPanelId
				) {
					return child;
				}
			})}
		</>
	);
};

export const Buttons: React.FunctionComponent<IButtonsProps> = React.forwardRef<
	HTMLUListElement,
	IButtonsProps
>(({items, onPanelSelected, spritemap, ...otherProps}, ref) => {
	const [expanded, setExpanded] = useState<boolean>(false);

	return (
		<ul {...otherProps} className="cm-menu" ref={ref}>
			{items.map(({items, panelKey, ...otherProps}, key) => (
				<li key={key} onClick={() => setExpanded(!expanded)}>
					<Icon
						{...otherProps}
						onPanelSelected={onPanelSelected}
						panelKey={panelKey}
						spritemap={spritemap}
					/>

					{items && (
						<Buttons
							className={classNames('cm-submenu', {
								'cm-open': expanded,
							})}
							items={items}
							onPanelSelected={onPanelSelected}
							spritemap={spritemap}
						/>
					)}
				</li>
			))}
		</ul>
	);
});
