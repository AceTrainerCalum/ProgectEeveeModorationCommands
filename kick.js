module.exports = {
    name: 'kick',
    description: "this is a kick command",
    async execute(Client, message, args, discord) {
        const member = message.mentions.users.first();
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                message.channel.send(`${message.author} kicked a member `);
                memberTarget.kick();
                message.channel.send("User has been kicked");
                console.log(`${message.author.id} kicked a member!`)
                console.log(` `)
                console.log(` --- new accounnt of punnishment ---`)
                console.log(` `)
            } else {
                message.channel.send(`${message.author} You can NOT kick memmbers`);
                message.channel.send(`if you think this is a mistake contact administrators or cheack if your roles have kick members permition!`);
            }
        }

    }
}
