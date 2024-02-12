class ApiError extends Error {
    constructor(statusCode = 500, message = "Something went wrong", errors = [], stack = "") {
        /**
         * Constructor for creating an instance of the class.
         *
         * @param {number} statusCode - status code for the response
         * @param {string} message - message describing the error
         * @param {Array} errors -array of errors
         * @param {string} stack - stack trace for the error
         * @return {void}
         */

        super(message);
        this.statusCode = statusCode;
        this.data = null
        this.errors = errors
        this.message = message
        this.success = false;
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export { ApiError }