class BankAccount {
    readonly userId: number;
    readonly userName: string;
    private userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    set addBalance(amount: number) {
        this.userBalance = this.userBalance + amount;
    }

    get getBalance() {
        return this.userBalance;
    }
}

const occult = new BankAccount(231, 'Occult', 1000);

occult.addBalance = 100;
console.log(occult.getBalance);