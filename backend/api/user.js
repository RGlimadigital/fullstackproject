module.exports = app => {
    const save = (req, res) => {
        res.send('User save');
    }
    const allUsers = (req, res) => {
        res.json({
            title: 'Sai dos 99% e venha para a Elite dos 1% Vitoriosos',
            subTitle: 'RG_FULL_DEV',
            telefone: '(62) 99173 - 5771',
            descricao: 'Formado em Madrid pelo prestigiado BootCamp UBIQUM com Full Stack Developer'
        });
    }
    return { save, allUsers }
}