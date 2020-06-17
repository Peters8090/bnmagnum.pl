import {Fragment, FC} from "react";
import {Theme} from "./Theme"
import {GlobalStyles} from "../misc/GlobalStyles"
import {Navigation} from "../components/Navigation/Navigation"

export const Layout: FC = props => {
    return (
        <Fragment>
            <Navigation/>
            <GlobalStyles/>
            <Theme>
                {props.children}
            </Theme>
        </Fragment>
    )
};