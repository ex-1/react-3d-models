// -- Models --

import Header from '@/components/Shared/Header/Header'
import { usePageTitle } from '@/utils/usePageTitle'

export default function Portfolio({ title }: { title: string }) {
	usePageTitle(title)

	return (
		<div id='portfolio-page'>
			<Header />
		</div>
	)
}
