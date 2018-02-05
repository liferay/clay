import {Geomap} from '../Geomap';
import {JSXDataManager, JSXRenderer} from 'metal-jsx';

/**
 * Geomap  component for use with JSX.
 * @extends Geomap
 */
class GeomapJSX extends Geomap {
	/**
	 * @inheritDoc
	 */
	render() {
		const state = this.getState();
		const style = `width:${state.width_};height:${state.height_}`;

		return <div style={style} />;
	}
}

GeomapJSX.DATA_MANAGER = JSXDataManager;
GeomapJSX.PROPS = Geomap.STATE;
GeomapJSX.RENDERER = JSXRenderer;

export {GeomapJSX};
export default GeomapJSX;
