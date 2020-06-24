import {FC} from 'react'
import Typography from '@material-ui/core/Typography'
import {Content} from '../misc/content'
import {css} from '@emotion/core'
import Container from '@material-ui/core/Container'
import House from '../images/house.svg'
import Wave from '../images/wave.svg'
import Button from '@material-ui/core/Button'
import useTheme from '@material-ui/core/styles/useTheme'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import LinkSmoothScroll from '../utility/LinkSmoothScroll'

const HomePage: FC = () => {
	const theme = useTheme()
	const styles = {
		hero: css`
			display: grid;
			grid-template-columns: 1fr 1fr;
			height: 100vh;
			position: relative;
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
		heroLeftButton: css`
			background-color: ${theme.palette.primary.main};
			border-radius: 32px;
			width: 300px;
			font-size: 30px;
			font-family: 'Montserrat', sans-serif;
			font-weight: 500;
			text-transform: none;
			line-height: 1.4;
			color: ${theme.palette.common.white};
			
			&:hover {
				background-color: ${theme.palette.primary.main};
			}
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
		heroGoDownFab: css`
			position: absolute;
			bottom: ${theme.spacing(7.5)}px;
			left: 50vw;
			right: 50vw;
			* {
				box-shadow: none;
			}
		`,
	}

	return (
		<>
			<div css={styles.hero}>
				<Container maxWidth='sm' css={styles.heroLeft}>
					<Typography variant='h1' align='center' css={styles.heroLeftTitle}>
						{Content.home.welcome}
					</Typography>
					<Typography variant='h3' align='justify' gutterBottom css={styles.heroLeftSubtitle}>
						{Content.home.subtitle}
					</Typography>
					<Button variant='contained' disableElevation css={styles.heroLeftButton}>
						Przejdź do wyszukiwarki
					</Button>
				</Container>
				<div css={styles.heroRight}>
					<House css={styles.heroRightSvg}/>
				</div>
				<LinkSmoothScroll href='/#o-firmie'>
					<a css={styles.heroGoDownFab}>
						<Fab>
							<KeyboardArrowDownIcon/>
						</Fab>
					</a>
				</LinkSmoothScroll>
			</div>
			<Wave/>
			<div css={styles.hero} id='o-firmie'>
				<Container maxWidth='sm' css={styles.heroLeft}>
					<Typography variant='h1' align='center' css={styles.heroLeftTitle}>
						O firmie
					</Typography>
					<Typography variant='h3' align='justify' css={styles.heroLeftSubtitle}>
						{Content.home.subtitle}
					</Typography>
				</Container>
				<div css={styles.heroRight}>
					<House css={styles.heroRightSvg}/>
				</div>
			</div>
			<Wave/>
			<div css={styles.hero} id='nasi-pracownicy'>
				<Container maxWidth='sm' css={styles.heroLeft}>
					<Typography variant='h1' align='center' css={styles.heroLeftTitle}>
						Nasi pracownicy
					</Typography>
					<Typography variant='h3' align='justify' css={styles.heroLeftSubtitle}>
						{Content.home.subtitle}
					</Typography>
				</Container>
				<div css={styles.heroRight}>
					<House css={styles.heroRightSvg}/>
				</div>
			</div>
			<Wave/>
			<div css={styles.hero} id='kontakt'>
				<Container maxWidth='sm' css={styles.heroLeft}>
					<Typography variant='h1' align='center' css={styles.heroLeftTitle}>
						Kontakt
					</Typography>
					<Typography variant='h3' align='justify' css={styles.heroLeftSubtitle}>
						{Content.home.subtitle}
					</Typography>
				</Container>
				<div css={styles.heroRight}>
					<House css={styles.heroRightSvg}/>
				</div>
			</div>
		</>
	)
}

export default HomePage