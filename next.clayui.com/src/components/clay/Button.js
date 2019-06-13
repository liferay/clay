/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import Editor from './Editor';
import React from 'react';

const spritemap = '/images/icons/icons.svg';

export const ButtonBlock = () => {
	const scope = {ClayButton, spritemap};
	const code = `const Component = () => {

	return (
        <ClayButton displayType="primary" block>
			Button Block
		</ClayButton>
	);
}

render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const ButtonDisplayTypes = () => {
	const scope = {ClayButton, spritemap};
	const code = `const Component = () => {

	return (
		<>
			<ClayButton displayType="primary">
				Button Primary
			</ClayButton>
			<ClayButton displayType="secondary">
				Button Secondary
			</ClayButton>
			<ClayButton displayType="link">
				Button Link
			</ClayButton>
			<ClayButton displayType="unstyled">
				Button Unstyled
			</ClayButton>
		</>
	);
}

render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const ButtonGroup = () => {
	const scope = {ClayButton, spritemap};
	const code = `const Component = () => {

	return (
        <ClayButton.Group>
			<ClayButton>{'This'}</ClayButton>
			<ClayButton displayType="secondary">{'is'}</ClayButton>
			<ClayButton>{'a'}</ClayButton>
			<ClayButton displayType="secondary">{'button'}</ClayButton>
			<ClayButton>{'group.'}</ClayButton>
		</ClayButton.Group>
	);
}

render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const ButtonMonospaced = () => {
	const scope = {ClayButton, ClayIcon, spritemap};
	const code = `const Component = () => {

	return (
		<ClayButton displayType="primary" monospaced>
			<ClayIcon spritemap={spritemap} symbol="plus"></ClayIcon>
		</ClayButton>
	);
}

render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const ButtonWithStar = () => {
	const scope = {ClayButton, ClayIcon, spritemap};
	const code = `const Component = () => {

	return (
		<ClayButton displayType="primary">
			<ClayIcon spritemap={spritemap} symbol="bookmarks"></ClayIcon> Bookmark
		</ClayButton>
	);
}

render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const ButtonSmall = () => {
	const scope = {ClayButton, ClayIcon, spritemap};
	const code = `const Component = () => {

	return (
		<ClayButton displayType="primary" small>
			<ClayIcon spritemap={spritemap} symbol="plus"></ClayIcon>
		</ClayButton>
	);
}

render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};
