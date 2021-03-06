module.exports.demo = (event, context, callback) => {
  if ((event.queryStringParameters || {}).error) callback(new Error('Oh no!'))
  console.log('The first version')
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      id: process.env.VERSION
    })
  }
  return callback(null, response)
}
