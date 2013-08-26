Myshopee.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('items');
  }
});
