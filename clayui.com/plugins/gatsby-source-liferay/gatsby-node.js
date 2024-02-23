/**
 * SPDX-FileCopyrightText: © 2024 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const {Headers, fetch} = require('fetch-undici');

const fetchLiferay = async (slug, siteId, username, host) => {
	return await fetch(
		new URL(
			`/o/headless-delivery/v1.0/sites/${siteId}/site-pages${slug}`,
			host
		),
		{
			headers: new Headers({
				Authorization: `Basic ${btoa(username)}`,
				'User-Agent': 'Clay',
				'content-type': 'application/json',
			}),
		}
	)
		.then(async (response) => {
			const {status} = response;

			const responseContentType = response.headers.get('content-type');

			if (status === 204) {
				return status;
			} else if (
				response.ok &&
				responseContentType === 'application/json'
			) {
				return response.json();
			} else {
				const data = await response.text();

				if (data.includes('NOT_FOUND')) {
					return JSON.parse(data);
				}

				return {data};
			}
		})
		// eslint-disable-next-line no-console
		.catch((error) => console.log(error));
};

const convertTimestamps = (nextObj, prevObj, prevKey) => {
	if (typeof nextObj === `object`) {
		Object.keys(nextObj).map((key) =>
			convertTimestamps(nextObj[key], nextObj, key)
		);
	} else {
		if (typeof nextObj === `number` && nextObj >> 0 !== nextObj) {
			const date = new Date(nextObj);
			if (date.getTime() === nextObj) {
				prevObj[prevKey] = date.toISOString().slice(0, 10);
			}
		}
	}
};

exports.sourceNodes = async (
	{actions, createContentDigest, createNodeId},
	{host, siteId, username}
) => {
	const {createNode} = actions;

	try {
		const {items} = await fetchLiferay('', siteId, username, host);

		const resources = await Promise.all(
			items
				.filter(
					(resource) => !['Home', 'Search'].includes(resource.title)
				)
				.map(async (resource) => {
					const {data} = await fetchLiferay(
						`${resource.friendlyUrlPath}/rendered-page`,
						siteId,
						username,
						host
					);

					return {
						dateCreated: resource.dateCreated,
						dateModified: resource.dateModified,
						datePublished: resource.datePublished,
						html: data,
						id: createNodeId(resource.uuid),
						liferay_id: resource.uuid,
						slug: resource.friendlyUrlPath,
						title: resource.title,
						type: 'LiferayDocument',
					};
				})
		);

		resources.map((resource) => {
			convertTimestamps(resource);

			const contentDigest = createContentDigest(resource);

			const node = {
				...resource,
				children: [],
				internal: {
					contentDigest,
					type: `LiferayDocument`,
				},
				parent: null,
			};

			createNode(node);
		});
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

exports.createSchemaCustomization = async ({actions}) => {
	const typeDefs = `
    type LiferayDocument implements Node {
      title: String
      slug: String
      html: String
      dateCreated: Date @dateformat
      dateModified: Date @dateformat
      datePublished: Date @dateformat
      liferay_id: String
      type: String
    }
  `;

	actions.createTypes(typeDefs);
};
