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

const ButtonBlockCode = `const Component = () => {
	return (
        <ClayButton displayType="primary" block>
			Button Block
		</ClayButton>
	);
}

render(<Component />);`;

export const ButtonBlock = () => {
	const scope = {ClayButton, spritemap};
	const code = ButtonBlockCode;

	return <Editor code={code} scope={scope} />;
};

const ButtonDisplayTypesCode = `const Component = () => {
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

render(<Component />);`;

export const ButtonDisplayTypes = () => {
	const scope = {ClayButton, spritemap};
	const code = ButtonDisplayTypesCode;

	return <Editor code={code} scope={scope} />;
};

const ButtonGroupCode = `const Component = () => {
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

render(<Component />);`;

export const ButtonGroup = () => {
	const scope = {ClayButton, spritemap};
	const code = ButtonGroupCode;

	return <Editor code={code} scope={scope} />;
};

const ButtonMonospacedCode = `const Component = () => {
	return (
		<ClayButton displayType="primary" monospaced>
			<ClayIcon spritemap={spritemap} symbol="plus"></ClayIcon>
		</ClayButton>
	);
}

render(<Component />);`;

export const ButtonMonospaced = () => {
	const scope = {ClayButton, ClayIcon, spritemap};
	const code = ButtonMonospacedCode;

	return <Editor code={code} scope={scope} />;
};

const ButtonWithStarCode = `const Component = () => {
	return (
		<ClayButton displayType="primary">
			<ClayIcon spritemap={spritemap} symbol="bookmarks"></ClayIcon> Bookmark
		</ClayButton>
	);
}

render(<Component />);`;

export const ButtonWithStar = () => {
	const scope = {ClayButton, ClayIcon, spritemap};
	const code = ButtonWithStarCode;

	return <Editor code={code} scope={scope} />;
};

const ButtonSmallCode = `const Component = () => {
	return (
		<ClayButton displayType="primary" small>
			<ClayIcon spritemap={spritemap} symbol="plus"></ClayIcon>
		</ClayButton>
	);
}

render(<Component />);`;

export const ButtonSmall = () => {
	const scope = {ClayButton, ClayIcon, spritemap};
	const code = ButtonSmallCode;

	return <Editor code={code} scope={scope} />;
};
