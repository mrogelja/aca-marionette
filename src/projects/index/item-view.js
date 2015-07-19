import {ItemView} from 'backbone.marionette';
import template from './item-template.hbs';

export default ItemView.extend({
    className: 'projects__project-thumbnail col-md-3',
    template: template
});