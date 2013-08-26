Myshopee.ItemInListView = Em.View.extend({
  templateName: 'item_in_list',
  tagName: 'li',
  classNameBindings: 'isActive:active',

  isActive: function() {
    return this.get('content.id') === this.get('controller.activeContactId');
  }.property('controller.activeContactId')
});
