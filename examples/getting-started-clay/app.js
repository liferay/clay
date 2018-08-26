import ClayBadge from 'clay-badge';
import ClayButton from 'clay-button';
import './app.scss';

let counter = 0;

const clayBadge = new ClayBadge(
    {
        label: '0'
    },
    '#clayBadge'
);

const clayButton = new ClayButton(
    {
        label: 'Click',
        events: {
            click: increment
        }
    },
    '#clayButton'
);

function increment(event) {
    counter++;

    clayBadge.label = String(counter);
};