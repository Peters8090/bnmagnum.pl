import {FC} from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import {Content} from '../../../../../contents/content'
import Button from '@material-ui/core/Button'
import House from '../../../../../assets/images/house.svg'
import {NextLinkSmoothScroll} from '../../../../../hoc/Layout/Navigation/NavigationItem/NextLinkSmoothScroll/NextLinkSmoothScroll'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import {css} from '@emotion/core'
import {useTheme} from '@material-ui/core'

export const Hero: FC = () => {
    const theme = useTheme()
    const styles = {
        hero: css`
			display: grid;
			grid-template-columns: 1fr 1fr;
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
		    text-align: center;
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
		    text-align: justify;
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
        <div css={[styles.hero]}>
            <Container maxWidth='sm' css={styles.heroLeft}>
                <Typography variant='h1' css={styles.heroLeftTitle}>
                    {Content.home.welcome}
                </Typography>
                <Typography variant='h3' gutterBottom css={styles.heroLeftSubtitle}>
                    {Content.home.subtitle}
                </Typography>
                <Button variant='contained' disableElevation css={styles.heroLeftButton}>
                    Przejdź do wyszukiwarki
                </Button>
            </Container>
            <div css={styles.heroRight}>
                <img src={House} alt='dom' css={styles.heroRightSvg}/>
            </div>
            <NextLinkSmoothScroll href='/#o-firmie'>
                <a css={styles.heroGoDownFab}>
                    <Fab>
                        <KeyboardArrowDownIcon/>
                    </Fab>
                </a>
            </NextLinkSmoothScroll>
        </div>
    )
}