import {FC} from 'react'
import {Section} from '../../Section'
import {Information} from './Information/Information'
import {Content} from '../../../../../../../../contents/content'
import {chunk} from 'lodash'
import {CustomGrid} from '../../../../../../../shared/Custom Material-UI/CustomGrid'
import {GridSize} from '@material-ui/core'

export const CompanyData: FC = () => {
    const informationsChunked = chunk(Content.footer.informations, 3)

    return (
        <Section title={Content.footer.companyData} gridProps={{md: 9}}>
            <CustomGrid container justify='space-between'>
                {informationsChunked.map(informations => (
                    <CustomGrid item xs={12}
                                sm={(Math.min(Math.max((Math.ceil(12 / informationsChunked.length) - 1), 2), 12)) as GridSize}>
                        {informations.map(information => (
                            <Information title={information.title} content={information.content}/>
                        ))}
                    </CustomGrid>
                ))}
            </CustomGrid>
        </Section>
    )
}