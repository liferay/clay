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
		const loading = this.props._loading;

		return (
			<div class="metal-chart-container">
				<div
					class="metal-chart"
					ref="chart"
					{...loading && {hidden: 'hidden'}}
				/>
				<div ref="placeholder" {...!loading && {hidden: 'hidden'}}>
					<pre>loading...</pre>
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
