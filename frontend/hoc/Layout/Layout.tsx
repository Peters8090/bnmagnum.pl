import {FC} from 'react'
import {Navigation} from './Navigation/Navigation'
import Paper from '@material-ui/core/Paper'
import {css} from '@emotion/core'
import NextNProgress from 'nextjs-progressbar'
import {useTheme} from '@material-ui/core'

export const Layout: FC = props => {
    const theme = useTheme()
    const styles = {
        root: css`
			display: flex;
			flex-direction: column;
			min-height: 100vh;
		`,
    }

    return (
        <Paper square elevation={0} css={styles.root}>
            <Navigation/>
            {props.children}
            <NextNProgress color={theme.palette.primary.main}/>
        </Paper>
    )
}