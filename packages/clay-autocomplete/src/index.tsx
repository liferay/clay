/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import Context from './Context';
import DropDown from './DropDown';
import Input from './Input';
import LoadingIndicator from './LoadingIndicator';
import React, {useRef, useState} from 'react';

const AutocompleteMarkup = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({children, className, ...otherProps}, ref) => (
	<div
		{...otherProps}
		className={classNames('input-group', className)}
		ref={ref}
	>
		<div className="input-group-item">{children}</div>
	</div>
));

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Div component to render. It can be a one component that will replace the markup.
	 */
	component?: React.ForwardRefExoticComponent<any>;
}

const ClayAutocomplete: React.FunctionComponent<IProps> & {
	DropDown: typeof DropDown;
	Input: typeof Input;
	LoadingIndicator: typeof LoadingIndicator;
} = ({
	children,
	className,
	component: Component = AutocompleteMarkup,
	...otherProps
}) => {
	const containerElementRef = useRef<HTMLDivElement>(null);
	const [loading, setLoading] = useState(false);

	return (
		<Component
			{...otherProps}
			className={className}
			ref={containerElementRef}
		>
			<Context.Provider
				value={{
					containerElementRef,
					loading,
					onLoadingChange: (loading: boolean) => setLoading(loading),
				}}
			>
				{children}
			</Context.Provider>
		</Component>
	);
};

ClayAutocomplete.DropDown = DropDown;
ClayAutocomplete.Input = Input;
ClayAutocomplete.LoadingIndicator = LoadingIndicator;

export default ClayAutocomplete;
