get '/' do
  # binding.pry
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index, layout: !request.xhr?
end

post '/grandma' do
  #binding.pry
  @user_input = params[:user_input]
  if @user_input == @user_input.upcase
    @a = "NEAL SUCKS MORE THAN ALEX"
  else
    @a = "Were you asking about NEAL?"
  end

end
