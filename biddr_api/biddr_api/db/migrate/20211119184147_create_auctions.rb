class CreateAuctions < ActiveRecord::Migration[6.1]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :body
      t.integer :current_price
      t.date :end_date
      t.timestamps
    end
  end
end
