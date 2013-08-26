Myshopee.ItemEditController = Em.ObjectController.extend({
  needs: ['item'],

  startEditing: function() {
    var item = this.get('model');
    var transaction = item.get('store').transaction();
    transaction.add(item);
    this.transaction = transaction;
  },

  stopEditing: function() {
    var transaction = this.transaction;
    if (transaction) {
      transaction.rollback();
      this.transaction = undefined;
    }
  },

  save: function() {
    this.transaction.commit();
    this.transaction = undefined;
    this.get('controllers.item').stopEditing();
  },

  cancel: function() {
    this.get('controllers.item').stopEditing();
  }

});
