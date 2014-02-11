class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :configure_permitted_parameters, if: :devise_controller?

  def home
    # @test = "test"
    if user_signed_in?
      redirect_to :controller => 'dashboard', :action => 'index'
    end
  end

  # def home
  # end

  def instructor_profiles
    @instructors = User.all
  end


  protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:email, :name, :password, :description ) }
      # you control which attributes can be updated or used for sign in here
    end

end
