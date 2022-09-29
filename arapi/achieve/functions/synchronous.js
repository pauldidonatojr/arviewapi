// domain/.netlify/functions/test
// exports

exports.handler = (event, context, cb) => {
 cb(null, { statusCode: 200, body: 'Test Server!' })
}
