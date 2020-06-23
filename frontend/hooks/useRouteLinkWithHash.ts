import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

export const useRouteLinkWithHash = () => {
	const [routeLink, setRouteLink] = useState('')

	const router = useRouter()

	const handleRouteHashChange = (url: string) => setRouteLink(url)

	useEffect(() => {
		setRouteLink(router.asPath)

		router.events.on('routeChangeComplete', handleRouteHashChange)
		router.events.on('hashChangeComplete', handleRouteHashChange)

		return () => {
			router.events.off('routeChangeComplete', handleRouteHashChange)
			router.events.off('hashChangeComplete', handleRouteHashChange)
		}
	}, [])

	return routeLink
}