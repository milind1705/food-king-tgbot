require('dotenv').config()
const express = require('express');
const app = express();
const PORT =  process.env.PORT || 5000
const {Telegraf} = require('telegraf');
const bot = new Telegraf('5505915548:AAFICbQOcgWNTOVkZBJsGW5SJsqdjjdTY4w')

app.get('/', (req, res)=>{
    res.send("welcome")
})

bot.start( ctx => {
    console.log(ctx.from)
    
   ctx.reply("welcome")
})

app.listen(PORT, ()=>{

    console.log("server is started @" + PORT)
})