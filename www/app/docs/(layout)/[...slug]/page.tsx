import type {Metadata} from 'next';
import {CollectionGroup, getEntry} from '@/collections/site';
import {createLXCResource} from '@/lxc';

import {DocsLayout} from './DocsLayout';
import {RemoteLayout} from './RemoteLayout';

type Props = {
	params: Promise<{
		slug: Array<string>;
	}>;
};

const lxc = createLXCResource();

export async function generateStaticParams() {
	const collection = await CollectionGroup.getEntries({recursive: true});
	const remoteCollection = await lxc.getResources();

	return [
		...collection.map((entry) => ({
			slug: entry.getPathSegments({includeBasePath: false}),
		})),
		...remoteCollection.map((item) => ({
			slug: ['components', item.slug.slice(1), 'design'],
		})),
	];
}

export async function generateMetadata(props: Props): Promise<Metadata> {
	const params = await props.params;
	const document = await getEntry(
		params.slug.filter((item) => item !== 'design')
	);

	if (!document) {
		return {
			title: 'Not Found!',
		};
	}

	const frontmatter = await document.getExportValue('frontmatter');

	const title = `${frontmatter.title} - Clay by Liferay`;

	return {
		title: title,
		openGraph: {
			title: title,
			description: frontmatter.description,
		},
	};
}

export default async function Page(props: Props) {
	const params = await props.params;
	const Content = params.slug.includes('design') ? RemoteLayout : DocsLayout;

	return <Content slug={params.slug} />;
}
