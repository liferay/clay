/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, {useState} from 'react';

import {ClayRadio, ClayRadioGroup} from '../src';

export default {
	component: ClayRadioGroup,
	title: 'Design System/Components/Radio',
};
export function Default(args: any) {
	const [value, setValue] = useState<string>('one');

	return (
		<div style={{width: '300px'}}>
			<ClayRadioGroup
				inline={args.inline}
				onSelectedValueChange={(val) => setValue(val as string)}
				selectedValue={value}
			>
				<ClayRadio label="One" value="one" />

				<ClayRadio label="Two" value="two" />

				<ClayRadio label="Three" value="three" />

				<ClayRadio
					label="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual"
					value="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual"
				/>
			</ClayRadioGroup>
		</div>
	);
}

Default.args = {
	inline: false,
};
