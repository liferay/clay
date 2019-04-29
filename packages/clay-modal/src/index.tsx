/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {createPortal} from 'react-dom';
import {Size} from './types';
import {useUserInteractions} from './Hook';
import Body, {BodyProps} from './Body';
import classNames from 'classnames';
import Context, {IContext} from './Context';
import Footer, {FooterProps} from './Footer';
import Header, {HeaderProps} from './Header';
import React, {FunctionComponent, useEffect, useRef, useState} from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement>, IContext {
	children?: (onClose: () => void) => React.ReactNode;

	/**
	 * The size of element modal.
	 */
	size?: Size;

	/**
	 * The path to the SVG spritemap file containing the icons.
	 */
	spritemap?: string;
}

const Portal = ({children}: {children: React.ReactNode}) => {
	const portalRef = useRef(document.createElement('div')).current;
	const elToMountTo = document && document.body;

	useEffect(() => {
		elToMountTo.appendChild(portalRef);
		return () => {
			elToMountTo.removeChild(portalRef);
		};
	}, [elToMountTo]);

	return createPortal(children, portalRef);
};

const delay = (fn: Function) => {
	setTimeout(() => {
		fn();
	}, 100);
};

const modalOpenClassName = 'modal-open';

const ClayModal: FunctionComponent<Props> & {
	Body: FunctionComponent<BodyProps>;
	Footer: FunctionComponent<FooterProps>;
	Header: FunctionComponent<HeaderProps>;
} = ({
	children,
	className,
	onClose = () => {},
	size,
	spritemap,
	status,
	...otherProps
}) => {
	const [visibleClassShow, setVisibleClassShow] = useState<boolean>(false);

	const modalDialogElementRef = useRef<HTMLDivElement | null>(null);

	/**
	 * Control the close of the modal to create the component's "unmount"
	 * animation and call the onClose prop with delay.
	 */
	const handleCloseModal = () => {
		document.body.classList.remove(modalOpenClassName);
		setVisibleClassShow(false);
		delay(() => {
			onClose();
		});
	};

	const context = {
		onClose: handleCloseModal,
		spritemap,
		status,
	};

	useUserInteractions(modalDialogElementRef, handleCloseModal);

	useEffect(() => {
		document.body.classList.add(modalOpenClassName);
		delay(() => setVisibleClassShow(true));
	}, []);

	return (
		<Portal>
			<div
				className={classNames('modal-backdrop fade', {
					show: visibleClassShow,
				})}
			/>
			<div
				{...otherProps}
				className={classNames('fade modal d-block', className, {
					show: visibleClassShow,
				})}
			>
				<div
					className={classNames('modal-dialog', {
						[`modal-${size}`]: size,
						[`modal-${status}`]: status,
					})}
					ref={modalDialogElementRef}
					tabIndex={-1}
				>
					<div className="modal-content">
						<Context.Provider value={context}>
							{children && typeof children === 'function' ? children(handleCloseModal) : children}
						</Context.Provider>
					</div>
				</div>
			</div>
		</Portal>
	);
};

ClayModal.Body = Body;
ClayModal.Footer = Footer;
ClayModal.Header = Header;

export default ClayModal;
