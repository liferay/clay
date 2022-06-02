/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {createContext} from 'react';

import type {InternalDispatch} from '@clayui/shared';
import type {Key} from 'react';

type Context = {
	activePanel: Key | undefined;
	onActivePanel: InternalDispatch<React.Key | undefined>;
};

export const VerticalBarContext = createContext<Context>({} as Context);
