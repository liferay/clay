/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import ClayLoadingIndicator from '@clayui/loading-indicator';
import Context from './Context';
import React, {useContext, useEffect} from 'react';

interface LoadingIndicatorMarkupProps
	extends React.HTMLAttributes<HTMLDivElement> {}

const LoadingIndicatorMarkup: React.FunctionComponent<
	LoadingIndicatorMarkupProps
> = ({children, className, ...otherProps}) => (
	<div
		{...otherProps}
		className={classNames(
			'input-group-inset-item input-group-inset-item-after',
			className
		)}
	>
		<span className="inline-item inline-item-middle">{children}</span>
	</div>
);

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Div component to render. It can be a one component that will replace the markup.
	 */
	component?:
		| typeof LoadingIndicatorMarkup
		| React.ComponentType<any>
		| React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;
}

const LoadingIndicator: React.FunctionComponent<Props> = ({
	className,
	component: Component = LoadingIndicatorMarkup,
	...otherProps
}) => {
	const {onLoadingChange} = useContext(Context);

	useEffect(() => {
		onLoadingChange(true);

		return () => {
			onLoadingChange(false);
		};
	}, []);

	return (
		<Component {...otherProps} className={className}>
			<ClayLoadingIndicator small />
		</Component>
	);
};

export default LoadingIndicator;
