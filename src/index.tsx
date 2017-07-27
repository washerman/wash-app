import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import * as stores from './store'

import './index.css'

// offline
import { register as registerServiceWorker } from './registerServiceWorker'

// page
import { MyAccountPage } from './+profile/my-account.page'

const root = document.getElementById('root')

const rootComponent = (
    <Provider {...stores}>
        <MyAccountPage />
    </Provider>)

ReactDOM.render(rootComponent, root)
registerServiceWorker()
