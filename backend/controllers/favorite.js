const favorites = require('../models/favorites');

module.exports = {
    getUserFavorites: async (req, res) => {
        try {
            const favoritedItems = await favorites.find({ userId: req.user.id });
            return res.json({ favorites: favoritedItems });
        } catch (err) {
            console.log(err);
            return res.json({ error: err });
        }
    },
}