/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayRadioGroup from '../src';
import React from 'react';
import {storiesOf} from '@storybook/react';

import 'clay-css/lib/css/atlas.css';

const RadioGroupWithState = ({inline}: {inline?: boolean}) => {
	const [value, setValue] = React.useState<string>(`one`);

	return (
		<ClayRadioGroup
			inline={inline}
			onSelectedValueChange={val => setValue(val as string)}
			selectedValue={value}
		>
			<ClayRadioGroup.Radio label="One" value="one" />
			<ClayRadioGroup.Radio label="Two" value="two" />
			<ClayRadioGroup.Radio label="Three" value="three" />
		</ClayRadioGroup>
	);
};

storiesOf(`ClayRadioGroup`, module)
	.add(`default`, () => <RadioGroupWithState />)
	.add(`inline`, () => <RadioGroupWithState inline />);
