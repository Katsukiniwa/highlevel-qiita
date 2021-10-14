class DraftQuestionsController < ApplicationController
  before_action :set_draft_question, only: %i[show update destroy]

  # GET /draft_questions
  def index
    @draft_questions = DraftQuestion.all

    render json: @draft_questions
  end

  # GET /draft_questions/1
  def show
    render json: @draft_question
  end

  # POST /draft_questions
  def create
    @draft_question = DraftQuestion.new(draft_question_params)

    if @draft_question.save
      render json: @draft_question, status: :created, location: @draft_question
    else
      render json: @draft_question.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /draft_questions/1
  def update
    if @draft_question.update(draft_question_params)
      render json: @draft_question
    else
      render json: @draft_question.errors, status: :unprocessable_entity
    end
  end

  # DELETE /draft_questions/1
  def destroy
    @draft_question.destroy
  end

  private

  def set_draft_question
    @draft_question = DraftQuestion.find(params[:id])
  end

  def draft_question_params
    params.require(:draft_question).permit(:title, :content)
  end
end
