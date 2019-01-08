import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders GradientSelector component
 */
class GradientSelector extends React.Component {
	/** @inheritdoc */
	constructor(props) {
		super(props);

		this._container = React.createRef();

		this.state = {
			left: 0,
			top: 0,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleMouseUp = this.handleMouseUp.bind(this);
		this.unbindEventListeners = this.unbindEventListeners.bind(this);
	}

	/** @inheritdoc */
	componentDidMount() {
		this.setInitialCoordinates(this.props.color);
	}

	/** @inheritdoc */
	componentWillReceiveProps(nextProps) {
		this.setInitialCoordinates(nextProps.color);
	}

	/**
	 * Sets initial top/left coordinates
	 * @param {Object} color
	 */
	setInitialCoordinates(color) {
		const container = this._container.current;

		const containerRect = container.getBoundingClientRect();

		const {s, v} = color.toHsv();

		const newLeft = Math.round((s * 100 * containerRect.width) / 100);
		const newTop = Math.round(
			((v * 100 - 100) * -1 * containerRect.height) / 100
		);

		this.setState({
			left: newLeft,
			top: newTop,
		});
	}

	/** @inheritdoc */
	componentWillUnmount() {
		this.unbindEventListeners();
	}

	/**
	 * Handles the change event
	 * @param {Object} event
	 */
	handleChange(event) {
		const container = this._container.current;

		const containerRect = container.getBoundingClientRect();

		const x =
			typeof event.pageX === 'number'
				? event.pageX
				: event.touches[0].pageX;

		let left = x - (containerRect.left + window.pageXOffset);

		left =
			left < 0
				? 0
				: left > containerRect.width
					? containerRect.width
					: left;

		const y =
			typeof event.pageY === 'number'
				? event.pageY
				: event.touches[0].pageY;

		let top = y - (containerRect.top + window.pageYOffset);

		top =
			top < 0
				? 0
				: top > containerRect.height
					? containerRect.height
					: top;

		const saturation = Math.round((left * 100) / containerRect.width);
		const visibility = Math.round(
			-((top * 100) / containerRect.height) + 100
		);

		this.props.onChange(saturation, visibility);

		this.setState({
			left,
			top,
		});
	}

	/**
	 * Handles the mousedown event
	 * @param {Object} event
	 */
	handleMouseDown(event) {
		this.handleChange(event, true);

		window.addEventListener('mousemove', this.handleChange);
		window.addEventListener('mouseup', this.handleMouseUp);
	}

	/**
	 * Handles the mouseup event
	 */
	handleMouseUp() {
		this.unbindEventListeners();
	}

	/**
	 * Unbinds mouse events
	 */
	unbindEventListeners() {
		window.removeEventListener('mousemove', this.handleChange);
		window.removeEventListener('mouseup', this.handleMouseUp);
	}

	/** @inheritdoc */
	render() {
		const {left, top} = this.state;
		const {color, hue} = this.props;

		return (
			<div
				className="gradient-selector"
				style={{
					background: `hsl(${hue}, 100%, 50%)`,
				}}
				ref={this._container}
				onMouseDown={this.handleMouseDown}
				onTouchMove={this.handleChange}
				onTouchStart={this.handleChange}
			>
				<div className="light-gradient" />
				<div className="dark-gradient" />

				<span
					className="pointer"
					style={{
						top: top - 7,
						left: left - 7,
						background: color.toHexString(),
					}}
				/>
			</div>
		);
	}
}

GradientSelector.propTypes = {
	onChange: PropTypes.func,
	hue: PropTypes.number,
};

GradientSelector.defaultProps = {
	onChange: () => {},
	hue: 0,
};

export default GradientSelector;
