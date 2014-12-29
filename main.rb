require 'bundler'
Bundler.require

require_relative 'connection'
require_relative 'models/killing'

@killings = Killing.all

get '/' do
  erb :index
end

get '/console' do
  binding.pry
end