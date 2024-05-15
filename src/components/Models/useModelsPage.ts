/* eslint-disable no-mixed-spaces-and-tabs */
import { createContext, useEffect, useMemo, useState } from 'react'

export type TModelProps =
	| {
			isShow: true

			url: string
			title: string
			description: string
	  }
	| {
			isShow: false

			url: null
			title: null
			description: null
	  }

export const ModelPreviewContext = createContext<{
	modelData: TModelProps
	changeModelData: (data: TModelProps) => void
}>({
	modelData: {
		isShow: false,
		url: null,
		title: null,
		description: null
	},
	changeModelData: (data: TModelProps) => {
		console.log(data)
	}
})

export const useModelsPage = () => {
	const [modelData, setModelData] = useState<TModelProps>({
		isShow: false,
		url: null,
		title: null,
		description: null
	})

	const changeModelData = (data: TModelProps) => setModelData(data)

	const value = useMemo(() => ({ modelData, changeModelData }), [modelData])

	useEffect(() => {
		if (modelData.isShow) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [modelData.isShow])

	return value
}
