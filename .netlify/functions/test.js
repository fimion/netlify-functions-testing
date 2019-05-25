const fs = require('fs');

exports.handler = function(event, context, callback) {
  // your server-side functionality

  fs.readdir('/', (err, files) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(files)
    })
  });
}
