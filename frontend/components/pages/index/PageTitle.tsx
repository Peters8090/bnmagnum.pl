import {FC} from 'react'
import Typography from '@material-ui/core/Typography'
import {css, SerializedStyles} from '@emotion/core'

interface PageTitleProps {
	text: string,
	css?: SerializedStyles
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
				background-color: #D9D9D9;
				top: 50%;
				bottom: 0;
				left: 40px;
				right: 0;
				z-index: -1;
			}
		`,
	}

	return (
		<div {...props}>
			<Typography variant='h2' component='div' css={styles.text} gutterBottom children={props.text}/>
		</div>
	)
}