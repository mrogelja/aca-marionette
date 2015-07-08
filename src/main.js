import './plugins';
import Backbone from 'backbone';
import $ from 'jquery';

import Application from './application/application';

import HeaderService from './header/service';

import IndexRouter from './index/router';

let app = new Application();

HeaderService.setup({
  container: app.layout.header
});

app.index = new IndexRouter({
  container: app.layout.content
});

Backbone.history.start();
