import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, 'User is required'],
            ref: 'UserModel'
        },
        name: {
            type: String,
            required: [true, 'Name is required']
        },
        rating: {
            type: Number,
            required: [true, 'Rating is required'],
            default: 0
        },
        comment: {
            type: String,
            required: [true, 'Comment is required']
        },
    },
    {
        timestamps: true,
    }
);

const productSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, 'User is required'],
            ref: 'UserModel'
        },
        name: {
            type: String,
            required: [true, 'Product name is required']
        },
        price: {
            type: Number,
            required: [true, 'Product price is required'],
        },
        description: {
            type: String,
            required: [true, 'Product description is required'],
        },
        image: {
            type: String,
            required: [true, 'Product image is required'],
        },
        category: {
            type: String,
            required: [true, 'Product category is required'],
        },
        brand: {
            type: String,
            required: [true, 'Product brand is required'],
        },
        countInStock: {
            type: Number,
            required: [true, 'Product stock count is required'],
            default: 0,
        },
        rating: {
            type: Number,
            required: [true, 'Product rating is required'],
            default: 0,
        },
        rating: {
            type: Number,
            required: [true, 'Product rating is required'],
            default: 0,
        },
        numReviews: {
            type: Number,
            required: [true, 'Number of reviews is required'],
            default: 0,
        },
        content: {
            type: String,
            required: [true, 'Product content is required'],
        },
        reviews: [reviewSchema],
    },
    {
        timestamps: true,
        collection: 'products'
    }
);

const ProductModel = mongoose.model('ProductModel', productSchema);

export default ProductModel;