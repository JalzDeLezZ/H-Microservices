module.exports = () => {
  return {
    success: (res, data, message) => {
      const result = {
        status: 200,
        message: message || 'Success',
        data: data,
      }
      res.json(result)
    },
    failed: (res, error) => {
      const result = {
        status: 500,
        message: error.message || 'Internal Server Error',
      }
      res.json(result)
    },
    validation: (res, error) => {
      const result = {
        status: 400,
        message: error.message || 'Bad Request',
      }
      res.json(result)
    },
  }
}
