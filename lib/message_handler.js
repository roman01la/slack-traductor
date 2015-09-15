import Suspender from './suspender';
import maybeTranslateToEng from './any_to_eng';
import { getUserName, getChanNameById } from './traductor_helpers';

export default function initialize(traductor, botId) {

  const suspendedChans = Suspender.getSuspendedChans();

  traductor.on('message', function({ type, channel, text, username, user, subtype }) {

    if (text === `<@${botId}>: stop` && !suspendedChans.has(channel)) {

      return Suspender.suspendChan(channel, 600000);
    }

    if (type === 'message' && username !== 'traductor' && subtype !== 'message_changed' && !suspendedChans.has(channel)) {

      const chanId = getChanNameById([...traductor.channels, ...traductor.groups], channel);
      const uname = getUserName(traductor.users, user);

      return maybeTranslateToEng(text)
        .then(replyToUser(uname, chanId))
        .catch((err) => console.log(err));
    }
  });

  function replyToUser(username, { name, is_group, is_channel }) {

    return (text) => {

      text = `@${username} said: ${text} _(English, please.)_`;

      return new Promise((resolve, reject) => {

        if (is_group) {
          traductor.postMessageToGroup(name, text, resolve);
        } else if (is_channel) {
          traductor.postMessageToChannel(name, text, resolve);
        } else {
          reject('Neither Channel, nor Group!');
        }
      });
    };
  }
}
