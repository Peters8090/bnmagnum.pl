import {Fragment, FC} from 'react'
import Button from '@material-ui/core/Button'

interface NavigationItemProps {
    text: string
}

export const NavigationItem: FC<NavigationItemProps> = props => {
    return (
        <Fragment>
            <Button color="primary">
                {props.text}
            </Button>
        </Fragment>
    )
}