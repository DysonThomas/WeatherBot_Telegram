const functions = require('firebase-functions');
const { Telegraf } = require('telegraf')
const axios = require('axios');

const bot = new Telegraf('')
bot.start((ctx) => ctx.reply('Welcome Search With Your Place Name'))
bot.hears('hi', (ctx) => ctx.reply('Hey From Dyson'))
bot.on('text', (ctx) =>{
    const params = {
        access_key:"",
        query: ctx.update.message.text
      } 
      axios.get('http://api.weatherstack.com/current',{params})
.then(response => {
  const apiResponse = response.data;
  return ctx.reply(
    `Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
}).catch(error => {
  
    return ctx.reply('This city is not exists');
});
});
bot.launch()


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
   
// });
