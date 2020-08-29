import {css} from '@emotion/core'
import {useCurrentNavigationHeight} from '../hooks/useCurrentNavigationHeight'
import {Hero} from '../components/pages/index/Sections/Hero/Hero'
import {About} from '../components/pages/index/Sections/About/About'
import {OurEmployees} from '../components/pages/index/Sections/OurEmployees/OurEmployees'
import {Footer} from '../components/pages/index/Sections/Footer/Footer'
import {RouteType} from '../interfaces and types/RouteType'

const HomePage: RouteType = () => {
    const navHeight = useCurrentNavigationHeight()
    const styles = {
        root: css`
		    display: flex;
		    flex-direction: column;
		    
		    & > * {
		      min-height: calc(100vh - ${navHeight}px);
		    }
		`,
    }

    return (
        <div css={styles.root}>
            <Hero/>
            <About/>
            <OurEmployees/>
            <Footer/>
        </div>
    )
}

HomePage.displayName = 'Home'
HomePage.routeName = '/'


export default HomePage