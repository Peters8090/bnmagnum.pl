import {css} from '@emotion/core'
import {HeroLeft} from './HeroLeft/HeroLeft'
import {HeroRight} from './HeroRight/HeroRight'
import {GoDownFab} from './GoDownFab/GoDownFab'
import {Hidden, useTheme} from '@material-ui/core'
import {Route} from '../../../../../interfaces/route'

export const Hero: Route = () => {
    const theme = useTheme()
    const styles = {
        root: css`
			position: relative;
			display: grid;
			grid-template-columns: 1fr 1fr;
			
			${theme.breakpoints.down('sm')} {
			    ${theme.customMixins.flexCentered};
			    flex-direction: column;
			}
		`,
    }

    return (
        <div css={styles.root}>
            <HeroLeft/>
            <Hidden smDown>
                <HeroRight/>
            </Hidden>
            <GoDownFab/>
        </div>
    )
}

Hero.name = 'HomePage.name'
Hero.routeName = 'HomePage.routeName'