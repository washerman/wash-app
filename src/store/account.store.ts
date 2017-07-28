import { action, observable } from 'mobx'

import { AccountService, IAccountData } from '../api/account.service'

export class AccountStore {
    @observable logo: string
    @observable name: string
    @observable vpa: string

    constructor(private accountService: AccountService) {
        this.init()
    }

    init() {
        this.accountService
            .loadAll()
            .then(this.setInitial)
    }

    @action.bound setInitial({ logo, name, vpa }: IAccountData) {
        this.logo = logo
        this.name = name
        this.vpa = vpa
    }

    @action.bound updateName(name: string) {
        this.name = name
    }

    @action.bound updateVPA(vpa: string) {
        this.vpa = vpa
    }
}