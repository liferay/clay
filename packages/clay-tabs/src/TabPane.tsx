/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React, {useEffect, useState} from 'react';

interface ITabPaneProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag to indicate if `active` classname should be applied
	 */
	active?: boolean;

	/**
	 * Flag to indicate if `fade` classname that applies an fading animation should be applied.
	 */
	fade?: boolean;

	/**
	 * TabPane's key.
	 */
	tabKey: number;
}

const delay = (fn: Function) => {
	return setTimeout(() => {
		fn();
	}, 100);
};

const TabPane: React.FunctionComponent<ITabPaneProps> = ({
	active = false,
	children,
	className,
	fade,
	...otherProps
}: ITabPaneProps) => {
	const [visibleClassShow, setVisibleClassShow] = useState<boolean>(false);

	useEffect(() => {
		const timer = delay(() => {
			setVisibleClassShow(true);
		});

		return () => {
			clearTimeout(timer);
			setVisibleClassShow(false);
		};
	}, [active]);

	return (
		<div
			className={classNames(
				'tab-pane',
				{
					active,
					fade,
					show: active && visibleClassShow,
				},
				className
			)}
			role="tabpanel"
			{...otherProps}
		>
			{children}
		</div>
	);
};

export default TabPane;
