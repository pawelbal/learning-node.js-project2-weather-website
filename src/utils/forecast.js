
const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c49da23916fcf76e0fe853be112c259f&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
           callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
           callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. Its ' + body.current.temperature + ' degress, but it feels like ' + body.current.feelslike + ' degress.')
        }
    })
}

module.exports = forecast
