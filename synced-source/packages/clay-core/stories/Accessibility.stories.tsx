/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Alert from '@clayui/alert';
import Autocomplete from '@clayui/autocomplete';
import Breadcrumb from '@clayui/breadcrumb';
import Button from '@clayui/button';
import {
	ClayCardWithHorizontal as CardWithHorizontal,
	ClayCardWithInfo as CardWithInfo,
} from '@clayui/card';
import Icon from '@clayui/icon';
import Label from '@clayui/label';
import Link from '@clayui/link';
import Nav, {ClayVerticalNav as VerticalNav} from '@clayui/nav';
import NavigationBar from '@clayui/navigation-bar';
import {ClayPaginationWithBasicItems as PaginationWithBasicItems} from '@clayui/pagination';
import Tabs from '@clayui/tabs';
import React from 'react';

import {Heading} from '../src/typography';

export default {
	title: 'Design System/Internal Use Only/Accessibility',
};

export const UnderlinedLinks = () => (
	<div className="c-prefers-link-underline">
		<Heading fontSize={5} level={2}>
			Links
		</Heading>
		<Link href="#link-styles">Default</Link>
		<Link displayType="primary" href="#link-styles">
			Primary
		</Link>
		<Link displayType="secondary" href="#link-styles">
			Secondary
		</Link>
		<Link displayType="danger" href="#link-styles">
			Danger
		</Link>
		<Link displayType="tertiary" href="#link-styles">
			Tertiary
		</Link>
		<Link displayType="unstyled" href="#link-styles">
			Unstyled
		</Link>

		<Heading fontSize={5} level={2}>
			Pagination
		</Heading>
		<PaginationWithBasicItems
			active={8}
			ellipsisBuffer={2}
			ellipsisProps={{
				'aria-label': 'More {0} through {1}',
				title: 'More {0} through {1}',
			}}
			hrefConstructor={(page) => `#${page}`}
			totalPages={25}
		/>

		<Heading fontSize={5} level={2}>
			Navigation Bar
		</Heading>
		<NavigationBar triggerLabel="Item 1">
			<NavigationBar.Item active>
				<Link href="#">Item 1</Link>
			</NavigationBar.Item>

			<NavigationBar.Item>
				<Link href="#">Item 3</Link>
			</NavigationBar.Item>
		</NavigationBar>

		<Heading fontSize={5} level={2}>
			Nav
		</Heading>
		<Nav>
			<Nav.Item>
				<Nav.Link active href="#">
					Active
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="#">Normal</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link disabled href="#">
					Disabled
				</Nav.Link>
			</Nav.Item>
		</Nav>

		<Heading fontSize={5} level={2}>
			VerticalNav
		</Heading>
		<VerticalNav
			aria-label="vertical navbar"
			items={[
				{
					items: [
						{
							href: '#',
							label: 'Nested1',
						},
					],
					label: 'Home',
				},
				{
					href: '#',
					label: 'About',
				},
				{
					href: '#',
					label: 'Contact',
				},
				{
					initialExpanded: true,
					items: [
						{
							active: true,
							href: '#',
							label: 'Five',
						},
						{
							href: '#',
							label: 'Six',
						},
					],
					label: 'Projects',
				},
				{
					href: '#',
					label: 'Seven',
				},
			]}
			trigger={(props) => (
				<VerticalNav.Trigger {...props}>
					<Icon
						focusable="false"
						role="presentation"
						symbol="ellipsis-v"
					/>
				</VerticalNav.Trigger>
			)}
		/>

		<Heading fontSize={5} level={2}>
			Label
		</Heading>
		<Label displayType="secondary" href="#foo">
			Label
		</Label>

		<Heading fontSize={5} level={2}>
			Card
		</Heading>
		<div className="row">
			<div className="col-md-4">
				<CardWithInfo
					description="A cool description"
					href="#"
					labels={[
						{
							displayType: 'success',
							value: 'Awesome',
						},
					]}
					stickerProps={{
						title: 'File',
					}}
					title="Very Large File"
				/>
			</div>
			<div className="col-md-4">
				<CardWithHorizontal href="#" title="Very Large Folder" />
			</div>
		</div>

		<Heading fontSize={5} level={2}>
			Breadcrumb
		</Heading>
		<Breadcrumb
			items={[
				{
					href: '#1',
					label: 'Home',
				},
				{
					href: '#2',
					label: 'About',
				},
				{
					href: '#3',
					label: 'Contact',
				},
				{
					href: '#4',
					label: 'Projects',
				},
				{
					href: '#5',
					label: 'Five',
				},
				{
					href: '#6',
					label: 'Six',
				},
				{
					href: '#7',
					label: 'Seven',
				},
				{
					href: '#8',
					label: 'Eight',
				},
				{
					href: '#9',
					label: 'Nine',
				},
				{
					href: '#10',
					label: 'Ten',
				},
				{
					active: true,
					href: '#11',
					label: 'Eleven',
				},
			]}
		/>

		<Heading fontSize={5} level={2}>
			Alert
		</Heading>
		<Alert displayType="info" variant="feedback">
			News on the{' '}
			<a className="alert-link" href="#">
				blog
			</a>
		</Alert>
	</div>
);

