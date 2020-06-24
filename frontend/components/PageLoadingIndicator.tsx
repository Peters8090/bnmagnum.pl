import {FC, useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import LinearProgress from '@material-ui/core/LinearProgress'
import {css} from '@emotion/core'

export const PageLoadingIndicator: FC = () => {
	const router = useRouter()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const handleStart = (url: string) => (url !== router.pathname) && setLoading(true)
		const handleComplete = (url: string) => (url !== router.pathname) && setLoading(false)

		router.events.on('routeChangeStart', handleStart)
		router.events.on('routeChangeComplete', handleComplete)
		router.events.on('routeChangeError', handleComplete)

		return () => {
			router.events.off('routeChangeStart', handleStart)
			router.events.off('routeChangeComplete', handleComplete)
			router.events.off('routeChangeError', handleComplete)
		}
	})

	const styles = {
		linearProgress: css`
			z-index: 2000;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
		`,
	}

	if (loading)
		return (
			<LinearProgress color='primary' css={styles.linearProgress}/>
		)
	else
		return null
}