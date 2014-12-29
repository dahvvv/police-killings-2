require 'bundler'
Bundler.require

require_relative 'connection'
require_relative 'models/killing'

get '/' do
  erb :index
end

get '/api' do
end

get '/console' do
  binding.pry
end