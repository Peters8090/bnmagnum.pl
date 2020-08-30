import css from '@emotion/css'
import {RouteType} from '../interfaces and types/RouteType'
import {OfferList} from '../components/pages/wyszukiwarka-ofert/OfferList/OfferList'
import {OfferDetails} from '../components/pages/wyszukiwarka-ofert/OfferDetails/OfferDetails'
import {useCurrentNavigationHeight} from '../hooks/useCurrentNavigationHeight'
import {useTheme} from '@material-ui/core/styles'
import SplitPane from 'react-split-pane'
import {useMediaQuery} from '@material-ui/core'

const OfferSearch: RouteType = () => {
    const theme = useTheme()
    const navHeight = useCurrentNavigationHeight()
    const styles = {
        root: css`
    	    height: calc(100vh - ${navHeight}px);
    	    
    	    & > * {
    	      overflow-y: scroll;
    	      outline: 0.5px solid gray;
    	    }
    	    
            background-color: #E0E0E0;
    	`,
    }

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <SplitPane css={styles.root} split={isMobile ? 'horizontal' : 'vertical'}>
            <OfferList/>
            <OfferDetails/>
        </SplitPane>
    )
}

OfferSearch.displayName = 'Wyszukiwarka ofert'
OfferSearch.routeName = '/wyszukiwarka-ofert'

export default OfferSearch