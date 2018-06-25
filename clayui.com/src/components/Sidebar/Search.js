import React, { Component } from 'react';
import Link from "gatsby-link";

class Search extends Component {
	state = {
		enabled: true
	};

	componentDidMount() {
		if (window.docsearch) {
			window.docsearch({
				apiKey: 'bc205a621e5176b8720081c2a3de450c',
				indexName: 'clay',
				inputSelector: '#algolia-doc-search',
			});
		} else {
			this.setState({enabled: false});
		}
	}

	render() {
		const { placeholder } = this.props;

		return(
			<div className="page-autocomplete">
				<div className="form-group">
					<div className="input-group">
						<input
							className="form-control"
							id="algolia-doc-search"
							name="q"
							placeholder={placeholder}
							required
							type="text"
						/>

						<span className="input-group-addon">
							<svg className="lexicon-icon">
								<use xlinkHref="/images/icons/icons.svg#search" />
							</svg>
						</span>
					</div>
				</div>
			</div>
		);
	}	
}

export default Search;