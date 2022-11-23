const response = (statusCode, data = null, message, res) => {
  res.status(statusCode).json({
    payload: {
      status_code: statusCode,
      datas: data,
      message: message,
    },
  });
};

export default response;
