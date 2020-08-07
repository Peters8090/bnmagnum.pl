import {FC} from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import {Content} from '../../../../../../contents/content'
import Button from '@material-ui/core/Button'
import {css} from '@emotion/core'
import {useTheme} from '@material-ui/core'

export const HeroLeft: FC = () => {
    const theme = useTheme()
    const styles = {
        root: css`
		    display: flex;
		    flex-direction: column;
		    justify-content: center;
		    align-items: center;
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
			background-color: ${theme.palette.primary.main};
			border-radius: 32px;
			width: 300px;
			max-width: 80vw;
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
    }

    return (
        <Container maxWidth='sm' css={styles.root}>
            <Typography variant='h1' css={styles.title}>
                {Content.home.welcome}
            </Typography>
            <Typography variant='h3' gutterBottom css={styles.subtitle}>
                {Content.home.subtitle}
            </Typography>
            <Button variant='contained' disableElevation css={styles.button}>
                Przejdź do wyszukiwarki
            </Button>
        </Container>
    )
}