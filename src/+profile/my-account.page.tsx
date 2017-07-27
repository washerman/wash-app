import * as React from 'react'
import { observer } from 'mobx-react'

import { PageTitle } from '../components'

@observer
export class MyAccountPage extends React.Component {
    render() {
        return (
        <div>
            <PageTitle heading={'My Account'} />
        </div>)
    }
}