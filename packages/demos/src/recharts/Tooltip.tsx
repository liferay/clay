/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import * as React from 'react';
import {TooltipPayload, TooltipProps} from 'recharts';

const defaultRenderer = (item: TooltipPayload) => {
	if (item.payload) {
		item = item.payload;
	}

	return (
		<div key={item.name}>
			<span
				style={{
					backgroundColor: item.fill || (item as any).stroke,
					display: 'inline-block',
					height: 10,
					marginRight: 6,
					width: 10,
				}}
			/>

			{`${item.name}: ${item.value}`}
		</div>
	);
};

interface IProps extends TooltipProps {
	labelRenderer?: (val?: string | number) => React.ReactNode;
	itemRenderer?: (val: any) => React.ReactNode;
}

const ClayRechartsTooltip = ({
	active,
	label,
	payload,
	labelRenderer = (val) => val,
	itemRenderer = defaultRenderer,
}: IProps) => {
	if (active) {
		return (
			<div className="popover" style={{position: 'static'}}>
				<div className="popover-header">{labelRenderer(label)}</div>

				<div className="popover-body">
					{payload && payload.map(itemRenderer)}
				</div>
			</div>
		);
	}

	return null;
};

export default ClayRechartsTooltip;
