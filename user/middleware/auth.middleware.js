import jwt from 'jsonwebtoken';
import User from '../models/user.models.js';
import Blacklisttoken from '../models/blacklisttoken.model.js';

export const userAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const isBlacklisted = await Blacklisttoken.find({ token });

        if (isBlacklisted.length) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        delete user._doc.password;
        req.user = user;

        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}