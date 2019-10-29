const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/10d3d2ec96032fbf897af4042d0d2301/' + lat + ',' + long;

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, body.daily.summary + ' It is currently ' + body.currently.temperature + ' degress out. There is ' + body.currently.precipProbability + '% chance of rain. The high for today is ' + body.daily.data[0].temperatureHigh + ' degrees and the low is ' + body.daily.data[0].temperatureLow + ' degrees.');
        }
    });
};

module.exports = forecast;