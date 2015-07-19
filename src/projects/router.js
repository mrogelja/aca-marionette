import {Router} from "backbone-routing";
import IndexRoute from "./index/route";
import ProjectRoute from "./project/route";
import LayoutView from "./view"
import HeaderService from "../header/service";

export default Router.extend({
    initialize(options = {}) {
        this.container = options.container;

        HeaderService.request('add', {
            name: 'Projects',
            path: 'projects',
            type: 'primary'
        });
    },

    onBeforeEnter() {
        HeaderService.request('show');
        this.layout = new LayoutView();
        this.container.show(this.layout);
    },

    routes: {
        'projects': 'index',
        'projects/:id': 'project'
    },

    index() {
        return new IndexRoute({
            layout: this.layout
        });
    },

    project(id) {
        return new ProjectRoute({
            layout: this.layout
        })
    }
});