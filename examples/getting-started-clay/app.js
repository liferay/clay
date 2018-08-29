import ClayBadge from 'clay-badge';
import ClayButton from 'clay-button';
import './app.scss';

let counter = 0;

const clayBadge = new ClayBadge(
	{
		label: '0',
	},
	'#clayBadge'
);

new ClayButton(
	{
		label: 'Click',
		events: {
			click: function() {
				counter++;

				clayBadge.label = String(counter);
			},
		},
	},
	'#clayButton'
);
