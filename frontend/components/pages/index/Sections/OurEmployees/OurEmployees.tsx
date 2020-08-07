import {FC} from 'react'
import {PageTitle} from '../../shared/PageTitle'
import {css} from '@emotion/core'
import {Employee} from './Employee/Employee'
import {useTheme} from '@material-ui/core'

export const OurEmployees: FC = () => {
    const theme = useTheme()
    const styles = {
        ourEmployees: css`
            padding: ${theme.spacing(4)}px 0;
		    display: flex;
		    flex-direction: column;
		    justify-content: center;
		    align-items: center;
		`,
    }

    return (
        <div id='nasi-pracownicy' css={[styles.ourEmployees]}>
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