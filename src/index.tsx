import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './index.css'

// offline
import { register as registerServiceWorker } from './registerServiceWorker'

// page
import { MyAccountPage } from './+profile/my-account.page'

const root = document.getElementById('root')

ReactDOM.render(<MyAccountPage />, root)
registerServiceWorker()
