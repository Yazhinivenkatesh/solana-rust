const APIError = require("./APIError");

module.exports = err => {
  const errObj = {
    message: "Request failed",
    code: 500
  };
  switch (true) {
    case err instanceof APIError:
      errObj["message"] = err.message;
      errObj["code"] = err.code;
      break;
    case err instanceof TypeError:
      console.log(err);
      errObj["message"] = err.message;
      errObj["code"] = 500;
      break;
    case err instanceof Error:
      if (err.type) {
        errObj["message"] = err.message;
        errObj["code"] = 400;
      } else {
        // need to add a meaningful error message
        errObj["message"] = err.message;
        errObj["code"] = 400;
      }
      break;
  }
  return errObj;
};
