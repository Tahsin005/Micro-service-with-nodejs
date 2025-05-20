import jwt from 'jsonwebtoken';
import Captain from '../models/captain.model.js';
import Blacklisttoken from '../models/blacklisttoken.model.js';

export const captainAuth = async (req, res, next) => {
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

        const captain = await Captain.findById(decoded.id);

        if (!captain) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        delete captain._doc.password;
        req.captain = captain;

        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}