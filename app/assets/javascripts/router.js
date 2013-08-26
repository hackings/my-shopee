Myshopee.Router.map(function() {
  this.resource('items', function() {
    this.route('new');
    this.resource('item', {path: ':item_id'});
  });
});
