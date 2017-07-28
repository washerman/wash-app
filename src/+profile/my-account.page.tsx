import { inject, observer } from 'mobx-react'
import * as React from 'react'

import { PageTitle } from '../components'
import { AccountStore } from '../store/account.store'

import { ProfilePane } from './components/profile-pane'

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
        const name = this.props.accountStore.name
        const vpa = this.props.accountStore.vpa
        return (
            <div>
                <PageTitle heading={'My Account'} />
                <ProfilePane name={name} vpa={vpa} />
            </div>)
    }
}