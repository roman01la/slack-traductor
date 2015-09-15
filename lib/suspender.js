const suspendedChans = new Set();

function getSuspendedChans() {

  return suspendedChans;
}

function suspendChan(chan, timeout) {

  suspendedChans.add(chan);
  setTimeout(() => suspendedChans.delete(chan), timeout);
}

export default {

  getSuspendedChans,
  suspendChan
};
