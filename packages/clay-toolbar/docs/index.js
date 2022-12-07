/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import {ClayDropDownWithItems} from '@clayui/drop-down';
import {ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayToolbar from '@clayui/toolbar';
import React from 'react';

const toolbarImportsCode = `import ClayToolbar from '@clayui/toolbar';`;

const ToolbarCode = `const Component = () => {
    return (
        <ClayToolbar>
			<ClayToolbar.Nav>
				<ClayToolbar.Item>
					<ClayToolbar.Action
						aria-label="Previous"
						disabled
						href="#"
						spritemap={spritemap}
						symbol="angle-left"
						title="Previous"
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
						aria-label="Next"
						title="Next"
						disabled
						href="#"
						spritemap={spritemap}
						symbol="angle-right"
					/>
				</ClayToolbar.Item>

				<ClayToolbar.Item>
					<ClayToolbar.Action
						aria-label="Close"
						title="Close"
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

const complexToolbarImportsCode = `import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import ClayIcon from '@clayui/icon';
import {ClayInput} from '@clayui/form';
import {ClayDropDownWithItems} from '@clayui/drop-down';
import ClayToolbar from '@clayui/toolbar';`;

const ComplexToolbarCode = `const Component = () => {
	return (
		<ClayToolbar>
			<ClayToolbar.Nav>
				<ClayToolbar.Item className="text-left" expand>
					<ClayToolbar.Section>
						<label className="component-title">{'Foo Bar'}</label>

						<ClayIcon spritemap={spritemap} symbol="lock" />
					</ClayToolbar.Section>
				</ClayToolbar.Item>

				<ClayToolbar.Item>
					<ClayInput.Group>
						<ClayInput.GroupItem>
							<ClayInput className="form-control-inline" placeholder="Search..." />
						</ClayInput.GroupItem>
					</ClayInput.Group>
				</ClayToolbar.Item>

				<ClayToolbar.Item>
					<ClayToolbar.Section>
						<ClayButton.Group>
							<ClayButtonWithIcon
								aria-label="Previous"
								title="Previous"
								displayType="secondary"
								onClick={() => {}}
								small
								spritemap={spritemap}
								symbol="angle-left"
							/>

							<ClayButtonWithIcon
								aria-label="Next"
								title="Next"
								displayType="secondary"
								onClick={() => {}}
								small
								spritemap={spritemap}
								symbol="angle-right"
							/>
						</ClayButton.Group>
					</ClayToolbar.Section>
				</ClayToolbar.Item>

				<ClayToolbar.Item>
					<ClayToolbar.Section>
						<ClayButton displayType="secondary" onClick={() => {}}>
							{'Delete'}
						</ClayButton>

						<ClayButton className="inline-item-after" onClick={() => {}}>
							{'Edit'}
						</ClayButton>
					</ClayToolbar.Section>
				</ClayToolbar.Item>

				<ClayToolbar.Item>
					<ClayDropDownWithItems
						items={[
							{href: '#one', label: 'one'},
							{href: '#two', label: 'two'},
							{disabled: true, href: '#three', label: 'three'},
							{href: '#four', label: 'four'},
						]}
						spritemap={spritemap}
						trigger={
							<ClayButtonWithIcon
								aria-label="More Actions"
								title="More Actions"
								displayType="unstyled"
								small
								spritemap={spritemap}
								symbol="ellipsis-v"
							/>
						}
					/>
				</ClayToolbar.Item>
			</ClayToolbar.Nav>
		</ClayToolbar>
	)
};

render(<Component />);`;

export const ComplexToolbar = () => {
	const scope = {
		ClayButton,
		ClayButtonWithIcon,
		ClayDropDownWithItems,
		ClayIcon,
		ClayInput,
		ClayToolbar,
	};

	return (
		<Editor
			code={ComplexToolbarCode}
			imports={complexToolbarImportsCode}
			scope={scope}
		/>
	);
};
