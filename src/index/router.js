import {Router} from 'backbone-routing';
import IndexRoute from './route';
import HeaderService from '../header/service';

export default Router.extend({
  initialize(options = {}) {
    this.container = options.container;

    HeaderService.request('add', {
      name: 'Home',
      path: 'dd',
      type: 'primary'
    });
  },

  onBeforeEnter() {
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
