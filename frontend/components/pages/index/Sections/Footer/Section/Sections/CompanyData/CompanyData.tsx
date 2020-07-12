import {FC} from 'react'
import {Section} from '../../Section'
import {Information} from './Information/Information'


export const CompanyData: FC = () => {
    return (
        <Section title='Dane firmy' gridProps={{
            md: 8,
        }}>
            <Information title='EMAIL' content='biuro@nieruchomosci-waw.com'/>
            <Information title='TELEFON' content='+48 123 456 789'/>
            <Information title='ADRES FIRMY' content='ul. Marszałkowska 1, 00-026 Warszawa'/>
            <Information title='NIP' content='5213849986'/>
            <Information title='REGON' content='382028956'/>
            <Information title='KRS' content='0000745671'/>
        </Section>
    )
}