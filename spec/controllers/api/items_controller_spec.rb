require 'rails_helper'

RSpec.describe Api::ItemsController, type: :controller do
  render_views

  let(:json) { JSON.parse(response.body) }

  describe "GET index" do
    let()
    
