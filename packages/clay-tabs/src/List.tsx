/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {FOCUSABLE_ELEMENTS, InternalDispatch, Keys} from '@clayui/shared';
import classNames from 'classnames';
import React, {useRef} from 'react';

export interface IProps extends React.HTMLAttributes<HTMLUListElement> {
	/**
	 * @ignore
	 */
	activation?: 'manual' | 'automatic';

	/**
	 * @ignore
	 */
	active?: React.Key;

	/**
	 * The tabs content.
	 */
	children: React.ReactNode;

	/**
	 * The custom class.
	 */
	className?: string;

	/**
	 * @ignore
	 */
	displayType?: null | 'basic' | 'underline';

	/**
	 * @ignore
	 */
	justified?: boolean;

	/**
	 * @ignore
	 */
	modern?: boolean;

	/**
	 * @ignore
	 */
	onActiveChange?: InternalDispatch<number>;

	/**
	 * @ignore
	 */
	tabsId?: string;
}

export function List({
	activation,
	active,
	children,
	className,
	displayType,
	justified,
	modern,
	onActiveChange,
	tabsId,
	...otherProps
}: IProps) {
	const tabsRef = useRef<HTMLUListElement>(null);

	return (
		<ul
			{...otherProps}
			className={classNames(
				'nav',
				{'nav-justified': justified},
				!displayType
					? {
							'nav-tabs': !modern,
							'nav-underline': modern,
					  }
					: {
							'nav-tabs': displayType === 'basic',
							'nav-underline': displayType === 'underline',
					  },

				className
			)}
			onKeyDown={(event) => {
				if (!tabsRef.current) {
					return;
				}

				if (event.key === Keys.Left || event.key === Keys.Right) {
					const tabs = Array.from<HTMLElement>(
						tabsRef.current.querySelectorAll(
							FOCUSABLE_ELEMENTS.join(',')
						)
					);
					const activeElement = document.activeElement as HTMLElement;

					const position = tabs.indexOf(activeElement);

					const tab =
						tabs[
							event.key === Keys.Left
								? position - 1
								: position + 1
						];

					if (tab) {
						tab.focus();

						if (activation === 'automatic') {
							const newActive = Array.from(
								tabsRef.current.querySelectorAll('a, button')
							).indexOf(tab);

							onActiveChange!(newActive);
						}
					}
				}
			}}
			ref={tabsRef}
			role="tablist"
		>
			{React.Children.map(children, (child, index) => {
				if (!React.isValidElement(child)) {
					return child;
				}

				return React.cloneElement(child as React.ReactElement, {
					active:
						(child as React.ReactElement).props.active !== undefined
							? (child as React.ReactElement).props.active
							: active === index,
					innerProps: {
						'aria-controls': tabsId && `${tabsId}-${index}`,
						...(child.props.innerProps ?? {}),
					},
					onClick: (
						event: React.MouseEvent<HTMLButtonElement, MouseEvent>
					) => {
						const {onClick} = (child as React.ReactElement).props;

						if (onClick) {
							onClick(event);
						} else {
							onActiveChange!(index);
						}
					},
				});
			})}
		</ul>
	);
}

List.displayName = 'ClayTabsList';
