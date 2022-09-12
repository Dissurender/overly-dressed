const clothes = require('../models/clothes');

module.exports = {
    getClothes: async (req, res) => {
        try {
            const clothesItems = await clothes.find({ id: req.query.clothesId });
            return res.json({ clothes: clothesItems });
        } catch (err) {
            console.log(err);
            return res.json({ error: err });
        }
    },
    createClothes: async (req, res) => {
        try {
            const clothesItem = await clothes.create({ name: req.body.name, price: req.body.price, productDate: req.body.productDate, dueDate: req.body.description })
            return res.json({ message: `${clothesItem} has been created.` });
        } catch (err) {
            console.log(err);
            return res.json({ error: err });
        }
    },
    getRoot: async (req, res) => {
        return res.json({ server_status: 'active' });
    }
}