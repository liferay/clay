/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface ITabPaneProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag to indicate if `active` classname should be applied
	 */
	active?: boolean;

	/**
	 * Flag to indicate if `fade` classname that applies a fading animation should be applied.
	 */
	fade?: boolean;
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
	const [visibleClassShow, setVisibleClassShow] = React.useState<boolean>(
		false
	);

	React.useEffect(() => {
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
			{...otherProps}
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
		>
			{children}
		</div>
	);
};

export default TabPane;
