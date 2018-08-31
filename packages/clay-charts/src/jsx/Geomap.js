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
		const id = state.id;
		const style = `width:${state._width};height:${state._height}`;

		return <div {...id && {id}} style={style} />;
	}
}

Geomap.DATA_MANAGER = JSXDataManager;
Geomap.PROPS = GeomapComponent.STATE;
Geomap.RENDERER = JSXRenderer;

export {Geomap};
export default Geomap;
