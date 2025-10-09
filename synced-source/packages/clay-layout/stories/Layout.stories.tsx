/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayCheckbox} from '@clayui/form';
import React from 'react';

import ClayLayout from '../src';

export default {
	component: ClayLayout,
	title: 'Design System/Components/Layout',
};

const exampleStyles = {
	backgroundColor: '#E7E7ED',
	border: '1px solid #CDCED9',
	paddingBottom: '.75rem',
	paddingTop: '.75rem',
};

const ClayDemoColumn = (props: any) => (
	<ClayLayout.Col style={exampleStyles} {...props} />
);

export const RowPositioning = () => (
	<ClayLayout.ContainerFluid view>
		<ClayLayout.Row justify="start">
			<ClayDemoColumn size={4}>One of two columns</ClayDemoColumn>
			<ClayDemoColumn size={4}>One of two columns</ClayDemoColumn>
		</ClayLayout.Row>
		<ClayLayout.Row justify="center">
			<ClayDemoColumn size={4}>One of two columns</ClayDemoColumn>
			<ClayDemoColumn size={4}>One of two columns</ClayDemoColumn>
		</ClayLayout.Row>
		<ClayLayout.Row justify="end">
			<ClayDemoColumn size={4}>One of two columns</ClayDemoColumn>
			<ClayDemoColumn size={4}>One of two columns</ClayDemoColumn>
		</ClayLayout.Row>
		<ClayLayout.Row justify="around">
			<ClayDemoColumn size={4}>One of two columns</ClayDemoColumn>
			<ClayDemoColumn size={4}>One of two columns</ClayDemoColumn>
		</ClayLayout.Row>
		<ClayLayout.Row justify="between">
			<ClayDemoColumn size={4}>One of two columns</ClayDemoColumn>
			<ClayDemoColumn size={4}>One of two columns</ClayDemoColumn>
		</ClayLayout.Row>
	</ClayLayout.ContainerFluid>
);

export const Breakpoints = () => (
	<ClayLayout.ContainerFluid view>
		<ClayLayout.Row>
			<ClayDemoColumn sm={8}>col-sm-8</ClayDemoColumn>
			<ClayDemoColumn sm={4}>col-sm-4</ClayDemoColumn>
		</ClayLayout.Row>
		<ClayLayout.Row>
			<ClayDemoColumn sm>col-sm</ClayDemoColumn>
			<ClayDemoColumn sm>col-sm</ClayDemoColumn>
			<ClayDemoColumn sm>col-sm</ClayDemoColumn>
		</ClayLayout.Row>
	</ClayLayout.ContainerFluid>
);

export const Ordering = () => (
	<ClayLayout.ContainerFluid view>
		<ClayLayout.Row>
			<ClayDemoColumn>First, but unordered</ClayDemoColumn>
			<ClayDemoColumn className="order-12">
				Second, but last
			</ClayDemoColumn>
			<ClayDemoColumn className="order-1">
				Third, but first
			</ClayDemoColumn>
		</ClayLayout.Row>
	</ClayLayout.ContainerFluid>
);

export const MixAndMatch = () => (
	<ClayLayout.ContainerFluid view>
		<ClayLayout.Row>
			<ClayDemoColumn md={8} size={12}>
				.col-12 .col-md-8
			</ClayDemoColumn>
			<ClayDemoColumn md={4} size={6}>
				.col-6 .col-md-4
			</ClayDemoColumn>
		</ClayLayout.Row>

		<ClayLayout.Row>
			<ClayDemoColumn md={4} size={6}>
				.col-6 .col-md-4
			</ClayDemoColumn>
			<ClayDemoColumn md={4} size={6}>
				.col-6 .col-md-4
			</ClayDemoColumn>
			<ClayDemoColumn md={4} size={6}>
				.col-6 .col-md-4
			</ClayDemoColumn>
		</ClayLayout.Row>

		<ClayLayout.Row>
			<ClayDemoColumn size={6}>.col-6</ClayDemoColumn>
			<ClayDemoColumn size={6}>.col-6</ClayDemoColumn>
		</ClayLayout.Row>
	</ClayLayout.ContainerFluid>
);

export const Sidebar = () => (
	<ClayLayout.ContainerFluid view>
		<ClayLayout.Row>
			<ClayLayout.Col md={3}>
				<div style={{...exampleStyles, height: 600, padding: 24}}>
					Sidebar
				</div>
			</ClayLayout.Col>

			<ClayLayout.Col md={9}>
				<div style={{...exampleStyles, height: 600, padding: 24}}>
					Content
				</div>
			</ClayLayout.Col>
		</ClayLayout.Row>
	</ClayLayout.ContainerFluid>
);

export const Content = () => (
	<ClayLayout.Sheet>
		<ClayLayout.ContentRow padded>
			<ClayLayout.ContentCol>
				<ClayCheckbox checked onChange={() => {}} />
			</ClayLayout.ContentCol>
			<ClayLayout.ContentCol expand>
				<ClayLayout.ContentSection>
					<h6>
						<span className="text-truncate-inline">
							<span className="text-truncate">
								Alberto Calvo, modified 2 hours ago.
							</span>
						</span>
					</h6>
					<p>
						<span className="text-truncate-inline">
							<a className="text-truncate" href="#1">
								ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
							</a>
						</span>
					</p>
				</ClayLayout.ContentSection>
			</ClayLayout.ContentCol>
			<ClayLayout.ContentCol>
				<svg
					className="lexicon-icon lexicon-icon-ellipsis-v"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#ellipsis-v" />
				</svg>
			</ClayLayout.ContentCol>
		</ClayLayout.ContentRow>
	</ClayLayout.Sheet>
);
