import { Router } from 'express';
import { UserController } from '../controller/userController';

const router = Router();
const userController = new UserController();

router.get('/', (req, res) => {
    const result = userController.getAllUsers();
    res.json(result);
});

export default router;
