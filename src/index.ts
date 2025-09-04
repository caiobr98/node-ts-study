import express, {Application, Request, Response} from 'express';
import { UserController } from './controller/userController';

const app: Application = express();
const PORT = process.env.PORT || 3000;

const userController = new UserController();

app.get('/users', (req: Request, res: Response) => {
    const users = userController.getAllUsers();
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});