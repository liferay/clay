/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayPortal} from '@clayui/shared';
import classNames from 'classnames';
import React, {useEffect, useRef} from 'react';
import warning from 'warning';

import Body from './Body';
import Context, {IContext} from './Context';
import Footer from './Footer';
import Header, {
	Item,
	ItemGroup,
	Subtitle,
	SubtitleSection,
	Title,
	TitleIndicator,
	TitleSection,
} from './Header';
import {useUserInteractions} from './Hook';
import {Observer, ObserverType, Size} from './types';

interface IProps
	extends React.HTMLAttributes<HTMLDivElement>,
		Omit<IContext, 'onClose'> {
	/**
	 * Flag indicating to vertically center the modal.
	 */
	center?: boolean;

	/**
	 * Container element to render modal into.
	 */
	containerElementRef?: React.RefObject<Element>;

	/**
	 * The size of element modal.
	 */
	size?: Size;

	/**
	 * Observer is Modal's communication system with `useModal`
	 * hook, adds observer from `useModal` hook here.
	 */
	observer: Observer;

	/**
	 * Allows setting a custom z-index value, overriding the default one which is 1040, modal body z-index will be +10 of this value
	 */
	zIndex?: number;
}

const warningMessage = `You need to pass the 'observer' prop to ClayModal for everything to work fine, use the 'useModal' hook that exposes the observer.

> const {observer} = useModal({...});
>
> return (
> 	<ClayModal observer={observer}>
> 		...
> 	</ClayModal>
> ); 
`;

const ClayModal: React.FunctionComponent<IProps> = ({
	center,
	children,
	className,
	containerElementRef,
	observer,
	size,
	spritemap,
	status,
	zIndex,
	...otherProps
}: IProps) => {
	const modalElementRef = useRef<HTMLDivElement | null>(null);
	const modalBodyElementRef = useRef<HTMLDivElement | null>(null);

	warning(observer !== undefined, warningMessage);

	useUserInteractions(modalElementRef, modalBodyElementRef, () =>
		observer.dispatch(ObserverType.Close)
	);

	useEffect(() => observer.dispatch(ObserverType.Open), []);

	const [show, content] =
		observer && observer.mutation ? observer.mutation : [false, false];

	return (
		<ClayPortal
			containerRef={containerElementRef}
			subPortalRef={modalElementRef}
		>
			<div
				className={classNames('modal-backdrop fade', {
					show,
				})}
				style={{zIndex}}
			/>
			<div
				{...otherProps}
				className={classNames('fade modal d-block', className, {
					show,
				})}
				ref={modalElementRef}
				style={{zIndex: zIndex && zIndex + 10}}
			>
				<div
					className={classNames('modal-dialog', {
						[`modal-${size}`]: size,
						[`modal-${status}`]: status,
						'modal-dialog-centered': center,
					})}
					ref={modalBodyElementRef}
					tabIndex={-1}
				>
					<div className="modal-content">
						<Context.Provider
							value={{
								onClose: () =>
									observer.dispatch(ObserverType.Close),
								spritemap,
								status,
							}}
						>
							{content && children}
						</Context.Provider>
					</div>
				</div>
			</div>
		</ClayPortal>
	);
};

export default Object.assign(ClayModal, {
	Body,
	Footer,
	Header,
	Item,
	ItemGroup,
	Subtitle,
	SubtitleSection,
	Title,
	TitleIndicator,
	TitleSection,
});
