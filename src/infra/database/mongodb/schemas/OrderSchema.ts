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
        size: String,
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
  userAddress: {
    street: String,
    state: String,
    city: String,
    postalCode: String,
    name: String,
    phone: String,
    phoneArea: String,
  },
});

export const OrderModel = mongoose.model('Orders', OrderSchema);
