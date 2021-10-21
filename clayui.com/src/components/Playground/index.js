/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live';

import theme from '../../utils/react-live-theme';

const DEFAULT_CODE = `<>
  <div className="alert alert-primary">
    <strong>.alert.alert-primary</strong>
  </div>

  <div className="alert alert-secondary">
    <strong>.alert.alert-secondary</strong>
  </div>

  <div className="alert alert-dark">
    <strong>.alert.alert-dark</strong>
  </div>

  <div className="alert alert-light">
    <strong>.alert.alert-light</strong>
  </div>
</>`;

export default () => {
	const [code, setCode] = React.useState(DEFAULT_CODE);

	return (
		<div className="row">
			<LiveProvider code={code} theme={theme}>
				<div className="col-sm">
					<h3>Editor:</h3>
					<LiveEditor onChange={setCode} style={{minHeight: 600}} />
				</div>

				<div className="col-sm">
					<h3>Preview:</h3>
					<div
						style={{
							border: 'solid #f5f5f8',
							borderWidth: '0.2rem',
							borerRadius: 4,
							minHeight: 600,
							padding: 10,
						}}
					>
						<LiveError />
						<LivePreview />
					</div>
				</div>
			</LiveProvider>
		</div>
	);
};
