import * as React from 'react'
import { inject, observer } from 'mobx-react'

import { PageTitle } from '../components'
import { AccountStore } from '../store/account.store'

interface IProps {
    accountStore?: AccountStore
}

@inject('accountStore')
@observer
export class MyAccountPage extends React.Component<IProps, IProps> {
    onClick() {
        this.props.accountStore.updateName('polru')
     }

    render() {
        return (
            <div>
                <PageTitle heading={'My Account'} />
                <hr />
                <button onClick={this.onClick}>kick buttonwski</button>
                <hr />
                <div className="pol-profile">
                    name: {this.props.accountStore.name}
                </div>
            </div>)
    }
}