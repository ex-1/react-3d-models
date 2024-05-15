// -- ModelPreview --

import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useModelPreview } from './useModelPreview'
import { Suspense } from 'react'

import './ModelPreview.scss'

export interface ModelPreviewProps {
	scale?: number
	position?: [number, number, number]
}

export default function ModelPreview({ position, scale }: ModelPreviewProps) {
	const { closeWindow, modelData } = useModelPreview()

	if (!modelData.isShow) throw new Error('Model preview error')

	const gltf = useLoader(GLTFLoader, modelData.url)

	return (
		<div className='model-preview-cover' onClick={closeWindow}>
			<div className='model-preview'>
				<div className='model-interactive-wrapper'>
					<div className='model-interactive'>
						<Canvas>
							<ambientLight intensity={0.3} />
							<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
							<pointLight position={[-10, -10, -10]} />
							<Suspense fallback={null}>
								<primitive
									object={gltf.scene}
									position={position}
									scale={scale}
								/>
								<OrbitControls />
							</Suspense>
						</Canvas>
					</div>
				</div>
				<div className='model-description'>
					<h3 className='model-description__title'>{modelData.title}</h3>
					<div
						className='model-description__description'
						dangerouslySetInnerHTML={{ __html: modelData.description }}
					/>
				</div>
			</div>
		</div>
	)
}
