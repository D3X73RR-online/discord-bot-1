const Discord = require('discord.js');

exports.run = (client, message, args) => {
         if (message.author.id !== 'admin id 1' && message.author.id !== 'admin id 2' && message.author.id !== 'admin id 3') return;

    message.channel.send(`Başarılı`).then(msg => {
    console.log(`[BOT]: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};