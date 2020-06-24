import {AppProps} from 'next/app'
import {Layout} from '../hoc/Layout'
import {PageLoadingIndicator} from '../components/PageLoadingIndicator'

const App = ({Component, pageProps}: AppProps) => {
	return (
		<>
			<PageLoadingIndicator/>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default App