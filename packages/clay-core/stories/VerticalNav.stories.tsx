/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClaySticker from '@clayui/sticker';
import React, {useState} from 'react';

import {VerticalNav} from '../src';

type Item = {
	id: string;
	href?: string;
	label: string;
	active?: boolean;
	items?: Array<Item>;
};

const items = [
	{
		id: '1',
		items: [
			{
				href: '#',
				id: '2',
				label: 'Nested1',
			},
		],
		label: 'Home',
	},
	{
		href: '#',
		id: '3',
		label: 'About',
	},
	{
		href: '#',
		id: '4',
		label: 'Contact',
	},
	{
		id: '5',
		items: [
			{
				href: '#',
				id: '6',
				label: 'Five',
			},
			{
				href: '#',
				id: '7',
				label: 'Six',
			},
		],
		label: 'Projects',
	},
	{
		href: '#',
		id: '8',
		label: 'Seven',
	},
] as Array<Item>;

const items_long = [
	{label: 'Summary'},
	{
		items: [
			{label: 'General Permissions'},
			{
				items: [
					{label: 'Users and Organizations'},
					{label: 'User Groups'},
					{label: 'Roles'},
					{label: 'Monitoring'},
				],
				label: 'Users',
			},
			{
				items: [{label: 'Sites'}, {label: 'Site Templates'}],
				label: 'Sites',
			},
			{
				items: [
					{label: 'Accounts'},
					{label: 'Account Users'},
					{label: 'Account Groups'},
				],
				label: 'Accounts',
			},
			{
				items: [
					{label: 'Push Notifications'},
					{label: 'Components'},
					{label: 'Custom Fields'},
					{label: 'Language Override'},
					{label: 'Job Scheduler'},
					{label: 'Countries Management'},
				],
				label: 'Configuration',
			},
			{
				items: [
					{label: 'Objects'},
					{label: 'Datasets'},
					{label: 'Picklists'},
				],
				label: 'Object',
			},
			{
				items: [{label: 'Templates'}, {label: 'Queue'}],
				label: 'Notifications',
			},
			{
				items: [
					{label: 'Audit'},
					{label: 'OAuth Client Administration'},
					{label: 'OAuth 2 Administration'},
					{label: 'Password Policies'},
					{label: 'SAML Admin'},
					{label: 'Server Logs'},
					{label: 'Service Access Policy'},
				],
				label: 'Security',
			},
			{
				items: [{label: 'On-Demand Admin'}],
				label: 'System',
			},
			{
				items: [{label: 'Purchased'}, {label: 'Store'}],
				label: 'Marketplace',
			},
		],
		label: 'Control Panel',
	},
	{
		items: [
			{
				items: [
					{label: 'Orders'},
					{label: 'Order Rules'},
					{label: 'Order Types'},
					{label: 'Shipments'},
					{label: 'Subscriptions'},
					{label: 'Terms and Conditions'},
				],
				label: 'Order Management',
			},
			{
				items: [{label: 'Inventory'}, {label: 'Warehouses'}],
				label: 'Inventory Management',
			},
			{
				items: [
					{label: 'Price Lists'},
					{label: 'Promotions'},
					{label: 'Discounts'},
					{label: 'Product Groups'},
					{label: 'Tax Categories'},
				],
				label: 'Pricing',
			},
			{
				items: [
					{label: 'Catalogs'},
					{label: 'Products'},
					{label: 'Options'},
					{label: 'Product Specification Labels'},
				],
				label: 'Product Management',
			},
			{
				items: [{label: 'Channels'}, {label: 'Currencies'}],
				label: 'Store Management',
			},
			{
				items: [
					{label: 'Availability Estimates'},
					{label: 'Countries'},
					{label: 'Measurement Units'},
					{label: 'Avalara Connector'},
					{label: 'Health Check'},
				],
				label: 'Settings',
			},
		],
		label: 'Commerce',
	},
	{
		items: [
			{
				items: [
					{label: 'Asset Libraries'},
					{label: 'Content Dashboard'},
				],
				label: 'Content',
			},
			{
				items: [{label: 'Publications'}],
				label: 'Publications',
			},
			{
				items: [{label: 'Metrics'}, {label: 'Submissions'}],
				label: 'Workflow',
			},
			{
				items: [{label: 'Blueprints'}],
				label: 'Search Experiences',
			},
			{
				items: [{label: 'Result Rankings'}, {label: 'Synonyms'}],
				label: 'Search Tuning',
			},
			{
				items: [{label: 'Announcements and Alerts'}],
				label: 'Communication',
			},
			{
				items: [{label: 'Client Extensions'}],
				label: 'Custom Apps',
			},
			{
				items: [{label: 'Import/Export Center'}],
				label: 'Import / Export',
			},
		],
		label: 'Applications Menu',
	},
	{
		items: [
			{
				items: [
					{label: 'Style Books'},
					{label: 'Fragments'},
					{label: 'Templates'},
					{label: 'Page Templates'},
				],
				label: 'Design',
			},
			{
				items: [
					{label: 'Pages'},
					{label: 'Navigation Menus'},
					{label: 'Collections'},
				],
				label: 'Site Builder',
			},
			{
				items: [
					{label: 'Kaleo Forms Admin'},
					{label: 'Web Content'},
					{label: 'Blogs'},
					{label: 'Bookmarks'},
					{label: 'Documents and Media'},
					{label: 'Dynamic Data Lists'},
					{label: 'Forms'},
					{label: 'Digital Signature'},
					{
						label: 'Dynamic Data Mapping Data Provider Web',
					},
					{label: 'Knowledge Base'},
					{label: 'Message Boards'},
					{label: 'Wiki'},
					{label: 'Translation Processes'},
				],
				label: 'Content & Data',
			},
			{
				items: [{label: 'Categories'}, {label: 'Tags'}],
				label: 'Categorization',
			},
			{
				items: [{label: 'Recycle Bin'}],
				label: 'Recycle Bin',
			},
			{
				items: [
					{label: 'Memberships'},
					{label: 'Teams'},
					{label: 'Segments'},
				],
				label: 'People',
			},
			{
				items: [
					{label: 'Reports Admin'},
					{label: 'Site Template Settings'},
					{label: 'Site Settings'},
					{label: 'Redirection'},
					{label: 'Asset Library Settings'},
					{label: 'Workflow'},
				],
				label: 'Configuration',
			},
			{
				items: [
					{label: 'Staging'},
					{label: 'Export'},
					{label: 'Import'},
					{label: 'Site Initializer'},
				],
				label: 'Publishing',
			},
			{
				items: [
					{label: 'Account Management'},
					{label: 'Activities'},
					{label: 'Alerts'},
					{label: 'Announcements'},
					{label: 'Asset Publisher'},
					{label: 'Blogs'},
					{label: 'Blogs Aggregator'},
					{label: 'Blueprints Options'},
					{label: 'Bookmarks'},
					{label: 'Breadcrumb'},
					{label: 'Calendar'},
					{label: 'Cart'},
					{label: 'Cart Summary'},
					{label: 'Category Content'},
					{label: 'Category Facet'},
					{label: 'Category Filter'},
					{label: 'Chart Sample'},
					{label: 'Checkout'},
					{label: 'Classic Theme Style Guide Sample'},
					{label: 'Clay Sample'},
					{label: 'Commerce Addresses'},
					{label: 'Commerce Categories Navigation'},
					{
						label: 'Commerce Machine Learning Forecast Alert',
					},
					{label: 'Contacts Center'},
					{label: 'Cookies Banner Configuration'},
					{label: 'Coupon Code Entry'},
					{label: 'Custom Facet'},
					{label: 'Custom Filter'},
					{label: 'Dialect Theme Style Guide Sample'},
					{label: 'Documents and Media'},
					{label: 'Dynamic Data Lists Display'},
					{label: 'Elasticsearch Monitoring'},
					{label: 'Folder Facet'},
					{label: 'Form'},
					{label: 'Hello Velocity'},
					{label: 'Highest Rated Assets'},
					{label: 'IFrame'},
					{label: 'Invite Members'},
					{label: 'IP Geocoder Sample'},
					{label: 'Knowledge Base Article'},
					{label: 'Knowledge Base Display'},
					{label: 'Knowledge Base Search'},
					{label: 'Knowledge Base Section'},
					{label: 'Language Selector'},
					{label: 'Low Level Search Options'},
					{label: 'Media Gallery'},
					{label: 'Members'},
					{label: 'Menu Display'},
					{label: 'Message Boards'},
					{label: 'Microblogs'},
					{label: 'Microblogs Status Update'},
					{label: 'Mini Cart'},
					{label: 'Modified Facet'},
					{label: 'Most Viewed Assets'},
					{label: 'My Contacts'},
					{label: 'My Sites'},
					{label: 'My Subscriptions'},
					{label: 'Nested Applications'},
					{label: 'Open Carts'},
					{label: 'Option Facet'},
					{label: 'Order Forecasts Chart'},
					{label: 'Organization Management'},
					{label: 'Page Comments'},
					{label: 'Page Flags'},
					{label: 'Page Menu'},
					{label: 'Page Ratings'},
					{label: 'Placed Orders'},
					{label: 'Price Range Facet'},
					{label: 'Product Comparison Bar'},
					{label: 'Product Comparison Table'},
					{label: 'Product Details'},
					{label: 'Product Downloads'},
					{label: 'Product Publisher'},
					{label: 'Product Subscriptions'},
					{label: 'Profile'},
					{label: 'Questions'},
					{label: 'Recent Bloggers'},
					{label: 'Recent Content'},
					{label: 'Related Assets'},
					{label: 'Reports Display'},
					{label: 'RSS Publisher'},
					{label: 'Search'},
					{label: 'Search Bar'},
					{label: 'Search Insights'},
					{label: 'Search Options'},
					{label: 'Search Results'},
					{label: 'Search Results'},
					{label: 'Shipments'},
					{label: 'Sign In'},
					{label: 'Similar Results'},
					{label: 'Site Facet'},
					{label: 'Site Map'},
					{label: 'Sites Directory'},
					{label: 'Sort'},
					{label: 'Sort'},
					{label: 'Specification Facet'},
					{label: 'Suggestions'},
					{label: 'Tag Cloud'},
					{label: 'Tag Facet'},
					{label: 'Tag Filter'},
					{label: 'Tree Menu'},
					{label: 'Type Facet'},
					{label: 'User Facet'},
					{label: 'Web Content Display'},
					{label: 'Wiki'},
					{label: 'Wiki Display'},
					{label: 'Wish List Content'},
					{label: 'Wish Lists'},
				],
				label: 'Applications',
			},
		],
		label: 'Site and Asset Library Administration',
	},
	{
		items: [
			{label: 'Notifications'},
			{label: 'Shared Content'},
			{label: 'My Submissions'},
			{label: 'My Workflow Tasks'},
			{label: 'Account Settings'},
			{label: 'My Connected Applications'},
			{label: 'My Organizations'},
			{label: 'My Subscriptions'},
		],
		label: 'User',
	},
];

