/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {createContext} from 'react';

const context = createContext<React.ComponentType | 'a'>('a');

context.displayName = 'ClayLinkContext';

export default context;
