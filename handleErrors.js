/* eslint-disable no-unused-vars */
const {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} = require("@prisma/client/runtime");

const handleErrors = (err, req, res, next) => {
  // Log the error for debugging purposes
  console.error(err);

  // Handle known Prisma client request errors
  if (err instanceof PrismaClientKnownRequestError) {
    return res.status(400).json({
      status: "error",
      message: "Bad request - Prisma error",
      details: err.message,
    });
  }

  // Handle Prisma client validation errors
  if (err instanceof PrismaClientValidationError) {
    return res.status(400).json({
      status: "error",
      message: "Validation error",
      details: err.message,
    });
  }

  // Handle SyntaxError (Invalid JSON)
  if (err.name === "SyntaxError") {
    return res.status(400).json({
      status: "error",
      message: "Bad request - Invalid JSON",
    });
  }

  // Handle MySQL database connection errors
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    return res.status(500).json({
      status: "error",
      message: "Database connection lost",
    });
  }

  // Handle MySQL query execution errors
  if (err.code === "ER_PARSE_ERROR") {
    return res.status(500).json({
      status: "error",
      message: "Database query parse error",
    });
  }

  // Handle other unhandled errors
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};

module.exports = handleErrors;
