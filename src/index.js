import Model from './components/Model/model';
import View from './components/View/view';
import Controller from './components/Controller/controller';

import './styles.scss';


const model = new Model();

const view = new View(model);
//view.render();
//view.attachEvent('delete', () => alert('onDelete'));
//view.attachEvent('request', () => alert('onRequest'));

new Controller(model, view);

// const errModal = document.getElementById('err-modal');
// errModal.querySelector('.err-modal__cls-button').addEventListener('click', (e) => {
//   e.preventDefault();
//   hideErrModal();
// } );;


// function hideErrModal() {
//   errModal.classList.add('err-modal--hidden');
// }