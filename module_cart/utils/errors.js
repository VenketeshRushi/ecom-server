/* eslint-disable no-use-before-define */
// eslint-disable-next-line max-classes-per-file
class GeneralError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }

  getCode() {
    if (this instanceof BadRequest) {
      return 200;
    }
    if (this instanceof NotFound) {
      return 404;
    }
    return 500;
  }
}

class BadRequest extends GeneralError { }
class NotFound extends GeneralError { }

module.exports = {
  GeneralError, BadRequest, NotFound,
};
