/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';
import {Align} from 'metal-position';
import {createPortal} from 'react-dom';
import {useDropdownCloseInteractions} from './hooks';

import Action from './Action';
import Caption from './Caption';
import Divider from './Divider';
import Group from './Group';
import Help from './Help';
import Item from './Item';
import Search from './Search';

const Portal = ({children}: {children: React.ReactNode}) => {
	const portalRef = React.useRef(document.createElement('div'));
	const elToMountTo = document && document.body;

	React.useEffect(() => {
		elToMountTo.appendChild(portalRef.current);
		return () => {
			elToMountTo.removeChild(portalRef.current);
		};
	}, [elToMountTo]);

	return createPortal(children, portalRef.current);
};

interface DropDownMenuProps extends React.HTMLAttributes<HTMLUListElement> {
	alignElement: HTMLElement | null;
	hasLeftSymbols?: boolean;
	hasRightSymbols?: boolean;
	ref?: React.Ref<HTMLUListElement>;
}

const DropDownMenu: React.ComponentType<DropDownMenuProps> = React.forwardRef(
	(
		{
			alignElement,
			children,
			hasLeftSymbols,
			hasRightSymbols,
			...otherProps
		},
		ref?: React.Ref<HTMLUListElement>
	) => {
		return (
			<ul
				{...otherProps}
				className={classNames('dropdown-menu list-unstyled show', {
					'dropdown-menu-indicator-end': hasRightSymbols,
					'dropdown-menu-indicator-start': hasLeftSymbols,
				})}
				ref={ref}
			>
				{children}
			</ul>
		);
	}
);

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	active: boolean;
	alignmentPosition: number;
	hasRightSymbols?: boolean;
	hasLeftSymbols?: boolean;
	onActiveChange: (val: boolean) => void;
	trigger: React.ReactElement;
}

const ClayDropDown: React.FunctionComponent<Props> & {
	Action: typeof Action;
	Caption: typeof Caption;
	Divider: typeof Divider;
	Group: typeof Group;
	Help: typeof Help;
	Item: typeof Item;
	Search: typeof Search;
} = ({
	active = false,
	alignmentPosition = Align.BottomLeft,
	children,
	className,
	hasLeftSymbols,
	hasRightSymbols,
	onActiveChange,
	trigger,
	...otherProps
}) => {
	const triggerElementRef = React.useRef<HTMLButtonElement>(null);
	const menuElementRef = React.useRef<HTMLUListElement>(null);

	useDropdownCloseInteractions(
		[triggerElementRef, menuElementRef],
		onActiveChange
	);

	React.useLayoutEffect(() => {
		if (triggerElementRef.current && menuElementRef.current) {
			Align.align(
				menuElementRef.current,
				triggerElementRef.current,
				alignmentPosition
			);
		}
	});

	return (
		<div {...otherProps} className="dropdown">
			<span ref={triggerElementRef} style={{display: 'inline-block'}}>
				{React.cloneElement(trigger, {
					className: 'dropdown-toggle',
					onClick: () => onActiveChange(!active),
				})}
			</span>

			{active && (
				<Portal>
					<DropDownMenu
						alignElement={triggerElementRef.current}
						hasLeftSymbols={hasLeftSymbols}
						hasRightSymbols={hasRightSymbols}
						ref={menuElementRef}
					>
						{children}
					</DropDownMenu>
				</Portal>
			)}
		</div>
	);
};

ClayDropDown.Action = Action;
ClayDropDown.Caption = Caption;
ClayDropDown.Divider = Divider;
ClayDropDown.Group = Group;
ClayDropDown.Help = Help;
ClayDropDown.Item = Item;
ClayDropDown.Search = Search;

export {Align};

export default ClayDropDown;
