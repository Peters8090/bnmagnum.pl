import {FC} from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import {Content} from '../../../../../../contents/content'
import Button from '@material-ui/core/Button'
import {css} from '@emotion/core'
import {useTheme} from '@material-ui/core/styles'
import Link from 'next/link'
import OfferSearch from '../../../../../../pages/wyszukiwarka-ofert'

export const HeroWelcome: FC = () => {
    const theme = useTheme()
    const styles = {
        root: css`
            ${theme.customMixins.flexCentered};
		    flex-direction: column;
		`,
        title: css`
		    font-family: 'Rubik', sans-serif;
		    font-weight: 500;
		    text-align: center;
		    
		    margin-top: ${theme.spacing(1)}px;
		`,
        subtitle: css`
		    font-weight: 300;
		    text-align: justify;
		`,
        button: css`
			width: 300px;
			max-width: 80vw;
			
			color: ${theme.palette.common.white};
			font-family: 'Montserrat', sans-serif;
			text-transform: none;
			font-size: 30px;
			font-weight: 500;
			line-height: 1.4;
			
			border-radius: 32px;			
			background-color: ${theme.palette.secondary.main};			
			&:hover {
				background-color: ${theme.palette.secondary.main};
			}
		`,
    }

    return (
        <Container maxWidth='sm' css={styles.root}>
            <Typography variant='h1' css={styles.title}>
                {Content.home.welcome}
            </Typography>
            <Typography variant='h3' gutterBottom css={styles.subtitle}>
                {Content.home.subtitle}
            </Typography>
            <Link href={OfferSearch.routeName}>
                <Button variant='contained' disableElevation css={styles.button}>
                    Przejdź do wyszukiwarki
                </Button>
            </Link>
        </Container>
    )
}