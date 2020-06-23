import {FC} from 'react'
import Typography from '@material-ui/core/Typography'
import {css} from '@emotion/core'
import useTheme from '@material-ui/core/styles/useTheme'
import {useRouteLinkWithHash} from '../../../hooks/useRouteLinkWithHash'
import LinkSmoothScroll from '../../../utility/LinkSmoothScroll'


interface NavigationItemProps {
	text: string
	href: string
}

export const NavigationItem: FC<NavigationItemProps> = props => {
	const currentPageLink = useRouteLinkWithHash()
	const theme = useTheme()
	const styles = {
		text: css`
    		font-family: 'Rubik', sans-serif;
    		font-weight: ${currentPageLink === props.href ? 500 : 300};
    		padding: 0 ${theme.spacing(2)}px;
    		cursor: pointer;
    	`,
	}

	return (
		<LinkSmoothScroll href={props.href}>
			<a>
				<Typography css={styles.text}>
					{props.text}
				</Typography>
			</a>
		</LinkSmoothScroll>
	)
}