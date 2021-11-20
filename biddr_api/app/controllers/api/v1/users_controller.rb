class Api::V1::UsersController < Api::ApplicationController
    def create
        users_params = params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
        user = User.new users_params
        if user.save
            session[:user_id] = user.id
            render json: { id: user.id }
        else
            render(
                json: { errors: user.errors.messages },
                status: 422 #Unprocessable Entity
            )
        end
    end
    
    def current
        render json: current_user
    end
end
