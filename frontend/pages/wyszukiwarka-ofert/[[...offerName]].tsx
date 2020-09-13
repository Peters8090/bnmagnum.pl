import css from '@emotion/css'
import {RouteType} from '../../interfaces and types/RouteType'
import {OfferList} from '../../components/pages/wyszukiwarka-ofert/OfferList/OfferList'
import {OfferDetails} from '../../components/pages/wyszukiwarka-ofert/OfferDetails/OfferDetails'
import {useCurrentNavigationHeight} from '../../hooks/useCurrentNavigationHeight'
import {useTheme} from '@material-ui/core/styles'
import {useRouter} from 'next/router'
import {useMediaQuery} from '@material-ui/core'
import {HiddenCond} from '../../components/shared/HiddenCond/HiddenCond'

const OfferSearch: RouteType = () => {
    const {query} = useRouter()
    const offerName = query.offerName!?.[0]
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const navHeight = useCurrentNavigationHeight()
    const styles = {
        root: css`
    	    display: grid;
    	    grid-template-columns: 1fr 1fr;
    	    //grid-template-columns: ${offerName ? '1fr 1fr' : '1fr'};
    	    height: calc(100vh - ${navHeight}px);
    	    
    	    & > * {
    	      overflow-y: scroll;
    	    }
    	    
            background-color: #E0E0E0;
            
            ${theme.breakpoints.up('md')} {
    	        & > * {
    	          outline: 0.5px solid gray;
    	        }
            }
    	    
    	    ${theme.breakpoints.down('sm')} {
    	        grid-template-columns: 1fr;
    	    }
    	`,
    }

    return (
        <div css={styles.root}>
            <HiddenCond condition={isMobile ? !!offerName : false} implementation='css'>
                <OfferList/>
            </HiddenCond>
            <HiddenCond condition={isMobile ? !offerName : !offerName} implementation='css'>
                <OfferDetails/>
            </HiddenCond>
        </div>
    )
}

OfferSearch.displayName = 'Wyszukiwarka ofert'
OfferSearch.routeName = '/wyszukiwarka-ofert'

export default OfferSearch