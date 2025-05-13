import {
	Directory,
	EntryGroup,
	FileNotFoundError,
	isDirectory,
	isFile,
	MDXFile,
	withSchema,
} from 'renoun/file-system';
import type {FileSystemEntry} from 'renoun/file-system';
import type {MDXContent} from 'renoun/mdx';
import {z} from 'zod';

const documentsSchema = z.object({
	title: z.string(),
	description: z.string(),
	packageStatus: z.optional(z.string()),
	packageNpm: z.optional(z.string()),
	packageUse: z.optional(z.string()),
	lexiconDefinition: z.optional(z.string()),
	packageTypes: z.optional(z.array(z.string())),
});

const headings = z.array(
	z.object({
		id: z.string(),
		level: z.number(),
		text: z.string(),
		children: z.custom<NonNullable<React.ReactNode>>(),
	})
);

export const BlogCollection = new Directory({
	path: 'blog',
	basePath: 'blog',
	loaders: {
		mdx: withSchema(
			{
				frontmatter: z.object({
					title: z.string(),
					author: z.array(z.string()),
					date: z.coerce.date(),
				}),
				headings,
			},
			(path) => import(`@/blog/${path}.mdx`)
		),
	},
	include: (entry) => isFile(entry, 'mdx'),
	sort: async (a, b) => {
		const aFrontmatter = await a.getExportValue('frontmatter');
		const bFrontmatter = await b.getExportValue('frontmatter');

		return bFrontmatter.date.getTime() - aFrontmatter.date.getTime();
	},
});

export const DocumentsCollection = new Directory({
	path: 'docs/01.introduction',
	basePath: 'introduction',
	loaders: {
		mdx: withSchema(
			{
				frontmatter: documentsSchema,
				headings,
			},
			(path) => import(`@/docs/01.introduction/${path}.mdx`)
		),
	},
	include: (entry) => isFile(entry, 'mdx'),
});

export const CSSDocumentsCollection = new Directory({
	path: 'docs/css',
	basePath: 'css',
	loaders: {
		mdx: withSchema(
			{
				frontmatter: documentsSchema,
				headings,
			},
			(path) => import(`@/docs/css/${path}.mdx`)
		),
	},
	include: (entry) => isFile(entry, 'mdx'),
});

async function filterInternalExports(entry: FileSystemEntry<any>) {
	const path = entry.getPath();

	return (
		(isDirectory(entry) &&
			!!path.match(/clay-[^/]*(?:\/docs(?:\/|$)|$)/)) ||
		isFile(entry, 'mdx')
	);
}

export const ComponentDocumentsCollection = new Directory({
	path: '../packages',
	basePath: 'components',
	tsConfigPath: '../../packages/tsconfig.json',
	loaders: {
		mdx: withSchema(
			{
				frontmatter: documentsSchema,
				headings,
			},
			(path) => import(`../../packages/${path}.mdx`)
		),
	},
	include: filterInternalExports,
});

export const CollectionGroup = new EntryGroup({
	entries: [
		CSSDocumentsCollection,
		ComponentDocumentsCollection,
		DocumentsCollection,
	],
});

declare let global: {
	cachedEntries: Array<
		MDXFile<{
			default: MDXContent;
			headings: z.infer<typeof headings>;
			frontmatter: z.infer<typeof documentsSchema>;
		}>
	> | null;
};

// Renoun doesn't resolve glob paths for components spread across multiple
// packages in the same directory structure. As a result, document paths
// include package names. In our case, we want to simplify document slugs by
// removing package names. However, there's currently no straightforward way to
// rewrite the paths cleanly for easier access, and we also run into conflicts
// between directories and files that share the same name. To handle this, we
// traverse the directory once, cache the structure for the lifetime of the
// Next.js instance, and later resolve user-friendly paths based on the
// actual file system paths.
const getEntryFallback = async (slug: Array<string>) => {
	if (!global.cachedEntries) {
		console.log('cachedEntries: not cached');
		global.cachedEntries = (
			await ComponentDocumentsCollection.getEntries({
				recursive: true,
				includeDuplicates: true,
			})
		).filter((entry) => isFile(entry, 'mdx'));
	}

	return (
		global.cachedEntries.find(
			(item) =>
				item.getPath().replace(/clay-[^/]+\/docs\//g, '') ===
				`/${slug.join('/')}`
		) || null
	);
};

export const getEntryMarkup = async (slug: Array<string>) => {
	try {
		return await CollectionGroup.getFile([...slug, 'markup'], 'mdx');
	} catch (error) {
		if (error instanceof FileNotFoundError) {
			return getEntryFallback(slug);
		}

		return null;
	}
};

export const getEntry = async (slug: Array<string>) => {
	try {
		return await CollectionGroup.getFile(slug, 'mdx');
	} catch (error) {
		if (error instanceof FileNotFoundError) {
			return getEntryFallback(slug);
		}

		return null;
	}
};
