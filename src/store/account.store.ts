import { action, observable } from 'mobx'

import { AccountService, IAccountData } from '../api/account.service'

export class AccountStore {
    @observable logo: string
    @observable name: string
    @observable vpa: string

    constructor(public accountService: AccountService) {
        this.accountService
            .loadAll()
            .then(this.setInitial)
    }

    @action.bound setInitial({ logo, name, vpa }: IAccountData) {
        this.logo = logo
        this.name = name
        this.vpa = vpa
    }

    @action updateName(name: string) {
        this.name = name
    }

    @action updateVPA(vpa: string) {
        this.name = vpa
    }
}