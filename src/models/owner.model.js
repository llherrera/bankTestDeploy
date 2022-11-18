import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ownerWesternSchema = new Schema({
  id_owner: { type: String, unique: true },
  name: { type: String },
  email: { type: String, unique: true },
  DNI: { type: String, unique: true },
});

export default model('OwnerWestern', ownerWesternSchema);