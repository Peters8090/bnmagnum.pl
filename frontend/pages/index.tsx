import {FC} from 'react'
import Typography from '@material-ui/core/Typography'
import {Layout} from '../hoc/Layout'
import {Content} from '../misc/content'
import {css} from '@emotion/core'
import Container from '@material-ui/core/Container'
import House from '../images/house.svg'

const HomePage: FC = () => {
	const styles = {
		hero: css`
			display: grid;
			grid-template-columns: 1fr 1fr;
			height: 100vh;
		`,
		heroLeft: css`
		    display: flex;
		    flex-direction: column;
		    justify-content: center;
		    align-items: center;
		`,
		heroLeftTitle: css`
		    font-family: 'Rubik', sans-serif;
		    font-weight: 500;
		`,
		heroLeftSubtitle: css`
		    font-weight: 300;
		`,
		heroRight: css`
		    display: flex;
		    justify-content: center;
		    align-items: center;
		`,
		heroRightSvg: css`
		    width: 80%;
		`,
	}

	return (
		<Layout navigationProps={{position: 'fixed'}}>
			<div css={styles.hero}>
				<Container maxWidth='sm' css={styles.heroLeft}>
					<Typography variant='h1' align='center' css={styles.heroLeftTitle}>
						{Content.home.welcome}
					</Typography>
					<Typography variant='h3' align='justify' css={styles.heroLeftSubtitle}>
						{Content.home.subtitle}
					</Typography>
				</Container>
				<div css={styles.heroRight}>
					<House css={styles.heroRightSvg}/>
				</div>
			</div>
		</Layout>
	)
}

export default HomePage