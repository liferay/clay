/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ClayAlert from '../src/ClayAlert';
import {ClayIconSpriteContext} from '@clayui/icon';

import 'clay-css/lib/css/atlas.css';

const App: React.FunctionComponent = () => {
	const [toastItems, setToastItems] = React.useState<number[]>([]);
	const [showDismisible, setShowDismisible] = React.useState<boolean>(true);

	return (
		<ClayIconSpriteContext.Provider value="node_modules/clay-css/lib/images/icons/icons.svg">
			<div>
				<div>
					{'Toast Items'}
					<button
						onClick={() =>
							setToastItems([...toastItems, Math.random() * 100])
						}
					>
						{'Add'}
					</button>
				</div>

				<ClayAlert.ToastContainer>
					{toastItems.map((value, i) => (
						<ClayAlert
							key={i}
							onClose={() =>
								setToastItems(
									toastItems.filter((item, j) => i !== j)
								)
							}
							title={'Hola:'}
						>{`My value is ${value}`}</ClayAlert>
					))}
				</ClayAlert.ToastContainer>

				<div>{'Display Types'}</div>

				<ClayAlert title={'Info'}>{'This is an info alert'}</ClayAlert>

				<ClayAlert displayType="warning" title={'Warning'}>
					{'This is an warning alert'}
				</ClayAlert>

				<ClayAlert displayType="danger" title={'Danger'}>
					{' '}
					{'This is an danger alert'}
				</ClayAlert>

				<ClayAlert displayType="success" title={'Success'}>
					{'This is an success alert'}
				</ClayAlert>

				<div>{'Stripe'}</div>

				<ClayAlert stripe title={'Info'}>
					{'This is an info alert'}
				</ClayAlert>

				<ClayAlert displayType="warning" stripe title={'Warning'}>
					{'This is an warning alert'}
				</ClayAlert>

				<ClayAlert displayType="danger" stripe title={'Danger'}>
					{'This is an danger alert'}
				</ClayAlert>

				<ClayAlert displayType="success" stripe title={'Success'}>
					{'This is an success alert'}
				</ClayAlert>

				<div>
					{'Dismissible Notification'}
					{!showDismisible && (
						<button onClick={() => setShowDismisible(true)}>
							{'Show'}
						</button>
					)}
				</div>

				{showDismisible && (
					<ClayAlert
						onClose={() => setShowDismisible(false)}
						title={'Info'}
					>
						{'This alert is dismissable'}
					</ClayAlert>
				)}
			</div>
		</ClayIconSpriteContext.Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
