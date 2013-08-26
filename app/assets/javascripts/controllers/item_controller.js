Myshopee.ItemController = Em.ObjectController.extend({
  isEditing: false,
  needs: ['itemEdit'],

  startEditing: function() {
    var itemEditController = this.get('controllers.itemEdit');
    itemEditController.set('model', this.get('model'));
    itemEditController.startEditing();
    this.set('isEditing', true);
  },

  stopEditing: function() {
    var itemEditController = this.get('controllers.itemEdit');
    itemEditController.stopEditing();
    this.set('isEditing', false);
  },

  destroyRecord: function() {
    if (window.confirm("Are you sure you want to delete this item?")) {
      this.get('model').deleteRecord();
      this.get('store').commit();

      this.get('target.router').transitionTo('items.index');
    }
  }
});
