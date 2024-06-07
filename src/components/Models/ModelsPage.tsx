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
		<div className='models-wrapper' id='page-top'>
			<ModelPreviewContext.Provider value={{ modelData, changeModelData }}>
				{modelData.isShow && <ModelPreview />}
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
			<div className='container-fluid'>
				<div className='row'>
					<div className='col'>
						<div className='page-bottom'>
							<a href='#' className='primary-btn' target='_self'>
								<span>Вернуться в начало</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
