# Tipimate

![License](https://img.shields.io/github/license/steveiliop56/tipimate)
![Release](https://img.shields.io/github/v/release/steveiliop56/tipimate)
![Issues](https://img.shields.io/github/issues/steveiliop56/tipimate)

Tipimate is an extremely simple and lightweight tool that check for updates in your [Runtipi](https://github.com/runtipi/runtipi) server and notifies you through your favorite notification system.

## Set-up notification URL

**Tipimate** use **Shoutrrr** to send notifications, check the available services and how URL works below : (or on the [official website](https://containrrr.dev/shoutrrr/v0.8/services/overview/)

| Service                           | URL format                                                                                                                                      |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bark](https://containrrr.dev/shoutrrr/v0.8/services/bark.md)                 | *bark://__`devicekey`__@__`host`__*                                                                                                             |
| [Discord](https://containrrr.dev/shoutrrr/v0.8/services/discord.md)           | *discord://__`token`__@__`id`__*                                                                                                                |
| [Email](https://containrrr.dev/shoutrrr/v0.8/services/email.md)               | *smtp://__`username`__:__`password`__@__`host`__:__`port`__/?from=__`fromAddress`__&to=__`recipient1`__[,__`recipient2`__,...]*                 |
| [Gotify](https://containrrr.dev/shoutrrr/v0.8/services/gotify.md)             | *gotify://__`gotify-host`__/__`token`__*                                                                                                        |
| [Google Chat](https://containrrr.dev/shoutrrr/v0.8/services/googlechat.md)    | *googlechat://chat.googleapis.com/v1/spaces/FOO/messages?key=bar&token=baz*                                                                     |
| [IFTTT](https://containrrr.dev/shoutrrr/v0.8/services/ifttt.md)               | *ifttt://__`key`__/?events=__`event1`__[,__`event2`__,...]&value1=__`value1`__&value2=__`value2`__&value3=__`value3`__*                         |
| [Join](https://containrrr.dev/shoutrrr/v0.8/services/join.md)                 | *join://shoutrrr:__`api-key`__@join/?devices=__`device1`__[,__`device2`__, ...][&icon=__`icon`__][&title=__`title`__]*                          |
| [Mattermost](https://containrrr.dev/shoutrrr/v0.8/services/mattermost.md)     | *mattermost://[__`username`__@]__`mattermost-host`__/__`token`__[/__`channel`__]*                                                               |
| [Matrix](https://containrrr.dev/shoutrrr/v0.8/services/matrix.md)             | *matrix://__`username`__:__`password`__@__`host`__:__`port`__/[?rooms=__`!roomID1`__[,__`roomAlias2`__]]*                                       |
| [Ntfy](https://containrrr.dev/shoutrrr/v0.8/services/ntfy.md)                 | *ntfy://__`username`__:__`password`__@ntfy.sh/__`topic`__*                                                                                      |
| [OpsGenie](https://containrrr.dev/shoutrrr/v0.8/services/opsgenie.md)         | *opsgenie://__`host`__/token?responders=__`responder1`__[,__`responder2`__]*                                                                    |
| [Pushbullet](https://containrrr.dev/shoutrrr/v0.8/services/pushbullet.md)     | *pushbullet://__`api-token`__[/__`device`__/#__`channel`__/__`email`__]*                                                                        |
| [Pushover](https://containrrr.dev/shoutrrr/v0.8/services/pushover.md)         | *pushover://shoutrrr:__`apiToken`__@__`userKey`__/?devices=__`device1`__[,__`device2`__, ...]*                                                  |
| [Rocketchat](https://containrrr.dev/shoutrrr/v0.8/services/rocketchat.md)     | *rocketchat://[__`username`__@]__`rocketchat-host`__/__`token`__[/__`channel`&#124;`@recipient`__]*                                             |
| [Slack](https://containrrr.dev/shoutrrr/v0.8/services/slack.md)               | *slack://[__`botname`__@]__`token-a`__/__`token-b`__/__`token-c`__*                                                                             |
| [Teams](https://containrrr.dev/shoutrrr/v0.8/services/teams.md)               | *teams://__`group`__@__`tenant`__/__`altId`__/__`groupOwner`__?host=__`organization`__.webhook.office.com*                                      |
| [Telegram](https://containrrr.dev/shoutrrr/v0.8/services/telegram.md)         | *telegram://__`token`__@telegram?chats=__`@channel-1`__[,__`chat-id-1`__,...]*                                                                  |
| [Zulip Chat](https://containrrr.dev/shoutrrr/v0.8/services/zulip.md)          | *zulip://__`bot-mail`__:__`bot-key`__@__`zulip-domain`__/?stream=__`name-or-id`__&topic=__`name`__*                                             |

### Specialized services

| Service                           | Description                                                                                                                                     |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [Logger](https://containrrr.dev/shoutrrr/v0.8/services/logger.md)             | Writes notification to a configured go `log.Logger`                                                                                             |
| [Generic Webhook](https://containrrr.dev/shoutrrr/v0.8/services/generic.md)   | Sends notifications directly to a webhook                                                                                                       |

## Contributing

If you are interested in helping with the development feel free to create a pull request or an issue about a bug or a feature. All kinds of contributions are welcome!

## License

Tipimate is licensed under the GNU General Public License v3.0. TL;DR — You may copy, distribute and modify the software as long as you track changes/dates in source files. Any modifications to or software including (via compiler) GPL-licensed code must also be made available under the GPL along with build & install instructions.
