import $ from 'jquery';
import _ from 'lodash';
import Radio from 'backbone.radio';
import nprogress from 'nprogress';
import {Application} from 'backbone.marionette';
import LayoutView from './layout-view';

let routerChannel = Radio.channel('router');

nprogress.configure({
  showSpinner: false
});


export default Application.extend({
  initialize() {
    this.$body  = $(document.body);
    this.layout = new LayoutView();
    this.layout.render();
  }
});
