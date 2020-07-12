import {FC} from 'react'
import Typography from '@material-ui/core/Typography'
import {css} from '@emotion/core'

interface PageTitleProps {
    text: string,
    className?: string
}

export const PageTitle: FC<PageTitleProps> = props => {
    const styles = {
        text: css`
			font-family: 'Rubik', sans-serif;
			position: relative;
			z-index: 1;
			line-height: 1;
			display: inline-block;
			
			&::before {
				content: '';
				position: absolute;
				background-color: #C9C9C9;
				top: 50%;
				bottom: 0;
				left: 40px;
				right: 0;
				z-index: -1;
			}
		`,
    }

    return (
        <div className={props.className}>
            <Typography variant='h2' component='div' css={styles.text} gutterBottom children={props.text}/>
        </div>
    )
}