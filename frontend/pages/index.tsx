import {FC} from 'react'
import Typography from '@material-ui/core/Typography'
import {Layout} from '../hoc/Layout'
import Content from '../content/content.json'

const HomePage: FC = () => {
    return (
        <Layout>
            <Typography variant='h1' align='center'>
                {Content.home.welcome}
            </Typography>
        </Layout>
    )
}

export default HomePage