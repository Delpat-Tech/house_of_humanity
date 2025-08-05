import express, { Express } from 'express';
import cors from 'cors';
import donationRoutes from "./routes/donationRoutes";
import { config } from './config'; 


const app: Express = express();
app.use(cors());
app.use(express.json());


app.use('/api/donate', donationRoutes);

app.get('/health', (req, res) => {
  res.send('Server is running!');
});

const PORT: number = parseInt(process.env.PORT || '3000', 10);
app.listen(config.port, () => console.log(`Server running on port ${config.port}`));