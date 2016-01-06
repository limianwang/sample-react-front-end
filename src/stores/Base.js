'use strict';

import { EventEmitter } from 'events';
import AppDispatcher from '../dispatchers';

export default class BaseStore extends EventEmitter {

  constructor() {
    super();
  }

  subscribe(action) {
    this._dispatchToken = AppDispatcher.register(action());
  }

  get dispatchToken() {
    return this._dispatchToken;
  }

  emitChange() {
    this.emit('CHANGE');
  }

  addChangeListener(fn) {
    this.on('CHANGE', fn);
  }

  removeChangeListener(fn) {
    this.removeListener('CHANGE', fn);
  }

}
