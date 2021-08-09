exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Daeun',
      age: 95,
      email: 'gde102@naver.com'
    })
  }
}