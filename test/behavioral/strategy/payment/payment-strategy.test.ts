import {PaymentContext} from '../../../../src/behavioral/strategy/payment/payment-context';
import { CreditCardStrategy } from '../../../../src/behavioral/strategy/payment/credit-card.strategy';
import {BankTransferStrategy} from "../../../../src/behavioral/strategy/payment/bank-transfer.strategy";

test('it should pay using credit card', () => {
    const paymentContext = new PaymentContext();

    const creditCardStrategy =  new CreditCardStrategy(
        '1234567890123456',
        '12/20',
        '123',
        'name lastName'
    );

    paymentContext.setPaymentStrategy(creditCardStrategy);
    const payStatus = paymentContext.pay(100)

    expect(payStatus).toBe(`Paid 100 using credit card`);
});

test('it should pay using bank transfer', () => {
    const paymentContext = new PaymentContext();

    const bankTransferStrategy =  new BankTransferStrategy(
        'bank name',
        '1234567890123456',
        'name',
    );

    paymentContext.setPaymentStrategy(bankTransferStrategy);
    const payStatus = paymentContext.pay(100)

    expect(payStatus).toBe(`Paid 100 using bank transfer`);
});
