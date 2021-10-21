/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAlert from '@clayui/alert';
import {ClayButtonWithIcon} from '@clayui/button';
import ClayTabs from '@clayui/tabs';
import parserBabylon from 'prettier/parser-babylon';
import prettier from 'prettier/standalone';
import React, {useContext, useState} from 'react';
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live';

import theme from '../../utils/react-live-theme';
import useStateWithLocalStorage from '../Hooks/useStateWithLocalStorage';

const spritemap = '/images/icons/icons.svg';

function formatCode(code) {
	if (!code) {
		return;
	}

	try {
		return prettier.format(code, {
			parser: 'babel',
			plugins: [parserBabylon],
		});
	} catch (error) {
		// eslint-disable-next-line
		console.log(error, code);

		return;
	}
}

const Editor = ({
	code,
	disabled = false,
	imports,
	preview = true,
	scope = {},
}) => {
	if (Array.isArray(code)) {
		code = code.map(({code, format = true, ...other}) => {
			return {
				...other,
				code: format ? formatCode(code) : code,
			};
		});
	} else {
		code = [
			{
				disabled: false,
				imports,
				name: 'React',
				value: formatCode(code),
			},
		];
	}

	const [collapseCode, setCollapseCode] = useStateWithLocalStorage(
		true,
		'collapse-code'
	);
	const [activeIndex, setActiveIndex] = React.useState(0);
	const [snippets, setSnippets] = React.useState(code);

	return (
		<LiveProvider
			code={snippets[0].value}
			disabled={disabled}
			noInline
			scope={{spritemap, useContext, useState, ...scope}}
			theme={theme}
		>
			{preview && (
				<div className="sheet-example">
					<LivePreview />

					<LiveError />
				</div>
			)}

			<div className="gatsby-highlight">
				<ClayAlert
					className="copied-alert d-none"
					displayType="info"
					spritemap={spritemap}
					title="Copied!"
					variant="stripe"
				/>

				<div style={{padding: '10px'}}>
					{snippets.length === 1 && collapseCode && (
						<span className="align-items-center clay-p d-flex mt-0">
							Code Sample (expand to see it)
						</span>
					)}

					{!collapseCode && (
						<ClayButtonWithIcon
							className="btn-copy"
							displayType="unstyled"
							small
							spritemap={spritemap}
							symbol="paste"
							title="Copy"
						/>
					)}

					<ClayButtonWithIcon
						className="btn-collapse"
						displayType="unstyled"
						onClick={() => {
							setActiveIndex(0);

							setCollapseCode(!collapseCode);
						}}
						small
						spritemap={spritemap}
						symbol={collapseCode ? 'angle-right' : 'angle-down'}
						title={collapseCode ? 'Expand' : 'Collapse'}
					/>

					{snippets.length > 1 && (
						<ClayTabs modern>
							{snippets.map((snippet, index) => (
								<ClayTabs.Item
									active={
										!collapseCode && activeIndex === index
									}
									innerProps={{
										'aria-controls': `tabpanel-${snippet.name}`,
									}}
									key={snippet.name}
									onClick={() => {
										setCollapseCode(
											activeIndex === index
												? !collapseCode
												: false
										);

										setActiveIndex(index);
									}}
								>
									{snippet.name}
								</ClayTabs.Item>
							))}
						</ClayTabs>
					)}

					{!collapseCode && (
						<ClayTabs.Content activeIndex={activeIndex} fade>
							{snippets.map((snippet, index) => {
								return (
									<ClayTabs.TabPane
										aria-labelledby={`tab-${snippet.name}`}
										key={snippet.name}
									>
										{snippet.imports && (
											<LiveEditor
												disabled
												value={snippet.imports}
											/>
										)}

										<LiveEditor
											disabled={snippet.disabled}
											onValueChange={(value) => {
												const newSnippets = [
													...snippets,
												];

												newSnippets[index].value =
													value;

												setSnippets(newSnippets);
											}}
											value={snippet.value}
										/>
									</ClayTabs.TabPane>
								);
							})}
						</ClayTabs.Content>
					)}
				</div>
			</div>
		</LiveProvider>
	);
};

export default Editor;
