import {FC} from 'react'
import {NextLinkSmoothScroll} from '../../../../../../hoc/Layout/Navigation/NavigationItem/NextLinkSmoothScroll/NextLinkSmoothScroll'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import {css} from '@emotion/core'
import {useTheme} from '@material-ui/core/styles'
import {About} from '../../About/About'

export const GoDownFab: FC = () => {
    const theme = useTheme()
    const styles = {
        root: css`
            ${theme.breakpoints.up('md')} {                
                position: absolute;
                bottom: ${theme.spacing(7.5)}px;
                left: 50%;
                transform: translateX(-50%);
            }
            ${theme.breakpoints.down('sm')} {
                margin: ${theme.spacing(3)}px 0;
            }
			* {
				box-shadow: none;
			}
		`,
    }

    return (
        <NextLinkSmoothScroll href={About.routeName}>
            <a css={styles.root}>
                <Fab>
                    <KeyboardArrowDownIcon/>
                </Fab>
            </a>
        </NextLinkSmoothScroll>
    )
}