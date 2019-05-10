/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React from 'react';
import {boolean, select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import 'clay-css/lib/css/atlas.css';
import ClayButton from '../src';

storiesOf(`ClayButton`, module)
	.add(`default`, () => (
		<ClayButton
			block={boolean(`Block`, false) as false}
			disabled={boolean(`Disabled`, false) as false}
			displayType={
				select(
					`Display Type`,
					{
						link: `link`,
						primary: `primary`,
						secondary: `secondary`,
						unstyled: `unstyled`,
					},
					`primary`
				) as `primary`
			}
			monospaced={boolean(`Monospaced`, false) as false}
			small={boolean(`Small`, false) as false}
		>
			{text(`children`, `Click Me`)}
		</ClayButton>
	))
	.add(`button group`, () => (
		<ClayButton.Group>
			<ClayButton>{`This`}</ClayButton>
			<ClayButton displayType="secondary">{`is`}</ClayButton>
			<ClayButton>{`a`}</ClayButton>
			<ClayButton displayType="secondary">{`button`}</ClayButton>
			<ClayButton>{`group.`}</ClayButton>
		</ClayButton.Group>
	));
