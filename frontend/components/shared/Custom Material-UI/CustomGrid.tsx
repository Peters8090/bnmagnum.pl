import {FC, forwardRef} from 'react'
import {css} from '@emotion/core'
import {Grid, GridProps} from '@material-ui/core'

export const CustomGrid: FC<GridProps> = forwardRef((props, ref) => {
    const styles = {
        root: css`
    		${props.container && css`
                width: 100%;
                margin: 0;
            `}
    	`,
    }

    return (
        <Grid {...props} ref={ref} css={styles.root}/>
    )
})