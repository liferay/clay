import {Directory, isFile, withSchema} from 'renoun/file-system';
import {z} from 'zod';

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
				headings: z.array(
					z.object({
						id: z.string(),
						level: z.number(),
						text: z.string(),
					})
				),
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
