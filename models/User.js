import { model, Schema } from "mongoose";

let collection = "users";

let schema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String },
  mail: { type: String, required: true, unique: true },
  photo: {
    type: String,
  },
  password: { type: String, required: true },
  country: { type: String, required: true },
});

let User = model(collection, schema);

export default User;
