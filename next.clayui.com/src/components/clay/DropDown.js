/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDropDown from '@clayui/drop-down';
import Editor from './Editor';
import React, {useState} from 'react';

const spritemap = '/images/icons/icons.svg';

const dropDownCode = `const Component = () => {
	const [active, setActive] = useState(false);

	return (
		<ClayDropDown
			trigger={<button className="btn btn-primary">Click here!</button>}
			active={active}
			onActiveChange={setActive}
		>
			<ClayDropDown.Help>{'Can I help you?'}</ClayDropDown.Help>
			<ClayDropDown.ItemList>
				<ClayDropDown.Group header="Group #1">
					{[
						{href: '#one', label: 'one'},
						{href: '#two', label: 'two'},
						{href: '#three', label: 'three'},
					].map((item, i) => (
						<ClayDropDown.Item href={item.href} key={i}>
							{item.label}
						</ClayDropDown.Item>
					))}
				</ClayDropDown.Group>
			</ClayDropDown.ItemList>
			<ClayDropDown.Caption>{'... or maybe not.'}</ClayDropDown.Caption>
		</ClayDropDown>
	);
}

render(<Component />)`;

const DropDown = () => {
	const scope = {ClayDropDown, spritemap, useState};
	return <Editor code={dropDownCode} scope={scope} />;
};

export {
	DropDown,
};
