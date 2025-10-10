import * as React from 'react';
import {render} from 'react-dom';
import '@clayui/css/lib/css/atlas.css';

function App() {
	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<h2>Add some clay components to see the magic happen!</h2>
		</div>
	);
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
