/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const sortByOrderAndTitle = (a, b) => {
	const regexSpace = /\s+/g;
	const titleA = a.title.toUpperCase().replace(regexSpace, '');
	const titleB = b.title.toUpperCase().replace(regexSpace, '');

	if (a.order && b.order) {
		return a.order - b.order;
	}

	if (titleA > titleB) {
		return 1;
	}
	if (titleA < titleB) {
		return -1;
	}
};

const toSectionElements = (
	slug,
	pathname,
	title,
	order,
	alwaysActive,
	draft,
	indexVisible
) => {
	const slugs = slug.split('/');
	const lastSlug = slugs[slugs.length - 1];
	const penultimateSlug = slugs[slugs.length - 2];

	const id = lastSlug === 'index' ? penultimateSlug : lastSlug;
	const link = `/${slug}`;
	const parentLink = `/${slug.substring(0, slug.lastIndexOf('/') + 1)}`;
	const isFolder = lastSlug === 'index';
	const isRoot =
		(slugs.length === 3 && isFolder) || (slugs.length === 2 && !isFolder);

	return {
		alwaysActive,
		draft,
		id,
		indexVisible,
		isFolder,
		isRoot,
		link,
		order,
		parentLink,
		pathname,
		title,
	};
};

const toSectionItem = (item, paths) => {
	if (item.isFolder) {
		item.items = paths
			.filter((path) => path.link !== item.link)
			.filter(
				(path) =>
					path.link ===
					item.parentLink + path.id + (path.isFolder ? '/index' : '')
			)
			.map((path) => toSectionItem(path, paths))
			.sort(sortByOrderAndTitle);
	}

	return item;
};

const getSection = (data) => {
	const elements = data.map(({node}) => {
		const {
			fields: {alwaysActive, draft, indexVisible, order, slug, title},
		} = node;

		return toSectionElements(
			slug.replace('.html', ''),
			slug,
			title,
			order,
			alwaysActive,
			draft,
			indexVisible
		);
	});

	const rootElements = elements.filter((path) => path.isRoot);

	return rootElements
		.map((path) => toSectionItem(path, elements))
		.sort(sortByOrderAndTitle);
};

export default getSection;
