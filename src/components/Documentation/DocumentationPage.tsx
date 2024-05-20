// -- DocumentationPage --

import { getConfig } from '@/utils/getConfig'
import './DocumentationPage.scss'

import config from '@/config/documentation.config.json'
import ArticleCard, { ArticleProps } from './ArticleCard/ArticleCard'
import { DocPageContext, useDocumentationPage } from './useDocumentationPage'
import classNames from 'classnames'
const articles = getConfig(config) as ArticleProps[]

export default function DocumentationPage() {
	const { openedArticle, openArticle } = useDocumentationPage()

	return (
		<div className='documentation-wrapper' id='page-top'>
			<div className='container-fluid'>
				<div className='documentation'>
					<DocPageContext.Provider value={{ openedArticle, openArticle }}>
						{articles.map((a, i) => (
							<div
								key={`article-${i}-${a.title}`}
								className={classNames(
									'documentation-item',
									openedArticle === i && '--opened'
								)}
							>
								<ArticleCard key={`article-${i}-${a.title}`} {...a} id={i} />
							</div>
						))}
					</DocPageContext.Provider>
				</div>
			</div>
		</div>
	)
}
