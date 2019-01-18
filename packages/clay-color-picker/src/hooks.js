import {useState} from 'react';

/**
 * Utility hook for calculating the mouse position
 *
 * @param {object} containerRef ref of node
 * @return {object}
 */
export function useMousePosition(containerRef) {
	const [xy, setXY] = useState({x: 0, y: 0});

	const onMouseMove = event => {
		const rect = containerRef.current.getBoundingClientRect();

		const x =
			typeof event.pageX === 'number'
				? event.pageX
				: event.touches[0].pageX;

		let newLeft = x - (rect.left + window.pageXOffset);

		newLeft = newLeft < 0 ? 0 : newLeft > rect.width ? rect.width : newLeft;

		const y =
			typeof event.pageY === 'number'
				? event.pageY
				: event.touches[0].pageY;

		let newTop = y - (rect.top + window.pageYOffset);

		newTop = newTop < 0 ? 0 : newTop > rect.height ? rect.height : newTop;

		setXY({x: newLeft, y: newTop});
	};

	return {...xy, onMouseMove, setXY};
}

/**
 * Regex to only handle values of A,B,C,D,E,F,0,1,2,3,4,5,6,7,8,9
 */
const HEX_REGEX = /^[a-fA-F0-9]+$/;

/**
 * Hook for updating input value
 * @param {string} hex
 * @return {array}
 */
export function useHexInput(hex) {
	const [inputValue, setInputValue] = useState(hex);

	const handleNewInputValue = value => {
		const match = value.match(HEX_REGEX);

		setInputValue(match ? match[0] : '');
	};

	return [inputValue, handleNewInputValue];
}
