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
	navigationParent,
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
		navigationParent,
		order,
		parentLink,
		pathname,
		title,
	};
};

const toSectionItem = (item, paths, parentPaths) => {
	if (item.isFolder) {
		item.items = paths
			.filter((path) => path.link !== item.link)
			.filter(
				(path) =>
					path.link ===
					item.parentLink + path.id + (path.isFolder ? '/index' : '')
			)
			.filter((path) => !path.navigationParent)
			.map((path) => toSectionItem(path, paths, parentPaths))
			.sort(sortByOrderAndTitle);
	}

	if (parentPaths.includes(item.pathname)) {
		item.items = paths
			.filter((path) => path.navigationParent === item.pathname)
			.filter((path) => path.link !== item.link)
			.map((path) => toSectionItem(path, paths, parentPaths))
			.sort(sortByOrderAndTitle);
	}

	return item;
};

const getSection = (data) => {
	const elements = data.map(({node}) => {
		const {
			fields: {
				alwaysActive,
				draft,
				indexVisible,
				navigationParent,
				order,
				slug,
				title,
			},
		} = node;

		return toSectionElements(
			slug.replace('.html', ''),
			slug,
			title,
			order,
			alwaysActive,
			draft,
			navigationParent,
			indexVisible
		);
	});

	const rootElements = elements.filter((path) => path.isRoot);

	const parentPaths = elements.reduce((acc, {navigationParent}) => {
		return navigationParent && !acc.includes(navigationParent)
			? [...acc, navigationParent]
			: acc;
	}, []);

	return rootElements
		.map((path) => toSectionItem(path, elements, parentPaths))
		.sort(sortByOrderAndTitle);
};

export default getSection;
