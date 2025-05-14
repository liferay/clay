import {
	CSSDocumentsCollection,
	ComponentDocumentsCollection,
	DocumentsCollection,
} from '@/collections/site';

import {Sidebar} from '../../_components/Sidebar';
import {Navbar} from '../../_components/Navbar';
import styles from './layout.module.css';

export default function DocsLayout({children}: {children: React.ReactNode}) {
	return (
		<>
			<Sidebar
				collection={[
					{name: 'Introduction', collection: DocumentsCollection},
					{
						name: 'Components',
						collection: ComponentDocumentsCollection,
						sort: true,
					},
					{
						name: 'CSS',
						collection: CSSDocumentsCollection,
						sort: true,
					},
				]}
				path="docs"
			/>
			<div className={styles.main}>
				<Navbar />
				<main className={styles.content}>{children}</main>
			</div>
		</>
	);
}
