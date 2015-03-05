# ActiveRecord::Base.establish_connection({
#   adapter: 'postgresql',
#   database: 'police_killings_db'
#  });

require 'active_record'

ActiveRecord::Base.establish_connection('postgresql://' + ENV["DB_INFO"]  + '@192.241.253.189/police_killings_db')

ActiveRecord::Base.logger = Logger.new(STDOUT)  