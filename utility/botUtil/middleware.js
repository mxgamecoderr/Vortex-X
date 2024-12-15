

const middleware = async (context, next) => {
    const { m, isBotAdmin, isAdmin } = context;

    if (!m.isGroup) {
        return m.reply("This command is meant for groups only please 🥺");
    }
    if (!isAdmin) {
        return m.reply("You need admin privileges 🥺");
    }
    if (!isBotAdmin) {
        return m.reply("I need admin privileges 🥺");
    }

    await next(); // Proceed to the next function (main handler)
};

module.exports = middleware;