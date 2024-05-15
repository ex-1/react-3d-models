// -- ModelsPage --

import { ModelPreviewContext, useModelsPage } from './useModelsPage'
import { getConfig } from '@/utils/getConfig'
import ModelCard, { ModelCardProps } from './ModelCard/ModelCard'
import ModelPreview from './ModelPreview/ModelPreview'

import './ModelsPage.scss'

import config from '@/config/models.config.json'
const models = getConfig(config) as ModelCardProps[]

export default function ModelsPage() {
	const { modelData, changeModelData } = useModelsPage()

	return (
		<div className='models-wrapper'>
			<ModelPreviewContext.Provider value={{ modelData, changeModelData }}>
				{modelData.isShow && (
					<ModelPreview
						description={modelData.description}
						title={modelData.title}
						modelURL={modelData.url}
					/>
				)}
				<div className='container-fluid'>
					<div className='models'>
						{models.map((d, i) => (
							<div key={`model-${i}-${d.title}`} className='models-item'>
								<ModelCard key={`model-${i}-${d.title}`} {...d} />
							</div>
						))}
					</div>
				</div>
			</ModelPreviewContext.Provider>
		</div>
	)
}
