/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {createContext} from 'react';

import type {InternalDispatch} from '@clayui/shared';
import type {Key} from 'react';

type Context = {
	activation?: 'manual' | 'automatic';
	activePanel: Key | null;
	id: string;
	onActivePanel: InternalDispatch<React.Key | null>;
	onPanelWidthChange: InternalDispatch<number>;
	panelNext: React.Key | null;
	panelWidth: number;
	panelWidthMax: number;
	panelWidthMin: number;
	position: string;
	resize: boolean;
	setPanelNext: React.Dispatch<React.SetStateAction<React.Key | null>>;
};

export const VerticalBarContext = createContext<Context>({} as Context);
