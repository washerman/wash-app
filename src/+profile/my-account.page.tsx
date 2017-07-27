import * as React from 'react'
import { observer } from 'mobx-react'

import { PageTitle } from '../components'

@observer
export class MyAccountPage extends React.Component {
    onClick() { }

    render() {
        return (
            <div>
                <PageTitle heading={'My Account'} />
                <hr />
                <button onClick={this.onClick}>kick buttonwski</button>
            </div>)
    }
}