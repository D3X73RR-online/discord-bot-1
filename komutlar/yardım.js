const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {

        const DarkCode = new Discord.MessageEmbed()

             .setColor('RED')
             .setAuthor(`GenarcBot Her Gün Yeni Bir Güncelleme - Yardım Menüsü`, client.user.avatarURL()) 
             .setThumbnail(client.user.avatarURL())

             .setDescription(" **Prefix:** `g!`\n **Yeni Güncellemeler:** `g!yenilikler/g!güncellemeler`\n **Bot Hakkında Bilgi İçin:** `g!bot-bilgi`")

             .addField(`**Kullanıcı Komutları**`,`g!kullanıcı Komutu İle Kullanıcı Komutlarını Görebilirsin\n \`roller\` \`bot-bilgi\` \`yenilikler\``)
             .addField(`**Eğlence komutları**`, `g!kullanıcı Komutu İle Eğlence Komutlarını Görebilirsin\n \`eklenecek\``)
             .addField(`**Yetkili Komutları**`, `g!yetkili Komutu İle Yetkili Komutlarını Görebilirsin\n \`eklenecek\``)
             .addField(`**Moderason Komutları**`, `g!moderasyon Komutu İle Modersayon Komutlarını Görebilirsin\n \`eklenecek\``)

             .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
            
        return message.channel.send(DarkCode);
}

exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['y'],
    permLevel : 0
}

exports.help = {
    name : 'yardım',
    description : 'Komut Gösterir atar',
    usage : 'yardım'
}