export default {
	title: 'Design System/Components/VerticalNav',
};

export const Default = () => (
	<VerticalNav active="6" aria-label="vertical navbar" items={items}>
		{(item) => (
			<VerticalNav.Item href={item.href} items={item.items} key={item.id}>
				{item.label}
			</VerticalNav.Item>
		)}
	</VerticalNav>
);

const defaultExpandedKeys = ['Control Panel', 'Commerce', 'Applications Menu'];

export const ControlledExpandedKeys = () => {
	const [active] = useState('General Permissions');
	const [expandAll, setExpandAll] = useState(false);
	const [expandedKeys, setExpandedKeys] = useState<Set<React.Key>>(
		new Set(defaultExpandedKeys)
	);

	return (
		<>
			<Button
				onClick={() => {
					setExpandAll(!expandAll);
					setExpandedKeys(
						expandAll ? new Set(defaultExpandedKeys) : new Set()
					);
				}}
			>
				{expandAll ? 'Close All' : 'Expand All'}
			</Button>

			<VerticalNav
				active={active}
				aria-label="vertical navbar"
				expandedKeys={expandedKeys}
				items={items_long}
				onExpandedChange={setExpandedKeys}
			>
				{(item) => (
					<VerticalNav.Item items={item.items} key={item.label}>
						{item.label}
					</VerticalNav.Item>
				)}
			</VerticalNav>
		</>
	);
};

