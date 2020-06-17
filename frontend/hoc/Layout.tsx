import {Fragment, FC} from "react";
import {Theme} from "./Theme"
import {GlobalStyles} from "../misc/GlobalStyles"

export const Layout: FC = props => {
    return (
        <Fragment>
            <GlobalStyles/>
            <Theme>
                {props.children}
            </Theme>
        </Fragment>
    )
};