module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.allUsers)
}