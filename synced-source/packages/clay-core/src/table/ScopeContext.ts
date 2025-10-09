/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useContext} from 'react';

export enum Scope {
	Head = 'head',
	Body = 'body',
}

export const ScopeContext = React.createContext<Scope>(Scope.Head);

export function useScope() {
	return useContext(ScopeContext);
}
