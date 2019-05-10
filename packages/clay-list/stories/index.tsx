/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayCheckbox from '@clayui/checkbox';
import ClayIcon from '@clayui/icon';
import ClayList from '../src';
import ClaySticker from '@clayui/sticker';
import React from 'react';
import {select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import 'clay-css/lib/css/atlas.css';

const spritemap = require('clay-css/lib/images/icons/icons.svg');

storiesOf('ClayList', module)
	.add('simple', () => (
		<ClayList>
			<ClayList.Header>{'This is a header'}</ClayList.Header>
			<ClayList.Item flex>
				<ClayList.ItemField>{'Item 1'}</ClayList.ItemField>

				<ClayList.ItemField>{'ItemField'}</ClayList.ItemField>

				<ClayList.ItemField expand>
					<ClayList.ItemTitle>{`Item Title and expanded`}</ClayList.ItemTitle>
					<ClayList.ItemText>{'Item Text'}</ClayList.ItemText>
				</ClayList.ItemField>

				<ClayList.ItemField>{'ItemField'}</ClayList.ItemField>
			</ClayList.Item>

			<ClayList.Item flex>
				<ClayList.ItemField>{'Item 2'}</ClayList.ItemField>
				<ClayList.ItemField expand>
					{'Hover this item for action menu'}
				</ClayList.ItemField>
				<ClayList.ItemField>
					<ClayList.QuickActionMenu>
						<ClayList.QuickActionMenu.Item
							onClick={() => alert('Clicked the trash!')}
							spritemap={spritemap}
							symbol="trash"
						/>

						<ClayList.QuickActionMenu.Item
							onClick={() => alert('Clicked the cog!')}
							spritemap={spritemap}
							symbol="cog"
						/>
					</ClayList.QuickActionMenu>
				</ClayList.ItemField>
			</ClayList.Item>

			<ClayList.Header>{'This is another header'}</ClayList.Header>
			<ClayList.Item flex>
				<ClayList.ItemField>{'Item 3'}</ClayList.ItemField>

				<ClayList.ItemField>{'ItemField'}</ClayList.ItemField>
			</ClayList.Item>
		</ClayList>
	))
	.add('complex', () => {
		const activeIndex = select(
			'Active Index',
			{
				1: 1,
				2: 2,
				3: 3,
				4: 4,
			},
			1
		);

		return (
			<ClayList>
				{[1, 2, 3, 4].map(item => (
					<ClayList.Item
						active={item === activeIndex}
						flex
						key={item}
					>
						<ClayList.ItemField>
							<ClayCheckbox
								aria-label="checkbox"
								checked={item === activeIndex}
								onChange={() => {}}
							/>
						</ClayList.ItemField>

						<ClayList.ItemField>
							<ClaySticker displayType="secondary">
								<ClayIcon
									spritemap={spritemap}
									symbol="folder"
								/>
							</ClaySticker>
						</ClayList.ItemField>

						<ClayList.ItemField expand>
							<ClayList.ItemTitle>
								{`Toggle knob ${item}`}
							</ClayList.ItemTitle>

							<ClayList.ItemText>
								{'This is subtitle information...'}
							</ClayList.ItemText>
						</ClayList.ItemField>

						<ClayList.ItemField>
							<ClayList.QuickActionMenu>
								<ClayList.QuickActionMenu.Item
									onClick={() => alert('Clicked the trash!')}
									spritemap={spritemap}
									symbol="trash"
								/>

								<ClayList.QuickActionMenu.Item
									onClick={() => alert('Clicked the cog!')}
									spritemap={spritemap}
									symbol="cog"
								/>
							</ClayList.QuickActionMenu>
						</ClayList.ItemField>
					</ClayList.Item>
				))}
			</ClayList>
		);
	});
