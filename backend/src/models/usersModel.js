import { Schema, model } from "mongoose"

const userSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    birthDate: { type: Date, required: true },
    phoneNumber: { type: String, required: true }
});
export default model("User", userSchema, "User");