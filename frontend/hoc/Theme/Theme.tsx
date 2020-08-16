import {FC} from 'react'
import {StylesProvider, ThemeProvider} from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes'
import {GlobalStyles} from './GlobalStyles'
import {SerializedStyles} from '@emotion/core'
import css from '@emotion/css'

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        customMixins: {
            flexCentered: SerializedStyles,
        }
    }

    // allow configuration using `createMuiTheme`
    interface ThemeOptions extends Theme {
    }
}


export const Theme: FC = props => {
    const theme = responsiveFontSizes(createMuiTheme({
        palette: {
            primary: {main: '#56CCF2'},
        },
        customMixins: {
            flexCentered: css`
              display: flex;
              justify-content: center;
              align-items: center;
            `,
        },
    }), {
        factor: 2,
    })

    return (
        <StylesProvider injectFirst>
            <GlobalStyles/>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </StylesProvider>
    )
}