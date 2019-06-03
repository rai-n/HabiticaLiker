# HabiticaLiker
NodeJS based comment liker bot for Habitica. 

Utilises Habitica thin wrapper

Summary: The *Habitica Upvote Bot* is a Habitica bot that upvotes posts made by Alex a certain amount of times and following defined criteria. Communication between the Alex and the bot will be done on Discord.

## Technologies used

The following technologies shall be used in the making of this bot:

- Language: NodeJS
- Discord library: DiscordJS
- Habitica thin wrapper: [habitica](https://www.npmjs.com/package/habitica)

## Discord Bot Behavior

Sadly, the Habitica API doesn’t have an endpoint to fetch messages made by a certain user. This means Alex has to manually inform the bot whenever he sends a message somewhere. The `!habitica check` command will enable him to do this, used as follows:

    !habitica vote (amount) (username)

The bot will fetch a list of messages made in that group, find the last one made by Alex and upvote it a certain number of times. The bot shall save the IDs of messages it upvoted in a file.

