import { startTransition, useContext, useEffect } from 'react'
import { ModelPreviewContext } from '../useModelsPage'

export const useModelPreview = () => {
	const { changeModelData, modelData } = useContext(ModelPreviewContext)

	const resetModelData = () => {
		startTransition(() =>
			changeModelData({
				isShow: false,
				url: null,
				title: null,
				description: null,
				position: null,
				scale: null
			})
		)
	}

	const handleEsc = (e: KeyboardEvent) => {
		if (e instanceof KeyboardEvent && e.key !== 'Escape') return

		e.preventDefault()

		resetModelData()
	}

	const closeWindow = (e: React.MouseEvent) => {
		if (e.target !== e.currentTarget) return

		e.preventDefault()
		e.stopPropagation()

		resetModelData()
	}

	const handleCloseClick = () => resetModelData()

	useEffect(() => {
		const handleKeyboard = (e: KeyboardEvent) => handleEsc(e)
		window.addEventListener('keydown', handleKeyboard)
		return () => {
			window.removeEventListener('keydown', handleKeyboard)
		}
	}, [])

	return { closeWindow, handleCloseClick, modelData }
}
