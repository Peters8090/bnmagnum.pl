import {FC} from 'react'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Content} from '../../misc/content'
import {NavigationItem} from './NavigationItem/NavigationItem'
import {css} from '@emotion/core'

export interface NavigationProps {
	position?: 'sticky' | 'fixed'
}


export const Navigation: FC<NavigationProps> = props => {
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
		<AppBar position={props.position} color='transparent' variant='outlined'>
			<Toolbar css={styles.toolbar}>
				<Typography variant='h6' css={styles.logo}>
					{Content.navigation.logo_text}
				</Typography>
				<div css={styles.navigationItems}>
					<NavigationItem text='Home' href='/#'/>
					<NavigationItem text='O firmie' href='/#o-firmie'/>
					<NavigationItem text='Nasi pracownicy' href='/#nasi-pracownicy'/>
					<NavigationItem text='Wyszukiwarka ofert' href='/wyszukiwarka-ofert'/>
					<NavigationItem text='Kontakt' href='/#kontakt'/>
				</div>
			</Toolbar>
		</AppBar>
	)
}

Navigation.defaultProps = {
	position: 'fixed',
}