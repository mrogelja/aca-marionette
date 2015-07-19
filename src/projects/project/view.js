import {ItemView} from 'backbone.marionette';
import template from './template.hbs';

export default ItemView.extend({
    className: 'projects__project',
    template: template,
    modelEvents:{
        all: 'render'
    }
});