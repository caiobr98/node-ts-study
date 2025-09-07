import { Router } from 'express';
import paymentRoutes from './payment-routes';
import userRoutes from './user-routes';

const router = Router();

router.use('/payments', paymentRoutes);
router.use('/users', userRoutes);

export default router;