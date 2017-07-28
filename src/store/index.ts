import { useStrict } from 'mobx'

// services
import { accountService } from '../api'

// stores
import { AccountStore } from './account.store'

useStrict(true)

export const accountStore = new AccountStore(accountService)
