import {forwardRef, ForwardRefExoticComponent, RefAttributes, useState} from 'react'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Content} from '../../../contents/content'
import {css} from '@emotion/core'
import {Divider, Drawer, Hidden, Icon, IconButton} from '@material-ui/core'
import {useTheme} from '@material-ui/core/styles'
import {routeList} from '../../../contents/routeList'
import {NavigationItem} from './NavigationItem/NavigationItem'


export const Navigation: ForwardRefExoticComponent<RefAttributes<unknown>> = forwardRef((_, ref) => {
    const theme = useTheme()
    const styles = {
        logo: css`
          font-family: 'Cabin', sans-serif;
        `,
        toolbar: css`
		    justify-content: space-evenly;
		`,
        navigationItems: css`
            ${theme.customMixins.flexCentered};
		    
		    ${theme.breakpoints.down('sm')} {
		        flex-direction: column;
		        
		        & > * {
		          margin: ${theme.spacing(0.5)}px 0;
		        }
		    }
		`,
        drawerLogoWrapper: css`
            margin: 0 ${theme.spacing(3)}px;
            margin-top: ${theme.spacing(2)}px;
        `,
        drawerDivider: css`
            margin: ${theme.spacing(2)}px 0;
        `,
    }

    const logo = (
        <Typography variant='h6' css={styles.logo}>
            {Content.navigation.logo_text}
        </Typography>
    )


    const [drawerOpen, setDrawerOpen] = useState(false)

    const navItems = (
        <div css={styles.navigationItems}>
            {routeList.map(route => <NavigationItem text={route.displayName} href={route.routeName}
                                                    onClick={() => setDrawerOpen(false)}/>)}
        </div>
    )

    return (
        <AppBar ref={ref} position='sticky' color='inherit' variant='outlined'>
            <Toolbar css={styles.toolbar}>
                {logo}
                <Hidden smDown>
                    {navItems}
                </Hidden>
                <Hidden mdUp>
                    <IconButton onClick={() => setDrawerOpen(true)}>
                        <Icon>menu</Icon>
                    </IconButton>
                </Hidden>
                <Hidden mdUp>
                    <Drawer anchor='right' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                        <div css={styles.drawerLogoWrapper}>
                            {logo}
                        </div>
                        <Divider css={styles.drawerDivider}/>
                        {navItems}
                    </Drawer>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
})