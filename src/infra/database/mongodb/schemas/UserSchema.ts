import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  street: String,
  state: String,
  city: String,
  postalCode: String,
  name: String,
  phone: String,
  phoneArea: String,
});

export const UserModel = mongoose.model('User', UserSchema);
