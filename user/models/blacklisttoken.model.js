import mongoose from "mongoose";

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 60,
    }
}, {
    timestamps: true
})

const Blacklisttoken = mongoose.model('Blacklisttoken', blacklistTokenSchema);

export default Blacklisttoken;