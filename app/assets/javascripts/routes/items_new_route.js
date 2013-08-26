Myshopee.ItemsNewRoute = Ember.Route.extend({
  model: function() {
    return null;
  },

  setupController: function(controller) {
    this._super.apply(this, arguments);
    controller.startEditing();
  },

  deactivate: function() {
    this.controllerFor('items.new').stopEditing();
  }
});
