import ChartBase from '../ChartBase';
import {JSXComponent} from 'metal-jsx';

/**
 * Metal Chart component for use with JSX.
 * @extends JSXComponent
 * @extends ChartBase
 */
class ChartJSX extends JSXComponent {
	/**
	 * @inheritDoc
	 */
	render() {
		const id = this.props.id;
		const loading = this.props._loading;

		return (
			<div class="metal-chart-container" {...id && {id}}>
				<div
					class="metal-chart"
					ref="chart"
					{...loading && {hidden: 'hidden'}}
				/>
				<div
					aria-hidden="true"
					class="loading-icon"
					ref="placeholder"
					{...!loading && {hidden: 'hidden'}}
				>
					<span class="loading-animation" />
				</div>
			</div>
		);
	}

	/**
	 * @inheritDoc
	 */
	shouldUpdate() {
		return false;
	}
}

Object.assign(ChartJSX.prototype, ChartBase);

/**
 * @inheritDoc
 */
ChartJSX.PROPS = ChartBase.STATE;

/**
 * @inheritDoc
 */
ChartJSX.prototype._getStateObj = function() {
	return this.props;
};

export {ChartJSX};
export default ChartJSX;
