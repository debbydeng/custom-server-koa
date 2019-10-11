import App, {Container} from 'next/app'
import React from 'react'
import Layout from "./ui/web/layout";
import {Provider} from 'react-redux'
import withReduxStore from './lib/with-redux-store'

class MyApp extends App {
    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return {pageProps}
    }

    render () {
        const {Component, pageProps, router, reduxStore} = this.props;
        return <Container>
            <Provider store={reduxStore}>
            {router.asPath==='/login'?
                <Component {...pageProps} /> :
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            }
            </Provider>
        </Container>
    }
}

export default withReduxStore(MyApp)

