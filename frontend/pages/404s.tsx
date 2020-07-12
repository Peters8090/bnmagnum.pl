import {FC} from 'react'
import {css} from '@emotion/core'
import {Layout} from '../hoc/Layout/Layout'
import {Content} from '../misc/content'

const NotFoundPage: FC = () => {
    const styles = {
        h1: css`
			display: inline-block;
			border-right: 1px solid rgba(0, 0, 0, 0.3);
			margin: 0 20px 0 0;
			padding: 10px 23px 10px 0;
			font-size: 24px;
			font-weight: 500;
			vertical-align: top;
		`,
        div: css`
		    display: inline-block;
		    text-align: left;
		    line-height: 49px;
		    height: 49px;
		    vertical-align: middle;
		`,
        h2: css`
		    font-size: 14px;
		    font-weight: normal;
		    line-height: inherit;
		    margin: 0;
		    padding: 0;
		`,
        div2: css`
		    color: #000;
		    background: #fff;
		    font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
		    flex: 1;
		    text-align: center;
		    display: flex;
		    flex-direction: column;
		    align-items: center;
		    justify-content: center;
		`,
    }

    return (
        <Layout>
            <div css={styles.div2}>
                <div>
                    <h1 css={styles.h1}>404</h1>
                    <div css={styles.div}>
                        <h2 css={styles.h2}>
                            {Content.error.not_found}
                        </h2>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default NotFoundPage