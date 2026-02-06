/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {createContext} from 'react';

import type {InternalDispatch, Position} from '@clayui/shared';
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
	position: Position;
	resize: boolean;
	setPanelNext: React.Dispatch<React.SetStateAction<React.Key | null>>;
};

export const VerticalBarContext = createContext<Context>({} as Context);
