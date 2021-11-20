# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Auction.destroy_all
Bid.destroy_all

PASSWORD = '123'

5.times do 
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(
        first_name:first_name,
        last_name: last_name,
        email: "#{first_name}@#{last_name}.com",
        password: PASSWORD
    )
end

users = User.all

20.times do
    created_at = Faker::Date.backward(days:365 * 5)

    a = Auction.create(
       title: Faker::Device.model_name,
       body: Faker::Hacker.say_something_smart,
       current_price: rand(100_00),
       end_date: Faker::Date.forward(days: 23),
       created_at: created_at,
       updated_at: created_at,
       user: users.sample
    )
    if a.valid? 
        rand(1..5).times do
            Bid.create(price:rand(100_00), auction:a, user: users.sample)
        end

    end
end

auctions = Auction.all
bids = Bid.all

puts Cowsay.say("Generated #{auctions.count} Auctions", :frogs)
puts Cowsay.say("Generated #{bids.count} Bids", :cow)
puts Cowsay.say("Generated #{users.count} users", :koala)


