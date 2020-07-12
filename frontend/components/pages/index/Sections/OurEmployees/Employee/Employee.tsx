import {FC, Fragment} from 'react'
import Typography from '@material-ui/core/Typography'
import {css} from '@emotion/core'
import {useTheme} from '@material-ui/core'

interface EmployeeProps {
    title: string
    description: string[]
    image: string
}

export const Employee: FC<EmployeeProps> = props => {
    const theme = useTheme()
    const styles = {
        root: css`
			display: flex;
			
			align-items: center;
			margin-top: ${theme.spacing(7.5)}px;
			
			&:first-of-type {
				margin-top: ${theme.spacing(3)}px;
			}
		`,
        imageWrapper: css`
			flex: 1;
			text-align: center;
		`,
        image: css`
			border-radius: 130px;
			height: 250px;
			margin-right: ${theme.spacing(7.5)}px;
		`,
        title: css`
			font-family: 'Rubik', sans-serif;
			font-weight: 500;
		`,
        description: css`
		    font-weight: 300;
		    width: 400px;
		`,
    }

    return (
        <div css={styles.root}>
            <div css={styles.imageWrapper}>
                <img
                    css={styles.image}
                    src='https://icon-library.com/images/profile-png-icon/profile-png-icon-24.jpg'
                    alt=''/>
            </div>
            <div>
                <Typography variant='h4' gutterBottom css={styles.title}>
                    {props.title}
                </Typography>
                <Typography variant='h4' css={styles.description}>
                    {props.description.map(desc => (
                        <Fragment key={desc}>
                            {desc}
                            <br/>
                        </Fragment>
                    ))}
                </Typography>
            </div>
        </div>
    )
}