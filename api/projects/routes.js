var Backbone = require('backbone');
var fixture  = require('./fixtures.json');
var collection = new Backbone.Collection(fixture);

/**
 * @param express api
 */
module.exports = function(api) {
    api.route('/api/projects')
        .get(function(req, res){
            res.json(collection);
        });
    
    api.route('/api/projects/:id')
        .get(function(req, res){
            var model = collection.get(req.params.id);
            res.json(model);
        });
};