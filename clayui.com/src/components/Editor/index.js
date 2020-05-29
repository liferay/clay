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

const spritemap = '/images/icons/icons.svg';

function formatCode(code) {
	try {
		return prettier.format(code, {
			parser: 'babel',
			plugins: [parserBabylon],
		});
	} catch (e) {
		// eslint-disable-next-line
		console.log(e);

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
	let reactSnippet = {
		code: '',
		format: true,
		name: 'React',
	};

	if (Array.isArray(code)) {
		const codeToFormat = [...code];

		codeToFormat.forEach((snippet) => {
			if (snippet.format) {
				snippet.code = formatCode(snippet.code);
			}
		});

		code = codeToFormat;

		reactSnippet = code[0];
	} else {
		code = formatCode(code);

		reactSnippet.code = code;
	}

	const [collapseCode, setCollapseCode] = useState(false);
	const [activeTabKeyValue, setActiveTabKeyValue] = React.useState(0);

	return (
		<LiveProvider
			code={reactSnippet.code}
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
					<ClayButtonWithIcon
						className="btn-copy"
						displayType="unstyled"
						small
						spritemap={spritemap}
						symbol={'paste'}
						title={'Copy'}
					/>

					<ClayButtonWithIcon
						className="btn-collapse"
						displayType="unstyled"
						onClick={() => setCollapseCode(!collapseCode)}
						small
						spritemap={spritemap}
						symbol={collapseCode ? 'angle-right' : 'angle-down'}
						title={collapseCode ? 'Expand' : 'Collapse'}
					/>

					{Array.isArray(code) ? (
						<>
							<ClayTabs modern>
								{code.map((snippet, index) => (
									<ClayTabs.Item
										active={activeTabKeyValue === index}
										innerProps={{
											'aria-controls': `tabpanel-${snippet.name}`,
										}}
										key={snippet.name}
										onClick={() =>
											setActiveTabKeyValue(index)
										}
									>
										{snippet.name}
									</ClayTabs.Item>
								))}
							</ClayTabs>

							{!collapseCode && (
								<ClayTabs.Content
									activeIndex={activeTabKeyValue}
									fade
								>
									{code.map((snippet) => (
										<ClayTabs.TabPane
											aria-labelledby={`tab-${snippet.name}`}
											key={snippet.name}
										>
											{snippet === reactSnippet &&
												imports && (
													<LiveEditor
														disabled
														value={imports}
													/>
												)}

											<LiveEditor
												disabled={
													snippet !== reactSnippet
												}
												value={snippet.code}
											/>
										</ClayTabs.TabPane>
									))}
								</ClayTabs.Content>
							)}
						</>
					) : (
						!collapseCode && (
							<>
								{imports && (
									<LiveEditor disabled value={imports} />
								)}

								<LiveEditor />
							</>
						)
					)}
				</div>
			</div>
		</LiveProvider>
	);
};

export default Editor;
