import {Route} from 'backbone-routing';
import storage from '../storage';
import View from './view';

export default Route.extend({
    initialize(options = {}) {
        this.layout = options.layout;
    },

    fetch() {
        return storage.findAll().then(collection => {
            this.collection = collection;
        });
    },

    onFetch(id) {
        this.model = this.collection.get(id);
        this.collection.active = this.model;
    },

    render() {
        this.layout.viewer.show(new View({
            model: this.model
        }));


    }
});