require('dotenv').config()
const express = require('express');
const app = express();
const PORT =  process.env.PORT || 5000
const {Telegraf} = require('telegraf');
const bot = new Telegraf(process.env.TELEGRAM_BOT_ID)
const web_link = 'https://food-king.vercel.app/'
app.get('/', (req, res)=>{
    res.send("welcome chatbot")
})

bot.start((ctx) => 
ctx.reply(`Welcome ${ctx.message.from.first_name} to food king`,{reply_markup:{keyboard:[[{text:'web app', web_app:{url: web_link}}]]}}))


bot.launch()

app.listen(PORT, ()=>{

    console.log("server is started @ " + PORT)
})
