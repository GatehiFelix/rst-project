import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import cookieParser from 'cookie-parser';

import connectDB from '#config/db.config.js';
import { errorHandler} from '#middlewares/error.middleware.js';
import productRoutes from '#routes/product.routes.js';
import userRoutes  from '#routes/user.routes.js';
import orderRoutes from '#routes/order.routes.js';


dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());



app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/orders', orderRoutes);

app.use('/api/v1/config/paypal', (req, res) => {
    res.json({ clientId: process.env.PAYPAL_CLIENT_ID });
});

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port: ${port}`.yellow);
});