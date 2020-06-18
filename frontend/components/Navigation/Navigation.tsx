import {FC} from 'react'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Content from '../../content/content.json'
import {NavigationItem} from './NavigationItem/NavigationItem'
import {css} from '@emotion/core'

export const Navigation: FC = () => {
    const styles = {
        logo: css`
          flex: 1;
        `,
    }

    return (
        <AppBar position='sticky' color='transparent' variant='outlined'>
            <Toolbar>
                <Typography variant='h6' css={styles.logo}>
                    {Content.navigation.logo_text}
                </Typography>
                <div>
                    <NavigationItem text='Home'/>
                </div>
            </Toolbar>
        </AppBar>
    )
}