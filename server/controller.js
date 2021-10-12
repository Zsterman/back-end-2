const houses = require('./db.json')
let globalId = 4


module.exports = {
    getAllHouses: (req, res) => {
        res.status(200.).send(houses)
    },
    createHouse: (req, res) => {
        console.log(req.body)
        const newHouse = {
            id: globalId,
            address: req.body.address,
            price: req.body.price,
            imageURL: req.body.imageURL
        }    
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++
    },
    updateHouse: (req, res) => {
        const {id} = req.params
        const {type} = req.body

        let index = houses.findIndex((elem) => elem.id === +id)

        if(houses[index].price - 10,000 < 0 && type === 'minus'){
            res.status(400).send('cant go below zero')
        } 
        else if (type === 'minus') {
            houses[index].price -= 10000;
            res.status(200).send(houses);
        }
        else if (type === 'plus'){
            houses[index].price += 10000;
            res.status(200).send(houses);
        } 
        else {
            res.status(400).send('something went wrong')
        }
    },
    deleteHouse: (req, res) => {
        let index = houses.findIndex(elem => elem.id === 
        +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    }

} 