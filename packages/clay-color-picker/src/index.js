import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import Custom from './Custom';
import Basic from './Basic';
import Splotch from './Splotch';
import {HEX_REGEX, sub} from './util';
import './ColorPicker.scss';

const ESC_KEY_CODE = 27;

const DEFAULT_COLORS = [
	'#000000',
	'#5F5F5F',
	'#9A9A9A',
	'#CBCBCB',
	'#E1E1E1',
	'#FFFFFF',
	'#FF0D0D',
	'#FF8A1C',
	'#2BA676',
	'#006EF8',
	'#7F26FF',
	'#FF21A0',
	'#FF5F5F',
	'#FFB46E',
	'#50D2A0',
	'#4B9BFF',
	'#AF78FF',
	'#FF73C3',
	'#FFB1B1',
	'#FFDEC0',
	'#91E3C3',
	'#9DC8FF',
	'#DFCAFF',
	'#FFC5E6',
	'#FFD9D9',
	'#FFF3E8',
	'#B1EBD5',
	'#C5DFFF',
	'#F8F2FF',
	'#FFEDF7',
];

const DEFAULT_ARIA_LABELS = {
	selectionIs: 'Color selection is {0}',
	selectColor: 'Select a color',
};

ColorPicker.propTypes = {
	ariaLabels: PropTypes.shape({
		selectionIs: PropTypes.string,
		selectColor: PropTypes.string,
	}),
	colors: PropTypes.arrayOf(PropTypes.string),
	label: PropTypes.string,
	name: PropTypes.string,
	onColorsChange: PropTypes.func,
	onValueChange: PropTypes.func,
	showHex: PropTypes.bool,
	useNative: PropTypes.bool,
	value: PropTypes.string,
};

ColorPicker.defaultProps = {
	ariaLabels: DEFAULT_ARIA_LABELS,
	colors: null,
	onColorsChange: null,
	onValueChange: () => {},
	showHex: false,
	useNative: false,
	value: '#FFFFFF',
};

/**
 * Renders ColorPicker component
 * @return {React.Component}
 */
function ColorPicker({
	ariaLabels,
	colors,
	label,
	name,
	onColorsChange,
	onValueChange,
	showHex,
	useNative,
	value,
}) {
	const containerRef = useRef(null);
	const inputRef = useRef(null);
	const valueInputRef = useRef(null);

	const [active, setActive] = useState(false);
	const [inputValue, setInputValue] = useState(value.substring(1, 7));

	const handleNewInputValue = value => {
		const match = value.match(HEX_REGEX);

		setInputValue(match ? match[0] : '');
	};

	useEffect(
		() => {
			if (document.activeElement !== inputRef.current) {
				handleNewInputValue(value.substring(1, 7));
			}
		},
		[value]
	);

	useEffect(() => {
		const handleClick = event => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target)
			) {
				setActive(false);
			}
		};

		const handleEsc = event => {
			if (event.keyCode === ESC_KEY_CODE) {
				setActive(false);
			}
		};

		window.addEventListener('mousedown', handleClick, false);
		window.addEventListener('keydown', handleEsc, false);

		return () => {
			window.removeEventListener('keydown', handleEsc, false);
		};
	}, []);

	return (
		<div className="clay-color-picker" ref={containerRef}>
			{name && (
				<input
					name={name}
					onChange={e =>
						useNative ? onValueChange(e.target.value) : null
					}
					ref={valueInputRef}
					style={{display: 'none'}}
					type={useNative ? 'color' : 'text'}
					value={value}
				/>
			)}

			<div className="input-group">
				<div
					className={`input-group-item input-group-item-shrink${
						showHex ? ' input-group-prepend' : ''
					}`}
				>
					<span className="input-group-text input-group-text-secondary">
						<div className="open-control open-checkbox">
							<Splotch
								aria-label={ariaLabels.selectColor}
								className="btn btn-secondary"
								onClick={() =>
									useNative
										? valueInputRef.current.click()
										: setActive(!active)
								}
								value={value}
								size={28}
							/>
						</div>
					</span>
				</div>

				{showHex && (
					<React.Fragment>
						<div className="input-group-append input-group-item">
							<input
								aria-label={sub(ariaLabels.selectionIs, [
									value,
								])}
								className="form-control"
								value={
									'#' +
									inputValue.toUpperCase().substring(0, 6)
								}
								onChange={event => {
									const newInputValue = event.target.value;

									const newColor = tinycolor(newInputValue);

									handleNewInputValue(newInputValue);

									if (newColor.isValid()) {
										onValueChange(newColor.toHexString());
									}
								}}
								onBlur={event => {
									const newColor = tinycolor(
										event.target.value
									);

									const hexString = newColor.isValid()
										? newColor.toHexString()
										: value;

									onValueChange(hexString);
									handleNewInputValue(hexString);
								}}
								ref={inputRef}
								type="text"
							/>
						</div>
					</React.Fragment>
				)}
			</div>

			{active && (
				<div className="picker-overlay">
					{!onColorsChange && (
						<Basic
							colors={colors || DEFAULT_COLORS}
							label={label}
							onChange={onValueChange}
							value={value}
						/>
					)}

					{onColorsChange && (
						<Custom
							colors={colors.concat(
								Array(12 - colors.length).fill('#FFFFFF')
							)}
							label={label}
							onChange={onValueChange}
							onColorsChange={onColorsChange}
							value={value}
						/>
					)}
				</div>
			)}
		</div>
	);
}

export default ColorPicker;
