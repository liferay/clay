import React from 'react';
import {geomap} from 'clay-charts-shared';

export default class GeomapReact extends React.Component {
	constructor(props) {
		super(props);

		this._containerRef = React.createRef();
	}

	componentDidMount() {
		const {data, ...otherProps} = this.props;

		this._geoMapInstance = new geomap.Geomap({
			...otherProps,
			data: data.data,
			element: this._containerRef.current,
		});

		this._geoMapInstance.attached();
	}

	componentWillUnmount() {
		this._geoMapInstance.disposed();
	}

	render() {
		const {
			data,
			element,
			color,
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
