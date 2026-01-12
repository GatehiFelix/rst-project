import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';

import connectDB from '#config/db.config.js';
import { errorHandler} from '#middlewares/error.middleware.js';
import productRoutes from '#routes/product.routes.js';


dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/v1/products', productRoutes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port: ${port}`.yellow.bold);
});