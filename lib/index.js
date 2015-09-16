import SlackBot from 'slackbots';
import initialize from './message_handler';
import langCodes from './lang_codes';

if (!langCodes.has(process.env.TRANSLATE_TO)) {

  throw Error('Invalid lang code');
}

const traductor = new SlackBot({
  token: process.env.BOT_TOKEN,
  name: process.env.BOT_NAME
});

traductor.on('start', () => {

  traductor.getUser(process.env.BOT_NAME)
    .then(({ id }) => initialize(traductor, id))
    .catch((err) => console.error(err));
});
