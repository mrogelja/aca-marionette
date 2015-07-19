import {Route} from 'backbone-routing';
import storage from '../storage';
import CollectionView from './collection-view.js';

export default Route.extend({
    initialize(options = {}) {
        this.layout = options.layout;
    },

    fetch() {
        return storage.findAll().then(collection => {
            this.collection = collection;
        });
    },

    render() {
        this.layout.viewer.show(new CollectionView({
            collection: this.collection
        }));
    }
});