import React from 'react';
import {geomap} from 'clay-charts-shared';

/**
 * GeoMap Chart component.
 * @extends React.Component
 * @param {Object} props
 * @return {ReactElement}
 */
export default class GeomapReact extends React.Component {
	/** @inheritdoc */
	constructor(props) {
		super(props);

		this._containerRef = React.createRef();
	}

	/** @inheritdoc */
	componentDidMount() {
		const {data, ...otherProps} = this.props;

		this._geoMapInstance = new geomap.Geomap({
			...otherProps,
			data: data.data,
			element: this._containerRef.current,
		});

		this._geoMapInstance.attached();
	}

	/** @inheritdoc */
	componentWillUnmount() {
		this._geoMapInstance.disposed();
	}

	/** @inheritdoc */
	render() {
		const {
			color,
			data,
			element,
			grid,
			line,
			point,
			pollingInterval,
			...otherProps
		} = this.props;

		const {height = '100%', width = '100%'} = this._geoMapInstance
			? this._geoMapInstance.getSize()
			: {};

		return (
			<div
				style={{height, width}}
				{...otherProps}
				ref={this._containerRef}
			/>
		);
	}
}
