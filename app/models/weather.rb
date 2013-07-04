class Weather < ActiveRecord::Base
  attr_accessible :lat, :long, :url
end
