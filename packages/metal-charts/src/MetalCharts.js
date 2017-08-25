'use strict';

import templates from './MetalCharts.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class MetalCharts extends Component {
}
Soy.register(MetalCharts, templates);

export { MetalCharts };
export default MetalCharts;
