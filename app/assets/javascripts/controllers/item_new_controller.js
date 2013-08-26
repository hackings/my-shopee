Myshopee.ItemsNewController = Em.ObjectController.extend({
  startEditing: function() {
    this.transaction = this.get('store').transaction();
    this.set('model', this.transaction.createRecord(Myshopee.Item, {}));
  },

  stopEditing: function() {
    if (this.transaction) {
      this.transaction.rollback();
      this.transaction = null;
    }
  },

  save: function() {
    this.transaction.commit();
    this.transaction = null;
  },

  transitionAfterSave: function() {
    if (this.get('model.id')) {
      this.transitionToRoute('item', this.get('model'));
    }
  }.observes('model.id'),

  cancel: function() {
    this.stopEditing();
    this.transitionToRoute('items.index');
  }

});
