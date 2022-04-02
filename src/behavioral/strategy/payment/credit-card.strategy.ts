import { PaymentStrategyInterface } from "./payment.strategy.interface";

export class CreditCardStrategy implements PaymentStrategyInterface {
  _cardNumber: string;
  _expirationDate: string;
  _cvv: string;
  _cardHolderName: string;

  constructor(
    cardNumber: string,
    expirationDate: string,
    cvv: string,
    cardHolderName: string
  ) {
    this._cardNumber = cardNumber;
    this._expirationDate = expirationDate;
    this._cvv = cvv;
    this._cardHolderName = cardHolderName;
  }

  public pay(amount: number): string {
    return `Paid ${amount} using credit card`;
  }
}
