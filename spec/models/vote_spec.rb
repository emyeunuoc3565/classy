require "rails_helper"

RSpec.describe Vote, type: :model do
  describe "association" do
    it {is_expected.to belong_to(:user)}
    it {is_expected.to belong_to(:review)}
  end
end
