import {AppProps} from 'next/app'
import {Layout} from '../hoc/Layout/Layout'
import {Theme} from '../hoc/Theme/Theme'
import {useEffect} from 'react'

const App = ({Component, pageProps}: AppProps) => {
    // const router = useRouter()
    useEffect(() => {
        // material-ui SSR setup
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles)
        }

        // router.events.on('routeChangeStart', () => window.scrollTo(0, 0))
    }, [])

    return (
        <Theme>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Theme>
    )
}

export default App