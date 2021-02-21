const bcrypt = require('bcrypt-nodejs');

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError, validEmail } = app.api.validation;

    const encryptPassword = password => {

        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);

    }

    const save = async(req, res) => {
        const user = {...req.body };
        console.log(user)
        if (req.params.id) user.id = req.params.id;

        try {
            existsOrError(user.name, 'Nome de usuário não informado.');
            existsOrError(user.email, 'E-mail de usuário nao informado.')
            existsOrError(user.password, 'Senha não informada');
            existsOrError(user.confirmPassword, 'Confirmação de senha não encontrada');

            console.log("entrou aqui")
            const userFromDb = await app.db('users')
                .where({ email: user.email }).first()

            if (!user.id) {
                notExistsOrError(userFromDb, 'Usuário já cadastrado.')
            }
        } catch (msg) {
            return res.status(400).send(msg);
        }

        user.password = encryptPassword(user.password);
        delete user.confirmPassword;
        console.log(user.password)

        if (user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('users').select('id', 'name', 'email', 'admin')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    return { save, get };
}