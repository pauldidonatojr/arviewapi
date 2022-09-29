// domain/.netlify/functions/async_test
// exports

exports.handler = async (event, context, cb) => {
 return {
  statusCode: 200,
  body: 'Async Test #1',
 }
}
