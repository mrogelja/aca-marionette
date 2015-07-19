import Service from 'backbone.service';
import {Collection} from 'backbone';
import View from './view';

const HeaderService = Service.extend({
  setup(options = {}) {
    this.container = options.container;
  },

  start() {
    this.collection = new Collection();
    this.view = new View({
      collection: this.collection
    });
    this.container.show(this.view);
  },

  requests: {
    add: 'add',
    remove: 'remove',
    activate: 'activate',
    hide: 'hide',
    show: 'show'
  },

  add(model) {
    this.collection.add(model);
  },

  remove(model) {
    model = this.collection.findWhere(model);
    this.collection.remove(model);
  },

  activate(model) {
    this.collection.invoke('set', 'active', false);
    if (model) {
      model.set('active', true);
    }
  },

  hide() {
    this.view.hide();
  },

  show() {
    this.view.show();
  }
});

export default new HeaderService();
