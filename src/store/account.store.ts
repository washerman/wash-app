import { action, observable } from 'mobx'

export class AccountStore {
    @observable logo: string
    @observable name: string
    @observable vpa: string

    @action updateName(name: string) {
        this.name = name
    }

    @action updateVPA(vpa: string) {
        this.name = vpa
    }
}