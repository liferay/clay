import {
	Collection,
	isFileSystemSource,
	CompositeCollection,
} from 'renoun/collections';
import type {MDXContent, MDXHeadings} from 'renoun/mdx';
import {z} from 'zod';
const frontmatterSchema = z.object({
	title: z.string(),
	description: z.string(),
	packageStatus: z.optional(z.string()),
	packageNpm: z.optional(z.string()),
	packageUse: z.optional(z.string()),
	lexiconDefinition: z.optional(z.string()),
	packageTypes: z.optional(z.array(z.string())),
});

export type DocsType = {
	default: MDXContent;
	headings: MDXHeadings;
	frontmatter: z.infer<typeof frontmatterSchema>;
};

export interface ComponentTypes {
	tsx: {[exportName: string]: React.ComponentType};
	mdx: DocsType;
}

export type ComponentDocumentsSchema = {
	default: MDXContent;
	headings: MDXHeadings;
	frontmatter: z.infer<typeof frontmatterSchema>;
};

const blogFrontmatterSchema = z.object({
	title: z.string(),
	author: z.array(z.string()),
});

type BlogSchema = {
	default: MDXContent;
	headings: MDXHeadings;
	frontmatter: z.infer<typeof blogFrontmatterSchema>;
};

export const BlogCollection = new Collection<BlogSchema>(
	{
		filePattern: '**/*.mdx',
		baseDirectory: './blog',
		basePath: 'blog',
		filter: (source) => isFileSystemSource(source) && source.isFile(),
		sort: async (a, b) => {
			const aTitle = a.getPath();
			const bTitle = b.getPath();

			return bTitle.localeCompare(aTitle);
		},
		schema: {
			frontmatter: blogFrontmatterSchema.parse,
		},
	},
	(slug) => import(`./blog/${slug}.mdx`)
);

export const DocumentsCollection = new Collection<ComponentDocumentsSchema>(
	{
		filePattern: '**/*.mdx',
		baseDirectory: './docs/01.introduction',
		basePath: 'introduction',
		filter: (source) => isFileSystemSource(source) && source.isFile(),
		schema: {
			frontmatter: frontmatterSchema.parse,
		},
	},
	(slug) => import(`./docs/01.introduction/${slug}.mdx`)
);

export const CSSDocumentsCollection = new Collection<ComponentDocumentsSchema>(
	{
		filePattern: '**/*.mdx',
		baseDirectory: './docs/css',
		basePath: 'css',
		filter: (source) => isFileSystemSource(source) && source.isFile(),
		schema: {
			frontmatter: frontmatterSchema.parse,
		},
	},
	(slug) => import(`./docs/css/${slug}.mdx`)
);

const IGNORE_LIST = [
	'clay-charts'
]

export const ComponentDocumentsCollection =
	new Collection<ComponentDocumentsSchema>(
		{
			filePattern: 'clay-*/docs/**/*.mdx',
			baseDirectory: '../',
			basePath: 'components',
			filter: (source) => {
				const path = source.getEditPath();
				
				const ignored = IGNORE_LIST.find(ignore => path.includes(ignore))

				if (ignored) {
					return false;
				}

				return isFileSystemSource(source) && source.isFile();
			},
			schema: {
				frontmatter: frontmatterSchema.parse,
			},
			rewrites: (path) => {
				return path.replace(/clay-[^/]+\/docs\//, '');
			},
			tsConfigFilePath: './tsconfig.json',
		},
		(slug) => {
			const parts = slug.split('/');
			const [packageName, ...pathParts] = parts;

			if (packageName === 'clay-core') {
				return import(`../clay-core/${pathParts.join('/')}.mdx`);
			}

			const normalizedPackageName = packageName.replace(/^clay-/, '');

			return import(
				`../clay-${normalizedPackageName}/${pathParts.join('/')}.mdx`
			);
		}
	);

export const AllCollection = new CompositeCollection(
	DocumentsCollection,
	ComponentDocumentsCollection,
	CSSDocumentsCollection
);

// ComponentsCollection moved to components-collection.ts to avoid webpack bundling issues
// Import it from there only when needed for API reference generation

export type AllCollection = typeof AllCollection;

export const AUTHORS = {
	matuzalemsteles: {
		name: 'Matuzalém Teles',
		url: 'https://github.com/matuzalemsteles',
	},
	bryceosterhaus: {
		name: 'Bryce Osterhaus',
		url: 'https://github.com/bryceosterhaus',
	},
	patrickyeo: {
		name: 'Patrick Yeo',
		url: 'https://github.com/pat270',
	},
	julien: {
		name: 'Julien Castelain',
		url: 'https://github.com/julien',
	},
} as Record<string, {name: string; url: string}>;
