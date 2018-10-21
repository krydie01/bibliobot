const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '749224567:AAHnljGebf2cFmx9_YxBsTRThHQPpTN16uk'

const bot = new TelegramBot(TOKEN, {
  polling: true
})

bot.on('message', (msg) => {
  console.log(msg)
})