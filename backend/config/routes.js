module.exports = app => {
    app.get('/', (req, res) => {
        res.send('<h1>Olá</h1>')
    })

    app.route('/users')
    .post(app.api.users.save)
    .get(app.api.users.get)

    app.route('/users/:id')
    .get(app.api.users.getById)
    .put(app.api.users.save)
    .delete(app.api.users.remove)

}