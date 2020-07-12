import {FC} from 'react'
import {StylesProvider, ThemeProvider} from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes'
import {GlobalStyles} from './GlobalStyles'

export const Theme: FC = props => {
    const theme = responsiveFontSizes(createMuiTheme({
        palette: {
            primary: {main: '#56CCF2'},
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