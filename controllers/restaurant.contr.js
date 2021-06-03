const restaurantModel = require('../models/restaurant.model');
const slugify = require('slugify');

const createRest = async (req, res) => {
    const restaurant = new restaurantModel({
        ...req.body,
        slug: slugify(req.body.name)
    });

    try {
        await restaurant.save();
        res.status(201).send(restaurant)
    } catch (err) {
        res.status(400).send(err)
    }
}
const getRests = async (req, res) => {
    try {
        const restaurants = await restaurantModel.find();
        res.send(restaurants);
    } catch (err) {
        res.status(400).send(err);
    }
}
const getRest = async (req, res) => {
    try {
        const restaurant = await restaurantModel.findOne({ slug: req.params.slug });
        if (!restaurant) {
            res.status(404).send('wrong id')
        } else {
            res.status(200).send(restaurant)
        }
    } catch (err) {
        res.status(500).send(err)
    }
}
const updateMenu = async (req, res) => {
    try {
        const restaurant = await restaurantModel.findById(req.params.id)
        const menu = await restaurant.menu.find(m => m._id.toString() === req.params.menu)
        if (!menu) {
            res.status(404).send('wrong id');
        } else {
            const dish = await menu.dishes.find(d => d._id.toString() === req.params.dish)
            if (req.body.menuName) {
                menu.menuName = req.body.menuName
                await restaurant.save()
                res.status(200).send(restaurant);

            } else if (dish && req.body) {
                dish.dishName = req.body.dishName || dish.dishName
                dish.price = req.body.price || dish.price
                await restaurant.save()
                res.status(200).send(restaurant);

            } else {
                res.status(404).send('wrong id');
            }
        }
    } catch (err) {
        res.status(500).send(err + '')
    }
}

module.exports = {
    createRest,
    updateMenu,
    getRests,
    getRest
}