const clothes = require('../models/clothes');

module.exports = {
    getClothes: async (req, res) => {
        try {
            if (req.query.clothesId === undefined) {
                return res.json({ message: 'No query of clothesId found' });
            }
            if (Number.isInteger(Number(req.query.clothesId)) === false) {
                return res.json({ message: 'Invalid query of clothesId' });
            }
            const clothesItems = await clothes.find({ id: Number(req.query.clothesId) });
            if (clothesItems.length === 0) {
                return res.json({ message: `No clothes found with id of ${req.query.clothesId}` });
            }
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