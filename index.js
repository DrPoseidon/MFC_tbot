const TelegramBot = require('node-telegram-bot-api');
const { options, categoryOptions } = require('./options');
const { cat } = require('./categories');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 80;
const token = '1953297606:AAHypoN-2AYg8y71sFW8ogf4Xk-aerr_8Ek';
const bot = new TelegramBot(token, { polling: true });
const apps = [];

let category = '';
let waitingName = false;

app.use(cors());
app.get('/', (req, res) => {
  res.send('MFC tbot');
});

app.listen(PORT, () => {
  start();
});

const start = () => {
  bot.setMyCommands([
    { command: '/start', description: 'Начало работы с ботом' },
    { command: '/help', description: 'Помощь' }
  ]);

  bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    if (text === '/start') {
      await bot.sendPhoto(
        chatId,
        'https://lh3.googleusercontent.com/proxy/QpsQdNkhH_IrV8Kj8vUY64YAVmqS4RPUpfnbsN7wDplDQa375xsc1922MzuDgWw-ioLKh6OhkhVrV-V_ZVgxnzmf3wR6sFbqAj6yL_DIFajqRsj8Kd55efU'
      );
      await bot.sendMessage(chatId, 'Добро пожаловать в телеграм-бот МФЦ!');
      return bot.sendMessage(chatId, 'Выберете категорию', categoryOptions);
    }
    if (text === '/help') {
      await bot.sendMessage(chatId, 'Нажмите /start для начала работы с ботом');
    }
    if (Object.values(cat).indexOf(msg.text) !== -1) {
      category = Object.keys(cat)[Object.values(cat).indexOf(msg.text)];
      if (text === cat.applyToMFC) {
        waitingName = true;
        return bot.sendMessage(chatId, 'Введите вашу проблему');
      } else if (text === cat.viewApps) {
        if (!apps.length) {
          return bot.sendMessage(chatId, 'У вас еще нет поданых заявок');
        } else {
          apps.forEach((el) => {
            return bot.sendMessage(
              chatId,
              `Номер заявки: ${el.id}, Проблема: ${el.issue}`
            );
          });
        }
      } else {
        return bot.sendMessage(
          chatId,
          'Выберите интересующую вас категорию',
          options[category]
        );
      }
    }
    if (waitingName) {
      const app = {
        id: Date.now(),
        name: `${msg.chat.first_name} ${msg.chat.last_name}`,
        issue: text
      };
      apps.push(app);
      waitingName = false;
      return bot.sendMessage(chatId, `Заявка подана. Номер заявки ${app.id}`);
    }
  });
};

// bot.on('callback_query', (msg) => {
//   const data = msg.data;
//   const chatId = msg.message.chat.id;
//   console.log(data);
//   if (!category && categories.indexOf(data) !== -1) {
//     category = data;
//     return bot.sendMessage(
//       chatId,
//       'Выберите интересующую вас категорию',
//       options[data]
//     );
//   } else if (data === '/start') {
//     category = '';
//     return setCategory(chatId);
//   }
// });
