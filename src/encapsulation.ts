class BankAccount {
    readonly userId: number;
    readonly userName: string;
    private userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    private addBalance(balance: number) {
        this.userBalance = this.userBalance + balance;
    }

    addingBalance(amount: number) {
        this.addBalance(amount);
    }

    get getBalance() {
        return this.userBalance;
    }
}

const occult = new BankAccount(231, 'Occult', 1000);

occult.addingBalance(10);
occult.addingBalance(10);
console.log(occult.getBalance);
