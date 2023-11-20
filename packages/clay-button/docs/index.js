/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import ClayIcon from '@clayui/icon';
import React from 'react';

const buttonDisplayTypesImportsCode = `import ClayButton from '@clayui/button';`;

const ButtonDisplayTypesCode = `const Component = () => {
	return (
		<>
			<ClayButton displayType="primary">
				Button Primary
			</ClayButton>
			<ClayButton displayType="secondary">
				Button Secondary
			</ClayButton>
			<ClayButton displayType={null}>
				Base Button
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

const buttonJSPImportsCode = `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>`;

const ButtonJSPCode = `<clay:button
	displayType="primary"
	label="Button Primary"
/>

<clay:button
	displayType="secondary"
	label="Button Secondary"
/>

<clay:button
	displayType="link"
	label="Button Link"
/>

<clay:button
	displayType="unstyled"
	label="Button Unstyled"
/>`;

const ButtonDisplayTypes = () => {
	const scope = {ClayButton};

	const codeSnippets = [
		{
			imports: buttonDisplayTypesImportsCode,
			name: 'React',
			value: ButtonDisplayTypesCode,
		},
		{
			disabled: true,
			imports: buttonJSPImportsCode,
			name: 'JSP',
			value: ButtonJSPCode,
		},
	];

	return <Editor code={codeSnippets} scope={scope} />;
};

const buttonGroupImportsCode = `import ClayButton from '@clayui/button';`;

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

const ButtonGroup = () => {
	const scope = {ClayButton};
	const code = ButtonGroupCode;

	return (
		<Editor code={code} imports={buttonGroupImportsCode} scope={scope} />
	);
};

const buttonIconImportsCode = `import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import ClayIcon from '@clayui/icon;`;

const ButtonIconCode = `const Component = () => {
	return (
		<>
			<ClayButtonWithIcon aria-label="Close" spritemap={spritemap} symbol="times" title="Close" />

			<br />
			<br />

			<ClayButton>
				<span className="inline-item inline-item-before">
					<ClayIcon spritemap={spritemap} symbol="times" />
				</span>

				{'Close w/ text'}
			</ClayButton>
		</>
	);
}

render(<Component />);`;

const ButtonIcon = () => {
	const scope = {ClayButton, ClayButtonWithIcon, ClayIcon};
	const code = ButtonIconCode;

	return <Editor code={code} imports={buttonIconImportsCode} scope={scope} />;
};

const buttonTranslucentImportsCode = `import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon;'`;

const ButtonTranslucentCode = `const Component = () => {
	return (
		<>
			<ClayButton displayType="primary" translucent>
				<span className="inline-item">
					{'Primary'}
				</span>
			</ClayButton>

			<ClayButton displayType="success" translucent>
				<span className="inline-item">
					{'Success'}
				</span>
			</ClayButton>

			<ClayButton displayType="info" translucent>
				<span className="inline-item">
					{'Info'}
				</span>

				<span className="inline-item inline-item-after">
					<ClayIcon spritemap={spritemap} symbol="info-panel-open" />
				</span>
			</ClayButton>

			<ClayButton displayType="warning" translucent>
				<span className="inline-item">
					{'Warning'}
				</span>

				<span className="inline-item inline-item-after">
					<ClayIcon spritemap={spritemap} symbol="warning-full" />
				</span>
			</ClayButton>

			<ClayButton displayType="danger" translucent>
				<span className="inline-item">
					{'Danger'}
				</span>
			</ClayButton>
		</>
	);
}

render(<Component />);`;

const ButtonTranslucent = () => {
	const scope = {ClayButton, ClayButtonWithIcon, ClayIcon};
	const code = ButtonTranslucentCode;

	return (
		<Editor
			code={code}
			imports={buttonTranslucentImportsCode}
			scope={scope}
		/>
	);
};

// START

const buttonClayDarkImportsCode = `import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon;'`;

const ButtonClayDarkCode = `const Component = () => {
	return (
		<>
			<div className="bg-dark clay-dark p-2">
				<ClayButton displayType="primary" translucent>
					<span className="inline-item">
						{'Primary'}
					</span>
				</ClayButton>

				<ClayButton displayType="success" translucent>
					<span className="inline-item">
						{'Success'}
					</span>
				</ClayButton>

				<ClayButton displayType="info" translucent>
					<span className="inline-item">
						{'Info'}
					</span>

					<span className="inline-item inline-item-after">
						<ClayIcon spritemap={spritemap} symbol="info-panel-open" />
					</span>
				</ClayButton>

				<ClayButton displayType="warning" translucent>
					<span className="inline-item">
						{'Warning'}
					</span>

					<span className="inline-item inline-item-after">
						<ClayIcon spritemap={spritemap} symbol="warning-full" />
					</span>
				</ClayButton>

				<ClayButton displayType="danger" translucent>
					<span className="inline-item">
						{'Danger'}
					</span>
				</ClayButton>
			</div>
		</>
	);
}

render(<Component />);`;

const ButtonClayDark = () => {
	const scope = {ClayButton, ClayButtonWithIcon, ClayIcon};
	const code = ButtonClayDarkCode;

	return (
		<Editor code={code} imports={buttonClayDarkImportsCode} scope={scope} />
	);
};

// END

const buttonBetaImportsCode = `import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon;'`;

const ButtonBetaCode = `const Component = () => {
	return (
		<>
			<ClayButton className="rounded-circle" displayType="beta" size="xs">
				<span className="inline-item">
					{'Beta'}
				</span>

				<span className="inline-item inline-item-after">
					<ClayIcon spritemap={spritemap} symbol="info-panel-open" />
				</span>
			</ClayButton>
		</>
	);
}

render(<Component />);`;

const ButtonBeta = () => {
	const scope = {ClayButton, ClayButtonWithIcon, ClayIcon};
	const code = ButtonBetaCode;

	return <Editor code={code} imports={buttonBetaImportsCode} scope={scope} />;
};

const buttonBetaDarkImportsCode = `import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon;'`;

const ButtonBetaDarkCode = `const Component = () => {
	return (
		<>
			<div className="bg-dark p-2">
				<ClayButton className="rounded-circle" displayType="beta-dark" size="xs">
					<span className="inline-item">
						{'Beta'}
					</span>

					<span className="inline-item inline-item-after">
						<ClayIcon spritemap={spritemap} symbol="info-panel-open" />
					</span>
				</ClayButton>
			</div>
		</>
	);
}

render(<Component />);`;

const ButtonBetaDark = () => {
	const scope = {ClayButton, ClayButtonWithIcon, ClayIcon};
	const code = ButtonBetaDarkCode;

	return (
		<Editor code={code} imports={buttonBetaDarkImportsCode} scope={scope} />
	);
};

export {
	ButtonDisplayTypes,
	ButtonGroup,
	ButtonIcon,
	ButtonBeta,
	ButtonBetaDark,
	ButtonTranslucent,
	ButtonClayDark,
};
