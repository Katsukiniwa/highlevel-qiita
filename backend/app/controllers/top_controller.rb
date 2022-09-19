# frozen_string_literal: true

class TopController < ApplicationController
  def index
    render json: { message: 'Hello GraphQL Rails' }
  end
end