export const TextSpacing = () => (
	<div className="c-prefers-letter-spacing-1">
		<Heading fontSize={5} level={2}>
			Links
		</Heading>
		<Link href="#link-styles">Default</Link>
		<Link displayType="primary" href="#link-styles">
			Primary
		</Link>
		<Link displayType="secondary" href="#link-styles">
			Secondary
		</Link>
		<Link displayType="danger" href="#link-styles">
			Danger
		</Link>
		<Link displayType="tertiary" href="#link-styles">
			Tertiary
		</Link>
		<Link displayType="unstyled" href="#link-styles">
			Unstyled
		</Link>

		<Heading fontSize={5} level={2}>
			Pagination
		</Heading>
		<PaginationWithBasicItems
			active={8}
			ellipsisBuffer={2}
			ellipsisProps={{
				'aria-label': 'More {0} through {1}',
				title: 'More {0} through {1}',
			}}
			hrefConstructor={(page) => `#${page}`}
			totalPages={25}
		/>

		<Heading fontSize={5} level={2}>
			Navigation Bar
		</Heading>
		<NavigationBar triggerLabel="Item 1">
			<NavigationBar.Item active>
				<Link href="#">Item 1</Link>
			</NavigationBar.Item>

			<NavigationBar.Item>
				<Link href="#">Item 3</Link>
			</NavigationBar.Item>
		</NavigationBar>

		<Heading fontSize={5} level={2}>
			Nav
		</Heading>
		<Nav>
			<Nav.Item>
				<Nav.Link active href="#">
					Active
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="#">Normal</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link disabled href="#">
					Disabled
				</Nav.Link>
			</Nav.Item>
		</Nav>

		<Heading fontSize={5} level={2}>
			VerticalNav
		</Heading>
		<VerticalNav
			aria-label="vertical navbar"
			items={[
				{
					items: [
						{
							href: '#',
							label: 'Nested1',
						},
					],
					label: 'Home',
				},
				{
					href: '#',
					label: 'About',
				},
				{
					href: '#',
					label: 'Contact',
				},
				{
					initialExpanded: true,
					items: [
						{
							active: true,
							href: '#',
							label: 'Five',
						},
						{
							href: '#',
							label: 'Six',
						},
					],
					label: 'Projects',
				},
				{
					href: '#',
					label: 'Seven',
				},
			]}
			trigger={(props) => (
				<VerticalNav.Trigger {...props}>
					<Icon
						focusable="false"
						role="presentation"
						symbol="ellipsis-v"
					/>
				</VerticalNav.Trigger>
			)}
		/>

		<Heading fontSize={5} level={2}>
			Label
		</Heading>
		<Label displayType="secondary" href="#foo">
			Label
		</Label>

		<Heading fontSize={5} level={2}>
			Card
		</Heading>
		<div className="row">
			<div className="col-md-4">
				<CardWithInfo
					description="A cool description"
					href="#"
					labels={[
						{
							displayType: 'success',
							value: 'Awesome',
						},
					]}
					stickerProps={{
						title: 'File',
					}}
					title="Very Large File"
				/>
			</div>
			<div className="col-md-4">
				<CardWithHorizontal href="#" title="Very Large Folder" />
			</div>
		</div>

		<Heading fontSize={5} level={2}>
			Breadcrumb
		</Heading>
		<Breadcrumb
			items={[
				{
					href: '#1',
					label: 'Home',
				},
				{
					href: '#2',
					label: 'About',
				},
				{
					href: '#3',
					label: 'Contact',
				},
				{
					href: '#4',
					label: 'Projects',
				},
				{
					href: '#5',
					label: 'Five',
				},
				{
					href: '#6',
					label: 'Six',
				},
				{
					href: '#7',
					label: 'Seven',
				},
				{
					href: '#8',
					label: 'Eight',
				},
				{
					href: '#9',
					label: 'Nine',
				},
				{
					href: '#10',
					label: 'Ten',
				},
				{
					active: true,
					href: '#11',
					label: 'Eleven',
				},
			]}
		/>

		<Heading fontSize={5} level={2}>
			Alert
		</Heading>
		<Alert displayType="info" variant="feedback">
			News on the{' '}
			<a className="alert-link" href="#">
				blog
			</a>
		</Alert>

		<Heading fontSize={5} level={2}>
			Autocomplete
		</Heading>
		<div className="row">
			<div className="col-md-5">
				<div className="form-group">
					<label
						htmlFor="clay-autocomplete-1"
						id="clay-autocomplete-label-1"
					>
						Numbers (one-five)
					</label>
					<Autocomplete
						aria-labelledby="clay-autocomplete-label-1"
						id="clay-autocomplete-1"
						placeholder="Enter a number from One to Five"
					>
						{['one', 'two', 'three', 'four', 'five'].map((item) => (
							<Autocomplete.Item key={item}>
								{item}
							</Autocomplete.Item>
						))}
					</Autocomplete>
				</div>
			</div>
		</div>

		<Heading fontSize={5} level={2}>
			Button
		</Heading>
		<Button>Button</Button>
	</div>
);

