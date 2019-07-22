/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import React, {useEffect, useRef, useState} from 'react';
import {useFocusManagement} from '@clayui/shared';

type ConfigMaxMin = {
	max: number;
	min: number;
};

type ConfigAmpm = {
	am: string;
	pm: string;
};

type Config = {
	ampm: ConfigAmpm;
	hours: ConfigMaxMin;
	minutes: ConfigMaxMin;
};

export type InputAmPm = '--' | 'AM' | 'PM';

export type Input = {
	ampm?: InputAmPm;
	hours: '--' | string;
	minutes: '--' | string;
};

enum TimeType {
	minutes = 'minutes',
	hours = 'hours',
	ampm = 'ampm',
}

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Range settings for 12 or 24 hours.
	 */
	config?: {
		use12Hours: Config;
		use24Hours: Config;
	};

	/**
	 * Flag to disable user interactions on the component.
	 */
	disabled?: boolean;

	/**
	 * Flag to indicate if show time icon or not.
	 */
	icon?: boolean;

	/**
	 * Called when input values change hour, minutes or ampm.
	 */
	onInputChange: (values: Input) => void;

	/**
	 * Sets the values for the hour, minute, or am/pm input.
	 */
	values: Input;

	/**
	 * The path to the SVG spritemap file containing the icons.
	 */
	spritemap?: string;

	/**
	 * Flag to indicate the timezone of the user.
	 */
	timezone?: string;

	/**
	 * Flag to indicate if 12-hour use, when true, should show am/pm input.
	 */
	use12Hours?: boolean;
}

const KEY_BACKSPACE = 8;
const KEY_ARROWRIGHT = 39;
const KEY_ARROWLEFT = 37;
const KEY_ARROWUP = 38;
const KEY_ARROWDOWN = 40;
const DEFAULT_VALUE = '--';
const DEFAULT_CONFIG = {
	use12Hours: {
		ampm: {
			am: 'AM',
			pm: 'PM',
		},
		hours: {
			max: 11,
			min: 0,
		},
		minutes: {
			max: 59,
			min: 0,
		},
	},
	use24Hours: {
		ampm: {
			am: 'AM',
			pm: 'PM',
		},
		hours: {
			max: 23,
			min: 0,
		},
		minutes: {
			max: 59,
			min: 0,
		},
	},
};

