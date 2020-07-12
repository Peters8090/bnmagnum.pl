import {AppProps} from 'next/app'
import {Layout} from '../hoc/Layout/Layout'
import {Theme} from '../hoc/Theme/Theme'

const App = ({Component, pageProps}: AppProps) => {
    return (
        <Theme>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Theme>
    )
}

export default App