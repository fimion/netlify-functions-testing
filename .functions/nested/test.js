exports.handler = function(event, context, callback) {
  // your server-side functionality

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      results:"Nested test works!",
    })
  })
}
