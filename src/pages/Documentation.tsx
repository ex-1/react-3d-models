// -- Documentation --

import Header from '@/components/Shared/Header/Header'
import DocumentationPage from '@/components/Documentation/DocumentationPage'
import { usePageTitle } from '@/utils/usePageTitle'

export default function Documentation({ title }: { title: string }) {
	usePageTitle(title)

	return (
		<div id='documentation-page'>
			<Header />
			<DocumentationPage />
		</div>
	)
}
