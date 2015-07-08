import _ from 'lodash';
import {ItemView} from 'backbone.marionette';
import template from './template.hbs';

export default ItemView.extend({
  template  : template,
  tagName   : 'nav',
  className : 'header navbar navbar-default navbar-fixed-top',

  attributes: {
    role: 'navigation'
  },

  templateHelpers() {
    return {
      primaryItems: this.serializeWhere({ type: 'primary' }),
      secondaryItems: this.serializeWhere({ type: 'secondary' })
    };
  },

  serializeWhere(props) {
    return _.invoke(this.collection.where(props), 'toJSON');
  }
});
