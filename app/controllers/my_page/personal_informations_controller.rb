class MyPage::PersonalInformationsController < MyPage::BaseController
  def edit
  end

  def update
    if @user.update_attributes user_params
      flash[:success] = t ".updated"
      redirect_to user_path(@user)
    else
      flash.now[:failed] = t ".failed"
      render :edit
    end
  end

  private
  def user_params
    params.require(:user).permit User::PERSONAL_INFORMATION_PARAMS
  end
end
