import Grid from '@material-ui/core/Grid'
import {AboutLeft} from './AboutLeft/AboutLeft'
import {AboutRight} from './AboutRight/AboutRight'
import css from '@emotion/css'
import {useTheme} from '@material-ui/core'
import {RouteType} from '../../../../../interfaces and types/RouteType'
import {convertRouteHashToLinkId} from '../../../../../functions/convertRouteHashToLinkId'

export const About: RouteType = () => {
    const theme = useTheme()
    const styles = {
        root: css`
            ${theme.customMixins.flexCentered};
    	`,
    }

    const linkId = convertRouteHashToLinkId(About.routeName)

    return (
        <Grid container css={styles.root} id={linkId}>
            <AboutLeft/>
            <AboutRight/>
        </Grid>
    )
}

About.displayName = 'O firmie'
About.routeName = '/#o-firmie'