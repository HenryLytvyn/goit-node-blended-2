import { model, Schema } from 'mongoose';
import { productCategories } from '../../constants/constants-db.js';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: productCategories,
      required: true,
      default: 'other',
    },
    description: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false },
);

const ProductsCollection = model('products', productSchema);

export default ProductsCollection;
