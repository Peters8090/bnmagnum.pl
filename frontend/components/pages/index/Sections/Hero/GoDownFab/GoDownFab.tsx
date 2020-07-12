import {FC} from 'react'
import {NextLinkSmoothScroll} from '../../../../../../hoc/Layout/Navigation/NavigationItem/NextLinkSmoothScroll/NextLinkSmoothScroll'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import {css} from '@emotion/core'
import {useTheme} from '@material-ui/core'

export const GoDownFab: FC = () => {
    const theme = useTheme()
    const styles = {
        root: css`
			position: absolute;
			bottom: ${theme.spacing(7.5)}px;
			left: 50vw;
			right: 50vw;
			* {
				box-shadow: none;
			}
		`,
    }

    return (
        <NextLinkSmoothScroll href='/#o-firmie'>
            <a css={styles.root}>
                <Fab>
                    <KeyboardArrowDownIcon/>
                </Fab>
            </a>
        </NextLinkSmoothScroll>
    )
}