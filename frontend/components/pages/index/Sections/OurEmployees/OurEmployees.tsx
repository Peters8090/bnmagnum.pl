import {PageTitle} from '../../shared/PageTitle'
import {css} from '@emotion/core'
import {Employee} from './Employee/Employee'
import {useTheme} from '@material-ui/core'
import {Route} from '../../../../../interfaces/route'
import {convertRouteHashToLinkId} from '../../../../../functions/convertRouteHashToLinkId'

export const OurEmployees: Route = () => {
    const theme = useTheme()
    const styles = {
        ourEmployees: css`
          padding: ${theme.spacing(4)}px 0;
          ${theme.customMixins.flexCentered};
          flex-direction: column;
		`,
    }

    const linkId = convertRouteHashToLinkId(OurEmployees.useRouteName())

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

OurEmployees.useRouteName = () => '/#nasi-pracownicy'