const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
const db = require("wio.db")
require("moment-duration-format");

exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  const msg = message


   const bunemq = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const annencilermaldır = new Discord.MessageEmbed()

  .setColor('RANDOM')
  .setFooter('GenarcBot \'GenarcBot İstatistikleri', bot.user.displayAvatarURL())
  .setThumbnail(bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
  .addField("» **Botun Sahibleri**", "** <@691005214630608976> | <@808088552721088582> | <@708985004960514159> **")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB' , true)  
  .addField("» **Çalışma süresi**", bunemq)
  .addField('» **Kullanıcılar**:', bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0))
  .addField("» **Sunucular**", bot.guilds.cache.size.toLocaleString(), true)
  .addField("» **Kanallar**", bot.channels.cache.size.toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **Ping**", bot.ws.ping+" ms", true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``)
  .addField("» **Bot Linkleri**", "** [Destek Sunucusu](https://discord.gg/6f6TzSyRX5) | [Bot Davet](https://discord.com/api/oauth2/authorize?client_id=811929712245866496&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2F6f6TzSyRX5&response_type=code&scope=bot%20guilds.join) | [Bot Oy `YAKINDA`](YAKINDA) **")
  .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
 return message.channel.send(annencilermaldır);
  };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i',"bi"],
  permLevel: 0
};
 
exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};