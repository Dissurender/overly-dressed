const clothesController = require('../controllers/clothes');

const loadClothesRoutes = (app, controller = clothesController) => {
    app.get('/', controller.getRoot);
    app.get('/api/clothes?:clothesId', controller.getClothes);
    //            const clothesItem = await clothes.create({ name: req.body.name, price: req.body.price, productDate: req.body.productDate, dueDate: req.body.description })
    app.get('/api/create/clothes?')
}


module.exports = loadClothesRoutes;
