// -- ModelPreview --

import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useModelPreview } from './useModelPreview'
import { Suspense } from 'react'

import './ModelPreview.scss'
// import { Euler } from 'three'

export default function ModelPreview() {
	const { closeWindow, handleCloseClick, modelData } = useModelPreview()

	if (!modelData.isShow) throw new Error('Model preview error')

	const gltf = useLoader(GLTFLoader, modelData.url)

	return (
		<div className='model-preview-cover' onClick={closeWindow}>
			<div className='model-preview'>
				<button className='model-preview__btn-close' onClick={handleCloseClick}>
					<span>x</span>
				</button>
				<div className='model-interactive-wrapper'>
					<div className='model-interactive'>
						<Canvas>
							<ambientLight intensity={1} />
							<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
							<pointLight position={[-10, -10, -10]} />
							<Suspense fallback={null}>
								<primitive
									object={gltf.scene}
									position={modelData.position}
									scale={modelData.scale}
									// rotation={new Euler(0.1, 0, 0, 'XYZ')}
								/>
								<OrbitControls autoRotate />
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
					<a
						download
						target='_blank'
						href={modelData.url}
						className='primary-btn'
					>
						Скачать модель
					</a>
				</div>
			</div>
		</div>
	)
}
