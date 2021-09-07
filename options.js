module.exports = {
  categoryOptions: {
    reply_markup: JSON.stringify({
      keyboard: [
        ['Семья и дети', 'Паспорта, регистрации, визы'],
        ['Подать заявку в МФЦ', 'Посмотреть заявки']
      ]
    })
  },
  options: {
    familyAndChildren: {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [
            {
              text: 'Выплата компенсации стоимости путевок в детский лагерь',
              url: 'https://www.gosuslugi.ru/600226'
            }
          ],
          [
            {
              text: 'Регистрация брака',
              url: 'https://www.gosuslugi.ru/group/marriage'
            },
            {
              text: 'Регистрация рождения',
              url: 'https://www.gosuslugi.ru/group/birth_registration'
            }
          ],
          [
            {
              text: 'Создание семьи',
              url: 'https://www.gosuslugi.ru/situation/family_creation'
            },
            {
              text: 'Рождение ребенка',
              url: 'https://www.gosuslugi.ru/situation/birth'
            }
          ]
        ]
      })
    },
    passportsRegistrationsVisas: {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [
            {
              text: 'Паспорт гражданина РФ',
              url: 'https://www.gosuslugi.ru/10052'
            }
          ],
          [
            {
              text: 'Загранпаспорт гражданина РФ',
              url: 'https://www.gosuslugi.ru/10051'
            }
          ],
          [
            {
              text: 'Регистрация по месту жительства или пребывания',
              url: 'https://www.gosuslugi.ru/10050'
            }
          ],
          [
            {
              text: 'Ваши документы утеряны или украдены?',
              url: 'https://www.gosuslugi.ru/situation/uterya_dokumentov'
            }
          ]
        ]
      })
    }
  }
};
