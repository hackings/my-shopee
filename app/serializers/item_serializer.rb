class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :prise
end
