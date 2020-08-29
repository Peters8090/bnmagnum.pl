import css from '@emotion/css'
import {RouteType} from '../interfaces and types/RouteType'
import {OfferList} from '../components/pages/wyszukiwarka-ofert/OfferList/OfferList'
import {OfferDetails} from '../components/pages/wyszukiwarka-ofert/OfferDetails/OfferDetails'
import {useCurrentNavigationHeight} from '../hooks/useCurrentNavigationHeight'

const OfferSearch: RouteType = () => {
    const navHeight = useCurrentNavigationHeight()
    const styles = {
        root: css`
    	    display: grid;
    	    grid-template-columns: 1fr 1fr;
    	    height: calc(100vh - ${navHeight}px);
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