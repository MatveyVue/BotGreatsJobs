const { Composer, Markup } = require('telegraf');

const composer = new Composer();

composer.start(async (ctx) => {
    // 1. Правильная структура для кнопок (каждая кнопка в новой строке)
    const buttons = Markup.inlineKeyboard([
        [Markup.button.url('Go App', 'https://t.me/HateCapsBot/Hatecaps')],
        [Markup.button.url('Channel', 'https://t.me/@whsxg0')],
    ]);

    // 2. Строка сообщения заключена в обратные кавычки (шаблонный литерал)
    // 3. Клавиатура передается через свойство reply_markup
    return ctx.reply(
        `Hi friend, here you can take part in the NFT Hate Caps draw, which will be in great demand for their uniqueness.`,
        { parse_mode: 'HTML', reply_markup: buttons.reply_markup } // Доступ к reply_markup через свойство объекта
    );
});

module.exports = composer;
