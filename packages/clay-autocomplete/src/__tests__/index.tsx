/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAutocomplete from '..';
import {cleanup, render} from '@testing-library/react';
import React, {useRef} from 'react';

import Context from '../Context';

describe('ClayAutocomplete', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(<ClayAutocomplete />);

		expect(container).toMatchSnapshot();
	});

	it('renders Autocomplete with other markup component', () => {
		const MyMarkup = React.forwardRef<
			HTMLDivElement,
			React.HTMLAttributes<HTMLDivElement>
		>(({children, ...otherProps}, ref) => (
			<div
				{...otherProps}
				className="form-control form-control-tag-group"
				ref={ref}
			>
				{children}
			</div>
		));

		const {container} = render(<ClayAutocomplete component={MyMarkup} />);

		expect(container).toMatchSnapshot();
	});

	it('renders Item with matches values', () => {
		const {container} = render(
			<ClayAutocomplete.Item match="Baz" value="Bar" />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders LoadingIndicator', () => {
		const LoadingIndicatorWithContext = () => (
			<Context.Provider
				value={{
					containerElementRef: {current: null},
					loading: false,
					onLoadingChange: jest.fn(),
				}}
			>
				<ClayAutocomplete.LoadingIndicator />
			</Context.Provider>
		);
		const {container} = render(<LoadingIndicatorWithContext />);

		expect(container).toMatchSnapshot();
	});

	it('renders LoadingIndicator with other markup component', () => {
		const MyMarkup: React.FunctionComponent<
			React.HTMLAttributes<HTMLSpanElement>
		> = ({children}) => (
			<span className="autofit-col">
				<span className="inline-item">{children}</span>
			</span>
		);
		const LoadingIndicatorWithContext = () => (
			<Context.Provider
				value={{
					containerElementRef: {current: null},
					loading: false,
					onLoadingChange: jest.fn(),
				}}
			>
				<ClayAutocomplete.LoadingIndicator component={MyMarkup} />
			</Context.Provider>
		);

		const {container} = render(<LoadingIndicatorWithContext />);

		expect(container).toMatchSnapshot();
	});

	it('renders LoadingIndicator and calls the onLoadingChange', () => {
		const spyFn = jest.fn();
		const LoadingIndicatorWithContext = () => (
			<Context.Provider
				value={{
					containerElementRef: {current: null},
					loading: false,
					onLoadingChange: spyFn,
				}}
			>
				<ClayAutocomplete.LoadingIndicator />
			</Context.Provider>
		);

		render(<LoadingIndicatorWithContext />);

		expect(spyFn).toBeCalled();
		expect(spyFn).toBeCalledWith(true);
	});

	it('renders Input with classNames when loading for true', () => {
		const InputWithContext = () => (
			<Context.Provider
				value={{
					containerElementRef: {current: null},
					loading: true,
					onLoadingChange: jest.fn(),
				}}
			>
				<ClayAutocomplete.Input />
			</Context.Provider>
		);

		const {container} = render(<InputWithContext />);

		expect(container).toMatchSnapshot();
	});

	it('renders DropDown with alignment with container', () => {
		const DropDownAndInputWithContext = () => {
			const containerElementRef = useRef<HTMLDivElement>(null);

			return (
				<Context.Provider
					value={{
						containerElementRef,
						loading: false,
						onLoadingChange: jest.fn(),
					}}
				>
					<ClayAutocomplete.Input />
					<ClayAutocomplete.DropDown active />
				</Context.Provider>
			);
		};

		render(<DropDownAndInputWithContext />);

		expect(document.body).toMatchSnapshot();
	});
});
