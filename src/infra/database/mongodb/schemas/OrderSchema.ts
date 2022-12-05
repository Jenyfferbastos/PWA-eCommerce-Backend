import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  quantity: Number,
  products: [
    {
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
    },
  ],
  userId: String,
  paymentMethod: String,
  orderValue: String,
});

export const OrderModel = mongoose.model('Orders', OrderSchema);
