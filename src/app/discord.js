console.log('disc')
const Discord = require('discord.js');
const fetch = require('node-fetch');
const {MessageEmbed} = require('discord.js');

usrsttl.addEventListener('click',()=>{
    document.getElementById('kledtwin').style.display = 'flex'
    document.getElementById('kledtwin').style.opacity = '1'
    document.getElementById('kledtwin').style.animation = 'klwin .2s'
})
imsvbtn.addEventListener('click',()=>{
    document.getElementById('kledtwin').style.display = 'none'
})
optstp.addEventListener('click',()=>{
    document.getElementById('discnoti').style.display = 'flex'
    document.getElementById('discnoti').style.opacity = '1'
    document.getElementById('notttl').innerText = 'Bot is offline'
    document.getElementById('notddsc').innerText = 'In order to optimize bot make sure that the bot is online'
    setTimeout(()=>{
        document.getElementById('discnoti').style.display = 'none'
    },3000)
})
document.getElementById('dbstat').style.backgroundColor = '#e05a00'
function displayTime() {
    var str = "";

    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    str += hours + ":" + minutes;
    return str;
}
function mjoin(){
    document.getElementById('lckdb').style.display = 'flex'
    const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
    const tkn = document.getElementById('dbtknv').value;
    console.log(tkn.length)
    if(tkn.length === 0){
        document.getElementById('errtkn').style.display = 'flex'
        document.getElementById('invtkn').style.display = 'none'
        document.getElementById('dbtknv').style.border = '1px solid #ff5555'
        document.getElementById('lckdb').style.display = 'none'
        document.getElementById('discnoti').style.display = 'flex'
        document.getElementById('discnoti').style.opacity = '1'
        document.getElementById('notttl').innerText = 'No Token Found'
        document.getElementById('notddsc').innerText = 'In order for the bot to work make sure to enter bots token'
        setTimeout(()=>{
            document.getElementById('discnoti').style.display = 'none'
        },3000)
    }
    if(tkn.lenght < 65 && tkn.length > 1){
        document.getElementById('invtkn').style.display = 'flex'
        document.getElementById('errtkn').style.display = 'none'
        document.getElementById('dbtknv').style.border = '1px solid #ff5555'
        document.getElementById('lckdb').style.display = 'none'
        document.getElementById('discnoti').style.display = 'flex'
        document.getElementById('discnoti').style.opacity = '1'
        document.getElementById('notttl').innerText = 'Invalid Token'
        document.getElementById('notddsc').innerText = 'The token u provided is invalid, make sure to check it again'
        setTimeout(()=>{
            document.getElementById('discnoti').style.display = 'none'
        },3000)
    }
    if(tkn.length > 60){
        document.getElementById('errtkn').style.display = 'none'
        document.getElementById('invtkn').style.display = 'none'
        document.getElementById('dbtknv').style.border = '1px solid #303030'
        document.getElementById('lckdb').style.display = 'flex'
        const cmdvk = document.getElementById('kltxt').value;
        if(cmdvk === ''){
            document.getElementById('kltxt').value = 'kill'
        }
        if(cmdvk != ''){
            console.log('kill command setted')
        }
        const cmdvm = document.getElementById('mmtxt').value;
        if(cmdvm === ''){
            document.getElementById('mmtxt').value = 'meme'
        }
        if(cmdvm != ''){
            console.log('meme command setted')
        }
        const upfpv = document.getElementById('upfptxt').value;
        if(upfpv === ''){
            document.getElementById('upfptxt').value = 'av'
        }
        if(upfpv != ''){
            console.log('avatar command setted')
        }
        const upiq = document.getElementById('usiqtxt').value;
        if(upiq === ''){
            document.getElementById('usiqtxt').value = 'iq'
        }
        if(upiq != ''){
            console.log('user iq command setted')
        }
        const uwbtr = document.getElementById('uwbtrtxt').value;
        if(uwbtr === ''){
            document.getElementById('uwbtrtxt').value = 'whobtr'
        }
        if(uwbtr != ''){
            console.log('user whos better command setted')
        }
        const uth = document.getElementById('trthtxt').value;
        if(uth === ''){
            document.getElementById('trthtxt').value = 'uth'
        }
        if(uth != ''){
            console.log('truth about user command setted')
        }
    }
    client.login(tkn);
    client.on('ready', () => {
        document.getElementById('optstp').style.display = 'none'
        document.getElementById('dbstat').style.backgroundColor = '#50C878'
        console.log('ok')
        setInterval(()=>{
            const act = document.getElementById('dactv').value
            client.user.setActivity(act, { type: "LISTENING"})
        },1000)
        document.getElementById('busn').innerText = client.user.username
        document.getElementById('bdm').innerText = `#${client.user.discriminator}`
        document.getElementById('dbtpfp').style.backgroundImage = `url(${client.user.displayAvatarURL()})`
        document.getElementById('discnoti').style.display = 'flex'
        document.getElementById('discnoti').style.opacity = '1'
        document.getElementById('notttl').innerText = 'Bot is Online'
        document.getElementById('notddsc').innerText = `${client.user.username}#${client.user.discriminator} is online. Use Finfo for details`
        setTimeout(()=>{
            document.getElementById('discnoti').style.display = 'none'
        },3000)
        var node = document.createElement('span')
        var textnode = document.createTextNode(`[ ${displayTime()} ] Bot (${client.user.username}#${client.user.discriminator}) has started :D`)
        node.appendChild(textnode)
        node.style.color = '#55FF55'
        document.getElementById("dbtlgs").appendChild(node)
        document.getElementById('dbtlgs').scrollTop = document.getElementById('dbtlgs').scrollHeight
    });
    
    
    
    dbqt.addEventListener('click',()=>{
        document.getElementById('dbstat').style.backgroundColor = '#e05a00' 
        document.getElementById('busn').innerText = 'Discord'
        document.getElementById('bdm').innerText = '#2005'
        document.getElementById('dbtpfp').style.backgroundImage = 'url(./icons/tmpld.png)'
        client.destroy();
        var node = document.createElement('span')
        var textnode = document.createTextNode(`[ ${displayTime()} ] Bot (${client.user.username}#${client.user.discriminator}) is now offline. It'll take a few minutes to log off`)
        node.appendChild(textnode)
        node.style.color = '#FF5555'
        document.getElementById("dbtlgs").appendChild(node)
        document.getElementById('dbtlgs').scrollTop = document.getElementById('dbtlgs').scrollHeight
        document.getElementById('lckdb').style.display = 'none'
        document.getElementById('optstp').style.display = 'flex'
        document.getElementById('discnoti').style.display = 'flex'
        document.getElementById('discnoti').style.opacity = '1'
        document.getElementById('notttl').innerText = 'Bot is Offline'
        document.getElementById('notddsc').innerText = `Bot is now offline. It'll take a few minutes to log off`
        setTimeout(()=>{
            document.getElementById('discnoti').style.display = 'none'
        },3000)
        document.getElementById('dwinerinf').style.animation = 'none'
    })
client.on('messageCreate',(message)=>{
    const prfx = 'F';
    const prefix = prfx
    const args = message.content.slice(prefix.length).split(/ /);
    const command = args.shift().toLowerCase();
    const cmdvk = document.getElementById('kltxt').value;
    if(command === cmdvk){
        let botId = '989050839014445056';
        const mentionedMember = message.mentions.members.first();
        if (!mentionedMember){
            return message.channel.send('You forgot to mention someone');
        }
        var node = document.createElement('span')
        var textnode = document.createTextNode(`[ ${displayTime()} ] ${message.author.username}#${message.author.discriminator} has used the kill command (F${cmdvk}) in Channel name "${message.channel.name}" in server "${message.guild.name}"`)
        node.appendChild(textnode)
        document.getElementById("dbtlgs").appendChild(node)
        document.getElementById('dbtlgs').scrollTop = document.getElementById('dbtlgs').scrollHeight
        let kills = ['a shadow', 'a goose', 'an octopus', 'a cat'];
        let weapon = ['a watermelon', 'a spoon', 'a picture of JFK', 'a piece of hair', 'a coconut'];
        let responseKills = kills[Math.floor(Math.random() * kills.length)];
        let responseWeapon = weapon[Math.floor(Math.random() * weapon.length)];
        
        if (mentionedMember.id === botId) {
            return message.channel.send({files : ["https://preview.redd.it/rp3mxcssthi81.jpg?auto=webp&s=eb27d4c0f46d8c03815bc71aa4f953f26fbc255d"]});
        }

        let admresc = [
            'https://cdn.ponly.com/wp-content/uploads/No-Memes-15.jpg',
            'https://media.makeameme.org/created/yeah-nah-bc796a2e13.jpg',
            'https://i.kym-cdn.com/photos/images/newsfeed/001/393/635/e2a.jpg',
            'https://i.pinimg.com/474x/1d/81/e0/1d81e065de302045e5d8709bef235ac4.jpg'
        ]
        let resresc = admresc[Math.floor(Math.random()*admresc.length)]

        const admin1 = document.getElementById('im1txt').value;
        if (mentionedMember.id === admin1) {
            return message.channel.send(resresc);
        }
        const admin2 = document.getElementById('im2txt').value;
        if (mentionedMember.id === admin2) {
            return message.channel.send(resresc);
        }
        const admin3 = document.getElementById('im3txt').value;
        if (mentionedMember.id === admin3) {
            return message.channel.send(resresc);
        }
        const admin4 = document.getElementById('im4txt').value;
        if (mentionedMember.id === admin4) {
            return message.channel.send(resresc);
        }
        const admin5 = document.getElementById('im5txt').value;
        if (mentionedMember.id === admin5) {
            return message.channel.send(resresc);
        }
        const admin6 = document.getElementById('im6txt').value;
        if (mentionedMember.id === admin6) {
            return message.channel.send(resresc);
        }
        const admin7 = document.getElementById('im7txt').value;
        if (mentionedMember.id === admin7) {
            return message.channel.send(resresc);
        }

        return message.channel.send(`${responseKills} killed ${mentionedMember} with ${responseWeapon}`);
    
    }
    const cmdvm = document.getElementById('mmtxt').value;
    if(command === cmdvm){
        var node = document.createElement('span')
        var textnode = document.createTextNode(`[ ${displayTime()} ] ${message.author.username}#${message.author.discriminator} has used the meme command (F${cmdvm}) in Channel name "${message.channel.name}" in server "${message.guild.name}"`)
        node.appendChild(textnode)
        document.getElementById("dbtlgs").appendChild(node)
        document.getElementById('dbtlgs').scrollTop = document.getElementById('dbtlgs').scrollHeight
        fetch("https://meme-api.com/gimme").then(res => res.text()).then(
                result => {
                const md = JSON.parse(result)
                return message.channel.send(md.url)
            }
        )
    }
    const upfpv = document.getElementById('upfptxt').value;
    if(command === upfpv){
        let mentionedMember = message.mentions.members.first();
        if (!mentionedMember)
        return message.channel.send('You forgot to mention someone');
        var node = document.createElement('span')
        var textnode = document.createTextNode(`[ ${displayTime()} ] ${message.author.username}#${message.author.discriminator} has used the user avatar command (F${upfpv}) in Channel name "${message.channel.name}" in server "${message.guild.name}"`)
        node.appendChild(textnode)
        document.getElementById("dbtlgs").appendChild(node)
        document.getElementById('dbtlgs').scrollTop = document.getElementById('dbtlgs').scrollHeight
        const embed1 = new MessageEmbed()
        .setAuthor(`${message.mentions.users.first().username}#${message.mentions.users.first().discriminator}`)
        .setTitle('User Avatar')
        .setColor('#Ff5555')
        .setImage(message.mentions.users.first().displayAvatarURL()  + "?size=2048")

        const embedadm = new MessageEmbed()
        .setAuthor({name:`${message.mentions.users.first().username}#${message.mentions.users.first().discriminator}`,iconURL: mentionedMember.displayAvatarURL()})
        .setTitle('User Avatar')
        .setColor('#FFAA00')
        .setImage(message.mentions.users.first().displayAvatarURL()  + "?size=2048")
        .setFooter({text:'👑👑👑'})
        .setTimestamp()


        const admin1 = document.getElementById('im1txt').value;
        if (mentionedMember.id === admin1) {
            return message.channel.send({embeds: [embedadm]});
        }
        const admin2 = document.getElementById('im2txt').value;
        if (mentionedMember.id === admin2) {
            return message.channel.send({embeds: [embedadm]});
        }
        const admin3 = document.getElementById('im3txt').value;
        if (mentionedMember.id === admin3) {
            return message.channel.send({embeds: [embedadm]});
        }
        const admin4 = document.getElementById('im4txt').value;
        if (mentionedMember.id === admin4) {
            return message.channel.send({embeds: [embedadm]});
        }
        const admin5 = document.getElementById('im5txt').value;
        if (mentionedMember.id === admin5) {
            return message.channel.send({embeds: [embedadm]});
        }
        const admin6 = document.getElementById('im6txt').value;
        if (mentionedMember.id === admin6) {
            return message.channel.send({embeds: [embedadm]});
        }
        const admin7 = document.getElementById('im7txt').value;
        if (mentionedMember.id === admin7) {
            return message.channel.send({embeds: [embedadm]});
        }


        return message.channel.send({embeds: [embed1]})
    }
    const uiq = document.getElementById('usiqtxt').value;
    if(command === uiq){
        let mentionedMember = message.mentions.members.first();
        if (!mentionedMember)
        return message.channel.send('You forgot to mention someone');
        const rndiq = Math.floor(Math.random() * (120 - 45 + 1)) + 45;
        const admrndiq = Math.floor(Math.random() * (150 - 100 + 1)) + 100;
        const admin1 = document.getElementById('im1txt').value;
        var node = document.createElement('span')
        var textnode = document.createTextNode(`[ ${displayTime()} ] ${message.author.username}#${message.author.discriminator} has used the user IQ command (F${uiq}) in Channel name "${message.channel.name}" in server "${message.guild.name}"`)
        node.appendChild(textnode)
        document.getElementById("dbtlgs").appendChild(node)
        document.getElementById('dbtlgs').scrollTop = document.getElementById('dbtlgs').scrollHeight
        if (mentionedMember.id === admin1) {
            return message.channel.send(`${mentionedMember} has an IQ of ${admrndiq}`);
        }
        const admin2 = document.getElementById('im2txt').value;
        if (mentionedMember.id === admin2) {
            return message.channel.send(`${mentionedMember} has an IQ of ${admrndiq}`);
        }
        const admin3 = document.getElementById('im3txt').value;
        if (mentionedMember.id === admin3) {
            return message.channel.send(`${mentionedMember} has an IQ of ${admrndiq}`);
        }
        const admin4 = document.getElementById('im4txt').value;
        if (mentionedMember.id === admin4) {
            return message.channel.send(`${mentionedMember} has an IQ of ${admrndiq}`);
        }
        const admin5 = document.getElementById('im5txt').value;
        if (mentionedMember.id === admin5) {
            return message.channel.send(`${mentionedMember} has an IQ of ${admrndiq}`);
        }
        const admin6 = document.getElementById('im6txt').value;
        if (mentionedMember.id === admin6) {
            return message.channel.send(`${mentionedMember} has an IQ of ${admrndiq}`);
        }
        const admin7 = document.getElementById('im7txt').value;
        if (mentionedMember.id === admin7) {
            return message.channel.send(`${mentionedMember} has an IQ of ${admrndiq}`);
        }
        return message.channel.send(`${mentionedMember} has an IQ of ${rndiq}`);
    }
    const uwbc = document.getElementById('uwbtrtxt').value;
    if(command === uwbc){
        const member1 = message.mentions.members.first()
        const member2 = args.slice(1).join(' ')
        const admin1 = document.getElementById('im1txt').value;
        const admin2 = document.getElementById('im2txt').value;
        const admin3 = document.getElementById('im3txt').value;
        const admin4 = document.getElementById('im4txt').value;
        const admin5 = document.getElementById('im5txt').value;
        const admin6 = document.getElementById('im6txt').value;
        const admin7 = document.getElementById('im7txt').value;
        var node = document.createElement('span')
        var textnode = document.createTextNode(`[ ${displayTime()} ] ${message.author.username}#${message.author.discriminator} has used the User comparison command (F${uwbc}) in Channel name "${message.channel.name}" in server "${message.guild.name}"`)
        node.appendChild(textnode)
        document.getElementById("dbtlgs").appendChild(node)
        document.getElementById('dbtlgs').scrollTop = document.getElementById('dbtlgs').scrollHeight
        //member1
        if(member1.id === admin1){
            return message.channel.send(`${member1} cant be compared with ${member2}`)
        }
        if(member1.id === admin2){
             return message.channel.send(`${member1} cant be compared with ${member2}`)
        }
        if(member1.id === admin3){
             return message.channel.send(`${member1} cant be compared with ${member2}`)
        }
        if(member1.id === admin4){
             return message.channel.send(`${member1} cant be compared with ${member2}`)
        }
        if(member1.id === admin5){
             return message.channel.send(`${member1} cant be compared with ${member2}`)
        }
        if(member1.id === admin6){
             return message.channel.send(`${member1} cant be compared with ${member2}`)
        }
        if(member1.id === admin7){
             return message.channel.send(`${member1} cant be compared with ${member2}`)
        }
        //member2
        if(member2 === `<@${admin1}>`){
            return message.channel.send(`${member2} cant be compared with ${member1}`)
        }
        if(member2 === `<@${admin2}>`){
             return message.channel.send(`${member2} cant be compared with ${member1}`)
        }
        if(member2 === `<@${admin3}>`){
             return message.channel.send(`${member2} cant be compared with ${member1}`)
        }
        if(member2 === `<@${admin4}>`){
             return message.channel.send(`${member2} cant be compared with ${member1}`)
        }
        if(member2 === `<@${admin5}>`){
             return message.channel.send(`${member2} cant be compared with ${member1}`)
        }
        if(member2 === `<@${admin6}>`){
             return message.channel.send(`${member2} cant be compared with ${member1}`)
        }
        if(member2 === `<@${admin7}>`){
             return message.channel.send(`${member2} cant be compared with ${member1}`)
        }
        
        //both members 1,2
        if(member1.id === admin1 && member2 === `<@${admin2}>` || member2 === `<@${admin3}>` || member2 === `<@${admin4}>` || member2 === `<@${admin5}>` || member2 === `<@${admin6}>` || member2 === `<@${admin7}>`){
            return message.channel.send(`${member1} and ${member2} cant be compared`)
        }
        if(member1.id === admin2 && member2 === `<@${admin1}>` || member2 === `<@${admin3}>` || member2 === `<@${admin4}>` || member2 === `<@${admin5}>` || member2 === `<@${admin6}>` || member2 === `<@${admin7}>`){
            return message.channel.send(`${member1} and ${member2} cant be compared`)
        }
        if(member1.id === admin3 && member2 === `<@${admin1}>` || member2 === `<@${admin2}>` || member2 === `<@${admin4}>` || member2 === `<@${admin5}>` || member2 === `<@${admin6}>` || member2 === `<@${admin7}>`){
            return message.channel.send(`${member1} and ${member2} cant be compared`)
        }
        if(member1.id === admin4 && member2 === `<@${admin1}>` || member2 === `<@${admin2}>` || member2 === `<@${admin3}>` || member2 === `<@${admin5}>` || member2 === `<@${admin6}>` || member2 === `<@${admin7}>`){
            return message.channel.send(`${member1} and ${member2} cant be compared`)
        }
        if(member1.id === admin5 && member2 === `<@${admin1}>` || member2 === `<@${admin2}>` || member2 === `<@${admin3}>` || member2 === `<@${admin4}>` || member2 === `<@${admin6}>` || member2 === `<@${admin7}>`){
            return message.channel.send(`${member1} and ${member2} cant be compared`)
        }
        if(member1.id === admin6 && member2 === `<@${admin1}>` || member2 === `<@${admin2}>` || member2 === `<@${admin3}>` || member2 === `<@${admin4}>` || member2 === `<@${admin5}>` || member2 === `<@${admin7}>`){
            return message.channel.send(`${member1} and ${member2} cant be compared`)
        }
        if(member1.id === admin7 && member2 === `<@${admin1}>` || member2 === `<@${admin2}>` || member2 === `<@${admin3}>` || member2 === `<@${admin4}>` || member2 === `<@${admin5}>` || member2 === `<@${admin6}>`){
            return message.channel.send(`${member1} and ${member2} cant be compared`)
        }
        
        if(!member1) return message.channel.send('Enter User#1');
        if(!member2) return message.channel.send('Enter User#2');
        let randrsn = [
            'is better than',
            'is definately no better than',
            '>',
            '<',
            'is the og as compared to',
            '= 🗿,💪 and 🤡,🤓 =',
            '= 🤡,🤓 and 🗿,💪 ='
        ]
        let rndslct = randrsn[Math.floor(Math.random() * randrsn.length)]
        if(`<@${member1.id}>` === member2){
            return message.channel.send('U cant compare two same users')
        }
        console.log(member1.id)
        console.log(`@<${member1.id}>`)
        console.log(member2)
        return message.channel.send(`${member1} ${rndslct} ${member2}`)
    }
    const uth = document.getElementById('trthtxt').value;
    if(command === uth){
        const member = message.mentions.members.first()
        var node = document.createElement('span')
        var textnode = document.createTextNode(`[ ${displayTime()} ] ${message.author.username}#${message.author.discriminator} has used the truth about user command (F${uth}) in Channel name "${message.channel.name}" in server "${message.guild.name}"`)
        node.appendChild(textnode)
        document.getElementById("dbtlgs").appendChild(node)
        document.getElementById('dbtlgs').scrollTop = document.getElementById('dbtlgs').scrollHeight
        const rndtrth = [
            'has no life',
            'has a life',
            'doesnt go out everyday',
            'touches grass',
            'gets no girls',
            'pulls no girls'
        ]
        const admin1 = document.getElementById('im1txt').value;
        const admin2 = document.getElementById('im2txt').value;
        const admin3 = document.getElementById('im3txt').value;
        const admin4 = document.getElementById('im4txt').value;
        const admin5 = document.getElementById('im5txt').value;
        const admin6 = document.getElementById('im6txt').value;
        const admin7 = document.getElementById('im7txt').value;
        if(member.id === admin1){
            return message.channel.send('https://tenor.com/view/the-rock-sus-meme-dwayne-johnson-gif-23690760')
        }
        if(member.id === admin2){
            return message.channel.send('https://tenor.com/view/the-rock-sus-meme-dwayne-johnson-gif-23690760')
        }
        if(member.id === admin3){
            return message.channel.send('https://tenor.com/view/the-rock-sus-meme-dwayne-johnson-gif-23690760')
        }
        if(member.id === admin4){
            return message.channel.send('https://tenor.com/view/the-rock-sus-meme-dwayne-johnson-gif-23690760')
        }
        if(member.id === admin5){
            return message.channel.send('https://tenor.com/view/the-rock-sus-meme-dwayne-johnson-gif-23690760')
            }
        if(member.id === admin6){
            return message.channel.send('https://tenor.com/view/the-rock-sus-meme-dwayne-johnson-gif-23690760')
        }
        if(member.id === admin7){
            return message.channel.send('https://tenor.com/view/the-rock-sus-meme-dwayne-johnson-gif-23690760')
        }
        const rndmtrth = rndtrth[Math.floor(Math.random()*rndtrth.length)]
        return message.channel.send(`${member} ${rndmtrth}`)
    }
})
chidsbtn.addEventListener('click',()=>{
    //const dbmchn = client.channels.cache.get(dmchnid);
    if(document.getElementById('chidvl').value === ''){
        document.getElementById('chidvl').style.border = '1px solid #FF5555'
        document.getElementById('chniderr').style.display = 'flex'
        document.getElementById('chidhd').style.display = 'none'
    }
    if(document.getElementById('chidvl').value != ''){
        document.getElementById('chidvl').style.border = '1px solid #303030'
        document.getElementById('chniderr').style.display = 'none'
        document.getElementById('chidhd').style.display = 'flex'
        document.getElementById('chnidld').style.display = 'flex'
        document.getElementById('chidsbtn').style.display = 'none'
        document.getElementById('chedtbtn').style.display = 'flex'
        const dmchnid = document.getElementById('chidvl').value;
        setTimeout(()=>{
            client.channels.fetch(dmchnid).then(channel => document.getElementById('chnnmmq').innerText = channel.name);
            document.getElementById('chnidld').style.display = 'none'
        },3000)
    }
    
})
chedtbtn.addEventListener('click',()=>{
    document.getElementById('chidhd').style.display = 'none'
    document.getElementById('chnidld').style.display = 'none'
    document.getElementById('chidsbtn').style.display = 'flex'
    document.getElementById('chedtbtn').style.display = 'none'

})
msgsendd.addEventListener('click',()=>{
    const chniddc = document.getElementById('chidvl').value;
    let mcChannel = client.channels.cache.get(chniddc);
    let message123 = document.getElementById('dchnmsgc').value;
  
    mcChannel.send(message123);
    setTimeout(() => {
        document.getElementById('dchnmsgc').value = ''
    }, 200);
})
client.on('messageCreate',(message)=>{
    const prfx = 'F';
    const prefix = prfx
    const args = message.content.slice(prefix.length).split(/ /);
    const command = args.shift().toLowerCase();
    var tklvl = document.getElementById('kltxt').value;
    var tklvl1 = document.getElementById('mmtxt').value;
    var tklvl2 = document.getElementById('upfptxt').value;
    var tklvl3 = document.getElementById('usiqtxt').value;
    var tklvl4 = document.getElementById('uwbtrtxt').value;
    var tklvl5 = document.getElementById('trthtxt').value;
    if(command === 'info'){
        var node = document.createElement('span')
        var textnode = document.createTextNode(`[ ${displayTime()} ] ${message.author.username}#${message.author.discriminator} has used the info command (Finfo) in Channel name "${message.channel.name}" in server "${message.guild.name}"`)
        node.appendChild(textnode)
        document.getElementById("dbtlgs").appendChild(node)
        document.getElementById('dbtlgs').scrollTop = document.getElementById('dbtlgs').scrollHeight
        const embed = new MessageEmbed()
        .setColor('#FF5555')
        .setAuthor({name: `${client.user.username}#${client.user.discriminator}`,iconURL: client.user.displayAvatarURL()})
        .setTitle('Commands')
        .setDescription('Use the following commands to interact with the bot')
        .addFields(
            { name: `Troll Kill "F${tklvl}"` ,value: 'kills the mentioned player vitrually as a troll'},
            { name: `Meme "F${tklvl1}"` ,value: 'Shows a random meme from internet'},
            { name: `User Avatar "F${tklvl2}"` ,value: 'Shows the profile picture of mentioned user'},
            { name: `User IQ "F${tklvl3}"` ,value: 'Tells the mentioned user IQ'},
            { name: `User Comparison "F${tklvl4}"` ,value: 'Compares 2 users and tells which one is the best'},
            { name: `Truth about a user "F${tklvl5}"` ,value: 'Tells the truth about mentioned user'},  
        )
        .setTimestamp()
        .setFooter({text: `Used by ${message.author.username}#${message.author.discriminator}`, iconURL: message.author.displayAvatarURL()})

        message.channel.send({embeds: [embed]})
    }
})
    const checkboxdwin = document.getElementById('dwiner');
    checkboxdwin.addEventListener('change', function () {
            if (checkboxdwin.checked) {
                window.onerror = async function() {
                    console.log('window.onerror')
                    await client.destroy()
                    await client.login(tkn)
                    console.log('restarted')
                    document.getElementById('dwinerinf').style.animation = 'none'
                }
                document.getElementById('qbtncls').style.display = 'flex'
                qbtncls.addEventListener('click',()=>{
                    document.getElementById('discnoti').style.display = 'flex'
                    document.getElementById('discnoti').style.opacity = '1'
                    document.getElementById('notttl').innerText = 'Optimization is on'
                    document.getElementById('notddsc').innerText = 'Bot optimization is on,In order for the bot to quit make sure its off'
                    setTimeout(()=>{
                        document.getElementById('discnoti').style.display = 'none'
                    },3000)
                })
            }
            else {
                window.onerror = async function() {
                    document.getElementById('dwinerinf').style.animation = 'blinkerwin .5s linear infinite'
                    console.log('encountered err but stopped ')
                }
                document.getElementById('qbtncls').style.display = 'none'
            }
    });

    window.onerror = async function() {
        document.getElementById('dwinerinf').style.animation = 'blinkerwin .5s linear infinite'
    }
}

hd.addEventListener('click', ()=>{
    document.getElementById('blrrtkn').style.display = 'flex'
    document.getElementById('hd').style.display = 'none'
    document.getElementById('sh').style.display = 'flex'
})
sh.addEventListener('click', ()=>{
    document.getElementById('blrrtkn').style.display = 'none'
    document.getElementById('sh').style.display = 'none'
    document.getElementById('hd').style.display = 'flex'
})
erinf.addEventListener('click',()=>{
    document.getElementById('optinf').style.display = 'flex'
})

mclserbtn.addEventListener('click',()=>{
    document.getElementById('optinf').style.display = 'none'
})