/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
import ClayForm, {ClayInput} from '@clayui/form';
import ClayMultiSelect from '../src';
import React from 'react';
import {boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

const ClayMultiSelectWithState = (props: any) => {
	const [value, setValue] = React.useState('');
	const [items, setItems] = React.useState(['one']);

	return (
		<ClayMultiSelect
			{...props}
			inputName="myInput"
			inputValue={value}
			items={items}
			onInputChange={setValue}
			onItemsChange={setItems}
			spritemap={spritemap}
		/>
	);
};

const ClayMultiSelectWithAutocomplete = () => {
	const [value, setValue] = React.useState('');
	const [selectedItems, setSelectedItems] = React.useState(['one']);

	const sourceItems = ['one', 'two', 'three', 'four'];

	return (
		<ClayMultiSelect
			inputName="myInput"
			inputValue={value}
			items={selectedItems}
			onInputChange={setValue}
			onItemsChange={setSelectedItems}
			sourceItems={sourceItems}
			spritemap={spritemap}
		/>
	);
};

storiesOf('Components|ClayMultiSelect', module)
	.add('default', () => (
		<ClayMultiSelectWithState
			disabled={boolean('Disabled all', false)}
			disabledClearAll={boolean('Disabled Clear All', false)}
			isValid={boolean('isValid', true)}
		/>
	))
	.add('InputWithMultiSelect w/ sourceItems', () => (
		<ClayMultiSelectWithAutocomplete />
	))
	.add('InputWithMultiSelect w/ group', () => {
		const isValid = boolean('isValid', true);

		return (
			<div className="sheet">
				<ClayForm.Group className={!isValid ? 'has-error' : ''}>
					<label>{'Composed MultiSelect'}</label>

					<ClayInput.Group>
						<ClayInput.GroupItem>
							<ClayMultiSelectWithState
								isValid={isValid}
								items={['one', 'two', 'three', 'four']}
							/>

							<ClayForm.FeedbackGroup>
								<ClayForm.Text>
									{'Simple help comment..'}
								</ClayForm.Text>
							</ClayForm.FeedbackGroup>

							{!isValid && (
								<ClayForm.FeedbackGroup>
									<ClayForm.FeedbackItem>
										<ClayForm.FeedbackIndicator
											spritemap={spritemap}
											symbol="info-circle"
										/>

										{'You made an error'}
									</ClayForm.FeedbackItem>
								</ClayForm.FeedbackGroup>
							)}
						</ClayInput.GroupItem>

						<ClayInput.GroupItem shrink>
							<ClayButton
								displayType="secondary"
								onClick={() => {}}
							>
								{'Select'}
							</ClayButton>
						</ClayInput.GroupItem>
					</ClayInput.Group>
				</ClayForm.Group>
			</div>
		);
	});
