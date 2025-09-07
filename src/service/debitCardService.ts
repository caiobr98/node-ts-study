import { PaymentInterface } from "../contract/PaymentInterface";

export class DebitCardService implements PaymentInterface {
    payment(amount: number): string {
        return `Processing debit card payment of $${amount}`;
    }
}