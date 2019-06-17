/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClaySticker from '@clayui/sticker';
import Editor from './Editor';
import React from 'react';

const spritemap = '/images/icons/icons.svg';

export const Sticker = () => {
	const scope = {ClaySticker, spritemap};
	const code = `const Component = () => {
	return (
		<ClaySticker displayType="dark">A</ClaySticker>
	)
}
 render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const StickerColors = () => {
	const scope = {ClayIcon, ClaySticker, spritemap};
	const code = `const Component = () => {
	return (
		<>
			<ClaySticker displayType="danger">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="dark">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="info">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="light">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="secondary">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="success">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="unstyled">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="warning">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>
		</>
	)
}
 render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const StickerSizes = () => {
	const scope = {ClayIcon, ClaySticker, spritemap};
	const code = `const Component = () => {
	return (
		<>
			<ClaySticker displayType="light" size="sm">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker>
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="success" size="lg">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="danger" size="xl">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>
		</>
	)
}
 render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const StickerPositions = () => {
	const scope = {ClayIcon, ClaySticker, spritemap};
	const code = `const Component = () => {

	return (
		<div className="row">
			<div className="col-md-3">
				<div className="aspect-ratio">
					<img className="aspect-ratio-item aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
					<ClaySticker position="bottom-left" size="xl">A</ClaySticker>
				</div>
			</div>
			<div className="col-md-3">
				<div className="aspect-ratio">
					<img className="aspect-ratio-item aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
					<ClaySticker position="bottom-right" size="xl">A</ClaySticker>
				</div>
			</div>
			<div className="col-md-3">
				<div className="aspect-ratio">
					<img className="aspect-ratio-item aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
					<ClaySticker position="top-left" size="xl">A</ClaySticker>
				</div>
			</div>
			<div className="col-md-3">
				<div className="aspect-ratio">
					<img className="aspect-ratio-item aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
					<ClaySticker position="top-right" size="xl">A</ClaySticker>
				</div>
			</div>
		</div>
	)
}
 render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const StickerOutside = () => {
	const scope = {ClayButton, ClayIcon, ClaySticker, spritemap};
	const code = `const Component = () => {
	return (
		<ClayButton displayType="primary">
			Button
			<ClaySticker displayType="danger" position="top-left" outside shape="circle">
				<ClayIcon spritemap={spritemap} symbol="announcement" />
			</ClaySticker>
		</ClayButton>
	)
}
 render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const StickerOverlay = () => {
	const scope = {ClaySticker};
	const code = `const Component = () => {
	return (
		<>
			<ClaySticker displayType="dark" size="xl">
				<div className="sticker-overlay">
					<img class="sticker-img" src="/images/long_user_image.png" />
				</div>
				<div className="sticker-overlay">
					{'BC'}
				</div>
			</ClaySticker>
		</>
	)
}
 render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const StickerUserIcon = () => {
	const scope = {ClaySticker};

	const code = `const Component = () => {
		return (
			<>
				<ClaySticker className="sticker-user-icon" size="xl">
					<div className="sticker-overlay">
						<img className="sticker-img" src="/images/long_user_image.png" />
					</div>
				</ClaySticker>
				<ClaySticker className="sticker-user-icon" size="xl">
					{'BS'}
				</ClaySticker>
			</>
		)
	}
  render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};
