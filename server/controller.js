module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory().then( response => {
            res.status(200).send(response)
        })
        .catch(error => console.log('getAll dont work', error))
    }, 
    create: (req, res) => {
        const {product_name, product_price, product_image} = req.body
        const db = req.app.get('db')

        db.create([product_name, product_price, product_image]).then( response => {
            res.status(200).send(response)
        })
    }
}