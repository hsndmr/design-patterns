import {PaymentStrategyInterface} from "./payment.strategy.interface";

export class BankTransferStrategy implements PaymentStrategyInterface {

    _bankName: string;
    _accountNumber: string;
    _name: string;

    constructor(bankName: string, accountNumber: string, name: string) {
        this._bankName = bankName;
        this._accountNumber = accountNumber;
        this._name = name;
    }

    pay(amount: number): string {
        return `Paid ${amount} using bank transfer`;
    }
}
