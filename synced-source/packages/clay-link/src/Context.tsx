/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

const context = React.createContext<React.ComponentType | 'a'>('a');

context.displayName = 'ClayLinkContext';

export default context;
