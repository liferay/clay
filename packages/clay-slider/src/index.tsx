/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Flag that will disable component features.
	 */
	disabled?: boolean;

	/**
	 * Sets maximum permitted value.
	 */
	max?: number;

	/**
	 * Sets minimum permitted value
	 */
	min?: number;

	/**
	 * Callback will always be called when the slider value changes.
	 */
	onValueChange: (value: number) => void;

	/**
	 * Flag to show tooltip or not.
	 */
	showTooltip?: boolean;

	/**
	 * Sets stepping interval.
	 */
	step?: number;

	/**
	 * Set tooltip position.
	 */
	tooltipPosition?: 'top' | 'bottom';

	/**
	 * Set the current value of the slider.
	 */
	value: number;
}

const calcProgressWidth = (
	element: HTMLInputElement,
	thumbWidth: number,
	value: number,
	min: number,
	max: number,
	step: number
) => {
	const currentStep = (value - min) / step;
	const totalSteps = (max - min) / step;

	const progressWidth = (currentStep / totalSteps) * 100;
	const rangeWidth = element.clientWidth;

	const ratio =
		(((1 - progressWidth * 0.01) * (thumbWidth / 1.001)) / rangeWidth) *
		100;
	let offsetWidth = progressWidth;

	if (progressWidth !== 50) {
		offsetWidth =
			progressWidth - (thumbWidth / 2 / rangeWidth) * 100 + ratio;
	}

	return offsetWidth;
};

const ClaySlider: React.FunctionComponent<IProps> = ({
	className,
	disabled,
	max = 100,
	min = 0,
	onValueChange,
	showTooltip = true,
	step = 1,
	tooltipPosition = 'top',
	value,
	...otherProps
}: IProps) => {
	const [offsetWidth, setOffsetWidth] = React.useState<number>(0);
	const sliderRef = React.useRef<HTMLInputElement | null>(null);
	const thumbRef = React.useRef<HTMLDivElement | null>(null);

	React.useLayoutEffect(() => {
		if (sliderRef.current && thumbRef.current) {
			const thumbWidth = thumbRef.current.clientWidth;

			setOffsetWidth(
				calcProgressWidth(
					sliderRef.current,
					thumbWidth,
					value,
					min,
					max,
					step
				)
			);
		}
	}, [value]);

	return (
		<div className={classNames('clay-range', className, {disabled})}>
			<div className="clay-range-input">
				<input
					{...otherProps}
					className="form-control-range"
					disabled={disabled}
					max={max}
					min={min}
					onChange={(event) =>
						onValueChange(Number(event.target.value))
					}
					ref={sliderRef}
					step={step}
					type="range"
					value={value}
				/>
				<div className="clay-range-track" />
				<div
					className="clay-range-progress"
					style={{width: `${offsetWidth}%`}}
				>
					<div className="clay-range-thumb" ref={thumbRef}>
						{showTooltip && (
							<div
								className={classNames(
									'tooltip',
									`clay-tooltip-${tooltipPosition}`
								)}
								role="tooltip"
							>
								<div className="tooltip-arrow" />
								<div className="tooltip-inner">
									<div className="clay-range-value">
										{value}
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClaySlider;
