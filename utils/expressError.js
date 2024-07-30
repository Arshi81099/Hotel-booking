class expressError extends Error {
    constructor(status, message) {
        super();
        this.status = status; // should be a number
        this.message = message; // should be a string
    }
}

module.exports = expressError;
