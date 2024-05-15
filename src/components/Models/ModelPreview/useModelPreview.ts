import { useContext, useEffect } from 'react'
import { ModelPreviewContext } from '../useModelsPage'

export const useModelPreview = () => {
	const { changeModelData, modelData } = useContext(ModelPreviewContext)

	const handleEsc = (e: KeyboardEvent) => {
		if (e instanceof KeyboardEvent && e.key !== 'Escape') return

		e.preventDefault()

		changeModelData({
			isShow: false,
			url: null,
			title: null,
			description: null
		})
	}

	const closeWindow = (e: React.MouseEvent) => {
		if (e.target !== e.currentTarget) return

		e.preventDefault()
		e.stopPropagation()

		changeModelData({
			isShow: false,
			url: null,
			title: null,
			description: null
		})
	}

	useEffect(() => {
		const handleKeyboard = (e: KeyboardEvent) => handleEsc(e)
		window.addEventListener('keydown', handleKeyboard)
		return () => {
			window.removeEventListener('keydown', handleKeyboard)
		}
	}, [])

	return { closeWindow, modelData }
}
