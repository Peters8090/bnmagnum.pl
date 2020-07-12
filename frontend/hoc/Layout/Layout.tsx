import {FC} from 'react'
import {Navigation} from './Navigation/Navigation'
import Paper from '@material-ui/core/Paper'
import {css} from '@emotion/core'
import {PageLoading} from './PageLoading/PageLoading'

export const Layout: FC = props => {
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
            <PageLoading/>
        </Paper>
    )
}