const ClayTimePicker: React.FunctionComponent<IProps> = ({
	config = DEFAULT_CONFIG,
	disabled = false,
	icon = false,
	spritemap,
	timezone,
	use12Hours = false,
	values = {
		hours: DEFAULT_VALUE,
		minutes: DEFAULT_VALUE,
	},
	onInputChange = () => {},
}) => {
	const useConfig: Config = config[use12Hours ? 'use12Hours' : 'use24Hours'];
	const [actionVisible, setActionVisible] = useState(false);
	const [isFocused, setIsFocused] = useState();
	const elementRef = useRef<null | HTMLDivElement>(null);
	const focusManager = useFocusManagement(true);
	const defaultFocused = {
		configName: TimeType.hours,
		focused: false,
	};
	const focusedRef = useRef<{
		configName: TimeType;
		focused: boolean;
	}>(defaultFocused);
	const regex = /^\d+$/;

	const handleMaxAndMin = (value: string, config: ConfigMaxMin) => {
		const newValue = value.substring(value.length - 2, value.length);
		const intrinsicValue = Number(newValue);

		if (intrinsicValue > config.max) {
			return String(config.min);
		} else if (intrinsicValue < config.min) {
			return String(config.max);
		}

		return newValue;
	};

	const handleFocusManagement = (event: React.KeyboardEvent<any>) => {
		const {keyCode} = event;

		if (keyCode === KEY_ARROWRIGHT) {
			focusManager.focusNext();
		} else if (keyCode === KEY_ARROWLEFT) {
			focusManager.focusPrevious();
		}
	};

	const handleKeyDown = (
		event: React.KeyboardEvent<HTMLInputElement>,
		value: string,
		configName: TimeType
	) => {
		const config = useConfig[configName];
		const intrinsicValue = Number(value);
		const setValue = (newValue: string | number) =>
			onInputChange({
				...values,
				// eslint-disable-next-line sort-keys
				[configName]:
					configName === TimeType.ampm
						? newValue
						: handleMaxAndMin(
								String(newValue),
								config as ConfigMaxMin
						  ),
			});

		switch (event.keyCode) {
			case KEY_BACKSPACE:
				setValue(DEFAULT_VALUE);
				break;
			case KEY_ARROWUP:
				if (configName === TimeType.ampm) {
					setValue((config as ConfigAmpm).pm);
				} else {
					setValue(
						value !== DEFAULT_VALUE
							? intrinsicValue + 1
							: (config as ConfigMaxMin).min
					);
				}
				break;
			case KEY_ARROWDOWN:
				if (configName === TimeType.ampm) {
					setValue((config as ConfigAmpm).am);
				} else {
					setValue(
						value !== DEFAULT_VALUE
							? intrinsicValue - 1
							: (config as ConfigMaxMin).max
					);
				}
				break;
			default:
				if (regex.test(event.key) && configName !== TimeType.ampm) {
					setValue(
						(value && value !== DEFAULT_VALUE ? value : '') +
							event.key
					);
				}
				break;
		}
	};

	const handleAction = (direction: number) => {
		const {configName} = focusedRef.current;
		const config = useConfig[configName];
		const prevValue = values[configName];
		let value;

		if (configName === TimeType.ampm) {
			value =
				direction === 1
					? (config as ConfigAmpm).pm
					: (config as ConfigAmpm).am;
		} else {
			value = handleMaxAndMin(
				String(
					prevValue !== DEFAULT_VALUE
						? Number(prevValue) + direction
						: direction === -1
						? (config as ConfigMaxMin).max
						: 0
				),
				config as ConfigMaxMin
			);
		}

		onInputChange({
			...values,
			// eslint-disable-next-line sort-keys
			[configName]: value,
		});
	};

	const handleDocumentClick = (event: Event) => {
		if (
			elementRef.current &&
			event.target !== null &&
			!elementRef.current.contains(event.target as HTMLDivElement)
		) {
			focusedRef.current = defaultFocused;
			setActionVisible(false);
			setIsFocused(false);
		}
	};

	const handleInputFocus = (configName: TimeType) => {
		focusedRef.current = {
			configName,
			focused: true,
		};
		setIsFocused(true);
		setActionVisible(true);
	};

	useEffect(() => {
		document.addEventListener('click', handleDocumentClick);

		return () => {
			document.removeEventListener('click', handleDocumentClick);
		};
	}, []);

	const visibleActionReset =
		actionVisible &&
		((values.ampm !== DEFAULT_VALUE && values.ampm != null) ||
			values.hours !== DEFAULT_VALUE ||
			values.minutes !== DEFAULT_VALUE);

	return (
		<div className="clay-time">
			<div className="input-group">
				{icon && (
					<div className="input-group-item input-group-item-shrink">
						<div className="input-group-text">
							<ClayIcon spritemap={spritemap} symbol="time" />
						</div>
					</div>
				)}
				<div
					className="input-group-item input-group-item-shrink"
					onKeyDown={handleFocusManagement}
				>
					<div
						className={classNames('form-control', {
							disabled,
							focus: isFocused,
						})}
						data-testid="formControl"
						onMouseEnter={() => {
							if (!disabled) {
								setActionVisible(true);
							}
						}}
						onMouseLeave={() => {
							if (!focusedRef.current.focused && !disabled) {
								setActionVisible(false);
							}
						}}
						ref={elementRef}
					>
						<div className="clay-time-edit">
							<input
								className="clay-time-hours form-control-inset"
								data-testid="hours"
								disabled={disabled}
								maxLength={2}
								onFocus={() => handleInputFocus(TimeType.hours)}
								onKeyDown={event =>
									handleKeyDown(
										event,
										values.hours,
										TimeType.hours
									)
								}
								ref={ref =>
									focusManager.createScope(ref, 'hour')
								}
								type="text"
								value={values.hours}
							/>
							<span className="clay-time-divider">{':'}</span>
							<input
								className="clay-time-minutes form-control-inset"
								data-testid="minutes"
								disabled={disabled}
								maxLength={2}
								onFocus={() =>
									handleInputFocus(TimeType.minutes)
								}
								onKeyDown={event =>
									handleKeyDown(
										event,
										values.minutes,
										TimeType.minutes
									)
								}
								ref={ref =>
									focusManager.createScope(ref, 'minutes')
								}
								type="text"
								value={values.minutes}
							/>
							{use12Hours && (
								<input
									className="clay-time-ampm form-control-inset"
									data-testid="ampm"
									disabled={disabled}
									max-length="2"
									onFocus={() =>
										handleInputFocus(TimeType.ampm)
									}
									onKeyDown={event =>
										handleKeyDown(
											event,
											values.ampm as InputAmPm,
											TimeType.ampm
										)
									}
									ref={ref =>
										focusManager.createScope(ref, 'ampm')
									}
									type="text"
									value={values.ampm || DEFAULT_VALUE}
								/>
							)}
						</div>
						<div className="clay-time-action-group">
							<div
								className="clay-time-action-group-item"
								data-testid="containerReset"
								style={{
									opacity: visibleActionReset ? 1 : 0,
									pointerEvents: visibleActionReset
										? 'auto'
										: 'none',
								}}
							>
								<ClayButton
									className="clay-time-clear-btn"
									disabled={disabled}
									displayType="unstyled"
									onClick={() =>
										onInputChange(
											use12Hours
												? {
														ampm: DEFAULT_VALUE,
														hours: DEFAULT_VALUE,
														minutes: DEFAULT_VALUE,
												  }
												: {
														hours: DEFAULT_VALUE,
														minutes: DEFAULT_VALUE,
												  }
										)
									}
								>
									<ClayIcon
										spritemap={spritemap}
										symbol="times-circle"
									/>
								</ClayButton>
							</div>
							<div
								className="clay-time-action-group-item"
								data-testid="containerSpin"
								style={{
									opacity: actionVisible ? 1 : 0,
								}}
							>
								<div
									className="btn-group-vertical clay-time-inner-spin"
									role="group"
								>
									<ClayButton
										className="clay-time-inner-spin-btn clay-time-inner-spin-btn-inc"
										data-testid="spinInc"
										disabled={disabled}
										displayType="secondary"
										onClick={() => handleAction(1)}
									>
										<ClayIcon
											spritemap={spritemap}
											symbol="angle-up"
										/>
									</ClayButton>
									<ClayButton
										className="clay-time-inner-spin-btn clay-time-inner-spin-btn-dec"
										data-testid="spinDec"
										disabled={disabled}
										displayType="secondary"
										onClick={() => handleAction(-1)}
									>
										<ClayIcon
											spritemap={spritemap}
											symbol="angle-down"
										/>
									</ClayButton>
								</div>
							</div>
						</div>
					</div>
				</div>
				{timezone && (
					<div className="input-group-item input-group-item-shrink">
						<span className="input-group-text">{`(${timezone})`}</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default ClayTimePicker;
