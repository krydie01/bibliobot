const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '749224567:AAHnljGebf2cFmx9_YxBsTRThHQPpTN16uk'
const debug = require('./helpers')

console.log('Bot has been started')

const bot = new TelegramBot(TOKEN, {
  polling: true
})

bot.onText(/\/start/, msg => {
  const { id } = msg.chat

  bot.sendMessage(id, 'Здравствуйте, давайте начнем! Выбирайте одну из команд!')
})

bot.onText(/\/anounce/, (msg, arr) => {
  const { id } = msg.chat
  
  bot.sendMessage(id, 'Скоро будет выводится список анонсов')
})

bot.onText(/\/help (.+)/, (msg, arr) => {
  const { id } = msg.chat

  bot.sendMessage(id, debug(arr))
})