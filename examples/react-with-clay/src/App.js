import React from 'react';
import ClayButton from 'clay-button';
import logo from './logo.svg';
import './App.css';
import 'clay-badge';

/**
 * @extends Component
 */
class App extends React.Component {
	/**
	 * @inheritDoc
	 */
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	/**
	 * @inheritDoc
	 */
	componentDidMount() {
		this.clayButton = new ClayButton(
			{
				label: 'Click (Instance)',
				style: 'secondary',
			},
			'#container'
		);

		this.clayButton.on('click', this.handleClickButton.bind(this));
	}

	/**
	 * @inheritDoc
	 */
	handleClickButton() {
		this.setState({
			count: this.state.count + 1,
		});
	}

	/**
	 * @inheritDoc
	 */
	componentWillUnmount() {
		this.clayButton.dispose();
		this.clayButton = null;
	}

	/**
	 * @inheritDoc
	 */
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<div className="App-desc">
					<p>
						<clay-badge label={`"${this.state.count}"`} />
					</p>
					<p id="container" className="App-intro">
						<clay-button
							label="Click (WebComponent)"
							onClick={this.handleClickButton.bind(this)}
						/>
					</p>
				</div>
			</div>
		);
	}
}

export default App;
