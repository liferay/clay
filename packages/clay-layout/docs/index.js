/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayLayout from '@clayui/layout';
import React from 'react';

const layoutImportCode = `import ClayLayout from '@clayui/layout';
`;

const ContainerCode = `const Component = () => {
	const colStyles = {
		backgroundColor: '#E7E7ED',
		border: '1px solid #CDCED9',
		paddingBottom: '.75rem',
		paddingTop: '.75rem',
	};

	return (
		<ClayLayout.ContainerFluid view>
			<ClayLayout.Row justify="start">
				<ClayLayout.Col size={4} style={colStyles}>{'One of two columns'}</ClayLayout.Col>
				<ClayLayout.Col size={4} style={colStyles}>{'One of two columns'}</ClayLayout.Col>
			</ClayLayout.Row>
			<ClayLayout.Row justify="center">
				<ClayLayout.Col size={4} style={colStyles}>{'One of two columns'}</ClayLayout.Col>
				<ClayLayout.Col size={4} style={colStyles}>{'One of two columns'}</ClayLayout.Col>
			</ClayLayout.Row>
			<ClayLayout.Row justify="end">
				<ClayLayout.Col size={4} style={colStyles}>{'One of two columns'}</ClayLayout.Col>
				<ClayLayout.Col size={4} style={colStyles}>{'One of two columns'}</ClayLayout.Col>
			</ClayLayout.Row>
			<ClayLayout.Row justify="around">
				<ClayLayout.Col size={4} style={colStyles}>{'One of two columns'}</ClayLayout.Col>
				<ClayLayout.Col size={4} style={colStyles}>{'One of two columns'}</ClayLayout.Col>
			</ClayLayout.Row>
			<ClayLayout.Row justify="between">
				<ClayLayout.Col size={4} style={colStyles}>{'One of two columns'}</ClayLayout.Col>
				<ClayLayout.Col size={4} style={colStyles}>{'One of two columns'}</ClayLayout.Col>
			</ClayLayout.Row>
		</ClayLayout.ContainerFluid>
	);
}

render(<Component />);`;

export const LayoutContainer = () => {
	const scope = {ClayLayout};
	const code = ContainerCode;

	return <Editor code={code} imports={layoutImportCode} scope={scope} />;
};

const AutofitCode = `const Component = () => {
	return (
		<ClayLayout.ContentRow padded>
			<ClayLayout.ContentCol>
				<div className="form-check">
					<label className="form-check-label">
						<input
							className="form-check-input"
							type="checkbox"
							value=""
						/>
					</label>
				</div>
			</ClayLayout.ContentCol>
			<ClayLayout.ContentCol expand>
				<ClayLayout.ContentSection>
					<h6>
						<span className="text-truncate-inline">
							<span className="text-truncate">
								{'Alberto Calvo, modified 2 hours ago.'}
							</span>
						</span>
					</h6>
					<p>
						<span className="text-truncate-inline">
							<a className="text-truncate" href="#1">
								{
									'ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual'
								}
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
	);
}

render(<Component />);`;

export const LayoutContent = () => {
	const scope = {ClayLayout};
	const code = AutofitCode;

	return <Editor code={code} imports={layoutImportCode} scope={scope} />;
};
