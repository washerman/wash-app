interface IAccountData {
    logo?: string
    name?: string
    vpa?: string
}

export class AccountService {
    private accountData: IAccountData = {
        logo: 'https://gravatar.com/avatar/2567b10fdf6ecde7583e0b7d6f0f3f8f?d=monsterid',
        name: 'pol ru',
        vpa: 'polru@upi',
    }

    async loadAll() {
        return Promise.resolve(this.accountData)
    }

    async update(account: IAccountData) {
        return Promise.resolve(Object.assign(this.accountData, account))
    }
}
