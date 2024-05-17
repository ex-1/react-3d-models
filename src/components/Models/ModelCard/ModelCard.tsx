// ModelCard.tsx

import { startTransition, useContext } from 'react'
import { ModelPreviewContext } from '../useModelsPage'

import './ModelCard.scss'

export interface ModelCardProps {
	title: string
	imagePath: string
	modelPath: string
	description: string
	scale?: number
	position?: [number, number, number]
}

export default function ModelCard({
	imagePath,
	title,
	description,
	modelPath,
	scale,
	position
}: ModelCardProps) {
	const { changeModelData } = useContext(ModelPreviewContext)

	const setModelData = () =>
		startTransition(() => {
			changeModelData({
				isShow: true,
				url: modelPath,
				title: title,
				description: description,
				position: position,
				scale: scale
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
