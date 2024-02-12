class ApiResponse {
    /**
     * Constructor for the class.
     *
     * @param {type} data - description of data parameter
     * @param {type} success - description of success parameter
     * @param {type} message - description of message parameter
     * @param {type} statusCode - description of statusCode parameter
     * @return {type} description of the return value
     */
    constructor(data = null, success = true, message = "Success", statusCode = 200) {
        this.data = data
        this.success = success
        this.message = message
        this.statusCode = statusCode < 400
    }
}
