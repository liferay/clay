/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import Context from './Context';
import React, {useRef, useState} from 'react';

import DropDown, {Props as DropDownProps} from './DropDown';
import Input from './Input';
import LoadingIndicator, {
	Props as LoadingIndicatorProps,
} from './LoadingIndicator';

interface AutocompleteMarkupProps
	extends React.HTMLAttributes<HTMLDivElement> {}

const AutocompleteMarkup = React.forwardRef<
	HTMLDivElement,
	AutocompleteMarkupProps
>(({children, className, ...otherProps}, ref) => (
	<div
		{...otherProps}
		className={classNames('input-group', className)}
		ref={ref}
	>
		<div className="input-group-item">{children}</div>
	</div>
));

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Div component to render. It can be a one component that will replace the markup.
	 */
	component?: typeof AutocompleteMarkup | React.ComponentType<any>;
}

const ClayAutocomplete: React.FunctionComponent<Props> & {
	DropDown: React.FunctionComponent<DropDownProps>;
	Input: typeof Input;
	LoadingIndicator: React.FunctionComponent<LoadingIndicatorProps>;
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
