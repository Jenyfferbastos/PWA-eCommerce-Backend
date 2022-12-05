import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  pricingBefore: Number,
  pricingAfter: Number,
  discount: Number,
  categories: {
    length: String,
    color: String,
    brand: String,
    pricingBefore: Number,
    pricingAfter: Number,
    discount: Number,
    rate: String,
  },
  imgLink: String,
  pathUrl: String,
  ratings: String,
});

export const ProductModel = mongoose.model('Products', ProductSchema);
