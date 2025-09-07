import { CreditCardService } from "../service/creditCardService";
import { DebitCardService } from "../service/debitCardService";

export class PaymentController {
    public generatePayment(amount: number, type: string) {
        let paymentService;

        switch (type) {
            case 'credit':
                paymentService = new CreditCardService();
                break;
            case 'debit':
                paymentService = new DebitCardService();
                break;
            default:
                throw new Error('Unsupported payment type');
        }
        return paymentService.payment(amount);
    }
}