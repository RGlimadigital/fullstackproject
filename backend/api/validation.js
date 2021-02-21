module.exports = app => {
    function existsOrError(value, msg) {
        console.log(value)
        if (!value) throw msg;
        if (Array.isArray(value) && value.length === 0) throw msg;
        if (typeof value === 'string' & !value.trim()) throw msg;
    }

    function notExistsOrError(value, msg) {
        try {
            existsOrError(value, msg);
        } catch (msg) {
            return msg;
        }

        throw msg;
    }

    function equalsOrError(valueA, valueB, msg) {
        if (valueA !== valueB) throw msg;
    }

    function validEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    return { existsOrError, notExistsOrError, equalsOrError, validEmail };
}