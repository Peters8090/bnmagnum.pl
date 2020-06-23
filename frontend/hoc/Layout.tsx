import {FC} from 'react'
import {Theme} from './Theme'
import {GlobalStyles} from '../misc/GlobalStyles'
import {Navigation, NavigationProps} from '../components/Navigation/Navigation'
import {StylesProvider} from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import {css} from '@emotion/core'

interface LayoutProps {
	navigationProps?: NavigationProps
}

export const Layout: FC<LayoutProps> = props => {
	const styles = {
		root: css`
			display: flex;
			flex-direction: column;
			min-height: 100vh;
		`,
	}

	return (
		<Paper square elevation={0} css={styles.root}>
			<StylesProvider injectFirst>
				<Navigation {...props.navigationProps}/>
				<GlobalStyles/>
				<Theme>
					{props.children}
				</Theme>
			</StylesProvider>
		</Paper>
	)
}