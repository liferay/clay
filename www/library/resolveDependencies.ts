import React from 'react';
import Button, {ClayButtonWithIcon} from '@clayui/button';
import Icon from '@clayui/icon';
import {
	Provider,
	TreeView,
	VerticalBar,
	VerticalNav,
	IconSelector,
	LanguagePicker,
	Picker,
	Body,
	Table,
	Cell,
	Head,
	OverlayMask,
	Row,
	Text,
	TextHighlight,
	FocusTrap,
	Heading,
	Option,
} from '@clayui/core';
import Autocomplete from '@clayui/autocomplete';
import Form from '@clayui/form';
import Alert from '@clayui/alert';

const DEPENDENCIES = {
	// Clay
	Provider,
	Autocomplete,
	Form,
	ClayButtonWithIcon,
	Alert,
	Button,
	Icon,
	TreeView,
	VerticalBar,
	VerticalNav,
	IconSelector,
	LanguagePicker,
	Picker,
	Body,
	Table,
	Cell,
	Head,
	OverlayMask,
	Row,
	Text,
	TextHighlight,
	FocusTrap,
	Heading,
	Option,
} as Record<string, any>;

export const resolveDependencies = (code: string) => {
	if (!code) return {React};

	const dependencies: Record<string, any> = {React};
	const extractedDependencyNames = new Set(['React']);

	const addDependency = (name: string) => {
		if (DEPENDENCIES[name] && !extractedDependencyNames.has(name)) {
			dependencies[name] = DEPENDENCIES[name];
			extractedDependencyNames.add(name);
			return true;
		}
		return false;
	};

	const processNamedImports = (importsString: string) => {
		if (!importsString) return;

		importsString
			.split(',')
			.map((item) => item.trim())
			.forEach((item) => {
				const match = item.match(/^(\w+)(?:\s+as\s+\w+)?$/);
				if (match?.[1]) addDependency(match[1]);
			});
	};

	const importPatterns = [
		{
			regex: /import\s+\{\s*([^}]+)\s*\}\s+from\s+['"][^'"]+['"]/g,
			handler: (match: RegExpExecArray) => processNamedImports(match[1]),
		},

		{
			regex: /import\s+(\w+)\s+from\s+['"][^'"]+['"]/g,
			handler: (match: RegExpExecArray) => addDependency(match[1]),
		},

		{
			regex: /import\s+(\w+)\s*,\s*\{\s*([^}]+)\s*\}\s+from\s+['"][^'"]+['"]/g,
			handler: (match: RegExpExecArray) => {
				addDependency(match[1]);
				processNamedImports(match[2]);
			},
		},

		{
			regex: /import\s+\*\s+as\s+(\w+)\s+from\s+['"][^'"]+['"]/g,
			handler: (match: RegExpExecArray) => {
				const namespaceAlias = match[1];
				if (!extractedDependencyNames.has(namespaceAlias)) {
					dependencies[namespaceAlias] = {};
					extractedDependencyNames.add(namespaceAlias);
				}
			},
		},
	];

	importPatterns.forEach((pattern) => {
		let match;
		while ((match = pattern.regex.exec(code)) !== null) {
			pattern.handler(match);
		}
	});

	return dependencies;
};
