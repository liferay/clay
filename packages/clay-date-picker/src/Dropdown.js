import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * @param {Object} param
 * @return {React.createElement}
 */
function Dropdown({containerRef, children, expanded, onDocumentClick}) {
	/**
	 * Create a ref to store the dropdown DOM element
	 */
	const elementRef = useRef(null);

	/**
	 * Handles the click of the document to hide the datepicker.
	 * @param {!Event} event
	 * @return {void}
	 */
	function handleDocumentClicked(event) {
		const node = containerRef || elementRef;
		if (node.current && !node.current.contains(event.target)) {
			onDocumentClick();
		}
	}

	useEffect(() => {
		if (expanded) {
			document.addEventListener('click', handleDocumentClicked);
		}

		return () => {
			document.removeEventListener('click', handleDocumentClicked);
		};
	});

	const classNames = classnames('dropdown-menu', {
		show: expanded,
	});

	return (
		<div className={classNames} ref={elementRef}>
			{children}
		</div>
	);
}

Dropdown.propTypes = {
	containerRef: PropTypes.object,
	children: PropTypes.element,
	expanded: PropTypes.bool,
	onDocumentClick: PropTypes.func,
};

Dropdown.defaultProps = {
	expanded: false,
};

export {Dropdown};
export default Dropdown;
