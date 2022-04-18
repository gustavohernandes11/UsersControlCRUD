
module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validations

    const save = async (req, res) => {
        const user = { ...req.body }
        if (req.params.id) user.id = req.params.id
  
        try {
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.age, 'Idade não informada')

            const userFromDB = await app.db('users')
                .where({ email: user.email }).first()
            if(!user.id) {
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
            }
        } catch(msg) {
            return res.status(400).send(msg)
        }

        if (user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .then(_ => res.status(204).send('ok'))
                .catch(err => res.status(500).send(err))
        } else {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send('att'))
                .catch(err => res.status(500).send(err))
        }

    }




    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'age')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'age')
            .where({ id: req.params.id })
            .first()
            .then(user => res.json(user))
            .catch(e => res.status(400).send(e))

    }

    const remove = async (req, res) => {
        app.db('users')
            .del()
            .where({ id: req.params.id })
            .then(_ => res.status(204).send('Deletado'))
            .catch(e => res.status(400).send(e))

    }
    return { save, get, getById, remove }
}