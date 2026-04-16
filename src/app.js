import express from 'express';
import petRoutes from './routes/petRoutes.js';
const app = express();
app.use(express.json());
// Todas as rotas de pets agora começam com /api/pets
app.use('/api/pets', petRoutes);
export default app;