// -- Models --

import PortfolioPage from '@/components/Portfolio/PortfolioPage'
import Header from '@/components/Shared/Header/Header'
import { usePageTitle } from '@/utils/usePageTitle'

const style = {
	display: 'flex',
	minHeight: '100lvh'
}

export default function Portfolio({ title }: { title: string }) {
	usePageTitle(title)

	return (
		<div id='portfolio-page' style={{ ...style, flexDirection: 'column' }}>
			<Header />
			<PortfolioPage />
		</div>
	)
}
