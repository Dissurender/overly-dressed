const clothesController = require('../controllers/clothes');

const loadClothesRoutes = (app, controller = clothesController) => {
    //app.get('/api/clothes/:clothesId', controller.getClothes);
    app.get('/', controller.getNone);
}


module.exports = loadClothesRoutes;
