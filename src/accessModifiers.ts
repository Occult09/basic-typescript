class BankAccount {
    readonly userId: number;
    readonly userName: string;
    private userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    addBalance(balance: number){
        this.userBalance = this.userBalance + balance;
    }
}

const occult = new BankAccount(231, 'Occult', 1000);

occult.addBalance(20);
occult.addBalance(20);
console.log(occult);