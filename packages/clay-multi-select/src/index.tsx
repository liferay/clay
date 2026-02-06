/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {Item} from '@clayui/autocomplete';

import {MultiSelect, itemLabelFilter} from './MultiSelect';

import type {IProps} from './MultiSelect';

export {itemLabelFilter};
export type {IProps};
export default Object.assign(MultiSelect, {Item});
