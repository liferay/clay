'use client';

import {LiveProvider, LiveError, LivePreview} from 'react-live';
import {useCallback, useId, useMemo, useState} from 'react';
import Button from '@clayui/button';
import Icon from '@clayui/icon';
import {createCodeSandbox} from '@/library/createCodeSandbox';
import {resolveDependencies} from '@/library/resolveDependencies';

import styles from './code.module.css';

type Props = {
	preview?: boolean;
	title?: string;
	children: React.ReactNode;
	value: string;
	language: string;
};

export function Code({
	title = 'Snippet',
	preview,
	value,
	children,
	language,
}: Props) {
	const lineBreaks = value.match(/\n/g) ?? [];

	const shouldCollapsed = lineBreaks.length > 12;

	const [open, setOpen] = useState(!shouldCollapsed);
	const [state, setState] = useState<'idle' | 'not-allowed' | 'copied'>(
		'idle'
	);

	const id = useId();

	const onToggle = useCallback(() => setOpen((state) => !state), []);

	return (
		<div className={styles.code}>
			{preview && <Preview value={value} />}

			<div className={styles.code_container}>
				<div
					className={
						preview
							? styles.code_toolbar__floating
							: styles.code_toolbar
					}
				>
					{!preview && <p className="text-3">{title || language}</p>}

					<div className={styles.code_toolbar__actions}>
						{preview && (
							<CodeSandboxLink
								title="Clay example"
								description="A Web Implementation of Lexicon Experience Language"
								file={value}
							/>
						)}
						<Button
							aria-label="Copy code"
							title="Copy code"
							borderless
							displayType="secondary"
							size="sm"
							monospaced
							onClick={() => {
								navigator.clipboard
									.writeText(value)
									.then(() => {
										setState('copied');
									})
									.catch(() => {
										setState('not-allowed');
									})
									.finally(() => {
										setTimeout(
											() => setState('idle'),
											1000
										);
									});
							}}
						>
							<Icon
								symbol={
									state === 'copied'
										? 'check'
										: state === 'not-allowed'
										? 'block'
										: 'copy'
								}
								spritemap="/images/icons/icons.svg"
							/>
						</Button>
					</div>
				</div>

				<div
					role="presentation"
					id={id}
					tabIndex={-1}
					className={styles.code_pre__viewport}
					aria-hidden={!open}
					data-closed={!open ? '' : undefined}
					onKeyDown={(event: React.KeyboardEvent) => {
						if (
							event.key === 'a' &&
							(event.metaKey || event.ctrlKey) &&
							!event.shiftKey &&
							!event.altKey
						) {
							event.preventDefault();
							window
								.getSelection()
								?.selectAllChildren(event.currentTarget);
						}
					}}
				>
					<pre className={styles.code_pre}>{children}</pre>
				</div>

				{shouldCollapsed && (
					<button
						aria-expanded={open}
						aria-controls={id}
						className={`btn ${styles.code_collpase__button}`}
						type="button"
						onClick={onToggle}
					>
						{open ? 'Hide code' : 'Show code'}
					</button>
				)}
			</div>
		</div>
	);
}

type PreviewProps = {
	value: string;
};

function Preview({value}: PreviewProps) {
	const dependencies = useMemo(() => resolveDependencies(value), [value]);
	const code = useMemo(
		() => `${cleanupCode(value)};
render(<App />);`,
		[value]
	);

	return (
		<LiveProvider noInline={true} scope={dependencies} code={code}>
			<div aria-label="Component demo" className={styles.code_playground}>
				<LivePreview />

				<LiveError className={styles.code_playground__error} />
			</div>
		</LiveProvider>
	);
}

type CodeSandboxLinkProps = {
	title: string;
	description?: string;
	file: string;
};

const cssThemeSetup = `<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/@clayui/css/lib/css/atlas.css"
/>`;

function CodeSandboxLink({title, description, file}: CodeSandboxLinkProps) {
	const onClick = useCallback(() => {
		createCodeSandbox({
			demoFiles: [
				{
					path: './src/App.js',
					name: 'App.js',
					type: 'js',
					content: file,
				},
			],
			customIndexFile: `import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);`,
			demoLanguage: 'js',
			title,
			description,
			dependencies: {
				'@types/react': '^16',
				'@types/react-dom': '^16',
				react: '^16.12.0',
				'react-dom': '^16.12.0',
				'@clayui/core': 'latest',
				'@clayui/icon': 'latest',
				'@clayui/button': 'latest',
				'@clayui/css': 'latest',
				'@clayui/form': 'latest',
				'@clayui/shared': 'latest',
				'@clayui/layout': 'latest',
				'@clayui/drop-down': 'latest',
				'@clayui/label': 'latest',
				'@clayui/alert': 'latest',
				'@clayui/autocomplete': 'latest',
				'@clayui/badge': 'latest',
				'@clayui/breadcrumb': 'latest',
				'@clayui/card': 'latest',
				'@clayui/color-picker': 'latest',
				'@clayui/date-picker': 'latest',
				'@clayui/empty-state': 'latest',
				'@clayui/link': 'latest',
				'@clayui/list': 'latest',
				'@clayui/loading-indicator': 'latest',
				'@clayui/localized-input': 'latest',
				'@clayui/management-toolbar': 'latest',
				'@clayui/modal': 'latest',
				'@clayui/multi-select': 'latest',
				'@clayui/sticker': 'latest',
				'@clayui/multi-step-nav': 'latest',
				'@clayui/nav': 'latest',
				'@clayui/navigation-bar': 'latest',
				'@clayui/pagination': 'latest',
				'@clayui/pagination-bar': 'latest',
				'@clayui/panel': 'latest',
				'@clayui/popover': 'latest',
				'@clayui/progress-bar': 'latest',
				'@clayui/tabs': 'latest',
				'@clayui/time-picker': 'latest',
				'@clayui/toolbar': 'latest',
				'@clayui/tooltip': 'latest',
				'@clayui/upper-toolbar': 'latest',
			},
			devDependencies: {
				'react-scripts': 'latest',
			},
			additionalHtmlHeadContent: cssThemeSetup,
		});
	}, [file, title, description]);

	return (
		<Button
			aria-label="Open in CodeSandbox"
			title="Open in CodeSandbox"
			displayType="secondary"
			borderless
			size="sm"
			onClick={onClick}
		>
			<span className="inline-item inline-item-before">
				<Icon symbol="shortcut" spritemap="/images/icons/icons.svg" />
			</span>
			CodeSandbox
		</Button>
	);
}

function cleanupCode(code: string) {
	if (!code) return '';

	const importRegex =
		/(^\s*import\s+(?:\w+|\{[^}]*\}|\*\s+as\s+\w+)\s+from\s+['"][^'"]+['"];?|^\s*import\s+['"][^'"]+['"];?|^\s*const\s+\w+\s*=\s*require\s*\(['"][^)]+['"]\);?)/gm;

	const exportRegex =
		/(^\s*export\s+default\s+(?:\w+|class\s+\w+|function\s+\w+|\(?.*\)?(?:\s+=>\s+.*)?);?)/gm;

	let cleanedCode = code.replace(importRegex, '');

	cleanedCode = cleanedCode.replace(exportRegex, (match) => {
		if (/^\s*export\s+default\s+\w+\s*;?\s*$/.test(match)) {
			return match.replace(/^\s*export\s+default\s+/, '');
		}

		return match.replace(/export\s+default\s+/, '');
	});

	return cleanedCode.trim().replace(/\n{3,}/g, '\n\n');
}
