import EventEmitter from '../EventEmmiter/eventEmmiter';
// import Model from '../Model/model';

const template = require("./listItem.hbs");


export default class View extends EventEmitter {
  constructor(model) {
    super();

    // MARKUP

    this.form = document.getElementById('urlinfo-form');
    this.list = document.getElementById('url-list');
    this.errModal = document.getElementById('err-modal');
    this.spinner = document.getElementById('spinner');

    // EVENTS

    this.form.addEventListener('submit', this.handleRequest.bind(this));
    this.list.addEventListener('click', this.handleDelete.bind(this));
    this.errModal.querySelector('.err-modal__cls-button').addEventListener('click', (e) => {
      e.preventDefault();
      this.hideErrModal();
    } );
    // Subscribe on model's events
    this.model = model;
    this.model.attachCallback('request', this.showSpinner.bind(this));
    this.model.attachCallback('changed', this.render.bind(this));
    this.model.attachCallback('error', this.showErrModal.bind(this));
    

  }

  handleDelete(evt) {
    if (evt.target.tagName !== 'BUTTON'){
      return;
    }
    this.emitEvent('delete', evt.target.parentElement.dataset.uuid);
  }

  handleRequest(evt) {
    evt.preventDefault();
    const reqString = this.form.querySelector('#urlinfo__input').value;
    this.form.reset();
    this.emitEvent('request', reqString);
  }

  markItemAsAbsentInLS(uuid) {
    this.list.querySelector(`li[data-uuid=${uuid}]`).classList.add('record--absent');
  }

  // AUX FUNCTIONS

  render(listOfURLs) {
    this.hideSpinner();
    if(listOfURLs.length > 0) {
      const markup = listOfURLs.reduce( (acc, curr) => acc + template(curr),'')
      this.list.innerHTML = markup;
    } else {
      this.list.innerHTML = '<li class="urlinfo__default-text">Your bookmarks will be added here...</li>';
    }
  }

  showErrModal(errMessage) {
    this.hideSpinner();
    this.errModal.querySelector('.err-modal__text').textContent = errMessage;
    this.errModal.classList.remove('err-modal--hidden');
  }
  
  hideErrModal() {
    this.errModal.classList.add('err-modal--hidden');
  }

  showSpinner() {
    this.spinner.classList.add("spinner--shown");
  }
  
  hideSpinner() {
    this.spinner.classList.remove("spinner--shown");
  }


}