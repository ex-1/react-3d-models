import { createContext, useMemo, useState } from 'react'

export const DocPageContext = createContext<{
	openedArticle: number | null
	openArticle: (id: number) => void
}>({
	openedArticle: null,
	openArticle: (id: number) => console.log(id)
})

export const useDocumentationPage = () => {
	const [openedArticle, setOpenedArticle] = useState<number | null>(null)
	const openArticle = (id: number) => {
		openedArticle === id ? setOpenedArticle(null) : setOpenedArticle(id)
	}

	const value = useMemo(() => ({ openedArticle, openArticle }), [openedArticle])

	return value
}
