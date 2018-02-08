import {Geomap as GeomapComponent} from '../Geomap';
import {JSXDataManager, JSXRenderer} from 'metal-jsx';

/**
 * Geomap  component for use with JSX.
 * @extends Geomap
 */
class Geomap extends GeomapComponent {
	/**
	 * @inheritDoc
	 */
	render() {
		const state = this.getState();
		const style = `width:${state.width_};height:${state.height_}`;

		return <div style={style} />;
	}
}

Geomap.DATA_MANAGER = JSXDataManager;
Geomap.PROPS = GeomapComponent.STATE;
Geomap.RENDERER = JSXRenderer;

export {Geomap};
export default Geomap;
