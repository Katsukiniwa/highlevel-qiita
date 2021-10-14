class FavoriteQuestionsController < ApplicationController
  before_action :set_favorite_question, only: [:show, :update, :destroy]

  # GET /favorite_questions
  def index
    @favorite_questions = FavoriteQuestion.all

    render json: @favorite_questions
  end

  # GET /favorite_questions/1
  def show
    render json: @favorite_question
  end

  # POST /favorite_questions
  def create
    @favorite_question = FavoriteQuestion.new(favorite_question_params)

    if @favorite_question.save
      render json: @favorite_question, status: :created, location: @favorite_question
    else
      render json: @favorite_question.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /favorite_questions/1
  def update
    if @favorite_question.update(favorite_question_params)
      render json: @favorite_question
    else
      render json: @favorite_question.errors, status: :unprocessable_entity
    end
  end

  # DELETE /favorite_questions/1
  def destroy
    @favorite_question.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite_question
      @favorite_question = FavoriteQuestion.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def favorite_question_params
      params.require(:favorite_question).permit(:user, :question)
    end
end
