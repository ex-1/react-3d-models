import { useLayoutEffect, useRef } from 'react'

export const usePageTitle = (title: string) => {
	const defaultTitle = useRef(document.title)

	useLayoutEffect(() => {
		document.title = title
	}, [title])

	return defaultTitle
}
