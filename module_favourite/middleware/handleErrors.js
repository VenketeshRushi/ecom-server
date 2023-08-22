/* eslint-disable no-unused-vars */
const { GeneralError } = require("../utils/errors");

const handleErrors = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    return res.json({
      status: "error",
      message: err.message,
      data: err.stack,
    });
  }

  return res.status(200).json({
    status: "error",
    message: err.message,
    data: err.stack,
  });
};

module.exports = handleErrors;
