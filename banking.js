function Account (accountNumber, balance) {
  this.accountNumber = accountNumber;
  this.balance = balance;
}

Account.prototype.deposit = function (amount) {
  this.balance += amount;
};

Account.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

function SavingsAccount (accountNumber, balance, interestRate) {
    Account.call(this, accountNumber, balance);
    this.interestRate = interestRate;
    }

Object.setPrototypeOf(SavingsAccount.prototype, Account.prototype);


SavingsAccount.prototype.addInterest = function () {
    this.balance += this.balance * this.interestRate;
}

function CurrentAccount (accountNumber, balance) {
    Account.call(this, accountNumber, balance);
}

Object.setPrototypeOf(CurrentAccount.prototype, Account.prototype);

CurrentAccount.prototype.withdrawUsingCheck = function (amount) {
    this.balance -= amount;
}

const account = new Account(123, 500);
account.deposit(100);
account.withdraw(50);
console.log(account.balance); // 550

const savingsAccount = new SavingsAccount(123, 500, 0.1);
savingsAccount.deposit(100);
savingsAccount.addInterest();
console.log(savingsAccount.balance); // 660


const currentAccount = new CurrentAccount(456, 1000);
currentAccount.deposit(100);
currentAccount.withdrawUsingCheck(200);
console.log(currentAccount.balance); // 900

