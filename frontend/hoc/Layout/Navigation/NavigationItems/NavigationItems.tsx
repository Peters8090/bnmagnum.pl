import {useTheme} from '@material-ui/core/styles'
import {css} from '@emotion/core'
import {Hero} from '../../../../components/pages/index/Sections/Hero/Hero'
import {About} from '../../../../components/pages/index/Sections/About/About'
import {OurEmployees} from '../../../../components/pages/index/Sections/OurEmployees/OurEmployees'
import OfferSearch from '../../../../pages/wyszukiwarka-ofert/[[...offerName]]'
import {Footer} from '../../../../components/pages/index/Sections/Footer/Footer'
import {NavigationItem, NavigationItemProps} from './NavigationItem/NavigationItem'
import {FC} from 'react'
import {RouteLink} from '../../../../functions/RouteLink'
import {RouteType} from '../../../../interfaces and types/RouteType'

interface NavigationItemsProps {
    navigationItemProps?: Partial<NavigationItemProps>
}

export const NavigationItems: FC<NavigationItemsProps> = props => {
    const theme = useTheme()
    const styles = {
        root: css`
            ${theme.customMixins.flexCentered};
		    
		    ${theme.breakpoints.down('sm')} {
		        flex-direction: column;
		        
		        & > * {
		          margin: ${theme.spacing(0.5)}px 0;
		        }
		    }
		`,
    }

    const routeList: RouteType[] = [Hero, About, OurEmployees, OfferSearch, Footer]
    return (
        <div css={styles.root}>
            {routeList.map(route => <NavigationItem text={route.displayName}
                                                    LinkProps={RouteLink(route)}
                                                    {...props.navigationItemProps}/>)}
        </div>
    )
}
