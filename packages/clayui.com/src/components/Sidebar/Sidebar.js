import React, { Component } from 'react';
import Search from './Search';
import Navigation from './Navigation';
import Link, { withPrefix } from 'gatsby-link';

class Sidebar extends Component { 
	_handleOnClick() {
		this.refs.navElement.classList.toggle('toggler-expanded');
	}

	render() {
		const { sectionsList, location } = this.props;

		return(
			<div>
				<div className="navbar navbar-mobile navbar-expand-lg navbar-header">
					<Link to="/" className="navbar-brand d-flex">
						<img className="logo mr-2" src={withPrefix('/images/clay_logo_w.png')} alt="" />
						<span className="title h1 font-weight-bold mb-0 p-1">Clay </span>
					</Link>

					<button onClick={this._handleOnClick.bind(this)} className="navbar-toggler sidebar-toggler p-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<svg aria-hidden="true" className="lexicon-icon lexicon-icon-bars">
							<use xlinkHref={withPrefix("/images/icons/icons.svg#bars")} />
						</svg>
					</button>
				</div>

				<nav ref="navElement" className="sidebar-toggler-content sidenav-fixed sidenav-menu-slider" id="clay-sidebar">
					<div className="sidebar sidebar-clay-site sidenav-menu d-flex flex-column">
						<div className="sidebar-header">
							<div className="navbar navbar-expand-lg navbar-header">
								<Link className="navbar-brand" to="/">
									<img className="logo mr-2" src={withPrefix("/images/clay_logo_w.png")} alt="Clay" />
									<span className="title">Clay </span>
									<small>by Liferay</small>
								</Link>
							</div>
						</div>

						<div className="sidebar-body mb-auto">
							<div className="sidebar-search">
								<Search placeholder="Search" />
							</div>

							<Navigation sectionList={sectionsList} location={location} />
						</div>
						<ul className="nav-icons">
							<li className="d-block mb-3">
								<a className="rounded-circle sticker sticker-secondary" href="https://github.com/liferay/clay/issues" target="_blank">
									<svg aria-hidden="true" className="lexicon-icon lexicon-icon-bars">
										<use xlinkHref={withPrefix("/images/icons/icons.svg#comments")} />
									</svg>
								</a>
							</li>
							<li className="d-block">
								<a className="rounded-circle sticker sticker-secondary" href="https://github.com/liferay/clay" target="_blank">
									<img className="lexicon-icon" src={withPrefix("/images/home/GitHub-Mark-64px.svg")} alt="" />
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Sidebar;