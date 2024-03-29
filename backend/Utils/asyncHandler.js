const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (err) {
        res.status(err.code || 500).send({
            success: false,
            message: err
        })
    }
}

export { asyncHandler }
