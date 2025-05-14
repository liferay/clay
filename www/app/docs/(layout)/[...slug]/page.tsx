import type {Metadata} from 'next';
import {
	DocumentsCollection,
	CSSDocumentsCollection,
	ComponentDocumentsCollection,
	getEntry,
} from '@/collections/site';
import {createLXCResource} from '@/lxc';
import {isFile} from 'renoun/file-system';

import {DocsLayout} from './DocsLayout';
import {RemoteLayout} from './RemoteLayout';

type Props = {
	params: Promise<{
		slug: Array<string>;
	}>;
};

const lxc = createLXCResource();

export async function generateStaticParams() {
	const [css, documents, components] = await Promise.all([
		CSSDocumentsCollection.getEntries({recursive: true}),
		DocumentsCollection.getEntries({recursive: true}),
		ComponentDocumentsCollection.getEntries({
			recursive: true,
			includeDuplicates: true,
		}),
	]);
	const remoteCollection = await lxc.getResources();

	return [
		...[...css, ...documents, ...components]
			.filter((entry) => isFile(entry, 'mdx'))
			.map((entry) => ({
				slug: entry
					.getPathSegments()
					.join('/')
					.replace(/clay-[^/]+\/docs\//g, '')
					.split('/'),
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
