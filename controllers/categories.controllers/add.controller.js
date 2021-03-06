const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const { name } = req.body;

        const CategoriesModel = db.getModel('Categories');

        const newCategory = await CategoriesModel.create({
            name
        }, {returning: true});

        return res.status(200).send({error: false, newCategory});
    } catch (e) {
        console.log(e);
        res.status(200).send({error: true, message: e.message});
    }
};
