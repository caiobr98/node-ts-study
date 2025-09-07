import { PaymentInterface } from "../contract/PaymentInterface";

export class CreditCardService implements PaymentInterface {
    payment(amount: number): string {
        return `Processing credit card payment of $${amount}`;
    }
}
