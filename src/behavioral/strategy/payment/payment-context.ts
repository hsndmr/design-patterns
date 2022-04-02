import {PaymentStrategyInterface} from "./payment.strategy.interface";

export class PaymentContext {

    _paymentStrategy!: PaymentStrategyInterface;

    setPaymentStrategy(paymentStrategy: PaymentStrategyInterface): void {
        this._paymentStrategy = paymentStrategy;
    }

    pay(price: number): string {
        return this._paymentStrategy.pay(price);
    }
}
