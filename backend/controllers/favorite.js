const favorites = require('../models/favorites');

module.exports = {
    getUserFavorites: async (req, res) => {
        try {
            const favoritedItems = await favorites.find({ userId: req.query.userId }); //list of all the clothes for the user
            return res.json({ favorites: favoritedItems });
        } catch (err) {
            console.log(err);
            return res.json({ error: err });
        }
    },
    addFavoriteToUser: async (req, res) => {
        try {
            //query for userId and a query for a clothesId
            const favoritedItem = await favorites.create({ user: req.body.userId, clothes: req.body.clothesId });
            return res.json({ message: `${favoritedItem} has been created.` });
        } catch (err) {
            return res.json({ error: err });
        }
    }
}