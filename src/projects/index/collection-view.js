import {CollectionView} from 'backbone.marionette';
import ItemView from './item-view';

export default CollectionView.extend({
    className: 'projects__list row',
    childView: ItemView
});