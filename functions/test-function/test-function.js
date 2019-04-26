const uuidv4 = require('uuid/v4');

exports.handler = (_event, _context, callback) => {
  const id = uuidv4();
  callback(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
    },
    body: JSON.stringify({ id })
  });
}