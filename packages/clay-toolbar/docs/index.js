/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayToolbar from '@clayui/toolbar';
import React from 'react';

const toolbarImportsCode = `import ClayToolbar from '@clayui/toolbar';`;

const ToolbarCode = `const Component = () => {
    return (
        <ClayToolbar>
			<ClayToolbar.Nav>
				<ClayToolbar.Item>
					<ClayToolbar.Action
						disabled
						href="#"
						spritemap={spritemap}
						symbol="angle-left"
					/>
				</ClayToolbar.Item>

				<ClayToolbar.Item expand>
					<ClayToolbar.Section>
						<span className="text-truncate-inline">
							<span className="text-truncate">
								{
									'Item 1 of 3,138,732,873,467,182,321,341,231,234,342,559,827,334,424'
								}
							</span>
						</span>
					</ClayToolbar.Section>
				</ClayToolbar.Item>

				<ClayToolbar.Item>
					<ClayToolbar.Link href="#">
						{'Component Link'}
					</ClayToolbar.Link>
				</ClayToolbar.Item>

				<ClayToolbar.Item>
					<ClayToolbar.Action
						disabled
						href="#"
						spritemap={spritemap}
						symbol="angle-right"
					/>
				</ClayToolbar.Item>

				<ClayToolbar.Item>
					<ClayToolbar.Action
						disabled
						href="#"
						spritemap={spritemap}
						symbol="times"
					/>
				</ClayToolbar.Item>
			</ClayToolbar.Nav>
		</ClayToolbar>
    );
}

render(<Component />)`;

export const Toolbar = () => {
	const scope = {ClayToolbar};
	const code = ToolbarCode;

	return <Editor code={code} imports={toolbarImportsCode} scope={scope} />;
};
