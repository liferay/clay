/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayIcon from '@clayui/icon';
import React from 'react';

import ClayLabel, {ContentLabel} from '../src';

export default {
	argTypes: {
		displayType: {
			control: {type: 'select'},
			options: [
				'danger',
				'info',
				'secondary',
				'success',
				'warning',
			] as const,
		},
		inverse: {
			control: {type: 'boolean'},
		},
	},
	component: ClayLabel,
	title: 'Design System/Components/Label',
};

const displayTypes = [
	'danger',
	'info',
	'secondary',
	'success',
	'warning',
] as const;

export function Default(args: typeof Default.args) {
	return (
		<ClayLabel
			closeButtonProps={
				args.closeable
					? {
							onClick: () => alert('close callback'),
						}
					: undefined
			}
			displayType={args.displayType as 'secondary'}
			href={args.href}
			inverse={args.inverse}
		>
			{args.label}
		</ClayLabel>
	);
}

Default.args = {
	closeable: false,
	displayType: 'secondary',
	href: '',
	inverse: false,
	label: 'Label',
};

export function Sizes(args: typeof Sizes.args) {
	return (
		<div className="align-items-center c-gap-2 d-flex">
			<ClayLabel displayType={args.displayType as 'secondary'} size="sm">
				Small
			</ClayLabel>

			<ClayLabel displayType={args.displayType as 'secondary'}>
				Default
			</ClayLabel>

			<ClayLabel displayType={args.displayType as 'secondary'} size="lg">
				Large
			</ClayLabel>
		</div>
	);
}

Sizes.args = {
	displayType: 'secondary',
};

export function SeeAll(args: typeof Default.args) {
	const closeButtonProps = args.closeable
		? {
				onClick: () => alert('close callback'),
			}
		: undefined;

	return (
		<>
			{displayTypes.map((displayType) => (
				<div className="mb-4" key={displayType}>
					<p className="mb-0">{displayType}</p>

					<ClayLabel
						closeButtonProps={closeButtonProps}
						displayType={displayType}
						href={args.href}
						inverse={args.inverse}
					>
						{args.label}
					</ClayLabel>
				</div>
			))}
		</>
	);
}

SeeAll.args = {
	closeable: false,
	href: '',
	inverse: false,
	label: 'Label',
};

export function Truncate(args: typeof Default.args) {
	return (
		<div style={{width: 150}}>
			{displayTypes.map((displayType) => (
				<ClayLabel
					displayType={displayType}
					inverse={args.inverse}
					key={displayType}
				>
					<span className="text-truncate">
						this is a very long bit of text, can you see the end of
						it?
					</span>
				</ClayLabel>
			))}
		</div>
	);
}

Truncate.args = {
	inverse: false,
};

export function ContentBefore(args: typeof Default.args) {
	return (
		<>
			{displayTypes.map((displayType) => (
				<ClayLabel
					displayType={displayType}
					inverse={args.inverse}
					key={displayType}
					withClose={false}
				>
					<ClayLabel.ItemBefore>
						<ClayIcon symbol="check" />
					</ClayLabel.ItemBefore>

					<ClayLabel.ItemExpand>Label</ClayLabel.ItemExpand>
				</ClayLabel>
			))}
		</>
	);
}

ContentBefore.args = {
	inverse: false,
};

const contentDisplayTypes = [
	'content-0',
	'content-1',
	'content-2',
	'content-3',
	'content-4',
	'content-5',
	'content-6',
	'content-7',
	'content-8',
] as const;

export function ContentVariants(args: typeof ContentVariants.args) {
	const closeButtonProps = args.closeable
		? {
				onClick: () => alert('close callback'),
			}
		: undefined;

	return (
		<>
			{contentDisplayTypes.map((displayType) => (
				<div className="mb-4" key={displayType}>
					<p className="mb-0">{displayType}</p>

					<ContentLabel
						closeButtonProps={closeButtonProps}
						displayType={displayType}
						href={args.href}
					>
						{args.label}
					</ContentLabel>
				</div>
			))}
		</>
	);
}

ContentVariants.args = {
	closeable: false,
	href: '',
	label: 'Label',
};
