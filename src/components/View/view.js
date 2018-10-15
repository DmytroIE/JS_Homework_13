import EventEmitter from '../EventEmmiter/eventEmmiter';

const template = require("./listItem.hbs");


export default class View extends EventEmitter {
  constructor(root) {
    super();

    // MARKUP
    this.section = document.createElement('section');
    this.section.className = 'urlinfo';

    this.form = document.createElement('form');
    this.form.className = 'urlinfo__input-form';
    this.form.id = 'urlinfo-form';
    this.form.innerHTML = '<input type="text" name="input" id="url-input" class = "urlinfo__input" placeholder = "Input URL">' + 
                     '<input type="submit" name="submit" class = "urlinfo__button" value="Добавить">';
    this.section.appendChild(this.form);

    this.list = document.createElement('ul');
    this.list.className = 'urlinfo__list';
    this.list.id = 'url-list';
    this.section.appendChild(this.list);
    
    root.appendChild(this.section);

    // EVENTS

    this.form.addEventListener('submit', this.handleRequest.bind(this));

    this.list.addEventListener('click', this.handleDelete.bind(this));

  }
  
  handleDelete(evt) {
    if (evt.target.tagName !== 'BUTTON'){
      return;
    }
    this.emit('onDelete', evt.target.parentElement.dataset.uuid);
  }

  handleRequest(evt) {
    evt.preventDefault();
    const reqString = this.form.querySelector('#url-input').value;
    this.form.reset();
    this.emit('onRequest', reqString);
  }

  render() {
    this.list.innerHTML = template({uuid: 25, title: 'Yo-yo', url: 'https:Muther', description: 'uuu', image: 'fff'});
  }


}