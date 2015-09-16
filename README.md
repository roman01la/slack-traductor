# slack-traductor
Slack bot to translate chat messages of any language into specified language

![example](example.png)

## Why?

Because we are an international team and sometimes I don't understand what they all are talking about.

## Usage

Traductor is using Microsoft Translator API, because it's free 😅

Get Translator API account: https://datamarket.azure.com/dataset/bing/microsofttranslator

Create `.env` file and put the following env vars inside:

```
BOT_NAME=bot_name
BOT_TOKEN=bot_token
CLIENT_ID=microsofttranslator_client_id
CLIENT_SECRET=microsofttranslator_client_secret
TRANSLATE_TO=en
ADD_MESSAGE=message_to_append
SUSPEND_TIMEOUT=600000
```

- TRANSLATE_TO — translate messages to specified lan, check lang codes in `lib/lang_codes.js`
- ADD_MESSAGE — specify the message you want to add to every translation, check the screenshot above.
- SUSPEND_TIMEOUT — the time period in ms while the bot will not translate messages

```
$ npm i
$ npm start
```

Running as daemon with [pm2](https://github.com/Unitech/pm2)

```
$ pm2 start index.js --next-gen-js --name "traductor"
```

### Commands

`@traductor: stop` — suspend the bot for 10 minutes in current channel/group
