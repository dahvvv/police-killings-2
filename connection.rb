# ActiveRecord::Base.establish_connection({
#   adapter: 'postgresql',
#   database: 'police_killings_db'
#  });

require 'active_record'

ActiveRecord::Base.establish_connection('postgresql://' + ENV["DB_INFO"]  + '@127.0.0.1/police_killings_db')

ActiveRecord::Base.logger = Logger.new(STDOUT)  