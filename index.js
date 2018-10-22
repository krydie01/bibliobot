const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '749224567:AAHnljGebf2cFmx9_YxBsTRThHQPpTN16uk'
const debug = require('./helpers')

console.log('Bot has been started')

const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10
    }
  }
})

bot.onText(/\/start/, msg => {
  const { id } = msg.chat

  bot.sendMessage(id, 'hello')
})

bot.onText(/\/help (.+)/, (msg, arr) => {
  const { id } = msg.chat
  bot.sendMessage(id, debug(arr))
})