export const ExpandedText = () => (
	<div className="c-prefers-expanded-text">
		<Heading fontSize={5} level={2}>
			Tabs
		</Heading>
		<Tabs>
			<Tabs.List>
				<Tabs.Item>
					ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
				</Tabs.Item>
				<Tabs.Item>
					ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
				</Tabs.Item>
				<Tabs.Item>
					ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
				</Tabs.Item>
			</Tabs.List>
			<Tabs.Panels>
				<Tabs.TabPanel>Tab Content 1</Tabs.TabPanel>
				<Tabs.TabPanel>Tab Content 2</Tabs.TabPanel>
				<Tabs.TabPanel>Tab Content 3</Tabs.TabPanel>
			</Tabs.Panels>
		</Tabs>

		<Heading fontSize={5} level={2}>
			Card
		</Heading>
		<div className="row">
			<div className="col-md-4">
				<CardWithInfo
					description="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual"
					href="#"
					labels={[
						{
							displayType: 'success',
							value: 'Awesome',
						},
					]}
					stickerProps={{
						title: 'File',
					}}
					title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual"
				/>
			</div>
			<div className="col-md-4">
				<CardWithHorizontal
					href="#"
					title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual"
				/>
			</div>
		</div>

		<Heading fontSize={5} level={2}>
			Navigation Bar
		</Heading>
		<NavigationBar triggerLabel="Item 1">
			<NavigationBar.Item active>
				<Link href="#">
					ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
				</Link>
			</NavigationBar.Item>
			<NavigationBar.Item>
				<Link href="#">
					ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
				</Link>
			</NavigationBar.Item>
			<NavigationBar.Item>
				<Link href="#">
					ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
				</Link>
			</NavigationBar.Item>
		</NavigationBar>
	</div>
);
