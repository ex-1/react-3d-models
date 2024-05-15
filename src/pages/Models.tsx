// -- Main --

import { usePageTitle } from '@/utils/usePageTitle'

import Header from '@/components/Shared/Header/Header'
import ModelsPage from '@/components/Models/ModelsPage'

export default function Models({ title }: { title: string }) {
	usePageTitle(title)

	return (
		<div id='models-page' className='page-container'>
			<Header />
			<ModelsPage />
		</div>
	)
}
