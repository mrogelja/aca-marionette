import {Router} from 'backbone-routing';
import IndexRoute from './route';
import HeaderService from '../header/service';

export default Router.extend({
  initialize(options = {}) {
    this.container = options.container;
  },

  onBeforeEnter() {
    HeaderService.request('hide');
  },

  routes: {
    '': 'index'
  },

  index() {
    return new IndexRoute({
      container: this.container
    });
  }
});
