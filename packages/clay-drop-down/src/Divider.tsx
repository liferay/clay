/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

const ClayDropDownDivider: React.FunctionComponent<React.HTMLAttributes<
	HTMLLIElement
>> = () => (
	<li aria-hidden="true" className="dropdown-divider" role="presentation" />
);

export default ClayDropDownDivider;
