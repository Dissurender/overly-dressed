const clothesController = require('../controllers/clothes');

const loadClothesRoutes = (app, controller = clothesController) => {
    app.get('/', controller.getRoot);
    app.get('/api/clothes/:clothesId', controller.getClothes);
}


module.exports = loadClothesRoutes;
