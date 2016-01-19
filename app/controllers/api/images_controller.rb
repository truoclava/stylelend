class Api::ImagesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    # @images = Image.all
    # render json: @images
  end
end
