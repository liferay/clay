/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

'use client';

import React, {useMemo, useState} from 'react';

const spritemap = '/images/icons/icons.svg';

/**
 * Component that allows searching through icons
 * @param {string} label - Label of the search input field.
 * @param {string} placeholder - Placeholder of the search input field.
 * @param {Array[Object]} source - Path to the source JSON. Needs to follow pattern of [{name: String, aliases: Array<String>}]
 * @param {string} type - Type of icons being provided, supports "icons" and "flags"
 */
export function IconSearch({
	label = 'Search Icons',
	placeholder = 'Search Icons...',
	source,
	type = 'icon',
}) {
	const [searchQuery, setSearchQuery] = useState('');

	const filteredIcons = useMemo(() => {
		const query = searchQuery.toLowerCase();

		return source.filter(
			({aliases, name}) =>
				name.toLowerCase().includes(query) ||
				aliases.some((alias) => alias.toLowerCase().includes(query))
		);
	}, [searchQuery, source]);

	const list = searchQuery ? filteredIcons : source;

	return (
		<>
			<div className="form-group">
				<label className="form-control-label">
					<span className="form-control-label-text">{label}</span>

					<input
						className="form-control"
						onChange={(event) => setSearchQuery(event.target.value)}
						placeholder={placeholder}
						type="text"
						value={searchQuery}
					/>
				</label>
			</div>

			<ul className="d-flex flex-wrap lexicon-icon-list list-unstyled">
				{list.map((icon) => {
					const name =
						type === 'icon' ? icon.name : icon.aliases.join(' - ');

					return (
						<li key={icon.name}>
							<svg
								className={`lexicon-icon lexicon-icon-${icon.name}`}
							>
								<use href={`${spritemap}#${icon.name}`} />
							</svg>

							<span>{name}</span>
						</li>
					);
				})}
			</ul>

			{!list.length && (
				<span>{`No results found for ${searchQuery}`}</span>
			)}
		</>
	);
}
