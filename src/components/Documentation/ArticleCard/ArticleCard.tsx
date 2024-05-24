// -- ArticleCard --

import { ArticleExtra } from '@/config/something'
import './ArticleCard.scss'
import HotkeysTable from './ArticleExtras/HotkeysTable/HotkeysTable'
import cn from 'classnames'
import { useContext, useRef } from 'react'
import { DocPageContext } from '../useDocumentationPage'

export interface ArticleProps {
	id: number
	title: string
	thumbnail: string
	content: string
	extra?: ArticleExtra[]
}

export default function ArticleCard({
	id,
	content,
	extra,
	title,
	thumbnail
}: ArticleProps) {
	const { openArticle, openedArticle } = useContext(DocPageContext)
	const openMe = () => openArticle(id)
	const isOpened = openedArticle === id
	const cardRef = useRef<HTMLDivElement>(null)

	return (
		<div className='article-card' ref={cardRef}>
			<div className='article-card__thumbnail'>
				<div className='image-container'>
					<div style={{ padding: isOpened ? '15%' : '25%' }} />
					<img src={thumbnail} alt={`NOT FOUND: ${thumbnail}`} />
				</div>
			</div>
			<h2 className='article-card__title'>{title}</h2>
			<div className={cn('article-card__content', !isOpened && '--collapsed')}>
				{content}
				{extra && extra.length > 0 && (
					<div
						className={cn(
							'article-card__extra-wrapper',
							isOpened && '--opened'
						)}
					>
						{extra.map((e, i) => {
							switch (e.type) {
								case 'hotkeys':
									return (
										<HotkeysTable
											table={e.keysTable}
											key={`article-extra-${e.type}-${i}`}
										/>
									)

								case 'image':
									return (
										<div
											className='article-card__extra-image'
											key={`article-extra-${e.type}-${i}`}
											style={{
												maxHeight: `${cardRef.current?.clientWidth}px`
											}}
										>
											<img src={e.url} alt={e.name} />
										</div>
									)

								default:
									return null
							}
						})}
					</div>
				)}
			</div>

			<button
				className={cn('btn-expand', isOpened && '--opened')}
				onClick={openMe}
			>
				<span>{isOpened ? 'Свернуть' : 'Подробнее'}</span>
			</button>
		</div>
	)
}
