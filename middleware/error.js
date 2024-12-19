// Copyright 2023 YOUR NAME HERE
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const ErrorResponse = require('../utils/errorResponse');

/***
 *  errHandler creates architecture for error.
 *  includes success boolean and error string
 *  logs error stack in console
 */

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;
  //Dev Console Log
  console.log(err.stack.red);

  //Mongoose bad Object ID

  if (err.name === 'Error') {
    const message = `Resource not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }
  console.log(err.name);
  res.status(error.statusCode).json({
    success: false,
    error: error.message || 'Server Error',
  });
};

module.exports = errorHandler;
