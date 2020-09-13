import {useTheme} from '@material-ui/core/styles'
import {css} from '@emotion/core'
import {Hero} from '../../../../components/pages/index/Sections/Hero/Hero'
import {About} from '../../../../components/pages/index/Sections/About/About'
import {OurEmployees} from '../../../../components/pages/index/Sections/OurEmployees/OurEmployees'
import OfferSearch from '../../../../pages/wyszukiwarka-ofert/[[...offerName]]'
import {Footer} from '../../../../components/pages/index/Sections/Footer/Footer'
import {NavigationItem, NavigationItemProps} from './NavigationItem/NavigationItem'
import {FC} from 'react'

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

    const routeList: { displayName: string, routeName: string }[] = [Hero, About, OurEmployees, OfferSearch, Footer]
    return (
        <div css={styles.root}>
            {routeList.map(route => <NavigationItem text={route.displayName}
                                                    href={route.routeName} {...props.navigationItemProps}/>)}
        </div>
    )
}
