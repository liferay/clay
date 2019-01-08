import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders Hue component
 */
class Hue extends React.Component {
	/** @inheritdoc */
	constructor(props) {
		super(props);

		this._container = React.createRef();

		this.state = {
			left: 0,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleMouseUp = this.handleMouseUp.bind(this);
		this.unbindEventListeners = this.unbindEventListeners.bind(this);
	}

	/** @inheritdoc */
	componentWillUnmount() {
		this.unbindEventListeners();
	}

	/** @inheritdoc */
	componentDidMount() {
		this.setInitialCoordinates(this.props.value);
	}

	/** @inheritdoc */
	componentWillReceiveProps(nextProps) {
		this.setInitialCoordinates(nextProps.value);
	}

	/**
	 * Sets the intial left value
	 * @param {number} hue
	 */
	setInitialCoordinates(hue) {
		const container = this._container.current;

		const containerRect = container.getBoundingClientRect();

		const newLeft = (hue / 360) * containerRect.width;

		this.setState({
			left: newLeft,
		});
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

		const selectedHue = (left / containerRect.width) * 360;

		this.props.onChange(selectedHue);

		this.setState({
			left: left,
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
	 * Handles unbinding mouse events
	 */
	unbindEventListeners() {
		window.removeEventListener('mousemove', this.handleChange);
		window.removeEventListener('mouseup', this.handleMouseUp);
	}

	/** @inheritdoc */
	render() {
		const {left} = this.state;
		const {value} = this.props;

		return (
			<div
				className="hue-selector"
				onMouseDown={this.handleMouseDown}
				onTouchMove={this.handleChange}
				onTouchStart={this.handleChange}
				ref={this._container}
			>
				<span
					className="pointer"
					style={{
						left: left - 7,
						background: `hsl(${value}, 100%, 50%)`,
					}}
				/>
			</div>
		);
	}
}

Hue.propTypes = {
	value: PropTypes.number,
	onChange: PropTypes.func,
};

Hue.defaultProps = {
	value: 0,
	onChange: () => {},
};

export default Hue;
