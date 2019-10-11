import Clock from './a'
import Counter from './b'
import * as React from "react";
import { connect } from 'react-redux'
function Examples ({ lastUpdate, light }) {
    return (
        <div>
            <Clock lastUpdate={lastUpdate} light={light} />
            <Counter />
        </div>
    )
}

function mapStateToProps (state) {
    const { lastUpdate, light } = state
    return { lastUpdate, light }
}

export default connect(mapStateToProps)(Examples)
