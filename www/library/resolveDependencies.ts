import Alert from '@clayui/alert';
import Autocomplete from '@clayui/autocomplete';
import Breadcrumb from '@clayui/breadcrumb';
import Button, {ClayButtonWithIcon} from '@clayui/button';
import ColorPicker from '@clayui/color-picker';
import {
	Body,
	Cell,
	FocusTrap,
	Head,
	Heading,
	IconSelector,
	LanguagePicker,
	Option,
	OverlayMask,
	Picker,
	Provider,
	Row,
	Table,
	Text,
	TextHighlight,
	TreeView,
	VerticalBar,
	VerticalNav,
} from '@clayui/core';
import DatePicker from '@clayui/date-picker';
import DropDown, {
	Align,
	ClayDropDownWithDrilldown,
	ClayDropDownWithItems,
} from '@clayui/drop-down';
import EmptyState from '@clayui/empty-state';
import {
	ClayInput,
	ClayRadio,
	ClayRadioGroup,
	ClaySelect,
	ClaySelectBox,
	ClayToggle,
	default as ClayForm,
	default as Form,
} from '@clayui/form';
import Icon from '@clayui/icon';
import Label from '@clayui/label';
import Layout from '@clayui/layout';
import Link from '@clayui/link';
import LoadingIndicator from '@clayui/loading-indicator';
import LocalizedInput from '@clayui/localized-input';
import Modal, {useModal} from '@clayui/modal';
import MultiSelect from '@clayui/multi-select';
import MultiStepNav, {
	ClayMultiStepNavWithBasicItems,
} from '@clayui/multi-step-nav';
import Nav, {ClayVerticalNav} from '@clayui/nav';
import NavigationBar from '@clayui/navigation-bar';
import Pagination, {ClayPaginationWithBasicItems} from '@clayui/pagination';
import PaginationBar from '@clayui/pagination-bar';
import Panel from '@clayui/panel';
import Popover from '@clayui/popover';
import ProgressBar from '@clayui/progress-bar';
import Slider from '@clayui/slider';
import Sticker from '@clayui/sticker';
import Tabs from '@clayui/tabs';
import TimePicker from '@clayui/time-picker';
import Toolbar from '@clayui/toolbar';
import Tooltip, {ClayTooltipProvider} from '@clayui/tooltip';
import UpperToolbar from '@clayui/upper-toolbar';
import React from 'react';

const DEPENDENCIES = {
	// Clay
	Alert,
	Align,
	Autocomplete,
	Body,
	Breadcrumb,
	Button,
	Cell,
	ClayButtonWithIcon,
	ClayDropDownWithDrilldown,
	ClayDropDownWithItems,
	ClayForm,
	ClayInput,
	ClayMultiStepNavWithBasicItems,
	ClayPaginationWithBasicItems,
	ClayRadio,
	ClayRadioGroup,
	ClaySelect,
	ClaySelectBox,
	ClayToggle,
	ClayTooltipProvider,
	ClayVerticalNav,
	ColorPicker,
	DatePicker,
	DropDown,
	EmptyState,
	FocusTrap,
	Form,
	Head,
	Heading,
	Icon,
	IconSelector,
	Label,
	LanguagePicker,
	Layout,
	Link,
	LoadingIndicator,
	LocalizedInput,
	Modal,
	MultiSelect,
	MultiStepNav,
	Nav,
	NavigationBar,
	Option,
	OverlayMask,
	Pagination,
	PaginationBar,
	Panel,
	Picker,
	Popover,
	ProgressBar,
	Provider,
	Row,
	Slider,
	Sticker,
	Table,
	Tabs,
	Text,
	TextHighlight,
	TimePicker,
	Toolbar,
	Tooltip,
	TreeView,
	UpperToolbar,
	VerticalBar,
	VerticalNav,
	useModal,
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
