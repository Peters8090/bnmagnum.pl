import {FC} from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

export const Theme: FC = props => {
    const theme = createMuiTheme({

    });

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
};