import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            required: [true, 'UID is required']
        },
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        email: { 
            type: String,
            unique: true,
        },

    }, { timestamps: true }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;