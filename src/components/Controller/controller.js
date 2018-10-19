export default class Controller {
  constructor(model, view) {
    this._model = model;
    this._view = view;

    this._view.attachCallback('delete', this.deleteItem.bind(this));
    this._view.attachCallback('request', this.requestItem.bind(this));

    this._model.forcedRefresh(); // чтобы list отобразился во View
  }

  deleteItem(uuid) {
    this._model.deleteItem(uuid);
  }

  requestItem(url) {
    this._model.requestItem(url);
  }
}