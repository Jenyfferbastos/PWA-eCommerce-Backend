import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firtName: String,
  lastName: String,
  email: String,
  phone: String,
  bornDate: String,
  currentPassword: String,
  password: String,
});

export const UserModel = mongoose.model('User', UserSchema);
