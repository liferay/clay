/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAlert from '@clayui/alert';
import {ClayButtonWithIcon} from '@clayui/button';
import parserBabylon from 'prettier/parser-babylon';
import prettier from 'prettier/standalone';
import React, {useState} from 'react';
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live';

import theme from '../../utils/react-live-theme';

const spritemap = '/images/icons/icons.svg';

const Editor = ({code, disabled = false, imports, preview = true, scope}) => {
	try {
		code = prettier.format(code, {
			parser: 'babel',
			plugins: [parserBabylon],
		});
	} catch (e) {
		// eslint-disable-next-line
		console.log(e);
	}

	const [collapseCode, setCollapseCode] = useState(false);

	return (
		<LiveProvider
			code={code}
			disabled={disabled}
			noInline
			scope={scope}
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

					{!collapseCode && (
						<>
							{imports && <LiveEditor disabled value={imports} />}

							<LiveEditor />
						</>
					)}
				</div>
			</div>
		</LiveProvider>
	);
};

export default Editor;
