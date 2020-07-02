/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayPortal} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';
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
	 * The size of element modal.
	 */
	size?: Size;

	/**
	 * Observer is Modal's communication system with `useModal`
	 * hook, adds observer from `useModal` hook here.
	 */
	observer: Observer;
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
	observer,
	size,
	spritemap,
	status,
	...otherProps
}: IProps) => {
	const modalBodyElementRef = React.useRef<HTMLDivElement | null>(null);

	warning(observer !== undefined, warningMessage);

	useUserInteractions(modalBodyElementRef, () =>
		observer.dispatch(ObserverType.Close)
	);

	React.useEffect(() => observer.dispatch(ObserverType.Open), []);

	// Defines a default Modal size when size is not set.
	const maxWidth = size ? {} : {maxWidth: '600px'};

	const [show, content] =
		observer && observer.mutation ? observer.mutation : [false, false];

	return (
		<ClayPortal subPortalRef={modalBodyElementRef}>
			<div
				className={classNames('modal-backdrop fade', {
					show,
				})}
			/>
			<div
				{...otherProps}
				className={classNames('fade modal d-block', className, {
					show,
				})}
			>
				<div
					className={classNames({
						[`modal-${size}`]: size,
					})}
					ref={modalBodyElementRef}
					style={{margin: 'auto', ...maxWidth}}
				>
					<div
						className={classNames('modal-dialog', {
							[`modal-${size}`]: size,
							[`modal-${status}`]: status,
							'modal-dialog-centered': center,
						})}
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
