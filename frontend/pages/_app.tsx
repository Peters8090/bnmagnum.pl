import {AppProps} from 'next/app'
import {Layout} from '../hoc/Layout'
import {PageLoadingIndicator} from '../components/PageLoadingIndicator'

const App = ({Component, pageProps}: AppProps) => {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<PageLoadingIndicator/>
		</>
	)
}

export default App