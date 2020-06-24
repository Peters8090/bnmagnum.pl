import {FC} from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes'

export const Theme: FC = props => {
	const theme = responsiveFontSizes(createMuiTheme({
		palette: {
			primary: {main: '#56CCF2'},
			type: 'dark',
		},
	}))

	return (
		<ThemeProvider theme={theme}>
			{props.children}
		</ThemeProvider>
	)
}