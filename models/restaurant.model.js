const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    name: { type: "string" },
    slug: { type: "string" },
    menu: [{
        menuName: { type: "string" },
        dishes: [{
            dishName: { type: "string" },
            price: { type: "string" },
        }]
    }]
});
module.exports = mongoose.model('Restaurant', restaurantSchema);