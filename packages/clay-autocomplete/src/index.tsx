/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayInput} from '@clayui/form';
import * as React from 'react';

import Context from './Context';
import DropDown from './DropDown';
import Input from './Input';
import Item from './Item';
import LoadingIndicator from './LoadingIndicator';

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

const ClayAutocomplete = React.forwardRef<HTMLDivElement, IProps>(
	(
		{
			children,
			className,
			component: Component = AutocompleteMarkup,
			...otherProps
		}: IProps,
		ref
	) => {
		const containerElementRef = React.useRef<null | HTMLDivElement>(null);
		const [loading, setLoading] = React.useState(false);

		return (
			<Component
				{...otherProps}
				className={className}
				ref={(r: any) => {
					if (r) {
						containerElementRef.current = r;

						if (typeof ref === 'function') {
							ref(r);
						} else if (ref !== null) {
							(ref as React.MutableRefObject<any>).current = r;
						}
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
);

export default Object.assign(ClayAutocomplete, {
	DropDown,
	Input,
	Item,
	LoadingIndicator,
});
