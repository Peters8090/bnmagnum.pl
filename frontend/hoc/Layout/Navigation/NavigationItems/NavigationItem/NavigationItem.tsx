import {FC, MouseEventHandler} from 'react'
import Typography from '@material-ui/core/Typography'
import {css} from '@emotion/core'
import useTheme from '@material-ui/core/styles/useTheme'
import {useCurrentRouteLinkWithHash} from '../../../../../hooks/useCurrentRouteLinkWithHash'
import {NextLinkSmoothScroll} from './NextLinkSmoothScroll/NextLinkSmoothScroll'
import {Button, useMediaQuery} from '@material-ui/core'


export interface NavigationItemProps {
    text: string
    href: string
    onClick?: MouseEventHandler
}

export const NavigationItem: FC<NavigationItemProps> = props => {
    const currentPageLink = useCurrentRouteLinkWithHash()
    const theme = useTheme()
    const styles = {
        button: css`
            border-radius: 0;
        `,
        text: css`
    		font-family: 'Rubik', sans-serif;
    		font-weight: ${currentPageLink === props.href ? 500 : 300};
    		padding: 0 ${theme.spacing(2)}px;
    		text-align: center;
    		text-transform: none;
    	`,
    }

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <NextLinkSmoothScroll href={props.href}>
            <Button component='a' onClick={props.onClick} fullWidth={isMobile} disableRipple={!isMobile}
                    css={styles.button}>
                <Typography css={styles.text}>
                    {props.text}
                </Typography>
            </Button>
        </NextLinkSmoothScroll>
    )
}