module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory().then( response => {
            res.status(200).send(response)
        })
        .catch(error => console.log('getAll dont work', error))
    }, 
    create: (req, res) => {
        console.log(req.body)
        const {name, price, image} = req.body
        const db = req.app.get('db')

        db.create([name, price, image]).then( response => {
            res.status(200).send(response)
        })
    },
    removeProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product([id]).then( response => {
            res.status(200).send(response)
        }).catch(error => console.log('delete didnt work', error))
    },
    updateProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {price} = req.body
        console.log(price)

        db.update_product([price, id]).then( response => {
            res.status(200).send(response)
        })
    }
}