import { Link, StaticQuery, graphql } from 'gatsby';
import arrangeIntoTree from '../../utils/arrangeIntoTree';
import Navigation from './Navigation';
import React, {Component} from 'react';
import Search from './Search';

const SidebarRef = React.createRef();
const SideNavRef = React.createRef();

const onClick = () => {
	SidebarRef.current.classList.toggle('toggler-expanded');
}

const {GATSBY_CLAY_NIGHTLY} = process.env;

const getMap = (edges) => {
	return edges
		.filter(({node: {fields: {nightly}}}) => GATSBY_CLAY_NIGHTLY === 'true' ? true : !nightly)
		.map((
			{
				node: {
					fields: {
						layout,
						slug,
						title,
						weight,
					},
				},
			}
		) => {
			const slugWithoutExtension = slug.replace('.html', '');
			const pathSplit = slugWithoutExtension.split('/');

			return {
				id: pathSplit[pathSplit.length - 1],
				layout,
				link: '/' + slugWithoutExtension,
				title,
				weight,
			};
		});
}

const getSection = (data) => {
	const array = [...getMap(data.allMarkdownRemark.edges), ...getMap(data.allMdx.edges)];

	return arrangeIntoTree(array)[0].items;
}

let scrollTop = 0;

class SideNavScroll extends Component {
	onScroll(event) {
		scrollTop = event.currentTarget.scrollTop;
	}

	componentDidMount() {
		SideNavRef.current.scrollTop = scrollTop;
	}

	render() {
		return (
			<div
				ref={SideNavRef}
				onScroll={this.onScroll.bind(this)}
				className="sidebar sidebar-clay-site sidenav-menu d-flex flex-column"
			>
				{this.props.children}
			</div>
		);
	}
}

export default props => (
	<StaticQuery
		query={graphql`
			query {
				allMdx {
					edges {
						node {
							fields {
								layout
								slug
								title
								weight
							}
						}
					}
				}
				allMarkdownRemark {
					edges {
						node {
							fields {
								layout
								slug
								title
								weight
							}
						}
					}	
				}
			}
		`}
		render={data => (
			<>
				<div className="navbar navbar-mobile navbar-expand-lg navbar-header">
					<Link to="/" className="navbar-brand d-flex">
						<img className="logo mr-2" src="/images/clay_logo_w.png" alt="" />
						<span className="title h1 font-weight-bold mb-0 p-1">Clay </span>
					</Link>

					<button onClick={onClick} className="navbar-toggler sidebar-toggler p-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<svg aria-hidden="true" className="lexicon-icon lexicon-icon-bars">
							<use xlinkHref="/images/icons/icons.svg#bars" />
						</svg>
					</button>
				</div>

				<nav
					ref={SidebarRef}
					className="sidebar-toggler-content sidenav-fixed sidenav-menu-slider"
					id="clay-sidebar"
				>
					<SideNavScroll>
						<div className="sidebar-header">
							<div className="navbar navbar-expand-lg navbar-header">
								<Link className="navbar-brand" to="/">
									<img className="logo mr-2" src="/images/clay_logo_w.png" alt="Clay" />
									<span className="title">Clay </span>
									<small>by Liferay</small>
								</Link>
							</div>
						</div>

						<div className="sidebar-body mb-auto">
							<div className="sidebar-search">
								<Search placeholder="Search" />
							</div>

							<Navigation sectionList={getSection(data)} location={props.location} />
						</div>
					</SideNavScroll>
				</nav>
			</>
		)}
	/>
);
