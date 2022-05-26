/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {createContext} from 'react';

import type {Key} from 'react';

type Context = {
	activePanel: Key | null;
	onActivePanel: (key: Key | null) => void;
};

export const VerticalBarContext = createContext<Context>({} as Context);
