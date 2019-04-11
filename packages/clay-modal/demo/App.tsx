/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as ReactDOM from 'react-dom';
import Button from '@clayui/button';
import Modal from '../src/ClayModal';
import React, {useState} from 'react';

import 'clay-css/lib/css/atlas.css';

const spritemap = 'node_modules/clay-css/lib/images/icons/icons.svg';

const App: React.FunctionComponent = () => {
	const [visible, setVisible] = useState(false);
	const [visible2, setVisible2] = useState(false);

	return (
		<div>
			<Modal
				onClose={() => setVisible(false)}
				renderFooter={
					<>
						<Modal.FooterContainer>
							<Button
								displayType="secondary"
								onClick={() => setVisible(false)}
							>
								{'Cancelar'}
							</Button>
						</Modal.FooterContainer>
						<Modal.FooterContainer>
							<Button onClick={() => setVisible(false)}>
								{'Save'}
							</Button>
						</Modal.FooterContainer>
					</>
				}
				size="lg"
				spritemap={spritemap}
				status="success"
				title="Title"
				visible={visible}
			>
				<h1>{'Hello World!'}</h1>
			</Modal>

			<Modal
				onClose={() => setVisible2(false)}
				size="full-screen"
				spritemap={spritemap}
				title="Clay"
				url="https://clayui.com"
				visible={visible2}
			/>

			<Button displayType="primary" onClick={() => setVisible(true)}>
				{'Open modal'}
			</Button>

			<Button displayType="primary" onClick={() => setVisible2(true)}>
				{'Open modal with iframe'}
			</Button>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
