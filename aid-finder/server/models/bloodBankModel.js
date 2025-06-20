import mongoose from "mongoose";

const bloodBankSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters long"],
        maxlength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phone_no: {
        type: Number,
        required: [true, "Password is required"],
    },
    blood_group: {
        type: String,
        required: [true, "Blood group is required"],
        enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    },
});

const bloodBankModel = mongoose.models.blood_bank || mongoose.model('blood_bank', bloodBankSchema);

export default bloodBankModel;