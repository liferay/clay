import {addDecorator, configure} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {withA11y} from '@storybook/addon-a11y';

// automatically import all files ending inside of `stories` directories
const req = require.context('../packages', true, /stories\/.*\.tsx$/);

function loadStories() {
	req.keys().forEach(req);
}

addDecorator(withKnobs);
addDecorator(withA11y);

configure(loadStories, module);
