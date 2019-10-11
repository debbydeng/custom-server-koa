import { Link } from '../pageRoutes/home.js'
import * as React from "react";
import { connect } from 'react-redux'
import Examples from './c'
import {serverRenderClock,startClock} from './store';
//import Login from "./ui/web/login";
//import Link from 'next/link'
class Home extends React.Component{
    static getInitialProps ({ reduxStore, req }) {
        const isServer = !!req
        reduxStore.dispatch(serverRenderClock(isServer))
        return {}
    }
    componentDidMount () {
        const { dispatch } = this.props
        this.timer = startClock(dispatch)
    }

    componentWillUnmount () {
        clearInterval(this.timer)
    }

    render(){

        return <ul>
            <li><Link route='login'><a>登录</a></Link></li>
            <Examples/>
        </ul>
    }
}
export default connect()(Home)



