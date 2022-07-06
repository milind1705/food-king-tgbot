
const express = require('express');
const app = express();
const PORT =  5000
const {Telegraf} = require('telegraf');
const bot = new Telegraf('5505915548:AAFICbQOcgWNTOVkZBJsGW5SJsqdjjdTY4w')

app.get('/', (req, res)=>{
    res.send("welcome")
})

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
    })
})

app.listen(PORT, ()=>{

    console.log("server is started @" + PORT)
})