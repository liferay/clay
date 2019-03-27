/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classnames from 'classnames';
import React, {
	FunctionComponent,
	HTMLAttributes,
	MutableRefObject,
	useEffect,
	useRef,
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
	containerRef: MutableRefObject<HTMLDivElement | null>;
	expanded: boolean;
	onDocumentClick: () => void;
}

const Dropdown: FunctionComponent<Props> = ({
	children,
	containerRef,
	expanded,
	onDocumentClick,
}) => {
	/**
	 * Create a ref to store the dropdown DOM element
	 */
	const elementRef = useRef<HTMLDivElement | null>(null);

	/**
	 * Handles the click of the document to hide the datepicker.
	 */
	const handleDocumentClicked = (event: MouseEvent) => {
		const node = containerRef || elementRef;
		if (
			node.current &&
			event.target !== null &&
			!node.current.contains(event.target as HTMLDocument)
		) {
			onDocumentClick();
		}
	};

	useEffect(() => {
		if (expanded) {
			document.addEventListener('click', handleDocumentClicked);
		}

		return () => {
			document.removeEventListener('click', handleDocumentClicked);
		};
	});

	const classNames = classnames('date-picker-dropdown-menu dropdown-menu', {
		show: expanded,
	});

	return (
		<div className={classNames} ref={elementRef}>
			{children}
		</div>
	);
};

Dropdown.defaultProps = {
	expanded: false,
};

export {Dropdown};
export default Dropdown;
