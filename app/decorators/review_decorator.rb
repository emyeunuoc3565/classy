class ReviewDecorator < Draper::Decorator
  include ActionView::Helpers::TextHelper

  delegate_all

  decorates_association :user

  delegate :full_name, to: :user, prefix: true

  def content
    simple_format strip_tags object.content
  end
end
