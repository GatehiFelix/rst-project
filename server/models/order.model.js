import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, 'User is required'],
            ref: 'UserModel'
        },
        orderItems: [
            {
                name: { type: String, required: true },
                qty: { type: Number, required: true },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'ProductModel'
                }
            }
        ],
        shippingAddress: {
            address: { type: String, required: true },
            city: { type: String, required: true },
            postalCode: { type: String, required: true },
            country: { type: String, required: true }
        },
        PaymentMethod: {
            type: String,
            required: [true, 'Payment method is required']
        },
        paymentResult: {
            id: { type: String },
            status: { type: String },
            update_time: { type: String },
            email_address: { type: String }
        },
        taxPrice: {
            type: Number,
            required: [true, 'Tax price is required'],
            default: 0.0,
        },
        totalPrice: {
            type: Number,
            required: [true, 'Total price is required'],
            default: 0.0,
        },
        isPaid: {
            type: Boolean,
            default: false,
            required: [true, 'Payment status is required']
        },
        paidAt: {
            type: Date,
        },
        isDelivered: {
            type: Boolean,
            default: false,
            required: [true, 'Delivery status is required']
        },
        deliveredAt: {
            type: Date,
        }
    },
    {
        timestamps: true,
        Collection: 'orders'
    }
);

const OrderModel = mongoose.model('OrderModel', orderSchema);

export default OrderModel;