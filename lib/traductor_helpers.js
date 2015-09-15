export function getUserName(users, userId) {

  return users.filter((usr) => usr.id === userId)[0].name;
}

export function getChanNameById(channels, chanId) {

  return channels.filter((chan) => chan.id === chanId)[0];
}
