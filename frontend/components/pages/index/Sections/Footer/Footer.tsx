import {PageTitle} from '../../shared/PageTitle'
import {css} from '@emotion/core'
import {useTheme} from '@material-ui/core'
import {useCurrentNavigationHeight} from '../../../../../hooks/useCurrentNavigationHeight'
import {CompanyData} from './Section/Sections/CompanyData/CompanyData'
import {useScrollbarWidth} from 'react-use'
import {RouteType} from '../../../../../interfaces and types/RouteType'
import {convertRouteHashToLinkId} from '../../../../../functions/convertRouteHashToLinkId'
import {ContactForm} from './Section/Sections/ContactForm/ContactForm'
import {CustomGrid} from '../../../../shared/Custom Material-UI/CustomGrid'


export const Footer: RouteType = () => {
    const navHeight = useCurrentNavigationHeight()
    const scrollBarWidth = useScrollbarWidth()!
    const theme = useTheme()
    const styles = {
        root: css`
            width: 100%;
            min-height: calc(100vh - ${navHeight}px);
            background-color: #E0E0E0;
            
            display: flex;
            align-items: center;
            flex-direction: column;
                        
            &::before {
                content: '';
                width: 100%;
                height: 50px;
                
                background-color: transparent;
                
                border-right: calc(50vw - ${scrollBarWidth / 2}px) solid transparent;
                border-left: calc(50vw - ${scrollBarWidth / 2}px) solid transparent;
                border-top: 100px solid white;
                
                ${theme.breakpoints.down('sm')} {
                  border-top-width: 50px;
                }
            }
		`,
        content: css`
            padding: 0 5%;
        `,
        title: css`
            margin-top: ${theme.spacing(5)}px;
        `,
    }

    const linkId = convertRouteHashToLinkId(Footer.routeName)

    return (
        <footer id={linkId} css={styles.root}>
            <PageTitle text='Kontakt z nami' css={styles.title}/>
            <CustomGrid container spacing={3} justify='space-around' css={styles.content}>
                <CompanyData/>
                <ContactForm/>
            </CustomGrid>
        </footer>
    )
}

Footer.displayName = 'Kontakt'
Footer.routeName = `/#kontakt`