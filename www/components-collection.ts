import {Directory, isDirectory, isFile, withSchema} from 'renoun/file-system';
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

type ComponentSchema = Record<string, React.ComponentType>;

// Only create ComponentsCollection at runtime, not during build
// This avoids webpack trying to bundle clay-core files
let componentsCollectionInstance: ReturnType<typeof createComponentsCollection> | null = null;

function createComponentsCollection() {
	return new Directory({
		path: '..',
		tsConfigPath: '../tsconfig.renoun.json',
		loaders: {
			ts: withSchema<ComponentSchema>((filePath) => {
				// Use eval to bypass webpack's static analysis
				// @ts-ignore
				return eval('require')(`../${filePath}.ts`);
			}),
			tsx: withSchema<ComponentSchema>((filePath) => {
				// Use eval to bypass webpack's static analysis
				// @ts-ignore
				return eval('require')(`../${filePath}.tsx`);
			}),
		},
		include: (entry) => {
			const entryPath = entry.getPath();
			const isRootEntry = entryPath === '' || entryPath === '.';
			const isClayPackageEntry = entryPath.startsWith('clay-');

			// Exclude test directories and files
			if (entryPath.includes('__tests__') || entryPath.includes('.stories.') || entryPath.includes('.spec.')) {
				return false;
			}

			// Only include specific component source files
			if (isFile(entry, ['ts', 'tsx'])) {
				return isClayPackageEntry && entryPath.includes('/src/');
			}

			return isDirectory(entry) && (isRootEntry || isClayPackageEntry);
		},
	});
}

export function getComponentsCollection() {
	if (!componentsCollectionInstance) {
		componentsCollectionInstance = createComponentsCollection();
	}

	return componentsCollectionInstance;
}
