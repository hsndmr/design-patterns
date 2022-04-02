export interface PaymentStrategyInterface {
    pay(amount: number): string;
}
