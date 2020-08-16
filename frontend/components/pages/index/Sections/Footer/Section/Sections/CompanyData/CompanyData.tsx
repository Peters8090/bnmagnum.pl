import {FC} from 'react'
import {Section} from '../../Section'
import {Information} from './Information/Information'
import {Content} from '../../../../../../../../contents/content'

export const CompanyData: FC = () => {
    return (
        <Section title={Content.footer.companyData} gridProps={{md: 8}}>
            {Content.footer.informations.map(info => (
                <Information title={info.title} content={info.content}/>
            ))}
        </Section>
    )
}