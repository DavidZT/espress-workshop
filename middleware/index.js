module.exports = (req, res, next) => {   
    res.status(200).send({code: 1, message: "Bienvenido al Pokedex"});
};