/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Context from './Context';
import DropDown from './DropDown';
import Input from './Input';
import Item from './Item';
import LoadingIndicator from './LoadingIndicator';
import React, {useRef, useState} from 'react';
import {ClayInput} from '@clayui/form';

const AutocompleteMarkup = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({children, ...otherProps}, ref) => (
	<ClayInput.Group {...otherProps} ref={ref}>
		<ClayInput.GroupItem>{children}</ClayInput.GroupItem>
	</ClayInput.Group>
));

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Div component to render. It can be a one component that will replace the markup.
	 */
	component?: React.ForwardRefExoticComponent<any>;
}

type Autocomplete = React.ForwardRefExoticComponent<IProps> & {
	DropDown: typeof DropDown;
	Input: typeof Input;
	Item: typeof Item;
	LoadingIndicator: typeof LoadingIndicator;
};

const ClayAutocomplete = React.forwardRef(
	(
		{
			children,
			className,
			component: Component = AutocompleteMarkup,
			...otherProps
		}: IProps,
		ref
	) => {
		const containerElementRef = useRef<null | HTMLDivElement>(null);
		const [loading, setLoading] = useState(false);

		return (
			<Component
				{...otherProps}
				className={className}
				ref={(r: any) => {
					containerElementRef.current = r;
					if (typeof ref === 'function') {
						ref(r);
					} else if (ref !== null) {
						(ref.current as React.MutableRefObject<any>) = r;
					}
				}}
			>
				<Context.Provider
					value={{
						containerElementRef,
						loading,
						onLoadingChange: (loading: boolean) =>
							setLoading(loading),
					}}
				>
					{children}
				</Context.Provider>
			</Component>
		);
	}
) as Autocomplete;

ClayAutocomplete.DropDown = DropDown;
ClayAutocomplete.Input = Input;
ClayAutocomplete.Item = Item;
ClayAutocomplete.LoadingIndicator = LoadingIndicator;

export default ClayAutocomplete;
