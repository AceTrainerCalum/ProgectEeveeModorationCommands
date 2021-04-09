module.exports = {
    name: 'ban',
    description: "this is a ban command",
    async execute(Client, message, args, discord) {
        const member = message.mentions.users.first();
        if (message.member.permissions.has("BAN_MEMBERS")) {
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                message.channel.send(`${message.author} banned a member `);
                memberTarget.ban();
                message.channel.send("User has been banned");
                console.log(`${message.author.id} banned a member!`)
                console.log(`${message.author.id} is the id of the member who kicked the member!`)
                console.log(` `)
                console.log(` --- new accounnt of punnishment ---`)
                console.log(` `)
            } else {
                message.channel.send(`${message.author} You can NOT ban memmbers`);
                message.channel.send.channel(`if you think this is a mistake contact administrators or cheack if your roles have ban members permition!`);
            }
        }

    }
}
