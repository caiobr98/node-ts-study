import { Router } from 'express';
import { PaymentController } from '../controller/paymentController';

const router = Router();
const paymentController = new PaymentController();

router.post('/', (req, res) => {
    const { amount, type } = req.body;
    const result = paymentController.generatePayment(amount, type);
    res.json(result);
});

export default router;
