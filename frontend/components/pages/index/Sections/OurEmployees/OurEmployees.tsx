import {PageTitle} from '../../shared/PageTitle'
import {css} from '@emotion/core'
import {Employee} from './Employee/Employee'
import {useTheme} from '@material-ui/core'
import {RouteType} from '../../../../../interfaces and types/RouteType'
import {convertRouteHashToLinkId} from '../../../../../functions/convertRouteHashToLinkId'

export const OurEmployees: RouteType = () => {
    const theme = useTheme()
    const styles = {
        ourEmployees: css`
          padding: ${theme.spacing(4)}px 0;
          ${theme.customMixins.flexCentered};
          flex-direction: column;
		`,
    }

    const linkId = convertRouteHashToLinkId(OurEmployees.routeName)

    return (
        <div id={linkId} css={styles.ourEmployees}>
            <PageTitle text='Nasi pracownicy'/>
            <div>
                <Employee title='Jan Kowalski'
                          description={['Właściciel firmy', 'Pośrednik nieruchomości od wielu lat', 'Telefon: +48 123 456 789']}
                          image='https://icon-library.com/images/profile-png-icon/profile-png-icon-24.jpg'/>
                <Employee title='Jan Kowalski'
                          description={['Właściciel firmy', 'Pośrednik nieruchomości od wielu lat', 'Telefon: +48 123 456 789']}
                          image='https://icon-library.com/images/profile-png-icon/profile-png-icon-24.jpg'/>
            </div>
        </div>
    )
}


OurEmployees.displayName = 'Nasi pracownicy'
OurEmployees.routeName = '/#nasi-pracownicy'