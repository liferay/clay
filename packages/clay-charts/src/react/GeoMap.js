import React from 'react';
import {Geomap} from '../util/geo-map';

export default class GeomapReact extends React.Component {
	constructor(props) {
		super(props);

		this._containerRef = React.createRef();
	}
	componentDidMount() {
		this._geoMapInstance = new Geomap({
			...this.props,
			element: this._containerRef.current,
		});

		this._geoMapInstance.attached();
	}

	/**
	 * @inheritDoc
	 */
	componentWillUnmount() {
		this._geoMapInstance.disposed();
	}

	render() {
		const {data, element, color, pollingInterval, ...otherProps} = this.props;

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
