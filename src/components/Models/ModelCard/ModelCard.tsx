// ModelCard.tsx

import { startTransition, useContext } from 'react'
import { ModelPreviewContext } from '../useModelsPage'

import './ModelCard.scss'

export interface ModelCardProps {
	title: string
	imagePath: string
	modelPath: string
	description: string
}

export default function ModelCard({
	imagePath,
	title,
	description,
	modelPath
}: ModelCardProps) {
	const { changeModelData } = useContext(ModelPreviewContext)

	const setModelData = () =>
		startTransition(() => {
			changeModelData({
				isShow: true,
				url: modelPath,
				title: title,
				description: description
			})
		})

	return (
		<div className='model-card' onClick={setModelData}>
			<div className='model-card__thumbnail'>
				<div className='image-container'>
					<div style={{ padding: '30%' }} />
					<img src={imagePath} alt={`Img: ${title} (${imagePath})`} />
				</div>
			</div>
			<div className='model-card__footer'>
				<h3>{title}</h3>
			</div>
		</div>
	)
}
