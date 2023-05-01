import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: String,
  phone: String,
  address: String,
});

const userModel = model('usurios', userSchema);

export default userModel;
