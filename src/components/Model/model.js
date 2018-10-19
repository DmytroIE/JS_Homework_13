import EventEmitter from '../EventEmmiter/eventEmmiter';
import {storageAvailable} from '../../utils/local_storage';
import {handleHTTPRequestError} from '../../utils/http-requests';

const uuidv1 = require('uuid/v1');


export default class Model extends EventEmitter {
  constructor() {
    super();
    this._listOfURLs = [];
    this._theLargestIndexOfLinks = 0;
    this._keyPrefix = 'URLapp';
    this._accessKey = '5bb920a205cea06f38e7909709a72b521a4a9d1c05841';

    // если какие-то записи именно нашей программы есть в local storage, достаем оттуда
    if (storageAvailable('localStorage')) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).includes(this._keyPrefix)) {
          const item = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this._listOfURLs.push(item);
          this._theLargestIndexOfLinks = Math.max(this._theLargestIndexOfLinks, item.index);
        }
      }
    }

    window.addEventListener('storage', this.handleManualLsClear.bind(this));
  }

  deleteItem(uuidOfDelItem) {

    this._listOfURLs = this._listOfURLs.filter(item=>item.uuid!==uuidOfDelItem);
  
    if (storageAvailable('localStorage')) {
      localStorage.removeItem(uuidOfDelItem);
    }
    this.emitEvent('changed', this._listOfURLs);

  }

  requestItem(url) {

    const URLChecker=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;

    let requestPromise;
    if (!URLChecker.test(url)) {
      requestPromise = new Promise((res, rej) => {
        const err = new Error('Invalid URL');
        err.code = -1;
        rej(err);
      });
    } else {
      this.emitEvent('request');
      //debugger
      requestPromise = window.fetch(`https://api.linkpreview.net/?key=${this._accessKey}&q=${url}`)
    }
    
    requestPromise.then(response => {
      //console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        const err = new Error();
        err.code = response.status;
        throw err;
      }
    })
    .then(data => {
      // добавляем, только если такой ссылки 
      // (именно такой, которую вернул API) еще нет в массиве ссылок 
      // (и, соответственно, в localStorage)
      //debugger
      const UUIDsPlacedIntoList = this._listOfURLs.map(item => item.url);
      if (UUIDsPlacedIntoList.includes(data.url)){
        //this.emitEvent('error', 'URL is already in the list');
        const err = new Error('URL is already in the list');
        err.code = -1;
        throw err;
      }

      const newItem = {...data};
      newItem.uuid = this._keyPrefix + uuidv1();
      this._theLargestIndexOfLinks += 1;
      newItem.index = this._theLargestIndexOfLinks;
      this._listOfURLs.unshift(newItem);
      this.emitEvent('changed', this._listOfURLs);

      if (storageAvailable('localStorage')) {
        localStorage.setItem(newItem.uuid, JSON.stringify(newItem));
      } else {
        this.emitEvent('absentInLS', newItem.uuid);
      }
    })
    .catch(err => {
      this.emitEvent('error', handleHTTPRequestError(err));
    });
  }

  forcedRefresh() { // для принудительного обновления view извне через эту функцию (при инициализации, например) 
    this.emitEvent('changed', this._listOfURLs);
  }

  handleManualLsClear(evt) {
    // alert(`old = ${evt.oldValue}, new = ${evt.newValue}`);
    // alert(JSON.parse(evt.oldValue).uuid);


    // if (!evt.key.includes(this._keyPrefix)) {
    //   return;
    // }
    console.dir(evt.key);
    console.dir(evt.oldValue);
    try {
      
      JSON.parse(evt.oldValue);
    } catch(err) {

    }

  }

}