# slack-traductor
Slack bot to translate chat messages of any language into English

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
```

```
$ npm i
$ npm start
```

## Commands

`@traductor: stop` — suspend the bot for 10 minutes in current channel/group
