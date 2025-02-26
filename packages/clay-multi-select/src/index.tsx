/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Item} from '@clayui/autocomplete';

import {MultiSelect, itemLabelFilter} from './MultiSelect';

import type {IProps} from './MultiSelect';

export {itemLabelFilter};
export type {IProps};
export default Object.assign(MultiSelect, {Item});
