import {FC} from 'react'
import {css} from '@emotion/core'
import {HeroLeft} from './HeroLeft/HeroLeft'
import {HeroRight} from './HeroRight/HeroRight'
import {GoDownFab} from './GoDownFab/GoDownFab'
import {Hidden, useTheme} from '@material-ui/core'

export const Hero: FC = () => {
    const theme = useTheme()
    const styles = {
        root: css`
			position: relative;
			display: grid;
			grid-template-columns: 1fr 1fr;
			
			
			${theme.breakpoints.down('sm')} {
			    grid-template-columns: 1fr;
			    grid-template-rows: 1fr 1fr;
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