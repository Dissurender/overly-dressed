const clothes = require('../models/clothes');

module.exports = {
    getClothes: async (req, res) => {
        try {
            const clothesItems = await clothes.find({ id: req.query.clothesId });
            return clothesItems;
        } catch (err) {
            console.log(err);
        }
    }




}