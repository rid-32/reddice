import mongoose, { Schema } from 'mongoose';
import { hashSync, genSaltSync, compareSync } from 'bcrypt-nodejs';

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  timezone: { type: String, required: true },
  password_digest: { type: String, required: true },
});

userSchema.methods.encryptPassword = (password) => {
  return hashSync(password, genSaltSync(5), null);
};

userSchema.methods.validPassword = (password, password_digest) => {
  return compareSync(password, password_digest);
};

export default mongoose.model('User', userSchema);
