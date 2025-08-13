import express, { Express } from 'express';
import cors from 'cors';
import donationRoutes from "./routes/donationRoutes";
import emailRoutes from './routes/emailRoutes';
import  './config'; 


const app: Express = express();
app.use(cors());
app.use(express.json());

 
app.use('/api/donate', donationRoutes);
app.use('/api', emailRoutes);

app.get('/health', (req, res) => {
  res.send('Server is running!');
});

const PORT: number = parseInt(process.env.PORT || '3000', 10);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));