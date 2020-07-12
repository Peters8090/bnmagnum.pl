import {FC} from 'react'
import {PageTitle} from '../../shared/PageTitle'
import Typography from '@material-ui/core/Typography'
import {css} from '@emotion/core'
import {useTheme} from '@material-ui/core'

export const OurEmployees: FC = () => {
    const theme = useTheme()
    const styles = {
        ourEmployees: css`
		    display: flex;
		    flex-direction: column;
		    justify-content: center;
		    align-items: center;
		`,
        ourEmployeesEmployee: css`
			display: flex;
			
			align-items: center;
			margin-top: ${theme.spacing(7.5)}px;
			
			&:first-of-type {
				margin-top: ${theme.spacing(3)}px;
			}
		`,
        ourEmployeesEmployeeImgWrapper: css`
			flex: 1;
			text-align: center;
		`,
        ourEmployeesEmployeeImg: css`
			border-radius: 130px;
			height: 250px;
			margin-right: ${theme.spacing(7.5)}px;
		`,
        ourEmployeesEmployeeDetailsTitle: css`
			font-family: 'Rubik', sans-serif;
			font-weight: 500;
		`,
        ourEmployeesEmployeeDetailsDescription: css`
		    font-weight: 300;
		    width: 400px;
		`,
    }

    return (
        <div id='nasi-pracownicy' css={[styles.ourEmployees]}>
            <PageTitle text='Nasi pracownicy'/>
            <div>
                <div css={styles.ourEmployeesEmployee}>
                    <div css={styles.ourEmployeesEmployeeImgWrapper}>
                        <img
                            css={styles.ourEmployeesEmployeeImg}
                            src='https://icon-library.com/images/profile-png-icon/profile-png-icon-24.jpg'
                            alt='zdjęcie Jana Kowalskiego'/>
                    </div>
                    <div>
                        <Typography variant='h4' gutterBottom css={styles.ourEmployeesEmployeeDetailsTitle}>
                            Jan Kowalski
                        </Typography>
                        <Typography variant='h4' css={styles.ourEmployeesEmployeeDetailsDescription}>
                            Właściciel firmy
                            <br/>
                            Pośrednik nieruchomości od wielu lat
                            <br/>
                            Telefon: +48 123 456 789
                        </Typography>
                    </div>
                </div>
                <div css={styles.ourEmployeesEmployee}>
                    <div css={styles.ourEmployeesEmployeeImgWrapper}>
                        <img
                            css={styles.ourEmployeesEmployeeImg}
                            src='https://icon-library.com/images/profile-png-icon/profile-png-icon-24.jpg'
                            alt='zdjęcie Jana Kowalskiego'/>
                    </div>
                    <div>
                        <Typography variant='h4' gutterBottom css={styles.ourEmployeesEmployeeDetailsTitle}>
                            Jan Kowalski
                        </Typography>
                        <Typography variant='h4' css={styles.ourEmployeesEmployeeDetailsDescription}>
                            Właściciel firmy
                            <br/>
                            Pośrednik nieruchomości od wielu lat
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}