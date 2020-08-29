import css from '@emotion/css'
import {RouteType} from '../interfaces and types/RouteType'
import {OfferList} from '../components/pages/wyszukiwarka-ofert/OfferList/OfferList'
import {OfferDetails} from '../components/pages/wyszukiwarka-ofert/OfferDetails/OfferDetails'
import {useCurrentNavigationHeight} from '../hooks/useCurrentNavigationHeight'
import {useTheme} from '@material-ui/core'

const OfferSearch: RouteType = () => {
    const theme = useTheme()
    const navHeight = useCurrentNavigationHeight()
    const styles = {
        root: css`
    	    display: grid;
    	    grid-template-columns: 1fr 1fr;
    	    height: calc(100vh - ${navHeight}px);
    	    
    	    ${theme.breakpoints.down('sm')} {
    	        grid-template-columns: 1fr;
    	        grid-template-rows: 1fr 1fr;
    	    }
    	`,
    }

    return (
        <div css={styles.root}>
            <OfferList/>
            <OfferDetails/>
        </div>
    )
}

OfferSearch.displayName = 'Wyszukiwarka ofert'
OfferSearch.routeName = '/wyszukiwarka-ofert'

export default OfferSearch