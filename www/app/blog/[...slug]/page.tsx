import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import Heading from '@/app/_components/Heading';
import {BlogCollection} from '@/collections/site';
import {AUTHORS} from '@/collections/static';

import styles from '../../docs/(layout)/[...slug]/page.module.css';
import Link from 'next/link';

type Props = {
	params: Promise<{
		slug: Array<string>;
	}>;
};

export async function generateStaticParams() {
	const entries = await BlogCollection.getEntries();

	return entries.map((entry) => ({
		slug: entry.getPathSegments({includeBasePath: false}),
	}));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
	const params = await props.params;
	const document = await BlogCollection.getFile(params.slug, 'mdx');

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
		},
	};
}

export default async function Page(props: Props) {
	const params = await props.params;
	const file = await BlogCollection.getFile(params.slug, 'mdx');

	if (!file) {
		notFound();
	}

	const updatedAt = await file.getLastCommitDate();

	const headings = await file.getExportValue('headings');
	const frontmatter = await file.getExportValue('frontmatter');
	const Content = await file.getExportValue('default');

	const tocContent = (
		<>
			<p className="text-5 font-weight-semi-bold">Table of Contents</p>
			<ul className={styles.toc_list}>
				{headings.map((item) => (
					<li
						style={{marginLeft: `${(item.level - 2) * 10}px`}}
						key={item.id}
					>
						<a href={`#${item.id}`}>{item.text}</a>
					</li>
				))}
			</ul>
		</>
	);

	return (
		<div className={styles.content}>
			<div className={styles.article}>
				<Heading
					title={frontmatter.title}
					description={new Intl.DateTimeFormat('en-US', {
						year: 'numeric',
						month: '2-digit',
						day: '2-digit',
						timeZone: 'UTC',
					}).format(frontmatter.date)}
					path={params.slug}
				/>

				<div className={styles.toc_mobile}>{tocContent}</div>

				<Content />

				<div className={styles.author_container}>
					<a
						className="link-primary mb-2"
						href={file.getEditUrl()}
						target="_blank"
						rel="noreferrer"
						style={{
							display: 'inline-block',
						}}
					>
						Edit this page on GitHub
					</a>
					<p className="font-weight-semi-bold">Authors</p>
					<div className={styles.author_list}>
						{frontmatter.author.map((id) => {
							const item = AUTHORS[id];
							return (
								<Link
									key={id}
									rel="noopener noreferrer"
									target="_blank"
									href={item.url}
								>
									{item.name}
								</Link>
							);
						})}
					</div>

					{updatedAt && (
						<p className="text-secondary">
							Last edited{' '}
							{new Intl.DateTimeFormat('en-US', {
								dateStyle: 'long',
								timeStyle: 'medium',
							}).format(new Date(updatedAt))}
						</p>
					)}
				</div>
			</div>

			<div className={styles.toc}>{tocContent}</div>
		</div>
	);
}
