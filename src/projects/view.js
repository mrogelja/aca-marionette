import {LayoutView} from "backbone.marionette";
import template from './template.hbs';

export default LayoutView.extend({
    template: template,
    className: 'projects',
    regions: {
        crumbar : '.projects__crumbar',
        viewer  : '.projects__viewer'
    }
});