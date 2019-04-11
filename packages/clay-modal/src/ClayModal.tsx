/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import classNames from 'classnames';
import Icon from '@clayui/icon';
import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {Footer, FooterContainer, FooterContainerProps} from './Footer';
import {useModal} from './Hook';

type Size = 'full-screen' | 'lg' | 'sm';

type Status = 'danger' | 'info' | 'success' | 'warning';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Callback called to close the modal.
	 */
	onClose: () => void;

	/**
	 * Renders the footer with the FooterContainer component utilities.
	 */
	renderFooter?: React.ReactElement;

	/**
	 * The size of element modal.
	 */
	size?: Size;

	/**
	 * The path to the SVG spritemap file containing the icons.
	 */
	spritemap?: string;

	/**
	 * Status messages.
	 */
	status?: Status;

	/**
	 * Title of the modal.
	 */
	title?: string;

	/**
	 * Url to place an iframe in the body of the modal.
	 */
	url?: string;

	/**
	 * Flag to indicate if the modal is open or closed.
	 */
	visible: boolean;
}

const ICON_MAP = {
	danger: 'exclamation-full',
	info: 'info-circle',
	success: 'check-circle',
	warning: 'question-circle-full',
};

const Portal = ({children}: {children: React.ReactNode}) => {
	const portalRef = useRef(document.createElement('div'));
	const elToMountTo = document && document.body;

	useEffect(() => {
		elToMountTo.appendChild(portalRef.current);
		return () => {
			elToMountTo.removeChild(portalRef.current);
		};
	}, [elToMountTo]);

	return createPortal(children, portalRef.current);
};

const delay = (fn: Function) => {
	const callbackId = setTimeout(() => {
		fn();
		clearTimeout(callbackId);
	}, 100);
};

const ClayModal: FunctionComponent<Props> & {
	FooterContainer: FunctionComponent<FooterContainerProps>;
} = ({
	children,
	className,
	onClose = () => {},
	renderFooter,
	size,
	spritemap,
	status,
	title,
	url,
	visible = false,
	...otherProps
}) => {
	/**
	 * It is set to keep track of modal visibility and ensure that classes
	 * are removed when necessary.
	 */
	const [visibleModal, setVisibleModal] = useState<boolean>(visible);

	const [visibleClassShow, setVisibleClassShow] = useState<boolean>(false);

	const modalDialogElementRef = useRef<HTMLDivElement | null>(null);

	/**
	 * A hook that takes care of controlling click, keyup and keydown events
	 * respectively close the modal after a click on the overlay, close the
	 * modal by pressing the ESC key and control the focus within the Modal.
	 */
	useModal(modalDialogElementRef, visible, onClose);

	/**
	 * Synchronize the visible of the props with the internal value to update
	 * the states with delay, this ensures that the animation occurs when
	 * opening and closing the modal.
	 */
	useEffect(() => {
		if (visible) {
			document.body.classList.add('modal-open');
			setVisibleModal(visible);
			delay(() => setVisibleClassShow(visible));
		} else {
			document.body.classList.remove('modal-open');
			setVisibleClassShow(visible);
			delay(() => setVisibleModal(visible));
		}
	}, [visible]);

	return (
		<>
			{visibleModal && (
				<Portal>
					<div
						className={classNames('modal-backdrop fade', {
							show: visibleClassShow,
						})}
					/>
				</Portal>
			)}
			<div
				{...otherProps}
				className={classNames('fade modal', className, {
					'd-block': visibleModal,
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
						{title && (
							<div className="modal-header">
								{status && (
									<div className="modal-title-indicator">
										<Icon
											spritemap={spritemap}
											symbol={ICON_MAP[status]}
										/>
									</div>
								)}
								<div className="modal-title">{title}</div>
								<Button
									aria-label="close"
									className="close"
									displayType="unstyled"
									onClick={onClose}
								>
									<Icon
										spritemap={spritemap}
										symbol="times"
									/>
								</Button>
							</div>
						)}
						<div
							className={classNames('modal-body', {
								'modal-body-iframe': url,
							})}
						>
							{url ? <iframe src={url} title={url} /> : children}
						</div>
						{renderFooter && <Footer>{renderFooter}</Footer>}
					</div>
				</div>
			</div>
		</>
	);
};

ClayModal.FooterContainer = FooterContainer;

export default ClayModal;
