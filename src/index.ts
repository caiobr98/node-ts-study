import express, {Application } from 'express';
import routes from './routes';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});