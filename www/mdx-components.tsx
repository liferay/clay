/* eslint-disable react/display-name */
import {parsePreProps, Tokens} from 'renoun/components';
import type {MDXComponents as MDXComponentsType} from 'renoun/mdx';
import Link from 'next/link';
import styles from './mdx-components.module.css';
import React from 'react';

import {Code} from '@/app/_components/CodeBlock';

export function useMDXComponents() {
	return {
		h1: ({children, id}) => (
			<h1 className="text-10" id={id}>
				{children}
			</h1>
		),
		h2: ({children, id}) => (
			<h2 className="text-7 mb-4 mt-5" id={id}>
				{children}
			</h2>
		),
		h3: ({children, id}) => (
			<h3 className="text-6 mb-3 mt-4 text-weight-semi-bold" id={id}>
				{children}
			</h3>
		),
		h4: ({children, id}) => (
			<h4 className="text-4 mb-2 mt-3 text-weight-semi-bold" id={id}>
				{children}
			</h4>
		),
		p: ({children}) => <p className={styles.p}>{children}</p>,
		ul: ({children}) => <ul className={styles.ul}>{children}</ul>,
		code: ({children}) => <code className={styles.code}>{children}</code>,
		a: ({children, ...otherProps}) => {
			const As = otherProps.href?.includes('http') ? 'a' : Link;

			return (
				<As
					{...(otherProps as any)}
					className="c-link link-primary text-decoration-underline"
				>
					{children}
				</As>
			);
		},
		pre: (props: any) => {
			const {preview = false, title} = props;
			const {children, language} = parsePreProps(props);

			return (
				<Code
					title={title}
					language={language}
					value={children}
					preview={preview}
				>
					<Tokens
						shouldAnalyze={preview}
						allowErrors={false}
						showErrors={false}
						shouldFormat={false}
						language={language}
					>
						{children}
					</Tokens>
				</Code>
			);
		},
		blockquote: ({children, ...otherProps}) => (
			<blockquote {...otherProps} className={styles.blockquote}>
				{children}
			</blockquote>
		),
	} as MDXComponentsType;
}
