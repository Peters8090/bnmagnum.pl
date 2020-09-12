import {forwardRef, ForwardRefExoticComponent, RefAttributes, useState} from 'react'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {css} from '@emotion/core'
import {Divider, Drawer, Hidden, Icon, IconButton} from '@material-ui/core'
import {useTheme} from '@material-ui/core/styles'
import {NavigationItems} from './NavigationItems/NavigationItems'
import {Logo} from './Logo/Logo'


export const Navigation: ForwardRefExoticComponent<RefAttributes<unknown>> = forwardRef((_, ref) => {
    const theme = useTheme()
    const styles = {
        logo: css`
          font-family: 'Cabin', sans-serif;
        `,
        toolbar: css`
		    justify-content: space-evenly;
		`,

        drawerLogoWrapper: css`
            margin: 0 ${theme.spacing(3)}px;
            margin-top: ${theme.spacing(2)}px;
        `,
        drawerDivider: css`
            margin: ${theme.spacing(2)}px 0;
        `,
    }

    const [drawerOpen, setDrawerOpen] = useState(false)


    return (
        <AppBar ref={ref} position='sticky' color='inherit' variant='outlined'>
            <Toolbar css={styles.toolbar}>
                <Logo/>
                <Hidden smDown>
                    <NavigationItems/>
                </Hidden>
                <Hidden mdUp>
                    <IconButton onClick={() => setDrawerOpen(true)}>
                        <Icon>menu</Icon>
                    </IconButton>
                </Hidden>
                <Hidden mdUp>
                    <Drawer anchor='right' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                        <div css={styles.drawerLogoWrapper}>
                            <Logo/>
                        </div>
                        <Divider css={styles.drawerDivider}/>
                        <NavigationItems navigationItemProps={{onClick: () => setDrawerOpen(false)}}/>
                    </Drawer>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
})