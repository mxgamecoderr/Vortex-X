const events = process.env.EVENTS || 'false';
const botname = process.env.BOTNAME || 'Vortex-X';

const Events = async (client, Fortu) => {
    const Myself = await client.decodeJid(client.user.id);

    try {
        let metadata = await client.groupMetadata(Fortu.id);
        let participants = Fortu.participants;
        let desc = metadata.desc || "No Description";

        for (let num of participants) {
            let dpuser;

            try {
                dpuser = await client.profilePictureUrl(num, "image");
            } catch {
                dpuser = "https://i.imgur.com/BsrFTze.jpeg";
            }

            if (Fortu.action == "add") {
                let userName = num;

                let Welcometext = ` 🥺 Hi @${userName.split("@")[0]} 👋\n\n😔 Welcome to ${metadata.subject}.\n\n😵 Group Description:-  ${desc}\n\n 🤫 Thank You.\n\n😩 This is an automated message sent by ${botname} Powered by MX-GΔMΞCØDΞR.`;
                if (events === 'true') {
                    await client.sendMessage(Fortu.id, {
                        image: { url: dpuser },
                        caption: Welcometext,
                        mentions: [num],
                    });
                }
            } else if (Fortu.action == "remove") {
                let userName2 = num;

                let Lefttext = `
          Good bye @${userName2.split("@")[0]} 👋, 😭 We are going to miss you `;
                if (events === 'true') {
                    await client.sendMessage(Fortu.id, {
                        image: { url: dpuser },
                        caption: Lefttext,
                        mentions: [num],
                    });
                }
            } else if (Fortu.action == "demote" && events === 'true') {
                await client.sendMessage(
                    Fortu.id,
                    {
                        text: `@${(Fortu.author).split("@")[0]}, has demoted @${(Fortu.participants[0]).split("@")[0]} from admin 👀`,
                        mentions: [Fortu.author, Fortu.participants[0]]
                    }
                );
            } else if (Fortu.action == "promote" && events === 'true') {
                
                    await client.sendMessage(
                        Fortu.id,
                        {
                            text: `@${(Fortu.author).split("@")[0]} has promoted @${(Fortu.participants[0]).split("@")[0]} to admin. 😵`,
                            mentions: [Fortu.author, Fortu.participants[0]]
                        }
                    );
                }
            }
        
    } catch (err) {
        console.log(err);
    }
};


module.exports = Events;
