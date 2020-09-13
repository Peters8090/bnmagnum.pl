import css from '@emotion/css'
import {RouteType} from '../../interfaces and types/RouteType'
import {OfferList} from '../../components/pages/wyszukiwarka-ofert/OfferList/OfferList'
import {OfferDetails} from '../../components/pages/wyszukiwarka-ofert/OfferDetails/OfferDetails'
import {useCurrentNavigationHeight} from '../../hooks/useCurrentNavigationHeight'
import {useTheme} from '@material-ui/core/styles'
import {useRouter} from 'next/router'
import {useMediaQuery} from '@material-ui/core'
import {HiddenCond} from '../../components/shared/HiddenCond/HiddenCond'

export const useOfferName = () => {
    const {query} = useRouter()
    return query.offerName!?.[0]
}

const OfferSearch: RouteType = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const navHeight = useCurrentNavigationHeight()
    const offerName = useOfferName()
    const styles = {
        root: css`
    	    display: grid;
    	    height: calc(100vh - ${navHeight}px);
    	    
    	    & > * {
    	      overflow-y: scroll;
    	    }
    	    
            background-color: #E0E0E0;
            
            ${theme.breakpoints.up('md')} {
    	        grid-template-columns: 1fr 1fr;
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
OfferSearch.routeName = '/wyszukiwarka-ofert/[[...offerName]]'

export default OfferSearch