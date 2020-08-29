import {css} from '@emotion/core'
import {HeroWelcome} from './HeroWelcome/HeroWelcome'
import {HeroImage} from './HeroImage/HeroImage'
import {GoDownFab} from './GoDownFab/GoDownFab'
import {Hidden, useTheme} from '@material-ui/core'
import {RouteType} from '../../../../../interfaces and types/RouteType'
import HomePage from '../../../../../pages'

export const Hero: RouteType = () => {
    const theme = useTheme()
    const styles = {
        root: css`
			position: relative;
			display: grid;
			grid-template-columns: 1fr 1fr;
			padding: 0 ${theme.spacing(2)}px;
			
			${theme.breakpoints.down('sm')} {
			    ${theme.customMixins.flexCentered};
			    flex-direction: column;
			}
		`,
    }

    return (
        <div css={styles.root}>
            <HeroWelcome/>
            <Hidden smDown>
                <HeroImage/>
            </Hidden>
            <GoDownFab/>
        </div>
    )
}

Hero.displayName = HomePage.displayName
Hero.routeName = HomePage.routeName