import {FC} from 'react'
import {Section} from '../../Section'
import {Information} from './Information/Information'
import {Content} from '../../../../../../../../contents/content'
import {chunk} from 'lodash'
import {CustomGrid} from '../../../../../../../shared/Custom Material-UI/CustomGrid'

export const CompanyData: FC = () => {
    const informationsChunked = chunk(Content.footer.informations, 3)

    return (
        <Section title={Content.footer.companyData} gridProps={{md: 9}}>
            <CustomGrid container justify='space-between'>
                {informationsChunked.map(infChunked => (
                    <CustomGrid item xs={12} sm={5}>
                        {infChunked.map(info => (
                            <Information title={info.title} content={info.content}/>
                        ))}
                    </CustomGrid>
                ))}
            </CustomGrid>
        </Section>
    )
}