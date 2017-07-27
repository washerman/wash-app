import { useStrict } from 'mobx'

import { AccountStore } from './account.store'

useStrict(true)

export const accountStore = new AccountStore()
