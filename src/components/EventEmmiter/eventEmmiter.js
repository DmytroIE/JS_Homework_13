class EventEmmiter {
  constructor() {
    this._eventsList = {};
  }
  attachEvent(evt, cb) {
    if (!this._eventsList[evt]) {
      this._eventsList[evt] = [];
    }
    this._eventsList[evt].push(cb);
  }
  detachEvent(evt, cb) {
    if (!this._eventsList[evt]) {
      return;
    }
    this._eventsList[evt] = this._eventsList[evt].filter(
      item => item !== cb
    )
  }
  emitEvent(evt, ...args) {
    if (!this._eventsList[evt]) {
      return;
    }
    this._eventsList[evt].forEach(item => item(...args));
  }
}

export default EventEmmiter;