import {createLXCResource} from '@/lxc';
import {getEntry, getEntryMarkup} from '@/collections/site';
import Heading from '@/app/_components/Heading';
import {notFound} from 'next/navigation';
import {CodeInline} from 'renoun/components';

import styles from './page.module.css';

type Props = {
	slug: Array<string>;
};

const lxc = createLXCResource();

export async function RemoteLayout({slug}: Props) {
	const slugBase = slug.filter((item) => item !== 'design');
	const [file, fileMarkup, fileDesign] = await Promise.all([
		getEntry(slugBase),
		getEntryMarkup(slugBase),
		lxc.getResource(slug),
	]);

	if (!file || !fileDesign) {
		notFound();
	}

	const frontmatter = await file.getExportValue('frontmatter');

	return (
		<div className={styles.content}>
			<div className={styles.article}>
				<Heading
					title={frontmatter.title}
					description={frontmatter.description}
					lexicon={frontmatter.lexiconDefinition}
					packageStatus={frontmatter.packageStatus}
					path={slug}
					design
					markup={!!fileMarkup}
					npmPackage={frontmatter.packageNpm}
					use={
						frontmatter.packageUse ? (
							<CodeInline
								language="jsx"
								style={{
									backgroundColor: 'transparent',
									boxShadow: 'none',
								}}
							>
								{frontmatter.packageUse}
							</CodeInline>
						) : (
							''
						)
					}
				/>

				<div
					className="clay-docs-design"
					dangerouslySetInnerHTML={{__html: fileDesign.html}}
				/>

				<div className={styles.author_container}>
					{fileDesign.dateModified && (
						<p className="text-secondary">
							Last edited{' '}
							{new Intl.DateTimeFormat('en-US', {
								dateStyle: 'long',
								timeStyle: 'medium',
							}).format(new Date(fileDesign.dateModified))}
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