type ProductMenuItem = {
	id: string;
	href?: string;
	label: string;
	active?: boolean;
	icon?: string;
	itemClass?: string;
	sticker?: {
		displayType: string;
		label: string;
	};
	menubarAction?: {
		ariaLabel: string;
		title: string;
	};
	items?: Array<ProductMenuItem>;
};

const items_cms_product_menu = [
	{
		href: '#home',
		icon: 'home',
		label: 'Home',
	},
	{
		href: '#analytics',
		icon: 'analytics',
		label: 'Analytics',
	},
	{
		initialExpanded: true,
		itemClass: 'mt-3',
		items: [
			{
				href: '#all',
				icon: 'sheets',
				label: 'All',
			},
			{
				href: '#content',
				icon: 'catalog',
				label: 'Content',
			},
			{
				href: '#files',
				icon: 'documents-and-media',
				label: 'Files',
			},
		],
		label: 'Assets',
	},
	{
		href: '#shared-with-me',
		icon: 'users',
		itemClass: 'mt-3',
		label: 'Shared With Me',
	},
	{
		initialExpanded: true,
		itemClass: 'mt-3',
		items: [
			{
				href: '#structures',
				icon: 'edit-layout',
				label: 'Structures',
			},
			{
				href: '#collections',
				icon: 'books',
				label: 'Collections',
			},
			{
				href: '#categorization',
				icon: 'vocabulary',
				label: 'Categorization',
			},
			{
				href: '#workflow',
				icon: 'workflow',
				label: 'Workflow',
			},
		],
		label: 'Admin',
	},
	{
		initialExpanded: true,
		itemClass: 'mt-3',
		items: [
			{
				href: '#marketing',
				label: 'Marketing',
				sticker: {
					displayType: 'danger',
					label: 'M',
				},
			},
			{
				href: '#campaigns',
				label: 'Campaigns',
				sticker: {
					displayType: 'primary',
					label: 'C',
				},
			},
			{
				href: '#all-spaces',
				icon: 'box-container',
				label: 'All Spaces',
			},
		],
		label: 'Spaces',
		menubarAction: {
			ariaLabel: 'New Space',
			title: 'New Space',
		},
	},
	{
		href: '#recycle-bin',
		icon: 'trash',
		itemClass: 'mt-3',
		label: 'Recycle Bin',
	},
] as Array<ProductMenuItem>;

export const Primary = () => {
	return (
		<VerticalNav
			active="Home"
			aria-label="vertical navbar"
			displayType="primary"
			items={items_cms_product_menu}
		>
			{(item) => (
				<VerticalNav.Item
					href={item.href}
					initialExpanded={item.initialExpanded}
					items={item.items}
					key={item.label}
					menubarAction={item.menubarAction}
					textValue={item.label}
				>
					<div className="autofit-row">
						{item.sticker && (
							<ClaySticker
								displayType={item.sticker.displayType}
								size="sm"
							>
								{item.sticker.label}
							</ClaySticker>
						)}

						{item.icon && (
							<div className="autofit-col">
								<ClayIcon symbol={item.icon} />
							</div>
						)}

						<div className="autofit-col autofit-col-expand">
							{item.label}
						</div>
					</div>
				</VerticalNav.Item>
			)}
		</VerticalNav>
	);
};
