import {FC} from 'react'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Content} from '../../misc/content'
import {NavigationItem} from './NavigationItem/NavigationItem'
import {css} from '@emotion/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export const useCurrentNavigationHeight = () => {
	const cond1 = useMediaQuery('@media (min-width:600px)')
	const cond2 = useMediaQuery('@media (min-width:0px) and (orientation: landscape)')

	if (cond1)
		return 66
	else if (cond2)
		return 50
	else
		return 58
}

export const Navigation: FC = () => {
	const styles = {
		logo: css`
          font-family: 'Cabin', sans-serif;
        `,
		toolbar: css`
		    justify-content: space-evenly;
		`,
		navigationItems: css`
		    display: flex;
		    justify-content: center;
		    align-items: center;
		`,
	}

	return (
		<AppBar position='sticky' color='transparent' variant='outlined'>
			<Toolbar css={styles.toolbar}>
				<Typography variant='h6' css={styles.logo}>
					{Content.navigation.logo_text}
				</Typography>
				<div css={styles.navigationItems}>
					<NavigationItem text='Home' href='/'/>
					<NavigationItem text='O firmie' href='/#o-firmie'/>
					<NavigationItem text='Nasi pracownicy' href='/#nasi-pracownicy'/>
					<NavigationItem text='Wyszukiwarka ofert' href='/wyszukiwarka-ofert'/>
					<NavigationItem text='Kontakt' href='/#kontakt'/>
				</div>
			</Toolbar>
		</AppBar>
	)
}