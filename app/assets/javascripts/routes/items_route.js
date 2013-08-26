Myshopee.ItemsRoute = Ember.Route.extend({
  model: function() {
    Myshopee.Item.find();

    return Myshopee.Item.filter(function(item) {
      return !item.get('isNew');
    });
  }
});
