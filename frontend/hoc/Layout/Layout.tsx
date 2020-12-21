import {createContext, FC, MutableRefObject, useRef} from 'react'
import {Navigation} from './Navigation/Navigation'
import Paper from '@material-ui/core/Paper'
import {css} from '@emotion/core'
import NextNProgress from 'nextjs-progressbar'
import {useTheme} from '@material-ui/core/styles'

interface LayoutContextProps {
    navigationRef: MutableRefObject<HTMLElement | undefined>
}

export const LayoutContext = createContext<LayoutContextProps>(null as unknown as LayoutContextProps)

export const Layout: FC = props => {
    const theme = useTheme()
    const styles = {
        root: css`
			display: flex;
			flex-direction: column;
			min-height: 100vh;
		`,
    }

    const navigationRef = useRef<HTMLElement>()

    return (
        <LayoutContext.Provider value={{navigationRef}}>
            <Paper square elevation={0} css={styles.root}>
                <Navigation ref={navigationRef}/>
                {props.children}
                <NextNProgress color={theme.palette.primary.main}/>
            </Paper>
        </LayoutContext.Provider>
    )
}