import React, { Component } from 'react';

class ThemeToggle extends Component {
	constructor(props) {
		super(props);

		let inputChecked = true;

		if (typeof window !== 'undefined') {
			inputChecked = localStorage.getItem('show-atlas') === 'false' ? false : true;

			document.getElementById('clayCSSTheme').setAttribute('href', localStorage.getItem('clay-css-source') || '/css/atlas.css');
		}

		this.state = {
			checked: inputChecked,
		};
	}

	componentDidMount() {
		this.setState({
			checked: localStorage.getItem('show-atlas') === 'false' ? false : true,
		});
	}

	handleResetSettings(event) {
		if (window.confirm('Clear Site Settings?')) {
			localStorage.removeItem('show-atlas');
			localStorage.removeItem('clay-css-source');

			window.location.reload();
		}
	}

	handleThemeChange(event) {
		const input = event.currentTarget;

		if (input.checked) {
			localStorage.setItem('clay-css-source', '/css/atlas.css');
			localStorage.setItem('show-atlas', true);
		}
		else {
			localStorage.setItem('clay-css-source', '/css/base.css');
			localStorage.setItem('show-atlas', false);
		}

		this.setState({
			checked: input.checked,
		});

		document.getElementById('clayCSSTheme').setAttribute('href', localStorage.getItem('clay-css-source') || '/css/atlas.css');
	}

	render() {
		return(
			<div id="themeToggle">
				<div className="custom-control custom-checkbox">
					<label>
						<input checked={this.state.checked} className="custom-control-input" onChange={this.handleThemeChange.bind(this)} type="checkbox" />
						<span className="custom-control-label">
							<span className="custom-control-label-text">Show Atlas</span>
						</span>
					</label>
				</div>

				<button className="btn btn-unstyled clay-site-reset-button" onClick={this.handleResetSettings.bind(this)} type="button">Reset Settings</button>
			</div>
		);
	}
}

export default ThemeToggle;